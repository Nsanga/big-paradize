import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Checkbox, Input, IconButton } from '@mui/material';
import Recap from '../Recap';
import { useCategory } from '../../CategoryContext';
import { FaArrowLeft } from 'react-icons/fa';

const FoodCategory = () => {
    const { selectedCategory } = useCategory();
    const [selectedFoods, setSelectedFoods] = useState([]);
    const [quantityValues, setQuantityValues] = useState({});
    const [type, setType] = useState('food');
    const navigate = useNavigate();

    const handleCheckboxChange = (id) => {
        setSelectedFoods((prevSelected) =>
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
        setSelectedFoods([]);
        setQuantityValues({});
    }, [selectedCategory]);

    if (!selectedCategory) {
        return null;
    }

     const handleBack = () => {
        navigate('/foods');
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

            {selectedCategory.items && selectedCategory.items.map((food) => (
                <Box key={food.id} display="flex" flexDirection="row" alignItems="center" mb={2} justifyContent="space-between">
                    <Checkbox
                        checked={selectedFoods.includes(food.id)}
                        onChange={() => handleCheckboxChange(food.id)}
                        color="primary"
                    />
                    <Box style={{ width: '50%' }} marginRight="8px">
                        <Typography>{food.nom}</Typography>
                    </Box>
                    <Box style={{ width: '30%' }}>
                        <Typography>{food.prix} XAF</Typography>
                    </Box>
                    <Box width="8%">
                        <Input
                            placeholder="Qté"
                            type="number"
                            inputProps={{ min: "1", step: "1" }}
                            value={quantityValues[food.id] || ''}
                            onChange={(e) => handleQuantityChange(food.id, e.target.value)}
                        />
                    </Box>
                </Box>
            ))}
            <Recap selectedFoods={selectedFoods} quantityValues={quantityValues} type={type}/>
        </Box>
    );
};

export default FoodCategory;
