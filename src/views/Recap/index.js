import React from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import fakeData from '../../fakeData';
import html2canvas from 'html2canvas';
import download from 'downloadjs';
import { FaWhatsapp } from 'react-icons/fa';
import BigParadize from '../../assets/paradize.jpg'
import { useCategory } from '../../CategoryContext';

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
    const { selectedCategory } = useCategory();

    const getItemDetails = (itemId, itemType) => {
    
        // Assurez-vous que selectedCategory est défini
        if (!selectedCategory) {
            return null;
        }
    
        const item = selectedCategory.items.find((item) => item.id === itemId && item.type === itemType);
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

    const handleShare = async () => {
        try {
            const recapElement = document.getElementById('recap-container');

            if (!recapElement) {
                return;
            }

            const canvas = await html2canvas(recapElement, {
                // Options de configuration, y compris la marge interne (padding)
                logging: false,
                width: recapElement.offsetWidth + 20, // Ajoutez la marge interne
                height: recapElement.offsetHeight + 20, // Ajoutez la marge interne
                x: -10, // Compensez la marge interne
                y: -10, // Compensez la marge interne
            });
            const dataUrl = canvas.toDataURL('image/png');

            // Télécharger l'image
            download(dataUrl, 'recap.png', 'image/png');

            // (Optionnel) Rediriger l'utilisateur vers WhatsApp
            // Remplacez le lien ci-dessous par votre lien WhatsApp
            window.location.href = 'whatsapp://app';

            // Fermer la modal
            handleClose()
        } catch (error) {
            console.error('Erreur lors du partage sur WhatsApp :', error);
        }
    };

    return (
        <Box>
            <Box mt='4rem' style={{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={handleOpen} variant="contained">Valider</Button>
            </Box>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style} p={2}>
                    <Box id="recap-container">
                        <img src={BigParadize} alt='logo'
                            style={{ width: '70px', height: '50px', objectFit: 'cover' }}
                        />
                        <Typography variant="h6" fontWeight="bold" mb={4}>
                            Facture
                        </Typography>
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
                                            // alignItems="center"
                                            mb={2}
                                            justifyContent="space-between"
                                        >
                                            <Box width='40%'>
                                                <Typography>{food.nom}</Typography>
                                            </Box>
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
                    </Box>
                    <Box mt='2rem' style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
                        <Button onClick={handleShare} variant="outlined" color="success" startIcon={<FaWhatsapp />}>Partager </Button>
                        <Button onClick={handleClose} variant="contained" color="error">Fermer</Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

export default Recap;
