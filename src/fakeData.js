const fakeData = {
    alcoolique: {
        categoryName: 'Boissons Alcooliques',
        image: 'https://www.newsducamer.com/wp-content/uploads/2022/07/y-1.png',
        items: [
            { id: 1, nom: 'Ice black', prix: 1500, type: 'drink' },
            { id: 2, nom: 'Ice ananas', prix: 1500, type: 'drink' },
            { id: 3, nom: 'Petite Guinness', prix: 1500, type: 'drink' },
            { id: 4, nom: 'malta', prix: 1500, type: 'drink' },
            { id: 5, nom: 'Heineken', prix: 1500, type: 'drink' },
            { id: 6, nom: 'Booster Cola', prix: 1500, type: 'drink' },
            { id: 7, nom: 'Beaufort', prix: 1500, type: 'drink' },
            { id: 8, nom: 'Beaufort Light', prix: 1500, type: 'drink' },
            { id: 9, nom: 'Beaufort tango', prix: 1500, type: 'drink' },
            { id: 10, nom: '33 Export', prix: 1500, type: 'drink' },
            { id: 11, nom: 'Castel Beer', prix: 1500, type: 'drink' },
            { id: 12, nom: 'Castle Milk Stout', prix: 1500, type: 'drink' },
            { id: 13, nom: 'Mützig', prix: 1500, type: 'drink' },
            { id: 14, nom: 'Amstel', prix: 2000, type: 'drink' },
            { id: 15, nom: 'Manyan', prix: 1500, type: 'drink' },
            { id: 16, nom: 'Chill', prix: 1500, type: 'drink' },
            { id: 17, nom: 'Pelforth', prix: 1500, type: 'drink' },
            { id: 18, nom: 'Doppel', prix: 1500, type: 'drink' },
            { id: 19, nom: 'Smooth', prix: 1500, type: 'drink' },
            { id: 20, nom: 'Grande Guinness', prix: 2000, type: 'drink' },
        ]
    },

    gazeuse: {
        categoryName: 'Boissons Gazeuses',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTzV7g3s1p5PdcLtiBC_Isg9684SVx5UfymyHEsPjGNR1XBQVL0IJItLKaALDO9EqF5nI&usqp=CAU',
        items: [
            { id: 21, nom: 'BIG COLA', prix: 500, type: 'drink' },
            { id: 22, nom: 'BIG ANANAS', prix: 500, type: 'drink' },
            { id: 23, nom: 'BIG PAMPLEMOUSSE', prix: 500, type: 'drink' },
            { id: 24, nom: 'BIG GOLDEN', prix: 500, type: 'drink' },
            { id: 25, nom: 'BIG GRENADINE', prix: 500, type: 'drink' },
            { id: 26, nom: 'BAVARIA', prix: 1500, type: 'drink' },
        ]
    },

    liqueurs_6: {
        categoryName: 'Liqueurs 6ans',
        image: 'https://previews.agefotostock.com/previewimage/medibigoff/ee338dd7e9d3b8f4d52d75d1d564e96f/zon-12029940.jpg',
        items: [
            { id: 27, nom: 'GRANTS', prix: 25000, type: 'drink' },
            { id: 28, nom: 'RED LABEL', prix: 25000, type: 'drink' },
            { id: 29, nom: 'BAILEYS', prix: 25000, type: 'drink' },
            { id: 30, nom: 'MARTINI BLANC', prix: 25000, type: 'drink' },
            { id: 31, nom: 'CAMPARI', prix: 25000, type: 'drink' },
        ]
    },

    vodka: {
        categoryName: 'Vodka',
        image: 'https://www.kapruka.com/shops/specialGifts/productImages/1683010175617_ab1.jpg',
        items: [
            { id: 32, nom: 'ABSOLUT ', prix: 80000, type: 'drink' },
            { id: 33, nom: 'BELVEDERE', prix: 55000, type: 'drink' },
        ]
    },

    liqueurs_12: {
        categoryName: 'Liqueurs 12ans',
        image: 'https://glusea.com/wp-content/uploads/2019/07/66049893_ml-750x484.jpg',
        items: [
            { id: 34, nom: 'BLACK LABEL', prix: 35000, type: 'drink' },
            { id: 35, nom: 'CHIVAS', prix: 35000, type: 'drink' },
            { id: 36, nom: 'JACK DANIEL', prix: 35000, type: 'drink' },
            { id: 37, nom: 'HENNESSY', prix: 45000, type: 'drink' },
            { id: 38, nom: 'GLENFIDDICH', prix: 45000, type: 'drink' },
            { id: 39, nom: 'SINGLETON', prix: 40000, type: 'drink' },
            { id: 40, nom: 'MACALLAN', prix: 75000, type: 'drink' },
            { id: 41, nom: 'LAC…', prix: 15000, type: 'drink' },
        ]
    },

    liqueurs_15: {
        categoryName: 'Liqueurs 15ans',
        image: 'https://as1.ftcdn.net/v2/jpg/05/25/62/12/1000_F_525621235_7ICU30ll1EH1UCppbR1JaPdeA46ta8ME.jpg',
        items: [
            { id: 42, nom: 'GLENFIDDICH', prix: 70000, type: 'drink' },
            { id: 43, nom: 'DOUBLE BLACK', prix: 70000, type: 'drink' },
            { id: 44, nom: 'CHIVAS', prix: 60000, type: 'drink' },
            { id: 45, nom: 'MACALLAN', prix: 120000, type: 'drink' },
        ]
    },

    liqueurs_18: {
        categoryName: 'Liqueurs 18ans',
        image: 'https://www.jaitoutcompris.com/img/mag/collection-whisky-maison-pb.jpg',
        items: [
            { id: 46, nom: 'CHIVAS 75cl', prix: 80000, type: 'drink' },
            { id: 47, nom: 'GLENNIDDICH', prix: 80000, type: 'drink' },
            { id: 48, nom: 'GOLD LABEL', prix: 80000, type: 'drink' },
            { id: 49, nom: 'JOHNNIE', prix: 80000, type: 'drink' },
            { id: 50, nom: 'CHIVAS 1L', prix: 110000, type: 'drink' },
            { id: 51, nom: 'MACALLAN ', prix: 250000, type: 'drink' },
        ]
    },

    champagne: {
        categoryName: 'Champagnes',
        image: 'https://degustationsdevins.com/blog/content/uploads/2021/12/RepasAuChampagne.jpg',
        items: [
            { id: 52, nom: 'VINS MOUSEUX', prix: 30000, type: 'drink' },
            { id: 53, nom: 'MOET NECTAR', prix: 80000, type: 'drink' },
            { id: 54, nom: 'VEUVE CLIQUOT ', prix: 80000, type: 'drink' },
            { id: 55, nom: 'RUINART BLANC', prix: 100000, type: 'drink' },
            { id: 56, nom: 'DOM PERIGNON', prix: 250000, type: 'drink' },
            { id: 57, nom: 'CRYSTAL', prix: 300000, type: 'drink' },
        ]
    },

    vin_moeleux: {
        categoryName: 'Vins Moelleux',
        image: 'https://vinoclub.fr/modules/prestablog/views/img/grid-for-1-7/up-img/206.jpg',
        items: [
            { id: 58, nom: 'VIEUX MOULIN', prix: 10000, type: 'drink' },
            { id: 59, nom: 'COTE BEGERAC', prix: 15000, type: 'drink' },
            { id: 60, nom: 'MONBAZILLAC', prix: 20000, type: 'drink' },
            { id: 61, nom: 'TOURICESSE VIN DE L\'UVION', prix: 18000, type: 'drink' },
        ]
    },

    vin_blanc_secs: {
        categoryName: 'Vins Blancs Secs',
        image: 'https://web-wine-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/news_details/public/field/image/Riesling%20News.jpg?itok=MMoCLSOu',
        items: [
            { id: 62, nom: 'RIESLING', prix: 15000, type: 'drink' },
        ]
    },

    vin_rosés: {
        categoryName: 'Vins Rosés',
        image: 'https://www.vin-oenologie.com/wp-content/uploads/2021/05/comment-boire-le-vin-rose.jpg',
        items: [
            { id: 63, nom: 'VIN ROSE PAMPLEMOUSSE', prix: 15000, type: 'drink' },
        ]
    },

    vin_rouges: {
        categoryName: 'Vins Rouges',
        image: 'https://lacaveapassions.com/wp-content/uploads/2020/04/img-0392-scaled.jpg',
        items: [
            { id: 64, nom: 'LOUIS LEGRAND', prix: 10000, type: 'drink' },
            { id: 65, nom: 'BORDEAUX SUPERRIEUR', prix: 15000, type: 'drink' },
            { id: 66, nom: 'CHATEAU BARREYRE', prix: 30000, type: 'drink' },
            { id: 67, nom: 'CHATEAU D’ARCINS', prix: 30000, type: 'drink' },
            { id: 68, nom: 'CHATEAU FERRANDE', prix: 35000, type: 'drink' },
            { id: 69, nom: 'CHATEAU JISCOUR', prix: 35000, type: 'drink' },
            { id: 70, nom: 'MOUTON CADET', prix: 75000, type: 'drink' },
        ]
    },

    digestif: {
        categoryName: 'Digestifs',
        image: 'https://images.ladepeche.fr/api/v1/images/view/5ed8bae3d286c231dc787938/large/image.jpg?v=1',
        items: [
            { id: 71, nom: 'THE', prix: 1000, type: 'drink' },
            { id: 72, nom: 'CAFE', prix: 1500, type: 'drink' },
        ]
    },

    grillade: {
        categoryName: 'Grillade',
        image: 'https://images.ladepeche.fr/api/v1/images/view/60d1a1f38fe56f63e92ee9c6/large/image.jpg?v=1',
        items: [
            { id: 73, nom: 'MOYENNE SOLE', prix: 7000, type: 'food' },
            { id: 74, nom: 'GROSSE SOLE', prix: 15000, type: 'food' },
            { id: 75, nom: 'BAR MOYEN', prix: 5000, type: 'food' },
            { id: 76, nom: 'GROS BAR', prix: 8000, type: 'food' },
            { id: 77, nom: 'MAQUERAU MOYEN', prix: 2500, type: 'food' },
            { id: 78, nom: 'GROS MAQUERAU', prix: 4000, type: 'food' },
            { id: 79, nom: 'MOYENNE CARPE', prix: 3000, type: 'food' },
            { id: 80, nom: 'GROSSE CARPE', prix: 6000, type: 'food' },
            { id: 81, nom: 'POULET', prix: 9000, type: 'food' },
            { id: 82, nom: 'POULET 1/2', prix: 4500, type: 'food' },
            { id: 83, nom: 'POULET 1/4', prix: 2500, type: 'food' },
            { id: 84, nom: 'PORC', prix: 2500, type: 'food' },
            { id: 85, nom: 'BRONCHETTES', prix: 1000, type: 'food' },
            { id: 86, nom: 'GAMBAS', prix: 8000, type: 'food' },
            { id: 87, nom: 'SUPPLEMENT(Plantin, Pomme, Miondo)', prix: 500, type: 'food' },
        ]
    }

};

export default fakeData;
