// Attend que le DOM soit entièrement chargé pour exécuter le script
document.addEventListener('DOMContentLoaded', function () {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#2c2c2e');
    tg.setBackgroundColor('#1c1c1d');

    const progressBar = document.getElementById("myBar");
    const loader = document.getElementById("page-loader");

    // 1. On lance l'animation de la barre après un tout petit délai
    setTimeout(() => {
        if (progressBar) {
            progressBar.style.width = "100%";
        }
    }, 100);

    // 2. On attend la fin de l'animation (2.5 secondes ici) pour cacher le loader
    setTimeout(() => {
        if (loader) {
            loader.style.opacity = "0"; // Effet de fondu
            loader.style.transition = "opacity 0.5s ease";

            setTimeout(() => {
                loader.style.display = "none";
                loader.classList.remove('active');
                // Affiche la page Home par défaut
                document.getElementById('page-home').classList.add('active');
            }, 500); // Attend la fin du fondu
        }
    }, 2600); // 2600ms = 2.5s d'animation + 0.1s de délai


    // --- CONFIGURATION DES LIENS DE CONTACT (À METTRE À JOUR) ---
    const contactLinks = [
        {
            name: 'SNAPCHAT 👻',
            url: 'https://www.snapchat.com/add/didiercali?',
            id: 'snapchat',
            className: 'snapchat', 
            text: "SNAPCHAT 👻"
        },
        {
            name: 'WHATSAPP 📞',
            url: 'https://wa.me/33778549047', // <-- TON NUMÉRO ICI
            id: 'whatsapp',
            className: 'whatsapp', 
            text: "WHATSAPP 📞"
        },
        {
            name: 'TÉLÉGRAM 💙',
            url: 'https://t.me/calidfarm75',
            id: 'telegram-main',
            className: 'telegram', 
            text: "TÉLÉGRAM 💙"
        }
    ];

    // --- DONNÉES DE L'APPLICATION (DIDIERCALI) ---
// --- DONNÉES DE L'APPLICATION (DIDIERCALI) ---
const appData = [
    // 1. WEED CALIFORNIENNE 🇺🇸
    {
        id: 'WEED_CALI',
        name: '🇺🇸 WEED CALIFORNIENNE',
        type: 'Weed',
        quality: '🇺🇸 Cali',
        image: 'CategCali.png', 
        products: [
            {
                id: 'Fresca de Poetry',
                flag: '🇺🇸',
                name: 'Fresca de Poetry 🍋‍🟩',
                farm: 'DidierSelection 🗽',
                promoEligible: true,
                type: 'Weed',
                image: 'ProductFR.jpg',
                images: ['ProductFR1.jpg', 'ProductFR2.jpg'],
                video: 'VideoFR.mov',
                description: 'Présentation d\'Agua Fresca de Poetry of Plants, une tournure rafraîchissante dans le monde du cannabis. \n Avec son arôme de citron vert 🍋‍🟩 au concombre 🥒 convaincant et ses notes Z, cette variété est un délice pour les sens.\n Cet hybride à tendance indica hérite de sa lignée de Atomic Collider #09 x Rainbow Belts 2.0, promettant une expérience relaxante mais édifiante rappelant Zkittles. Parfait pour une utilisation de jour, Agua Fresca améliore vos moments sans submerger, rendant chaque jour un peu plus lumineux et plus agréable.',
                tarifs: [
                    { weight: '10g', price: 100.00 }
                ]
            },
            {
                id: 'CEREAL MILK',
                flag: '🇺🇸',
                name: 'CEREAL MILK 🥣',
                farm: 'DidierSelection 🗽',
                promoEligible: true,
                type: 'Weed',
                image: 'ProductCM.jpg',
                images: ['ProductCM1.jpg', 'ProductCM2.jpg'],
                video: 'VideoCM.mov',
                description: 'Les biscuits au lait aux céréales sont la variété qui satisfait votre dent sucrée et plus encore. \n Imaginez une table de petit-déjeuner couverte de toutes sortes de friandises - \n Imaginez maintenant ces saveurs se mélanger pendant que vous prenez une bouchée. C\'est comme une pomme fraîche, une vanille et du sucre qui se font des amis à travers votre palais à chaque croquant (très agréable). Ce n\'est pas seulement quelque chose de savoureux ; il a également des effets qui garderont l\'ennui à distance tout en impressionnant même les connaisseurs de cannabis chevronnés.',
                tarifs: [
                    { weight: '10g', price: 100.00 }
                ]
            },
            {
                id: 'COCO CHANEL',
                flag: '🇺🇸',
                name: 'COCO CHANEL ⚭',
                farm: 'DidierSelection 🗽',
                promoEligible: true,
                type: 'Weed',
                image: 'ProductCC.jpg',
                images: ['ProductCC1.jpg', 'ProductCC2.jpg'],
                video: 'VideoCC.mov',
                description: 'Si vous avez envie de vous promener dans un verger ensoleillé avec une touche ludique, alors la variété de cannabis Coco Chanel est ce dont vous avez besoin ! \n Il est dominé par le myrcène ; cette belle sativa a des nuances terreuses qui dansent bien aux côtés de saveurs fruitées comme les prunes juteuses ainsi que les oranges🍊rafraîchissantes \n Le tout magnifiquement lié par des notes de pamplemousse piquantes',
                tarifs: [
                    { weight: '10g', price: 100.00 }
                ]
            },
           /*  {
                id: 'PURPLE RUNTZ🍇',
                flag: '🇺🇸',
                name: 'PURPLE RUNTZ 🍇',
                farm: 'DidierSelection 🗽',
                promoEligible: true,
                type: 'Weed',
                image: 'ProductPR.jpg',
                images: ['ProductPR1.jpg'],
                video: 'VideoPR.mov',
                description: 'Les critiques de Leafly qui ont fumé cette variété disent qu\'elle les rend excités, euphoriques et picotants. Purple Runtz a 14 % de THC et est idéal pour les consommateurs de cannabis nouveaux et expérimentés.  \n\n Le terpène dominant de cette variété est le limonène, qui est souvent associé à la saveur d\'agrumes.  \n Les consommateurs disent que Leafly Purple Runtz a une saveur terreuse, avec des nuances de raisin et tropicales. Les patients de marijuana médicale achètent souvent cette variété lorsqu\'ils font face à une douleur légère, au stress ou à une inflammation.',
                tarifs: [
                    { weight: '10g', price: 100.00 }
                ]
            }, */
         /*    {
                id: 'HOL_CHEM_SOU',
                flag: '🇺🇸',
                name: 'MAN CHEMSOU 🪖',
                farm: 'Chemdawg Sour Diesel',
                promoEligible: true,
                type: 'Weed',
                image: 'ProductChem3.jpg',
                images: ['ProductChem.jpg','ProductChem2.jpg'],
                description: 'Le président Chem Sou, également connu sous le nom de Chemdawg Sour Diesel, est une souche hybride 🪦 à dominante Sativa. \n élevée en 🪦qui est en moyenne d\'environ 22 %, mais peut parfois atteindre jusqu\'à 26 %.     \n\n  🪖 Le président Chem Sou est célébré pour ses effets édifiants et énergisants🪦, ce qui en fait un choix populaire pour une utilisation en journée.😏Cependant, les débutants doivent procéder avec prudence en raison de ses puissants effets psychoactifs. La teneur élevée en 🪦 du président Chem Sou peut le rendre bénéfique pour ceux qui souffrent de stress, 🪦🪦de dépression et de douleur chronique.  \n Cette variété est souvent décrite comme ayant un profil de saveur complexe, avec des notes de diesel🌿 \n d\'agrumes🍋‍🟩de pin 🌟et un soupçon de terre 🧁',
                tarifs: [
                    { weight: '10g', price: 100.00 }
                ]
            }, */
          /*   {
                id: 'ICE_CREAM',
                flag: '🇺🇸',
                name: 'ICE CREAM CAKE 🍰',
                farm: 'Top Shelf',
                promoEligible: true,
                type: 'Weed',
                image: 'ProductIce.jpg',
                images: ['ProductIce2.jpg','ProductIce3.jpg'],
                video: 'VideoIce.mov',
                description: 'Cette variété offre des effets sédatifs qui laissent votre esprit et votre corps complètement détendus. 🥴 \n Le gâteau à la crème glacée 🍦présente un profil de saveur crémeuse avec des notes sucrées de vanille et de pâte sucrée. 😶‍🌫️ \n\n Cette souche est signalée par les patients et les consommateurs de marijua.. médicale 🪦comme ayant des effets calmants qui aident à la douleur, au sommeil 😴 et à l\'anxiété.  \n La Ice Cream Cake est idéale pour une utilisation nocturne lorsque vous n\'avez rien d\'important à faire à part regarder la télévision🛋️et vous endormir.',
                tarifs: [
                    { weight: '10g', price: 100.00 }
                ]
            } */
        ]
    },

    // 2. WEED HOLLANDAISE 🌷
    {
        id: 'WEED_HOLLANDE',
        name: '🌷 WEED HOLLANDAISE',
        type: 'Weed',
        quality: '🌷 Hollande',
        image: 'CategHollande.png', 
        products: [
            {
                id: 'SuperSilverHaze 👑',
                flag: '🇺🇸',
                name: 'SuperSilverHaze 👑',
                farm: 'DidierSelection 🗽',
                promoEligible: true,
                type: 'Weed',
                image: 'ProductSSH.jpg',
                video: 'VideoSSH.mov',
                description: 'La SSH vient d\'un programme de sélection d\'Amnesia Haze et a dominé la plupart des compétitions auxquelles elle a pris part. \n La SSH a mérité sa place sur les menus des coffeeshops à Amsterdam 🇳🇱grâce à ses arômes prononcés et ses lourds effets 🌿\n L\'effet est puissant, bourdonnant et énergétique, ce qui en fait une herbe parfaite à fumer 😏pour se balader sous le soleil ☀️à Amsterdam. \n Elle comporte 80 % de génétiques🌿et seulement 20 % de génétique🌿\n\n EFFET : Fort 😧\n Euphorique 😄\n Motivant ☮️\n Longue durée 🪦 \n Cérébral 🪦',
                tarifs: [
                    { weight: '10g', price: 100.00 }
                ]
            }
        ]
    },

    // 3. HASH JAUNE MOUSSEUX 🧽
    {
        id: 'JAUNE_MOUSSEUX',
        name: '🧽 JAUNE MOUSSEUX',
        type: 'Hash',
        quality: '🧽 Mousseux',
        image: 'CategMousseux.png', 
        products: [
            {
                id: 'MOUSS_TERREUX',
                flag: '🇲🇦',
                name: 'PINK LEMON 🍋🍓',
                farm: 'No Farm',
                promoEligible: true,
                type: 'Hash',
                image: 'ProductPK.jpg',
                images: ['ProductPK2.jpg', 'ProductPK3.jpg'],
                description: 'SAVEURS  ET ARÔMES  \n\n 🔴Terreuses  : Un goût riche et profond qui rappelle la terre nourrissante des montagnes.  \n\n  🟢Fruitées  : Parfois, des nuances de fruits mûrs se mêlent à la terre, offrant une expérience gustative complexe.  \n\n EFFETS ET BIENFAITS   \n ⭐️Relaxation  : Aide à apaiser le stress et l\'anxiété.  \n\n 🪦 Soulagement de la Douleur  :  \n Efficace pour réduire l\'inconfort et la douleur chronique.  \n\n  💡🪦Amélioration du Sommeil  : Favorise un sommeil réparateur sans les effets d\'intoxication.',
                tarifs: [
                    { weight: '20g', price: 100.00 }
                ]
            }
        ]
    },

    // 4. FILTRÉ PREMIUM 💎
    {
        id: 'FILTRE_PREMIUM',
        name: '💎 FILTRÉ PREMIUM',
        type: 'Hash',
        quality: '💎 Filtré',
        image: 'CategFiltre.png', 
        products: [
            {
                id: 'Gas Mint 🧊',
                flag: '🇺🇸',
                name: 'Gas Mint 🧊',
                farm: 'DidierSelection 🗽',
                promoEligible: true,
                type: 'Filtre',
                image: 'ProductGM.png',
                video: 'VideoGM.mp4',
                description: 'Allumer Gas Mint, c\'est comme allumer une fusée. 🚀 \n\n Les effets montent rapidement, élèvent votre humeur et affûtent vos sens, avant de se stabiliser dans un calme apaisant et équilibré.',
                tarifs: [
                    { weight: '10g', price: 100.00 }
                ]
            },
            {
                id: '🍓 Strawberry Banana 🍌',
                flag: '🇺🇸',
                name: '🍓 Strawberry Banana 🍌',
                farm: 'DidierSelection 🗽',
                promoEligible: true,
                type: 'Filtre',
                image: 'ProductSB.jpg',
                video: 'VideoSB.mp4',
                description: 'La strawberry 🍓Banana 🍌 différencie des autres variétés grâce à sa puissance et ses effets uniques. \n Avec un taux de 👩‍🔬 allant de 22 % à 30 %, elle n’est pas recommandée pour les consommateurs débutants, mais elle vaut la peine d’être essayée pour les amateurs de 🍫plus expérimentés. \n\n Les effets de la stramberry Banana sont décrits comme provoquant une forte euphorie 😄associée à une profonde relaxation corporelle. \n Les consommateurs thérapeutiques 🪦rapportent également l’avoir utilisé avec succès pour soulager différents symptômes/pathologies.🪦🪦',
                tarifs: [
                    { weight: '10g', price: 100.00 }
                ]
            }
        ]
    },

    // 5. EDIBLES 🍪
    {
        id: 'EDIBLES',
        name: '🍪 EDIBLES',
        type: 'Edibles',
        quality: '🍪 Edibles',
        image: 'CategEdibles.png', 
        products: [
            {
                id: 'Guava Haze 🥭🍍',
                flag: '🇺🇸',
                name: 'Guava Haze 🥭🍍',
                farm: 'Boutiq',
                promoEligible: false,
                type: 'Vape',
                image: 'ProductReG.jpg',
                images: ['ProductReG1.jpg','ProductReG2.jpg','ProductReG3.jpg'],
                description: 'Premium cartriges 1g distillat 🎇\n 800mg/1g ≈ ( 80% tétrahydrocanbinol ¥9 👩‍🔬  \n    ( Naturel Végétal terpènes ) \n ( COMPOSITION CARTRIGES)',
                tarifs: [
                    { weight: '1 Unité', price: 60.00 },
                    { weight: '5 Unité', price: 250.00 },
                    { weight: '10 Unité', price: 450.00 },
                ]
            },
            {
                id: 'DO SI DOS 🍪🧁',
                flag: '🇺🇸',
                name: 'DO SI DOS 🍪🧁',
                farm: 'Boutiq',
                promoEligible: false,
                type: 'Vape',
                image: 'ProductReDo.jpg',
                images: ['ProductReDo1.jpg','ProductReDo2.jpg','ProductReDo3.jpg'],
                description: 'Premium cartriges 1g distillat 🎇\n 800mg/1g ≈ ( 80% tétrahydrocanbinol ¥9 👩‍🔬 ( Naturel Végétal terpènes ) \n ( COMPOSITION CARTRIGES)',
                tarifs: [
                    { weight: '1 Unité', price: 60.00 },
                    { weight: '5 Unité', price: 250.00 },
                    { weight: '10 Unité', price: 450.00 },
                ]
            },
            {
                id: 'VAPE_BOUTIQ_1G',
                flag: '🇺🇸',
                name: 'VAPE BOUTIQ 1G',
                farm: 'Boutiq',
                promoEligible: false,
                type: 'Vape',
                image: 'ProductVape.jpg',
                images: ['ProductVape2.jpg','ProductVape3.jpg','ProductVape4.jpg'],
                description: 'Tout-en-un | Résine vivante | Rechargeable.\nHuile riche en terpènes, zéro additif (ni PG, ni VG). 100% Authentique et vérifiable.',
                options: [
                    'Forbidden Mango 🥭',
                    'OG Kush 🌲',
                    'Guava Lemonade 🥝🍋',
                    'Mojito 🍹'
                ],
                tarifs: [
                    { weight: '1 Unité', price: 75.00 }
                ]
            }
        ]
    },
     // 4. COCA 
    {
        id: 'ZIP',
        name: '☃️ ZIP',
        type: 'ZIP',
        quality: '☃️ ZIP',
        image: 'CategZip.png', 
        products: [
            {
                id: 'Colombienne',
                flag: '🇨🇴',
                name: 'Colombienne 🇨🇴',
                farm: 'No Farm',
                promoEligible: true,
                type: 'Hash',
                image: 'ProductCo.png',
                video: 'VideoCo.mp4',
                description: '',
                tarifs: [
                    { weight: '2g', price: 160.00 },
                    { weight: '5g', price: 350.00 },
                    { weight: '10g', price: 500.00 }
                ]
            },
            {
                id: 'Bolivienne',
                flag: '🇧🇴',
                name: 'Bolivienne 🇧🇴',
                farm: 'No Farm',
                promoEligible: true,
                type: 'Hash',
                image: 'ProductBo.png',
                video: 'VideoBo.mp4',
                description: '',
                tarifs: [
                    { weight: '1g', price: 70.00 },
                    { weight: '2g', price: 120.00 },
                ]
            }
        ]
    },

   
];
    // --- VARIABLES D'ÉTAT ---
    let cart = [];
    let currentFilters = {
        searchTerm: '',
        quality: 'all',
        farm: 'all'
    };
    let currentView = 'categories'; 
    let currentCategoryId = null; 
    let currentFarmId = null; 
    let appliedPromo = null; 
    let paymentMethod = 'Espèce'; 

    // --- CODES PROMO ---
    const validPromoCodes = {
        "DIDIERCALI10": {
            type: 'fixed', 
            value: 10,       
            appliesTo: 'eligible', 
            cumulative: false 
        }
    };


    // --- SÉLECTEURS D'ÉLÉMENTS DU DOM ---
    const pages = document.querySelectorAll('.page');
    const productListContainer = document.getElementById('product-list');
    const loaderPage = document.getElementById('page-loader');
    const filterContainer = document.querySelector('.filters');
    const searchFilterWrapper = document.getElementById('search-filter').parentElement;
    const qualityFilterWrapper = document.getElementById('quality-filter').parentElement;
    const farmFilterWrapper = document.getElementById('farm-filter').parentElement;

    // --- HELPER : TROUVER UN PRODUIT PAR SON ID ---
    function getProductById(productId) {
        for (const category of appData) {
            if (category.products) {
                const product = category.products.find(p => p.id === productId);
                if (product) return product;
            }
            if (category.farms) {
                for (const farm of category.farms) {
                    const product = farm.products.find(p => p.id === productId);
                    if (product) return product;
                }
            }
        }
        return undefined; 
    }

    // --- NAVIGATION ---
    function showPage(pageId) {
        pages.forEach(p => p.classList.remove('active'));
        const page = document.getElementById(pageId);
        if (page) {
            page.classList.add('active');
        }

        const homeNav = document.getElementById('nav-menu');
        const infoNav = document.getElementById('nav-info'); 
        const contactNav = document.getElementById('nav-contact');
        const avisNav = document.getElementById('nav-avis'); 

        homeNav.classList.remove('active');
        infoNav.classList.remove('active');
        contactNav.classList.remove('active');
        if (avisNav) avisNav.classList.remove('active'); 

        if (pageId === 'page-contact') {
            contactNav.classList.add('active');
        } else if (pageId === 'page-info') {
            infoNav.classList.add('active');
        } else if (pageId === 'page-avis') { 
            if (avisNav) avisNav.classList.add('active');
        } else {
            homeNav.classList.add('active');
        }
    }

    // --- LOGIQUE D'AFFICHAGE ---
    function renderHomePage() {
        filterContainer.style.display = 'flex';

        const existingBackBtnCat = filterContainer.querySelector('.back-to-categories-btn');
        if (existingBackBtnCat) existingBackBtnCat.remove();
        const existingBackBtnFarm = filterContainer.querySelector('.back-to-farms-btn');
        if (existingBackBtnFarm) existingBackBtnFarm.remove();

        if (currentView === 'categories') {
            renderCategoryList();
            searchFilterWrapper.style.display = 'none';
            farmFilterWrapper.style.display = 'none';
            qualityFilterWrapper.style.display = 'flex'; 
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';

        } else if (currentView === 'farms') {
            renderFarmList(currentCategoryId);
            searchFilterWrapper.style.display = 'none';
            farmFilterWrapper.style.display = 'none'; 
            qualityFilterWrapper.style.display = 'none';
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)'; 

            const category = appData.find(c => c.id === currentCategoryId);
            const backButton = document.createElement('button');
            backButton.className = 'back-to-categories-btn'; 
            backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;
            backButton.style.cssText = `
            border: none;     color: #d020d7;
            padding: 40px;
            font-weight: 700;
            cursor: pointer;
            gap: 10px;
            box-sizing: border-box;
            margin-top: 3vh;
            font-family: Copperplate;
            height: 7vh;
            font-size: 1.8vh;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(145deg, #2b00c7, #d17d00a8); border-radius: 10px;`;
            filterContainer.prepend(backButton);

        } else if (currentView === 'simple_products') { 
            updateFarmFilter(currentCategoryId);
            renderProductListSimple(currentCategoryId);
            searchFilterWrapper.style.display = 'flex';
            farmFilterWrapper.style.display = 'flex'; 
            qualityFilterWrapper.style.display = 'none';

            const category = appData.find(c => c.id === currentCategoryId);
            const backButton = document.createElement('button');
            backButton.className = 'back-to-categories-btn';
            backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;
            backButton.style.cssText = `
            border: none;     color: #d020d7;
            padding: 40px;
            font-weight: 700;
            cursor: pointer;
            gap: 10px;
            box-sizing: border-box;
            margin-top: 3vh;
            font-family: Copperplate;
            height: 7vh;
            font-size: 1.8vh;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(145deg, #2b00c7, #d17d00a8); border-radius: 10px;`;
            filterContainer.prepend(backButton);
            productListContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';

        } else if (currentView === 'products') {
            updateFarmFilter(currentCategoryId, currentFarmId); 
            renderProductList(currentCategoryId, currentFarmId);
            searchFilterWrapper.style.display = 'flex';
            farmFilterWrapper.style.display = 'flex'; 
            qualityFilterWrapper.style.display = 'none'; 
            productListContainer.style.gridTemplateColumns = 'repeat(2, 1fr)'; 

            const category = appData.find(c => c.id === currentCategoryId);
            const farm = category.farms.find(f => f.id === currentFarmId);
            const backButton = document.createElement('button');
            backButton.className = 'back-to-farms-btn'; 
            backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>  ${farm.name}`;
            backButton.style.cssText = `
            border: none; color: #83e18d; padding: 40px; font-weight: 700; cursor: pointer; gap: 10px;
            box-sizing: border-box; margin-top: 3vh; font-family: Copperplate; height: 7vh;
            font-size: 1.8vh; width: 100%; display: flex; justify-content: space-between;
            align-items: center; background: linear-gradient(182deg, #fa007e, transparent); border-radius: 10px;`;
            filterContainer.prepend(backButton);
        }
    }

    function updateFarmFilter(categoryId, subCategoryId = null) {
        const category = appData.find(c => c.id === categoryId);
        const farmFilter = document.getElementById('farm-filter');
        if (!category) return;

        let availableFarms = [];
        if (subCategoryId && category.farms) {
            const subCategory = category.farms.find(f => f.id === subCategoryId);
            if (subCategory) {
                subCategory.products.forEach(p => { if (p.farm) availableFarms.push(p.farm); });
            }
        } else {
            if (category.farms) {
                category.farms.forEach(sub => { sub.products.forEach(p => { if (p.farm) availableFarms.push(p.farm); }); });
            } else if (category.products) {
                category.products.forEach(p => { if (p.farm) availableFarms.push(p.farm); });
            }
        }

        const uniqueFarms = ['all', ...new Set(availableFarms)];
        const currentValue = currentFilters.farm;
        farmFilter.innerHTML = uniqueFarms.map(farm => 
            `<option value="${farm}">${farm === 'all' ? '👨‍🌾  -  Toutes les farms' : farm}</option>`
        ).join('');

        if (uniqueFarms.includes(currentValue)) {
            farmFilter.value = currentValue;
        } else {
            farmFilter.value = 'all';
            currentFilters.farm = 'all'; 
        }
    }

    function renderCategoryList() {
        const filteredCategories = appData.filter(category => {
            const searchMatch = category.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
            const qualityMatch = currentFilters.quality === 'all' || category.quality === currentFilters.quality;
            return searchMatch && qualityMatch;
        });

        productListContainer.innerHTML = '';
        if (filteredCategories.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucune catégorie ne correspond à votre recherche.</p>';
            return;
        }

        filteredCategories.forEach(category => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.dataset.categoryId = category.id;
            card.innerHTML = `<img src="${category.image}" alt="${category.name}">`;
            productListContainer.appendChild(card);
        });
    }

    function renderFarmList(categoryId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category) return;
        const farms = category.farms;
        productListContainer.style.gridTemplateColumns = '1fr';
        productListContainer.style.gap = '10px'; 
        productListContainer.innerHTML = '';
        if (farms.length === 0) return;

        farms.forEach(farm => {
            const btn = document.createElement('div');
            btn.className = 'farm-list-btn';
            btn.dataset.farmId = farm.id;
            if (farm.clickable === false) btn.classList.add('unclickable');

            const productCount = farm.products.length;
            const countText = productCount > 0 ? `${productCount} prod.` : '';
            btn.innerHTML = `
            <div class="farm-btn-left">
                <div class="farm-btn-info">
                    <span class="farm-btn-title">${farm.name}</span>
                    <span class="farm-btn-subtitle">${farm.badgeText || countText}</span>
                </div>
            </div>
            <div class="farm-btn-right">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6e6e73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </div>`;
            productListContainer.appendChild(btn);
        });
    }

    function renderProductListSimple(categoryId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category || !category.products) return;

        if(typeof updateFarmFilter === "function") updateFarmFilter(categoryId); 

        const filteredProducts = category.products.filter(product => {
            const searchMatch = product.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
            const farmMatch = currentFilters.farm === 'all' || product.farm === currentFilters.farm;
            return searchMatch && farmMatch;
        });

        productListContainer.innerHTML = '';
        if (filteredProducts.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucun produit trouvé.</p>';
            return;
        }

        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card product-item-card';
            card.dataset.productId = product.id;
            
            if (product.type === 'Pack') card.classList.add('full-width');
            if (product.clickable === false) card.classList.add('unclickable');

            let flagHTML = product.flag ? `<span class="product-flag">${product.flag}</span>` : '';
            let imgHTML = (product.image && product.image !== '') ? `<img src="${product.image}" alt="${product.name}">` : '';

            card.innerHTML = `
                ${imgHTML}
                <div class="info">
                    <div class="name">${product.name} ${flagHTML}</div>
                    <div class="farm">${product.farm}</div> 
                    <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
                </div>
            `;
            productListContainer.appendChild(card);
        });
    }

    function renderProductList(categoryId, farmId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category) return;
        const farm = category.farms.find(f => f.id === farmId);
        if (!farm) return;
        const filteredProducts = farm.products.filter(product => {
            const searchMatch = product.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
            const farmMatch = currentFilters.farm === 'all' || product.farm === currentFilters.farm;
            return searchMatch && farmMatch;
        });

        productListContainer.innerHTML = '';
        if (filteredProducts.length === 0) return;

        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card product-item-card';
            card.dataset.productId = product.id;

            if (product.type === 'Pack') card.classList.add('full-width');
            if (product.clickable === false) card.classList.add('unclickable');

            let flagHTML = product.flag ? `<span class="product-flag">${product.flag}</span>` : '';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="info">
                    <div class="name">${product.name} ${flagHTML}</div>
                    <div class="farm">${product.farm}</div>
                    <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
                </div>
            `;
            productListContainer.appendChild(card);
        });
    }

    function renderProductPage(productId) {
        const product = getProductById(productId);
        if (!product) return;
    
        document.getElementById('product-page-title').innerText = product.name;
        const detailsContainer = document.getElementById('product-details-content');
    
        let galleryHTML = '';
        let hasMedia = false;
        let mediaItems = [];
        if (product.images && product.images.length > 0) mediaItems = product.images;
        else if (product.image && product.image !== '') mediaItems = [product.image];
    
        if (mediaItems.length > 0) {
            hasMedia = true;
            galleryHTML += mediaItems.map(imgSrc => `<div class="gallery-item"><img src="${imgSrc}" alt="${product.name}"></div>`).join('');
        }
    
        if (product.videos && product.videos.length > 0) {
            hasMedia = true;
            product.videos.forEach(videoSrc => {
                galleryHTML += `<div class="gallery-item"><video controls playsinline poster="${product.image || ''}"><source src="${videoSrc}" type="video/mp4"></video></div>`;
            });
        } else if (product.video && product.video !== '') {
            hasMedia = true;
            galleryHTML += `<div class="gallery-item"><video controls playsinline poster="${product.image || ''}"><source src="${product.video}" type="video/mp4"></video></div>`;
        }
    
        let packLinksHTML = '';
        if (product.packContents && product.packContents.length > 0) {
            const links = product.packContents.map(item => `
                <div class="pack-item-btn" data-target-id="${item.targetId}">
                    <span>${item.name}</span><span class="pack-arrow">›</span>
                </div>
            `).join('');
            packLinksHTML = `<div class="pack-content-container"><div style="color:#8e8e93; font-size:0.9rem; margin-bottom:5px;">📦 CONTENU DU PACK :</div>${links}</div>`;
        }
        
        let variantsHTML = '';
        if (product.jars && product.jars.length > 0) {
            const buttonsHTML = product.jars.map((jar, index) => `
                <div class="variant-btn ${index === 0 ? 'active ' + jar.colorClass : ''}" data-name="${jar.name} ${jar.emoji}" data-color-class="${jar.colorClass}">
                    <span class="emoji">${jar.emoji}</span><span class="text">${jar.name}</span>
                </div>
            `).join('');
            variantsHTML = `<div class="variant-selector-container"><div class="variant-title">${product.variantTitle || 'Choisir une option :'}</div><div class="variant-grid">${buttonsHTML}</div></div>`;
        } else if (product.options && product.options.length > 0) {
            variantsHTML = `<div class="product-options-container" style="margin-bottom: 15px;"><label style="color: #8e8e93; font-size: 0.9rem; margin-bottom: 5px; display:block;">Choisir :</label><select id="product-variant-select" style="width: 100%; padding: 12px; border-radius: 8px; background: #2c2c2e; color: white; border: 1px solid #3a3a3c;">${product.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}</select></div>`;
        }
    
        let tarifsHTML = product.tarifs.map(tarif => `
            <div class="tarif-item">
                <div class="box-tarif">
                    <div class="tarif-wieght">${tarif.weight}</div>
                    <div class="tarif-price">${tarif.price.toFixed(2)}€</div>
                </div>
                <button class="add-to-cart-btn" data-product-id="${product.id}" data-weight="${tarif.weight}" data-price="${tarif.price}">
                    <svg width="20" height="20"><use href="#icon-cart"/></svg>
                </button>
            </div>
        `).join('');
    
        let descriptionHTML = product.description ? `<p class="product-description">${product.description.replace(/\n/g, '<br>')}</p>` : '';
        const oldVideo = document.querySelector('#page-product .product-video');
        if(oldVideo) oldVideo.style.display = 'none';
    
        detailsContainer.innerHTML = `
            ${hasMedia ? `<div class="product-gallery-wrapper">${galleryHTML}</div><div class="gallery-counter">Swipe ➡️</div>` : ''}
            <div class="name" style="margin-top: ${hasMedia ? '0' : '20px'}">${product.name}</div>
            <div class="farm">${product.farm}</div>
            ${packLinksHTML} ${descriptionHTML} ${variantsHTML}
            <h4 class="tarifs-title">💰 Tarifs disponibles :</h4>
            <div class="tarifs-grid-container">${tarifsHTML}</div>
        `;
    
        showPage('page-product');
    
        if (product.jars && product.jars.length > 0) {
            const variantBtns = document.querySelectorAll('.variant-btn');
            const cartBtns = document.querySelectorAll('.add-to-cart-btn');
            const updateCartButtonsColor = (colorClass) => {
                cartBtns.forEach(btn => {
                    btn.classList.remove('style-purple', 'style-red', 'style-green', 'style-yellow', 'style-orange', 'style-brown', 'style-passion', 'style-melon', 'style-gmo', 'style-lampo', 'style-tangier', 'style-grappe');
                    if (colorClass) btn.classList.add(colorClass);
                });
            };
            updateCartButtonsColor(product.jars[0].colorClass);
            variantBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    variantBtns.forEach(b => { b.classList.remove('active'); b.classList.remove(b.dataset.colorClass); });
                    this.classList.add('active'); this.classList.add(this.dataset.colorClass);
                    updateCartButtonsColor(this.dataset.colorClass);
                    if(window.Telegram.WebApp.HapticFeedback) window.Telegram.WebApp.HapticFeedback.selectionChanged();
                });
            });
        }
    }

    function renderCart() {
        const cartContainer = document.getElementById('cart-items-container');
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>Votre panier est vide.</p>';
            document.getElementById('cart-total-price').innerText = '0.00€';
            updateCartCount();
            return;
        }

        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ''}
                <div class="item-details">
                    <div class="name">${item.name}</div>
                    <div class="gram" >${item.weight} - ${item.unitPrice.toFixed(2)}€</div>
                    <div class="price">${item.totalPrice.toFixed(2)}€</div>
                </div>
                <div class="quantity-selector">
                    <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                </div>
            </div>
        `).join('');

        const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        document.getElementById('cart-total-price').innerText = `${total.toFixed(2)}€`;
        updateCartCount();
    }

    function renderConfirmation() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        let discount = 0;
        let discountableAmount = 0;

        if (appliedPromo) {
            const promo = validPromoCodes[appliedPromo];
            if (promo.appliesTo === 'eligible') {
                cart.forEach(item => {
                    const product = getProductById(item.productId);
                    if (product && product.promoEligible) discountableAmount += item.totalPrice;
                });
            } else {
                discountableAmount = subTotal;
            }
            if (promo.type === 'percent') discount = (discountableAmount * promo.value) / 100;
            else discount = promo.value;
        }
        if (discount > subTotal) discount = subTotal;
        const totalPrice = subTotal - discount;

        document.getElementById('confirmation-items-count').innerText = `${totalItems} article${totalItems > 1 ? 's' : ''}`;
        document.getElementById('confirmation-total-price').innerText = `${totalPrice.toFixed(2)}€`;

        const itemsList = document.getElementById('confirmation-items-list');
        itemsList.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ''}
                <div class="item-details">
                    <div>${index + 1}. ${item.name}</div>
                    <div>Quantité: ${item.quantity}x ${item.weight}</div>
                    <div>Prix unitaire: ${item.unitPrice.toFixed(2)}€</div>
                </div>
            </div>
        `).join('');

        const promoInputContainer = document.getElementById('promo-input-container');
        const promoAppliedContainer = document.getElementById('promo-applied-container');
        if (appliedPromo) {
            promoInputContainer.style.display = 'none';
            promoAppliedContainer.style.display = 'flex';
            document.getElementById('promo-applied-text').innerText = `Code "${appliedPromo}" appliqué !`;
        } else {
            promoInputContainer.style.display = 'flex';
            promoAppliedContainer.style.display = 'none';
            document.getElementById('promo-code-input').value = ''; 
        }

        document.querySelectorAll('.payment-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.method === paymentMethod);
        });

        const summaryContainer = document.getElementById('confirmation-summary');
        let summaryHTML = `<div class="summary-line"><span>Sous-total:</span><span>${subTotal.toFixed(2)}€</span></div>`;
        if (discount > 0) summaryHTML += `<div class="summary-line discount"><span>Réduction:</span><span>-${discount.toFixed(2)}€</span></div>`;
        summaryHTML += `<div class="summary-line total"><span>💰 Total final:</span><span>${totalPrice.toFixed(2)}€</span></div>`;
        summaryContainer.innerHTML = summaryHTML;

        const copyBtn = document.getElementById('copy-order-btn');
        const contactBtn = document.getElementById('confirm-order-button');
        if(copyBtn) copyBtn.style.display = 'none';
        if(contactBtn) {
            contactBtn.classList.remove('secondary-action-btn');
            contactBtn.classList.add('main-action-btn');      
            contactBtn.disabled = false;                      
            contactBtn.innerHTML = 'CONFIRMER SUR WHATSAPP 📞'; 
        }

        showPage('page-confirmation');
    }

    function renderContactPage() {
        const linksContainer = document.getElementById('contact-links-container');
        linksContainer.innerHTML = contactLinks.map(link => `
        <a href="${link.url}" class="contact-link ${link.className}" target="_blank">
            <span>${link.text}</span>
        </a>
        `).join('');
    }

    function updateCartCount() {
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountElements = document.querySelectorAll('.cart-count');
        cartCountElements.forEach(el => {
            el.innerText = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
    }

    function populateFilters() {
        const searchFilter = document.getElementById('search-filter');
        const qualityFilter = document.getElementById('quality-filter');
        const farmFilter = document.getElementById('farm-filter');

        const allNestedProducts = [];
        appData.forEach(category => {
            if (category.farms) category.farms.forEach(farm => allNestedProducts.push(...farm.products));
            else if (category.products) allNestedProducts.push(...category.products);
        });

        const categoryQualities = appData.map(c => c.quality).filter(Boolean); 
        const qualities = ['all', ...new Set(categoryQualities)];
        qualityFilter.innerHTML = qualities.map(q => `<option value="${q}">${q === 'all' ? 'SELECTION DU CHEF' : q}</option>`).join('');

        const productFarms = allNestedProducts.map(p => p.farm).filter(f => f); 
        const farms = ['all', ...new Set(productFarms)];
        farmFilter.innerHTML = farms.map(farm => `<option value="${farm}">${farm === 'all' ? '👨‍🌾  -  Toutes les farms' : farm}</option>`).join('');

        searchFilter.addEventListener('input', (e) => { currentFilters.searchTerm = e.target.value; renderHomePage(); });
        qualityFilter.addEventListener('change', (e) => { currentFilters.quality = e.target.value; renderHomePage(); });
        farmFilter.addEventListener('change', (e) => { currentFilters.farm = e.target.value; renderHomePage(); });
    }

    let notificationTimeout;
    function showNotification(message) {
        const notification = document.getElementById('notification-toast');
        if (!notification) return;
        clearTimeout(notificationTimeout);
        notification.classList.remove('show');
        void notification.offsetWidth;
        notification.innerText = message;
        notification.classList.add('show');
        notificationTimeout = setTimeout(() => { notification.classList.remove('show'); }, 3000);
    }

    function addToCart(productId, weight, price, variant = null) {
        const cartItemId = `${productId}-${weight}-${variant ? variant.replace(/\s+/g, '') : 'default'}`;
        const existingItem = cart.find(item => item.id === cartItemId);
        const product = getProductById(productId);
        const displayName = variant ? `${product.name} \n👉 ${variant}` : product.name;

        if (existingItem) {
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
        } else {
            cart.push({
                id: cartItemId, productId: productId, name: displayName, image: product.image,
                weight: weight, quantity: 1, unitPrice: price, totalPrice: price, variant: variant
            });
        }
        renderCart();
        tg.HapticFeedback.notificationOccurred('success');
        showNotification('✅ Produit ajouté au panier !');
    }

    function updateQuantity(cartItemId, action) {
        const item = cart.find(i => i.id === cartItemId);
        if (!item) return;
        if (action === 'increase') item.quantity++;
        else if (action === 'decrease') item.quantity--;

        if (item.quantity <= 0) cart = cart.filter(i => i.id !== cartItemId);
        else item.totalPrice = item.quantity * item.unitPrice;
        renderCart();
    }

    function formatOrderMessage() {
        let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        let discount = 0;
        let discountableAmount = 0;

        if (appliedPromo) {
            const promo = validPromoCodes[appliedPromo];
            if (promo.appliesTo === 'eligible') {
                cart.forEach(item => {
                    const product = getProductById(item.productId);
                    if (product && product.promoEligible) discountableAmount += item.totalPrice;
                });
            } else { discountableAmount = subTotal; }
            if (promo.type === 'percent') discount = (discountableAmount * promo.value) / 100;
            else discount = promo.value;
        }
        if (discount > subTotal) discount = subTotal;
        const totalPrice = subTotal - discount;

        let message = "*🛒 DÉTAIL DE LA COMMANDE:*\n\n";
        cart.forEach((item, index) => {
            let cleanName = item.name.replace(/\n/g, ' ').toUpperCase();
            message += `*${index + 1}. ${cleanName}*\n`;
            message += `• Quantité: ${item.quantity}x ${item.weight}\n`;
            message += `• Prix unitaire: ${item.unitPrice.toFixed(2)}€\n`;
            message += `• Total: ${item.totalPrice.toFixed(2)}€\n\n`;
        });

        if (discount > 0) {
            message += `Sous-total: ${subTotal.toFixed(2)}€\n`;
            message += `Réduction (${appliedPromo}): -${discount.toFixed(2)}€\n`;
            message += `\n*💰 TOTAL: ${totalPrice.toFixed(2)}€*\n`;
        } else {
            message += `*💰 TOTAL: ${totalPrice.toFixed(2)}€*\n`;
        }

        message += `\n📍 Livraison à convenir\n💳 Paiement: ${paymentMethod}`;
        return message;
    }

    function copyToClipboard(text) {
        if (navigator.clipboard) { 
            navigator.clipboard.writeText(text).then(() => {
                showNotification('✅ Commande copiée ! Colle-la dans le chat.');
                tg.HapticFeedback.notificationOccurred('success');
            }, (err) => { showNotification('❌ Erreur en copiant le message'); });
        } else { 
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed'; 
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                showNotification('✅ Commande copiée ! Colle-la dans le chat.');
                tg.HapticFeedback.notificationOccurred('success');
            } catch (err) { showNotification('❌ Erreur en copiant le message'); }
            document.body.removeChild(textArea);
        }
    }

    const btnChannel = document.getElementById('btn-open-channel');
    if (btnChannel) {
        btnChannel.addEventListener('click', function() {
            const channelLink = "https://t.me/ton_canal_didier"; 
            tg.openLink(channelLink); 
        });
    }

    window.openImage = function(imgElement) {
        const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('img-in-modal');
        modal.style.display = "flex";
        modalImg.src = imgElement.src;
        tg.BackButton.show(); 
        modal.onclick = function() { modal.style.display = "none"; tg.BackButton.hide(); }
        tg.onEvent('backButtonClicked', function() { modal.style.display = "none"; tg.BackButton.hide(); });
    };

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const pageId = item.dataset.page;
            if (!pageId) return;
            if (pageId === 'page-contact') renderContactPage();
            if (pageId === 'page-home') {
                currentView = 'categories';
                currentCategoryId = null;
                currentFilters.searchTerm = ''; currentFilters.quality = 'all'; currentFilters.farm = 'all';
                document.getElementById('search-filter').value = '';
                document.getElementById('quality-filter').value = 'all';
                document.getElementById('farm-filter').value = 'all';
                renderHomePage();
            }
            showPage(pageId);
        });
    });

    document.body.addEventListener('click', async function (e) {
        const target = e.target;

        if (target.closest('#copy-order-btn')) {
            let message = formatOrderMessage();
            message = message.replace(/\*/g, '');
            copyToClipboard(message);
            const copyBtn = document.getElementById('copy-order-btn');
            const contactBtn = document.getElementById('confirm-order-button');
            copyBtn.classList.remove('main-action-btn'); copyBtn.classList.add('secondary-action-btn');
            contactBtn.classList.remove('secondary-action-btn'); contactBtn.classList.add('main-action-btn');
            contactBtn.disabled = false; 
            return; 
        }

        const accordionHeader = target.closest('.accordion-header');
        if (accordionHeader) {
            const accordionItem = accordionHeader.parentElement;
            document.querySelectorAll('#page-info .accordion-item.active').forEach(item => {
                if (item !== accordionItem) item.classList.remove('active');
            });
            accordionItem.classList.toggle('active');
            return; 
        }

        const categoryCard = target.closest('.category-card');
        if (categoryCard) {
            const category = appData.find(c => c.id === categoryCard.dataset.categoryId);
            if (category.products) {
                currentView = 'simple_products'; 
                currentCategoryId = category.id;
            } else if (category.farms) {
                currentView = 'farms';
                currentCategoryId = category.id;
            } else return; 

            currentFilters.searchTerm = ''; document.getElementById('search-filter').value = '';
            renderHomePage(); return;
        }

        const farmBtn = target.closest('.farm-list-btn'); 
        if (farmBtn) {
            if (farmBtn.classList.contains('unclickable')) return;
            currentView = 'products'; currentFarmId = farmBtn.dataset.farmId;
            currentFilters.searchTerm = ''; document.getElementById('search-filter').value = '';
            renderHomePage(); return;
        }

        const productCard = target.closest('.product-item-card');
        if (productCard) {
            if (productCard.classList.contains('unclickable')) return;
            renderProductPage(productCard.dataset.productId); return;
        }

        if (target.closest('.back-to-categories-btn')) {
            currentView = 'categories'; currentCategoryId = null;
            currentFilters.searchTerm = ''; document.getElementById('search-filter').value = '';
            renderHomePage(); return;
        }

        if (target.closest('.back-to-farms-btn')) {
            currentView = 'farms'; currentFarmId = null;
            currentFilters.searchTerm = ''; document.getElementById('search-filter').value = '';
            renderHomePage(); return;
        }

        if (target.closest('#apply-promo-btn')) {
            const input = document.getElementById('promo-code-input');
            const code = input.value.toUpperCase(); 
            if (validPromoCodes[code]) {
                appliedPromo = code;
                tg.HapticFeedback.notificationOccurred('success'); showNotification('✅ Code promo appliqué !');
            } else {
                appliedPromo = null; 
                tg.HapticFeedback.notificationOccurred('error'); showNotification('❌ Code promo invalide.');
            }
            renderConfirmation(); 
        }

        if (target.closest('#remove-promo-btn')) {
            appliedPromo = null; showNotification('Code promo retiré.'); renderConfirmation(); 
        }

        if (target.closest('.payment-btn')) {
            paymentMethod = target.closest('.payment-btn').dataset.method;
            document.querySelectorAll('.payment-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.method === paymentMethod);
            });
        }

        if (target.closest('.add-to-cart-btn')) {
            const btn = target.closest('.add-to-cart-btn');
            let selectedVariant = null;
            const activeVariantBtn = document.querySelector('.variant-btn.active');
            if (activeVariantBtn) selectedVariant = activeVariantBtn.dataset.name;
            else {
                const variantSelect = document.getElementById('product-variant-select');
                if (variantSelect) selectedVariant = variantSelect.value;
            }
            addToCart(btn.dataset.productId, btn.dataset.weight, parseFloat(btn.dataset.price), selectedVariant);
        }

        if (target.closest('.quantity-btn')) {
            const btn = target.closest('.quantity-btn'); updateQuantity(btn.dataset.id, btn.dataset.action);
        }

        if (target.closest('.close-button') || target.closest('#cart-continue-shopping') || target.closest('.back-button')) {
            showPage('page-home');
        }

        if (target.closest('#home-cart-button')) { renderCart(); showPage('page-cart'); }
        if (target.closest('#checkout-button')) renderConfirmation();
        if (target.closest('#confirmation-modify-order')) showPage('page-cart');

        if (target.closest('.pack-item-btn')) {
            const btn = target.closest('.pack-item-btn'); renderProductPage(btn.dataset.targetId); return;
        }

        if (target.closest('#confirm-order-button')) {
            const myPhoneNumber = '33778549047'; // <-- TON NUMÉRO ICI
            let message = formatOrderMessage();
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${myPhoneNumber}?text=${encodedMessage}`;
            tg.openLink(whatsappUrl);
        }
    });

    function init() {
        setTimeout(() => {
            populateFilters(); renderHomePage(); updateCartCount(); showPage('page-home');
        }, 1500);
    }

    init();
});