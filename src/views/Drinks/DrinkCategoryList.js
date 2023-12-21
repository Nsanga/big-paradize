// DrinkCategoryList.js
import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import DrinkCategory from './DrinkCategory';
import fakeData from '../../fakeData';
import { useCategory } from '../../CategoryContext';

const DrinkCategoryList = () => {
    const navigate = useNavigate();
    const { setSelectedCategory } = useCategory();

    const handleBack = () => {
        navigate('/');
    };

    // Fonction pour récupérer les données de la catégorie sélectionnée
    const handleCategoryClick = (categoryKey) => {
        const selectedCategoryData = fakeData[categoryKey];
        setSelectedCategory(selectedCategoryData);
        navigate(`/drink-category/${categoryKey}`);
    };

    return (
        <Box p={3}>
            <Box style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <IconButton onClick={handleBack} color="primary">
                    <FaArrowLeft />
                </IconButton>
                <Typography variant="h4" >
                    Drinks Categories
                </Typography>
            </Box>
            <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {Object.entries(fakeData)
                    .filter((item) => item[1].items[0].type === 'drink')
                    .map(([categoryKey, category]) => (
                        <Card key={categoryKey} sx={{ width: 150, height: 230, margin: 2 }} onClick={() => handleCategoryClick(categoryKey)}>
                            <CardMedia
                                component="img"
                                height="150"
                                image={category.image}
                                alt={category.categoryName}
                                style={{ borderRadius: 10, objectFit: 'cover' }}
                            />
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold" textAlign="center">
                                    {category.categoryName}
                                </Typography>
                            </CardContent>
                            <DrinkCategory items={category.items} />
                        </Card>
                    ))}
            </Box>
        </Box>
    );
};

export default DrinkCategoryList;
