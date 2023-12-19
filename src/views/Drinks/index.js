import React, { useState } from 'react';
import { Box, Checkbox, Input, Typography, IconButton } from '@mui/material';
import fakeData from '../../fakeData';
import Recap from '../Recap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const Drink = () => {
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
                <Box style={{ display: 'flex', gap: 8, alignItems:'center' }}>
                    <IconButton onClick={handleBack} color="primary">
                        <FaArrowLeft /> 
                    </IconButton>
                    <Typography variant="h4" mt={2}>
                        Drinks
                    </Typography>
                </Box>
                <Typography variant="h6" fontWeight="bold" mt={2}>
                    Boissons alcooliques
                </Typography>
                {fakeData
                    .filter((item) => item.type === 'drink' && item.category === 'alcoolique')
                    .map((drink) => (
                        <Box key={drink.id} display="flex" flexDirection="row" alignItems="center" mb={2} justifyContent="space-between" gap>
                            <Checkbox
                                checked={selectedDrinks.includes(drink.id)}
                                onChange={() => handleCheckboxChange(drink.id)}
                                color="primary"
                            />
                            <Box style={{ width: '50%' }} marginRight= '8px'>
                                <Typography>{drink.nom}</Typography>
                            </Box>
                            <Box style={{ width: '30%' }}>
                                <Typography>{drink.prix} XAF</Typography>
                            </Box>
                            <Box width='8%'>
                            <Input
                                placeholder="Qté"
                                type="number"
                                inputProps={{ min: "1", step: "1" }}  // Définir la valeur minimale et le pas
                                value={quantityValues[drink.id] || ''}
                                onChange={(e) => handleQuantityChange(drink.id, e.target.value)}
                            />
                            </Box>                   
                        </Box>
                    ))}

                <Typography variant="h6" fontWeight="bold" mt={2}>
                    Boissons gazeuses
                </Typography>
                {fakeData
                    .filter((item) => item.type === 'drink' && item.category === 'gazeuse')
                    .map((drink) => (
                        <Box key={drink.id} display="flex" flexDirection="row" alignItems="center" mb={2} justifyContent="space-between" gap>
                            <Checkbox
                                checked={selectedDrinks.includes(drink.id)}
                                onChange={() => handleCheckboxChange(drink.id)}
                                color="primary"
                            />
                            <Box style={{ width: '50%' }} marginRight= '8px'>
                                <Typography>{drink.nom}</Typography>
                            </Box>
                            <Box style={{ width: '30%' }}>
                                <Typography>{drink.prix} XAF</Typography>
                            </Box>
                            <Box width='8%'>
                            <Input
                                placeholder="Qté"
                                type="number"
                                inputProps={{ min: "1", step: "1" }}  // Définir la valeur minimale et le pas
                                value={quantityValues[drink.id] || ''}
                                onChange={(e) => handleQuantityChange(drink.id, e.target.value)}
                            />
                            </Box>                   
                        </Box>
                    ))}

                <Typography variant="h6" fontWeight="bold" mt={2}>
                    Liqueurs 6ans
                </Typography>
                {fakeData
                    .filter((item) => item.type === 'drink' && item.category === 'liqueurs-6')
                    .map((drink) => (
                        <Box key={drink.id} display="flex" flexDirection="row" alignItems="center" mb={2} justifyContent="space-between" gap>
                            <Checkbox
                                checked={selectedDrinks.includes(drink.id)}
                                onChange={() => handleCheckboxChange(drink.id)}
                                color="primary"
                            />
                            <Box style={{ width: '50%' }} marginRight= '8px'>
                                <Typography>{drink.nom}</Typography>
                            </Box>
                            <Box style={{ width: '30%' }}>
                                <Typography>{drink.prix} XAF</Typography>
                            </Box>
                            <Box width='8%'>
                            <Input
                                placeholder="Qté"
                                type="number"
                                inputProps={{ min: "1", step: "1" }}  // Définir la valeur minimale et le pas
                                value={quantityValues[drink.id] || ''}
                                onChange={(e) => handleQuantityChange(drink.id, e.target.value)}
                            />
                            </Box>                   
                        </Box>
                    ))}

                <Typography variant="h6" fontWeight="bold" mt={2}>
                    Vodka
                </Typography>
                {fakeData
                    .filter((item) => item.type === 'drink' && item.category === 'vodka')
                    .map((drink) => (
                        <Box key={drink.id} display="flex" flexDirection="row" alignItems="center" mb={2} justifyContent="space-between" gap>
                            <Checkbox
                                checked={selectedDrinks.includes(drink.id)}
                                onChange={() => handleCheckboxChange(drink.id)}
                                color="primary"
                            />
                            <Box style={{ width: '50%' }} marginRight= '8px'>
                                <Typography>{drink.nom}</Typography>
                            </Box>
                            <Box style={{ width: '30%' }}>
                                <Typography>{drink.prix} XAF</Typography>
                            </Box>
                            <Box width='8%'>
                            <Input
                                placeholder="Qté"
                                type="number"
                                inputProps={{ min: "1", step: "1" }}  // Définir la valeur minimale et le pas
                                value={quantityValues[drink.id] || ''}
                                onChange={(e) => handleQuantityChange(drink.id, e.target.value)}
                            />
                            </Box>                   
                        </Box>
                    ))}

                <Typography variant="h6" fontWeight="bold" mt={2}>
                    Liqueurs 12ans
                </Typography>
                {fakeData
                    .filter((item) => item.type === 'drink' && item.category === 'liqueurs-12')
                    .map((drink) => (
                        <Box key={drink.id} display="flex" flexDirection="row" alignItems="center" mb={2} justifyContent="space-between" gap>
                            <Checkbox
                                checked={selectedDrinks.includes(drink.id)}
                                onChange={() => handleCheckboxChange(drink.id)}
                                color="primary"
                            />
                            <Box style={{ width: '50%' }} marginRight= '8px'>
                                <Typography>{drink.nom}</Typography>
                            </Box>
                            <Box style={{ width: '30%' }}>
                                <Typography>{drink.prix} XAF</Typography>
                            </Box>
                            <Box width='8%'>
                            <Input
                                placeholder="Qté"
                                type="number"
                                inputProps={{ min: "1", step: "1" }}  // Définir la valeur minimale et le pas
                                value={quantityValues[drink.id] || ''}
                                onChange={(e) => handleQuantityChange(drink.id, e.target.value)}
                            />
                            </Box>                   
                        </Box>
                    ))}

                <Typography variant="h6" fontWeight="bold" mt={2}>
                    Liqueurs 15ans
                </Typography>
                {fakeData
                    .filter((item) => item.type === 'drink' && item.category === 'liqueurs-15')
                    .map((drink) => (
                        <Box key={drink.id} display="flex" flexDirection="row" alignItems="center" mb={2} justifyContent="space-between" gap>
                            <Checkbox
                                checked={selectedDrinks.includes(drink.id)}
                                onChange={() => handleCheckboxChange(drink.id)}
                                color="primary"
                            />
                            <Box style={{ width: '50%' }} marginRight= '8px'>
                                <Typography>{drink.nom}</Typography>
                            </Box>
                            <Box style={{ width: '30%' }}>
                                <Typography>{drink.prix} XAF</Typography>
                            </Box>
                            <Box width='8%'>
                            <Input
                                placeholder="Qté"
                                type="number"
                                inputProps={{ min: "1", step: "1" }}  // Définir la valeur minimale et le pas
                                value={quantityValues[drink.id] || ''}
                                onChange={(e) => handleQuantityChange(drink.id, e.target.value)}
                            />
                            </Box>                   
                        </Box>
                    ))}

                <Typography variant="h6" fontWeight="bold" mt={2}>
                    Liqueurs 18ans
                </Typography>
                {fakeData
                    .filter((item) => item.type === 'drink' && item.category === 'liqueurs-18')
                    .map((drink) => (
                        <Box key={drink.id} display="flex" flexDirection="row" alignItems="center" mb={2} justifyContent="space-between" gap>
                            <Checkbox
                                checked={selectedDrinks.includes(drink.id)}
                                onChange={() => handleCheckboxChange(drink.id)}
                                color="primary"
                            />
                            <Box style={{ width: '50%' }} marginRight= '8px'>
                                <Typography>{drink.nom}</Typography>
                            </Box>
                            <Box style={{ width: '30%' }}>
                                <Typography>{drink.prix} XAF</Typography>
                            </Box>
                            <Box width='8%'>
                            <Input
                                placeholder="Qté"
                                type="number"
                                inputProps={{ min: "1", step: "1" }}  // Définir la valeur minimale et le pas
                                value={quantityValues[drink.id] || ''}
                                onChange={(e) => handleQuantityChange(drink.id, e.target.value)}
                            />
                            </Box>                   
                        </Box>
                    ))}

                <Typography variant="h6" fontWeight="bold" mt={2}>
                    Champagnes
                </Typography>
                {fakeData
                    .filter((item) => item.type === 'drink' && item.category === 'champagne')
                    .map((drink) => (
                        <Box key={drink.id} display="flex" flexDirection="row" alignItems="center" mb={2} justifyContent="space-between" gap>
                            <Checkbox
                                checked={selectedDrinks.includes(drink.id)}
                                onChange={() => handleCheckboxChange(drink.id)}
                                color="primary"
                            />
                            <Box style={{ width: '50%' }} marginRight= '8px'>
                                <Typography>{drink.nom}</Typography>
                            </Box>
                            <Box style={{ width: '30%' }}>
                                <Typography>{drink.prix} XAF</Typography>
                            </Box>
                            <Box width='8%'>
                            <Input
                                placeholder="Qté"
                                type="number"
                                inputProps={{ min: "1", step: "1" }}  // Définir la valeur minimale et le pas
                                value={quantityValues[drink.id] || ''}
                                onChange={(e) => handleQuantityChange(drink.id, e.target.value)}
                            />
                            </Box>                   
                        </Box>
                    ))}

                <Typography variant="h6" fontWeight="bold" mt={2}>
                    Vins Moeleux
                </Typography>
                {fakeData
                    .filter((item) => item.type === 'drink' && item.category === 'vin-moeleux')
                    .map((drink) => (
                        <Box key={drink.id} display="flex" flexDirection="row" alignItems="center" mb={2} justifyContent="space-between" gap>
                            <Checkbox
                                checked={selectedDrinks.includes(drink.id)}
                                onChange={() => handleCheckboxChange(drink.id)}
                                color="primary"
                            />
                            <Box style={{ width: '50%' }} marginRight= '8px'>
                                <Typography>{drink.nom}</Typography>
                            </Box>
                            <Box style={{ width: '30%' }}>
                                <Typography>{drink.prix} XAF</Typography>
                            </Box>
                            <Box width='8%'>
                            <Input
                                placeholder="Qté"
                                type="number"
                                inputProps={{ min: "1", step: "1" }}  // Définir la valeur minimale et le pas
                                value={quantityValues[drink.id] || ''}
                                onChange={(e) => handleQuantityChange(drink.id, e.target.value)}
                            />
                            </Box>                   
                        </Box>
                    ))}

                <Typography variant="h6" fontWeight="bold" mt={2}>
                    Vins Blancs Secs
                </Typography>
                {fakeData
                    .filter((item) => item.type === 'drink' && item.category === 'vin-blanc-secs')
                    .map((drink) => (
                        <Box key={drink.id} display="flex" flexDirection="row" alignItems="center" mb={2} justifyContent="space-between" gap>
                            <Checkbox
                                checked={selectedDrinks.includes(drink.id)}
                                onChange={() => handleCheckboxChange(drink.id)}
                                color="primary"
                            />
                            <Box style={{ width: '50%' }} marginRight= '8px'>
                                <Typography>{drink.nom}</Typography>
                            </Box>
                            <Box style={{ width: '30%' }}>
                                <Typography>{drink.prix} XAF</Typography>
                            </Box>
                            <Box width='8%'>
                            <Input
                                placeholder="Qté"
                                type="number"
                                inputProps={{ min: "1", step: "1" }}  // Définir la valeur minimale et le pas
                                value={quantityValues[drink.id] || ''}
                                onChange={(e) => handleQuantityChange(drink.id, e.target.value)}
                            />
                            </Box>                   
                        </Box>
                    ))}

                <Typography variant="h6" fontWeight="bold" mt={2}>
                    Vins Rosés
                </Typography>
                {fakeData
                    .filter((item) => item.type === 'drink' && item.category === 'vin-rosés')
                    .map((drink) => (
                        <Box key={drink.id} display="flex" flexDirection="row" alignItems="center" mb={2} justifyContent="space-between" gap>
                            <Checkbox
                                checked={selectedDrinks.includes(drink.id)}
                                onChange={() => handleCheckboxChange(drink.id)}
                                color="primary"
                            />
                            <Box style={{ width: '50%' }} marginRight= '8px'>
                                <Typography>{drink.nom}</Typography>
                            </Box>
                            <Box style={{ width: '30%' }}>
                                <Typography>{drink.prix} XAF</Typography>
                            </Box>
                            <Box width='8%'>
                            <Input
                                placeholder="Qté"
                                type="number"
                                inputProps={{ min: "1", step: "1" }}  // Définir la valeur minimale et le pas
                                value={quantityValues[drink.id] || ''}
                                onChange={(e) => handleQuantityChange(drink.id, e.target.value)}
                            />
                            </Box>                   
                        </Box>
                    ))}

                <Typography variant="h6" fontWeight="bold" mt={2}>
                    Vins Rouges
                </Typography>
                {fakeData
                    .filter((item) => item.type === 'drink' && item.category === 'vin-rouges')
                    .map((drink) => (
                        <Box key={drink.id} display="flex" flexDirection="row" alignItems="center" mb={2} justifyContent="space-between" gap>
                            <Checkbox
                                checked={selectedDrinks.includes(drink.id)}
                                onChange={() => handleCheckboxChange(drink.id)}
                                color="primary"
                            />
                            <Box style={{ width: '50%' }} marginRight= '8px'>
                                <Typography>{drink.nom}</Typography>
                            </Box>
                            <Box style={{ width: '30%' }}>
                                <Typography>{drink.prix} XAF</Typography>
                            </Box>
                            <Box width='8%'>
                            <Input
                                placeholder="Qté"
                                type="number"
                                inputProps={{ min: "1", step: "1" }}  // Définir la valeur minimale et le pas
                                value={quantityValues[drink.id] || ''}
                                onChange={(e) => handleQuantityChange(drink.id, e.target.value)}
                            />
                            </Box>                   
                        </Box>
                    ))}

                <Typography variant="h6" fontWeight="bold" mt={2}>
                    Digestifs
                </Typography>
                {fakeData
                    .filter((item) => item.type === 'drink' && item.category === 'digestif')
                    .map((drink) => (
                        <Box key={drink.id} display="flex" flexDirection="row" alignItems="center" mb={2} justifyContent="space-between" gap>
                            <Checkbox
                                checked={selectedDrinks.includes(drink.id)}
                                onChange={() => handleCheckboxChange(drink.id)}
                                color="primary"
                            />
                            <Box style={{ width: '50%' }} marginRight= '8px'>
                                <Typography>{drink.nom}</Typography>
                            </Box>
                            <Box style={{ width: '30%' }}>
                                <Typography>{drink.prix} XAF</Typography>
                            </Box>
                            <Box width='8%'>
                            <Input
                                placeholder="Qté"
                                type="number"
                                inputProps={{ min: "1", step: "1" }}  // Définir la valeur minimale et le pas
                                value={quantityValues[drink.id] || ''}
                                onChange={(e) => handleQuantityChange(drink.id, e.target.value)}
                            />
                            </Box>                   
                        </Box>
                    ))}
            </Box>
            <Recap selectedDrinks={selectedDrinks} quantityValues={quantityValues} type={type} />
        </Box>
    );
};

export default Drink;
