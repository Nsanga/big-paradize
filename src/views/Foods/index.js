import React, { useState } from 'react';
import { Box, Checkbox, Input, Typography, IconButton } from '@mui/material';
import fakeData from '../../fakeData';
import Recap from '../Recap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const Foods = () => {
    const [selectedFoods, setSelectedFoods] = useState([]);
    const [quantityValues, setQuantityValues] = useState({});
    const navigate = useNavigate();

    const handleCheckboxChange = (id) => {
        setSelectedFoods((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((item) => item !== id)
                : [...prevSelected, id]
        );
    };

    const handleQuantityChange = (id, value) => {
        // Vérifiez si la valeur est un nombre positif
        const isPositiveNumber = /^[1-9]\d*$/;

        if (isPositiveNumber.test(value) || value === '') {
            setQuantityValues((prevValues) => ({ ...prevValues, [id]: value }));
        }
    };

    const handleBack = () => {
        navigate('/'); // Utilisation de useNavigate pour rediriger vers la page d'accueil
    };

    return (
        <Box p={3}>
            <Box>
                <Box style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <IconButton onClick={handleBack} color="primary">
                        <FaArrowLeft />
                    </IconButton>
                    <Typography variant="h4" mt={2}>
                        Foods
                    </Typography>
                </Box>
                <Typography variant="h6" fontWeight="bold" mt={2}>
                    Grillades
                </Typography>
                {fakeData
                    .filter((item) => item.type === 'food' && item.category === 'grillade')
                    .map((food) => (
                        <Box key={food.id} display="flex" flexDirection="row" alignItems="center" mb={2} justifyContent="space-between">
                            <Checkbox
                                checked={selectedFoods.includes(food.id)}
                                onChange={() => handleCheckboxChange(food.id)}
                                color="primary"
                            />
                            <Box style={{ width: '30%' }}>
                                <Typography>{food.nom}</Typography>
                            </Box>
                            <Box style={{ width: '30%' }}>
                                <Typography>{food.prix} XAF</Typography>
                            </Box>
                            <Input
                                placeholder="Qté"
                                type="number"
                                inputProps={{ min: "1", step: "1" }}  // Définir la valeur minimale et le pas
                                value={quantityValues[food.id] || ''}
                                onChange={(e) => handleQuantityChange(food.id, e.target.value)}
                            />
                        </Box>
                    ))}
            </Box>
            <Recap selectedFoods={selectedFoods} quantityValues={quantityValues} />
        </Box>
    );
};

export default Foods;
