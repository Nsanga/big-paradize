import React from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import fakeData from '../../fakeData';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Recap = ({ selectedDrinks, quantityValues, type, selectedFoods }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const getItemDetails = (itemId, itemType) => {
        const item = fakeData.find((item) => item.id === itemId && item.type === itemType);
        return item;
    };

    const calculateTotal = () => {
        let total = 0;

        if (type === 'drink') {
            selectedDrinks.forEach((drinkId) => {
                const drink = getItemDetails(drinkId, 'drink');

                if (drink) {
                    const quantity = quantityValues[drink.id] || 1;
                    const price = parseFloat(drink.prix) || 0;
                    total += quantity * price;
                }
            });
        } else {
            selectedFoods.forEach((foodId) => {
                const food = getItemDetails(foodId, 'food');

                if (food) {
                    const quantity = quantityValues[food.id] || 1;
                    const price = parseFloat(food.prix) || 0;
                    total += quantity * price;
                }
            });
        }

        return total;
    };

    return (
        <Box>
            <Box mt='4rem' style={{display:'flex', justifyContent:'center'}}> 
                <Button onClick={handleOpen} variant="contained">Valider</Button>
            </Box>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h6" fontWeight="bold" mt={2}>
                        Détails de la commande
                    </Typography>
                    <Box p={2}>
                        {type === 'drink' ? (
                            selectedDrinks.map((drinkId) => {
                                const drink = getItemDetails(drinkId, 'drink');

                                if (drink) {
                                    const quantity = quantityValues[drink.id] || 1;
                                    const price = parseFloat(drink.prix) || 0;

                                    return (
                                        <Box
                                            key={drink.id}
                                            display="flex"
                                            flexDirection="row"
                                            alignItems="center"
                                            mb={2}
                                            justifyContent="space-between"
                                        >
                                            <Typography>{drink.nom}</Typography>
                                            <Typography>{price} XAF</Typography>
                                            <Typography>{quantity}</Typography>
                                            <Typography>{price * quantity} XAF</Typography>
                                        </Box>
                                    );
                                }

                                return null;
                            })
                        ) : (
                            selectedFoods.map((foodId) => {
                                const food = getItemDetails(foodId, 'food');

                                if (food) {
                                    const quantity = quantityValues[food.id] || 1;
                                    const price = parseFloat(food.prix) || 0;

                                    return (
                                        <Box
                                            key={food.id}
                                            display="flex"
                                            flexDirection="row"
                                            alignItems="center"
                                            mb={2}
                                            justifyContent="space-between"
                                        >
                                            <Typography>{food.nom}</Typography>
                                            <Typography>{price} XAF</Typography>
                                            <Typography>{quantity}</Typography>
                                            <Typography>{price * quantity} XAF</Typography>
                                        </Box>
                                    );
                                }

                                return null;
                            })
                        )}
                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                            justifyContent="space-between"
                            mb={2}
                        >
                            <Typography style={{ marginTop: 10, fontWeight: 'bold' }}>
                                Total Général
                            </Typography>
                            <Typography style={{ marginTop: 10, fontWeight: 'bold' }}>
                                {calculateTotal()} XAF
                            </Typography>
                        </Box>
                        <Box mt='2rem' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button onClick={handleClose} variant="contained" color="error">Fermer</Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

export default Recap;