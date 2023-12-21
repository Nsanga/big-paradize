import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Checkbox, Input, IconButton } from '@mui/material';
import Recap from '../Recap';
import { useCategory } from '../../CategoryContext';
import { FaArrowLeft } from 'react-icons/fa';

const DrinkCategory = () => {
    const { selectedCategory } = useCategory();
    const [selectedDrinks, setSelectedDrinks] = useState([]);
    const [quantityValues, setQuantityValues] = useState({});
    const [type, setType] = useState('drink');
    const navigate = useNavigate();

    const handleCheckboxChange = (id) => {
        setSelectedDrinks((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((item) => item !== id)
                : [...prevSelected, id]
        );
    };

    const handleQuantityChange = (id, value) => {
        const isPositiveNumber = /^[1-9]\d*$/;

        if (isPositiveNumber.test(value) || value === '') {
            setQuantityValues((prevValues) => ({ ...prevValues, [id]: value }));
        }
    };

    useEffect(() => {
        // Effet pour réinitialiser les boissons sélectionnées et les quantités lorsque la catégorie change
        setSelectedDrinks([]);
        setQuantityValues({});
    }, [selectedCategory]);

    if (!selectedCategory) {
        return null;
    }

     const handleBack = () => {
        navigate('/drinks');
    };

    return (
        <Box p={3}>
            <Box style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <IconButton onClick={handleBack} color="primary">
                    <FaArrowLeft />
                </IconButton>
                <Typography variant="h6" fontWeight="bold" >
                    {selectedCategory.categoryName}
                </Typography>
            </Box>

            {selectedCategory.items && selectedCategory.items.map((drink) => (
                <Box key={drink.id} display="flex" flexDirection="row" alignItems="center" mb={2} justifyContent="space-between">
                    <Checkbox
                        checked={selectedDrinks.includes(drink.id)}
                        onChange={() => handleCheckboxChange(drink.id)}
                        color="primary"
                    />
                    <Box style={{ width: '50%' }} marginRight="8px">
                        <Typography>{drink.nom}</Typography>
                    </Box>
                    <Box style={{ width: '30%' }}>
                        <Typography>{drink.prix} XAF</Typography>
                    </Box>
                    <Box width="8%">
                        <Input
                            placeholder="Qté"
                            type="number"
                            inputProps={{ min: "1", step: "1" }}
                            value={quantityValues[drink.id] || ''}
                            onChange={(e) => handleQuantityChange(drink.id, e.target.value)}
                        />
                    </Box>
                </Box>
            ))}
            <Recap selectedDrinks={selectedDrinks} quantityValues={quantityValues} type={type}/>
        </Box>
    );
};

export default DrinkCategory;
