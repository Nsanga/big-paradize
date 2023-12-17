const fakeData = [
    { id: 1, nom: 'Ice black', prix: 1500, type: 'drink', category: 'alcoolique' },
    { id: 2, nom: 'Ice ananas', prix: 1500, type: 'drink', category: 'alcoolique' },
    { id: 3, nom: 'Petite Guinness', prix: 1500, type: 'drink', category: 'alcoolique' },
    { id: 4, nom: 'malta', prix: 1500, type: 'drink', category: 'alcoolique' },
    { id: 5, nom: 'Heineken', prix: 1500, type: 'drink', category: 'alcoolique' },
    { id: 6, nom: 'Booster Cola', prix: 1500, type: 'drink', category: 'alcoolique' },
    { id: 7, nom: 'Beaufort', prix: 1500, type: 'drink', category: 'alcoolique' },
    { id: 8, nom: 'Beaufort Light', prix: 1500, type: 'drink', category: 'alcoolique' },
    { id: 9, nom: 'Beaufort tango', prix: 1500, type: 'drink', category: 'alcoolique' },
    { id: 10, nom: '33 Export', prix: 1500, type: 'drink', category: 'alcoolique' },
    { id: 11, nom: 'Castel Beer', prix: 1500, type: 'drink', category: 'alcoolique' },
    { id: 12, nom: 'Castle Milk Stout', prix: 1500, type: 'drink', category: 'alcoolique' },
    { id: 13, nom: 'Mützig', prix: 1500, type: 'drink', category: 'alcoolique' },
    { id: 14, nom: 'Amstel', prix: 2000, type: 'drink', category: 'alcoolique' },
    { id: 15, nom: 'Manyan', prix: 1500, type: 'drink', category: 'alcoolique' },
    { id: 16, nom: 'Chill', prix: 1500, type: 'drink', category: 'alcoolique' },
    { id: 17, nom: 'Pelforth', prix: 1500, type: 'drink' },
    { id: 18, nom: 'Doppel', prix: 1500, type: 'drink', category: 'alcoolique' },
    { id: 19, nom: 'Smooth', prix: 1500, type: 'drink', category: 'alcoolique' },
    { id: 20, nom: 'Grande Guinness', prix: 2000, type: 'drink', category: 'alcoolique' },
    { id: 21, nom: 'BIG COLA', prix: 500, type: 'drink', category: 'gazeuse' },
    { id: 22, nom: 'BIG ANANAS', prix: 500, type: 'drink', category: 'gazeuse' },
    { id: 23, nom: 'BIG PAMPLEMOUSSE', prix: 500, type: 'drink', category: 'gazeuse' },
    { id: 24, nom: 'BIG GOLDEN', prix: 500, type: 'drink', category: 'gazeuse' },
    { id: 25, nom: 'BIG GRENADINE', prix: 500, type: 'drink', category: 'gazeuse' },
    { id: 26, nom: 'BAVARIA', prix: 1500, type: 'drink', category: 'gazeuse' },
    { id: 27, nom: 'GRANTS', prix: 25000, type: 'drink', category: 'liqueurs-6' },
    { id: 28, nom: 'RED LABEL', prix: 25000, type: 'drink', category: 'liqueurs-6' },
    { id: 29, nom: 'BAILEYS', prix: 25000, type: 'drink', category: 'liqueurs-6' },
    { id: 30, nom: 'MARTINI BLANC', prix: 25000, type: 'drink', category: 'liqueurs-6' },
    { id: 31, nom: 'CAMPARI', prix: 25000, type: 'drink', category: 'liqueurs-6' },
    { id: 32, nom: 'ABSOLUT ', prix: 80000, type: 'drink', category: 'vodka' },
    { id: 33, nom: 'BELVEDERE', prix: 55000, type: 'drink', category: 'vodka' },
    { id: 34, nom: 'BLACK LABEL', prix: 35000, type: 'drink', category: 'liqueurs-12' },
    { id: 35, nom: 'CHIVAS', prix: 35000, type: 'drink', category: 'liqueurs-12' },
    { id: 36, nom: 'JACK DANIEL', prix: 35000, type: 'drink', category: 'liqueurs-12' },
    { id: 37, nom: 'HENNESSY', prix: 45000, type: 'drink', category: 'liqueurs-12' },
    { id: 38, nom: 'GLENFIDDICH', prix: 45000, type: 'drink', category: 'liqueurs-12' },
    { id: 39, nom: 'SINGLETON', prix: 40000, type: 'drink', category: 'liqueurs-12' },
    { id: 40, nom: 'MACALLAN', prix: 75000, type: 'drink', category: 'liqueurs-12' },
    { id: 41, nom: 'GLENFIDDICH', prix: 70000, type: 'drink', category: 'liqueurs-15' },
    { id: 42, nom: 'DOUBLE BLACK', prix: 70000, type: 'drink', category: 'liqueurs-15' },
    { id: 43, nom: 'CHIVAS', prix: 60000, type: 'drink', category: 'liqueurs-15' },
    { id: 44, nom: 'MACALLAN', prix: 120000, type: 'drink', category: 'liqueurs-15' },
    { id: 45, nom: 'CHIVAS 75cl', prix: 80000, type: 'drink', category: 'liqueurs-18'},
    { id: 46, nom: 'GLENNIDDICH', prix: 80000, type: 'drink', category: 'liqueurs-18'},
    { id: 47, nom: 'GOLD LABEL', prix: 80000, type: 'drink', category: 'liqueurs-18'},
    { id: 48, nom: 'JOHNNIE', prix: 80000, type: 'drink', category: 'liqueurs-18' },
    { id: 49, nom: 'CHIVAS 1L', prix: 110000, type: 'drink', category: 'liqueurs-18' },
    { id: 50, nom: 'MACALLAN ', prix: 250000, type: 'drink', category: 'liqueurs-18' },
    { id: 51, nom: 'VINS MOUSEUX', prix: 30000, type: 'drink', category: 'champagne' },
    { id: 52, nom: 'MOET NECTAR', prix: 80000, type: 'drink', category: 'champagne' },
    { id: 53, nom: 'VEUVE CLIQUOT ', prix: 80000, type: 'drink', category: 'champagne' },
    { id: 54, nom: 'RUINART BLANC', prix: 100000, type: 'drink', category: 'champagne' },
    { id: 55, nom: 'DOM PERIGNON', prix: 250000, type: 'drink', category: 'champagne' },
    { id: 56, nom: 'CRYSTAL', prix: 300000, type: 'drink', category: 'champagne' },
    { id: 57, nom: 'VIEUX MOULIN', prix: 10000, type: 'drink', category: 'vin-moeleux' },
    { id: 58, nom: 'COTE BEGERAC', prix: 15000, type: 'drink', category: 'vin-moeleux' },
    { id: 59, nom: 'MONBAZILLAC', prix: 20000, type: 'drink', category: 'vin-moeleux' },
    { id: 60, nom: 'TOURICESSE VIN DE L\'UVION', prix: 18000, type: 'drink', category: 'vin-moeleux' },
    { id: 61, nom: 'RIESLING', prix: 15000, type: 'drink', category: 'vin-blanc-secs' },
    { id: 62, nom: 'VIN ROSE PAMPLEMOUSSE', prix: 15000, type: 'drink', category: 'vin-rosés' },
    { id: 63, nom: 'LAC…', prix: 15000, type: 'drink', category: 'liqueurs-12' },
    { id: 64, nom: 'LOUIS LEGRAND', prix: 10000, type: 'drink', category: 'vin-rouges' },
    { id: 65, nom: 'BORDEAUX SUPERRIEUR', prix: 15000, type: 'drink', category: 'vin-rouges' },
    { id: 66, nom: 'CHATEAU BARREYRE', prix: 30000, type: 'drink', category: 'vin-rouges' },
    { id: 67, nom: 'CHATEAU D’ARCINS', prix: 30000, type: 'drink', category: 'vin-rouges' },
    { id: 68, nom: 'CHATEAU FERRANDE', prix: 35000, type: 'drink', category: 'vin-rouges' },
    { id: 69, nom: 'CHATEAU JISCOUR', prix: 35000, type: 'drink', category: 'vin-rouges' },
    { id: 70, nom: 'MOUTON CADET', prix: 75000, type: 'drink', category: 'vin-rouges' },
    { id: 71, nom: 'THE', prix: 1000, type: 'drink', category: 'digestif' },
    { id: 72, nom: 'CAFE', prix: 1500, type: 'drink', category: 'digestif' },
    { id: 73, nom: 'MOYENNE SOLE', prix: 7000, type: 'food', category: 'grillade' },
    { id: 74, nom: 'GROSSE SOLE', prix: 15000, type: 'food', category: 'grillade' },
    { id: 75, nom: 'BAR MOYEN', prix: 5000, type: 'food', category: 'grillade' },
    { id: 76, nom: 'GROS BAR', prix: 8000, type: 'food', category: 'grillade' },
    { id: 77, nom: 'MAQUERAU MOYEN', prix: 2500, type: 'food', category: 'grillade' },
    { id: 78, nom: 'GROS MAQUERAU', prix: 4000, type: 'food', category: 'grillade' },
    { id: 79, nom: 'MOYENNE CARPE', prix: 3000, type: 'food', category: 'grillade' },
    { id: 80, nom: 'GROSSE CARPE', prix: 6000, type: 'food', category: 'grillade' },
    { id: 81, nom: 'POULET', prix: 9000, type: 'food', category: 'grillade' },
    { id: 82, nom: 'POULET 1/2', prix: 4500, type: 'food', category: 'grillade' },
    { id: 83, nom: 'POULET 1/4', prix: 2500, type: 'food', category: 'grillade' },
    { id: 84, nom: 'PORC', prix: 2500, type: 'food', category: 'grillade' },
    { id: 85, nom: 'BRONCHETTES', prix: 1000, type: 'food', category: 'grillade' },
    { id: 86, nom: 'GAMBAS', prix: 8000, type: 'food', category: 'grillade' },
    { id: 87, nom: 'SUPPLEMENT(Plantin, Pomme, Miondo)', prix: 500, type: 'food', category: 'grillade' },
];

export default fakeData;
