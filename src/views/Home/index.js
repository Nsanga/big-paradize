import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import DrinkImage from '../../assets/drinks.png';
import FoodImage from '../../assets/food.jpg';
import BigParadize from '../../assets/paradize.jpg'

const Home = () => {
    return (
        <Box style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <img src={BigParadize} 
            style={{width:'200px', height:'150px', objectFit:'cover'}} 
            /> 
            <Box style={{ display: 'flex', flexDirection: 'row'}}>
                {/* Image pour les boissons */}
                <Link to="/drinks" style={{ textDecoration: 'none' }}>
                    <Card sx={{ width: 150, height: 200, margin: 2 }}>
                        <CardMedia
                            component="img"
                            height="150"
                            image={DrinkImage}
                            alt="Drinks"
                            style={{ borderRadius: 10, objectFit: 'cover' }}
                        />
                        <CardContent>
                            <Typography variant="h6" fontWeight="bold" textAlign="center">
                                Drinks
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>

                {/* Image pour la nourriture */}
                <Link to="/foods" style={{ textDecoration: 'none' }}>
                    <Card sx={{ width: 150, height: 200, margin: 2 }}>
                        <CardMedia
                            component="img"
                            height="150"
                            image={FoodImage}
                            alt="Food"
                            style={{ borderRadius: 10, objectFit: 'cover' }}
                        />
                        <CardContent>
                            <Typography variant="h6" fontWeight="bold" textAlign="center">
                                Foods
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
            </Box>
        </Box>
    );
};

export default Home;
