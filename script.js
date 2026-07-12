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



    // --- CONFIGURATION DES LIENS DE CONTACT ---
    const contactLinks = [
        {
            name: 'WHATSAPP 📞',
            url: 'https://wa.me/33745907270',
            id: 'whatsapp',
            className: 'whatsapp', // Il faudra peut-être ajouter ce CSS (Jaune)
            text: "WHATSAPP 📞"
        },
        {
            name: 'CANAL TÉLÉGRAM 💙',
            url: 'https://t.me/+qHFh_JeCp405MTc0',
            id: 'telegram-main',
            className: 'telegram', // Garde le style Bleu Telegram
            text: "CANAL TÉLÉGRAM 💙"
        },
        {
            name: 'POTATO / MENU 🥔',
            url: 'https://dympt.org/legacyog75',
            id: 'potato-main',
            className: 'potato', // Garde le style Marron/Doré Potato
            text: "CANAL POTATO 🥔"
        },
        {
            name: 'INSTAGRAM 📸',
            url: 'https://www.instagram.com/og_legacy75?igsh=bG5nc3duNWRxd3Ey&utm_source=qr',
            id: 'instagram',
            className: 'instagram', // Style dégradé Insta
            text: "INSTAGRAM 📸"
        }
      

    ];

    // --- DONNÉES DE L'APPLICATION (PISTACHIOBOT) ---
    const appData = [
         // ============================================================
        // CATEGORIE 1 : HOLLANDE 🌿
        // ============================================================
        {
            id: 'WeedH',
            name: 'WEED HOLLANDE 🇳🇱🌷',
            type: 'WeedH',
            quality: 'WEED HOLLANDE 🇳🇱🌷',
            image: 'CategHo.jpg', // Ton image de catégorie Weed

            products: [
                {
                    id: '🧠🍀AMNESIA CORE CUT 🍀🧠',
                    flag: '🇳🇱',
                    name: '🧠🍀 AMNESIA CORE CUT 🍀🧠',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductCore.png', 
                    video: 'VideoCore.mp4',
                    description: '💎🔥 Considérée par de nombreux connaisseurs comme l’une des meilleures expressions de l’Amnesia, la Amnesia Core Cut est une sélection d’élite recherchée pour son profil terpénique puissant et son effet cérébral particulièrement intense. 🔥💎\n\n ✨ Les effets\n\n 🚀 Montée rapide et énergique\n 😄 Euphorie marquée\n 🧠 Stimulation mentale puissante\n 🎨 Créativité et concentration accrues\n 🗣️ Effet social apprécié des amateurs de sativas\n\n 👃 Les arômes\n\n 🍊 Agrumes frais et zestés\n 🌿 Notes Haze classiques\n 🌶️ Légères touches épicées et encensées\n\n 🌱 Pourquoi elle est si recherchée ? \n\n • Sélection réputée pour sa stabilité \n • Profil aromatique particulièrement intense \n • Forte production de résine ✨ \n • Expression fidèle de l’esprit Amnesia « old school » \n • Très appréciée des amateurs de Haze européennes\n\n 🏆 Pour les connaisseurs\n La Core Cut est souvent citée parmi les meilleures coupes d’Amnesia grâce à son équilibre entre puissance, saveurs citronnées explosives et effet mental clair. Beaucoup la considèrent comme une référence lorsqu’on parle de vraie Amnesia de haut niveau.\n\n ⭐ En résumé :\n Une Amnesia premium, ultra citronnée, résineuse et cérébrale, recherchée par les amateurs de Haze authentiques et les passionnés de génétiques européennes. 🔥⚡🧠💎🌿',                    
                    tarifs: [
                        { weight: '10g', price: 70.00 },
                    ]
                }, 
              
            ]
        },
           {
            id: 'Jaune USA',
            name: 'Jaune USA 🇺🇸',
            type: 'Jaune USA',
            quality: 'Jaune USA 🇺🇸',
            image: 'CategJauneUsa.png', // Ton image de catégorie Weed

            products: [
                  /* {
                    id: '🤯🚀 PERMANENT MARKER',
                    flag: '🇺🇸',
                    name: '🤯🚀 PERMANENT MARKER',
                    farm: '🌾 WEST COAST MOUSSE',
                    promoEligible: true,
                    type: 'JauneUsa',
                    image: 'ProductPerm.jpg', 
                    video:'VideoPerm.mp4',
                    description: '🔥 Une mousse réputée pour son caractère unique et sa puissance. Son profil est marqué par des notes de gaz, de crème et de marqueur, ce qui lui donne une identité immédiatement reconnaissable.\n\n 💨 Effets recherchés :\n 😌 Détente profonde\n 😊 Sensation de bien-être\n 🧠 Esprit apaisé\n 🛋️ Relaxation physique marquée\n 🌙 Peut devenir très relaxante en fin de session\n\n ⭐ Pourquoi les amateurs l’apprécient ?\n ✔️ Arômes puissants et originaux\n ✔️ Goût qui reste longtemps en bouche\n ✔️ Effets durables\n ✔️ Idéale pour se poser et profiter du moment\n\n 🇺🇸💎 Pour les vrais connaisseurs de mousse US, la Permanent Marker est souvent considérée comme une référence moderne grâce à son profil terpénique atypique, puissant et facilement identifiable. Une variété qui ne passe jamais inaperçue et qui a su se faire une place parmi les génétiques les plus appréciées de ces dernières années.\n 🏆 En bref : Une mousse de caractère, riche en saveurs et en sensations, pensée pour ceux qui recherchent une expérience authentique et typiquement West Coast. 🌊🔥🧱💨',
                    tarifs: [
                        { weight: '10G', price: 60.00 },
                        { weight: '50G', price: 200.00 },
                        { weight: '100G', price: 350.00 },
                    ]
                },*/
               
                {
                    id: 'Candy Crush 🍭',
                    flag: '🇲🇦',
                    name: 'Candy Crush 🍭',
                    farm: 'CALI DRY SIFT PRENIUM 🥵🍯🇺🇸',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductUsa3.jpg',
                    video:'VideoCCH.mp4',
                      description: '🇺🇸 DRY SIFT PREMIUM • UPGRADE AROMATIQUE & PUISSANCE 🇺🇸 \n\n Le Mousseux Made in Los Angeles monte en gamme. Ce nouveau batch bénéficie d\'une technique "Dry Sift" optimisée : le goût Cali est beaucoup plus prononcé et la défonce frappe nettement plus fort que l\'ancienne version. \n\n  🍭 Candy Land : Euphorie percutante, profil ultra-sucré candy. \n\n 🍯 Texture : Jaune mousseux d’exception qui s\'effrite tout seul. Une frappe exclusive introuvable ailleurs. 🥵😱🍫',
                      tarifs: [
                        { weight: '10G', price: 60.00 },
                        { weight: '20G', price: 100.00 },
                        { weight: '50G', price: 220.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                },
                    {
                    id: 'Gelato 🎂',
                    flag: '🇲🇦',
                    name: 'Gelato 🎂',
                    farm: 'CALI DRY SIFT PRENIUM 🥵🍯🇺🇸',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductUsa1.jpg',
                    video:'VideoGel.mp4',
                      description: '🇺🇸 DRY SIFT PREMIUM • UPGRADE AROMATIQUE & PUISSANCE 🇺🇸 \n\n Le Mousseux Made in Los Angeles monte en gamme. Ce nouveau batch bénéficie d\'une technique "Dry Sift" optimisée : le goût Cali est beaucoup plus prononcé et la défonce frappe nettement plus fort que l\'ancienne version. \n\n 🎂 Gelato : Détente corporelle totale, goût fruité et gazeux.\n\n 🍯 Texture : Jaune mousseux d’exception qui s\'effrite tout seul. Une frappe exclusive introuvable ailleurs. 🥵😱🍫',
                      tarifs: [
                        { weight: '10G', price: 60.00 },
                        { weight: '20G', price: 100.00 },
                        { weight: '50G', price: 220.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                },
                /*  {
                    id: 'PermanentMarker 🖍️',
                    flag: '🇲🇦',
                    name: 'PermanentMarker 🖍️',
                    farm: 'CALI DRY SIFT PRENIUM 🥵🍯🇺🇸',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductUsaP.jpg',
                    video:'VideoPerm4.mp4',
                      description: '🇺🇸 DRY SIFT PREMIUM • UPGRADE AROMATIQUE & PUISSANCE 🇺🇸 \n\n Le Mousseux Made in Los Angeles monte en gamme. Ce nouveau batch bénéficie d\'une technique "Dry Sift" optimisée : le goût Cali est beaucoup plus prononcé et la défonce frappe nettement plus fort que l\'ancienne version. \n\n 🖍️ PermanentMarker : Sédation profonde, notes d\'aromes brut.\n\n 🍯 Texture : Jaune mousseux d’exception qui s\'effrite tout seul. Une frappe exclusive introuvable ailleurs. 🥵😱🍫',
                      tarifs: [
                        { weight: '10G', price: 60.00 },
                        { weight: '20G', price: 100.00 },
                        { weight: '50G', price: 220.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                }, */
              /*   {
                    id: 'Jaune mousseux 🥵',
                    flag: '🇲🇦',
                    name: 'Jaune mousseux 🥵',
                    farm: 'CALI DRY SIFT PRENIUM 🥵🍯🇺🇸',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductUsa3.jpg',
                    // images: ['ProductUsa1.jpg','ProductUsa3.jpg','ProductUsa4.jpg','ProductUsa5.jpg','ProductUsa6.jpg','ProductUsa7.jpg'],
                     images: ['ProductUsa3.jpg','ProductUsa4.jpg','ProductUsaP.jpg'],
                      // 👇 NOUVELLE STRUCTURE
                      variantTitle: 'Saveurs 🧁 :',
                      jars: [
                        { name: 'PermanentMarker', emoji: '🖍️', colorClass: 'style-cherry' },
                         { name: 'Candy Crush', emoji: '🍭', colorClass: 'style-purple' }, 
                        { name: 'Gelato', emoji: '🎂', colorClass: 'style-orange' }, 
                       ],

                      description: '🇺🇸 DRY SIFT PREMIUM • UPGRADE AROMATIQUE & PUISSANCE 🇺🇸 \n\n Le Mousseux Made in Los Angeles monte en gamme. Ce nouveau batch bénéficie d\'une technique "Dry Sift" optimisée : le goût Cali est beaucoup plus prononcé et la défonce frappe nettement plus fort que l\'ancienne version. \n\n 🖍️ PermanentMarker : Sédation profonde, notes d\'aromes brut.\n 🍭 Candy Land : Euphorie percutante, profil ultra-sucré candy.\n 🎂 Gelato : Détente corporelle totale, goût fruité et gazeux.\n\n 🍯 Texture : Jaune mousseux d’exception qui s\'effrite tout seul. Une frappe exclusive introuvable ailleurs. 🥵😱🍫',
                      tarifs: [
                        { weight: '10G', price: 60.00 },
                        { weight: '20G', price: 100.00 },
                        { weight: '50G', price: 220.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                }, */
                
                  /* {
                    id: 'BLUE LOBSTER 🦞💙',
                    flag: '🇲🇦',
                    name: 'BLUE LOBSTER 🦞💙',
                    farm: '🌾 WEST COAST MOUSSE',
                    promoEligible: true,
                    type: 'JauneUsa',
                    image: 'ProductBlueL.png', 
                    video: 'VideoBlueL.mov',
                    description: 'Une variété lourde qui mélange parfaitement le côté fruité sucré et le gaz puissant typique des grosses génétiques US 🇺🇸🔥\n Le Blue Lobster en jaune mousseux envoie un profil très riche avec une fumée épaisse et ultra savoureuse 😮‍💨💨\n\n 👃 Profil aromatique :\n Dès l’ouverture, t’as une grosse odeur berry sucrée avec des notes crémeuses et un fond bien gassy ⛽️🫐🍬\n Le tout accompagné d’une petite touche marine/funky typique du Blue Lobster qui lui donne une vraie identité premium.\n\n 👅 Goût :\n En bouche c’est hyper gras et intense 🔥\n Tu sens les fruits bleus sucrés, une crème légère et surtout une finition diesel/gaz qui reste collée au palais longtemps 😵‍💫💨\n Très complexe et très propre à la combustion.\n\n 💥 Effets :\n Défonce lourde et euphorique au début avant de laisser place à une relaxation profonde 🧠💥\n Parfait pour les amateurs de produits qui cognent vraiment fort tout en gardant un goût incroyable.\n⭐️ Texture mousseuse premium\n⭐️ Très gros terps US\n⭐️ Fumée épaisse et savoureuse\n⭐️ Effet puissant et longue durée 🦞🔥',
                    tarifs: [
                        { weight: '10G', price: 60.00 },
                        { weight: '20G', price: 100.00 },
                        { weight: '50G', price: 220.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                },
                {
                    id: 'ORANGE CREAMPOP 🔥💛',
                    flag: '🇲🇦',
                    name: 'ORANGE CREAMPOP 🔥💛',
                    farm: '🌾 WEST COAST MOUSSE',
                    promoEligible: true,
                    type: 'JauneUsa',
                    image: 'ProductOre.png', 
                    video: 'VideoOre.mov',
                    description: 'Un jaune mousseux ultra gourmand qui frappe direct dès l’ouverture du pochon 🍊💨\n La strain Orange Creampop ramène un profil ultra crémeux et fruité, avec une vraie identité cali premium 🇺🇸✨\n\n 👃 Profil aromatique :\n Une grosse odeur d’orange sucrée type bonbon crémeux, mélangée à des notes vanilla cream et une légère touche gazeuse bien propre 🍦🍊⛽️\n Le mousseux est gras, collant et hyper parfumé.\n\n 👅 Goût :\n En bouche c’est une vraie dinguerie 😮‍💨\n Tu retrouves un mélange parfait entre agrumes sucrés, crème vanillée et une petite finition légèrement candy qui reste longtemps sur le palais 🍬🍊\n Une fumée douce, lourde et ultra savoureuse.\n\n 💥 Effets :\n Bonne grosse défonce relaxante mais propre 🧠🔥\n Ça monte progressivement avec un effet lourd sur le corps tout en gardant un mood chill et agréable. Parfait pour se poser tranquillement le soir 😴💨\n ⭐️ Texture mousseuse\n ⭐️ Goût ultra prononcé\n ⭐️ Cali vibes\n ⭐️ Très gros niveau de qualité',
                    tarifs: [
                        { weight: '10G', price: 60.00 },
                        { weight: '20G', price: 100.00 },
                        { weight: '50G', price: 220.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                },*/
            ]
        }, 
        {
            id: 'STATIC',
            name: 'STATIC 🇲🇦',
            type: 'DoubleStatic',
            quality: 'STATIC 🇲🇦',
            image: 'CategDouble.png', // Ton image de catégorie Weed

            products: [

                {
                    id: 'STRAWBERRY PINK',
                    flag: '🇺🇸',
                    name: '🍓 STRAWBERRY PINK 🌷', 
                    farm: '🌸 The Pink Farms 🌸',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductSTP.jpg',
                    video: 'VideoSTP.mp4',
                    description: '⚡️🌸 STATIC SIFT PLASMA 🌸⚡️ \n\n Une exclusivité ultra premium signée 🌸 The Pink Farms 🌸. La Strawberry Pink est une extraction static d\'élite qui repousse les limites des profils fruités et floraux. Une véritable masterclass pour les palais les plus exigeants 🔥\n\n 👃 Aromatique :\n Dès l’ouverture, une explosion de fraise bien mûre et sucrée 🍓, enveloppée par des notes florales délicates 🌷. En arrière-plan, on retrouve un fond candy crémeux et une légère touche gazeuse ⛽️ qui vient rappeler l\'ADN US de cette génétique exceptionnelle.\n\n 👅 Goût :\n En bouche, c’est une expérience luxueuse : attaque gourmande sur la fraise bonbon, suivie d\'une rondeur lactée et florale qui tapisse le palais. La texture du static offre une combustion parfaite et une fumée épaisse, douce et ultra propre ☁️✨.\n\n 💨 Effets :\n Montée rapide avec un high très joyeux et euphorique 🚀. L\'esprit reste clair et créatif tandis qu\'une relaxation physique profonde s\'installe progressivement 😌. Idéal pour chiller avec une vibe ultra positive.\n\n 🏆 Le verdict :\n Un static sift full terpènes, à la texture sableuse et fondante. The Pink Farms livre ici un produit d\'une pureté maximale, alliant douceur extrême et vraie frappe de connaisseur 💎🍓.',
                    tarifs: [
                        { weight: '3G', price: 50.00 },
                        { weight: '10G', price: 140.00},
                        { weight: '25G', price: 250.00 },
                        { weight: '50G', price: 450.00 },
                    ]
                },
                 {
                    id: 'HONEY (BANANAS x SPRITZER) 🍌🍯',
                    flag: '🇺🇸',
                    name: 'HONEY (BANANAS x SPRITZER) 🍌🍯', 
                    farm: '🌟 By Secret House Smoke Farm 🌟',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductHBS.jpg',
                    video: 'VideoHBS.mp4',
                    description: '⚡🍯 STATIC SIFT PLASMA 70-130u 🍯⚡  \n\n 💎🔥 Un static sift premium sélectionné sur la tranche 70-130 microns, réputée pour offrir un excellent équilibre entre pureté, richesse aromatique et puissance. Cette extraction met en avant des trichomes soigneusement isolés afin de préserver un maximum de terpènes et de saveurs.  \n\n ✨ Génétique\n 🧬 Honey Bananas x Spritzer\n Une combinaison qui marie le caractère sucré et crémeux de Honey Bananas avec le profil frais et pétillant de Spritzer, donnant naissance à un hash moderne particulièrement expressif.\n\n 👃 Profil aromatique\n\n 🍯 Miel doux et gourmand\n 🍌 Banane mûre\n 🍬 Notes crémeuses et sucrées\n 🍋 Légère touche d’agrumes pétillante\n\n 😮‍💨 Effets\n\n ⚡ Euphorie rapide et agréable\n 🧠 Bien-être mental et humeur positive\n 😌 Relaxation corporelle progressive\n 🎵 Idéal pour une session détente, musique ou fin de journée\n\n 🎯 Pour les connaisseurs\n 🔥 Le calibre 70-130u est souvent recherché pour sa capacité à conserver une belle complexité aromatique tout en offrant une excellente qualité de résine.  \n 💎 Secret House Smoke Farm propose ici un plasma gourmand et très parfumé, où les notes de miel et de banane dominent la dégustation. Une pièce qui séduira les amateurs de hash moderne à la recherche d’un profil riche, doux et particulièrement savoureux. 🍯🍌✨',
                    tarifs: [
                        { weight: '3G', price: 50.00 },
                        { weight: '10G', price: 140.00},
                        { weight: '25G', price: 250.00 },
                        { weight: '50G', price: 450.00 },
                    ]
                },
                {
                    id: '⚡🍇❄️ FORBIDDEN',
                    flag: '🇲🇦',
                    name: '⚡🍇❄️ FORBIDDEN', 
                    farm: '🎻 MOZART FARM',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductForr.jpg',
                    video: 'VideoForr.mp4',
                    description: '⚡🍇❄️ PLASMA STATIC ❄️🍇⚡ \n\n 💎 Type d’extraction\n Static Sift hautement purifié.\n Forte concentration en trichomes.\n Très peu de matière végétale résiduelle.\n Résine destinée aux amateurs de hash moderne premium.\n\n 🍇🍬 Profil aromatique\n Notes de fruits noirs et fruits rouges.\n Touches sucrées rappelant le bonbon et le raisin.\n Fond crémeux avec une légère pointe gassy.\n Odeur puissante et complexe dès l’ouverture.\n\n 🤤 Texture\n Souple et grasse.\n Aspect brillant et résineux.\n Se travaille facilement à température ambiante.\n Fusion lente et propre.\n\n 💨 Effets généralement recherchés\n Montée euphorique et relaxante.\n Sensation de bien-être assez rapide.\n Relaxation musculaire progressive.\n Effet équilibré entre détente mentale et physique.\n\n 🔥 Pourquoi les connaisseurs l’apprécient ?\n Terpènes très présents.\n Extraction particulièrement propre.\n Saveurs persistantes.\n Excellent compromis entre puissance et plaisir gustatif.\n\n ⚡💎 PLASMA STATIC FORBIDDEN – MOZART FARM 💎⚡\n ✨ Une résine moderne qui séduit par sa richesse aromatique et sa pureté. Son profil mêlant fruits noirs, notes sucrées et fond crémeux en fait un hash particulièrement apprécié des amateurs de Static recherchant une expérience terpénique intense. 🤤🍇❄️\n\n 👑 Destiné aux vrais connaisseurs de résines premium qui privilégient avant tout la qualité d’extraction, les saveurs et la richesse des terpènes. 👑🔥🍇',
                    tarifs: [
                        { weight: '5G', price: 80.00 },
                        { weight: '10G', price: 150.00},
                        { weight: '25G', price: 320.00 },
                    ]
                },
                {
                    id: '🍬🍓❄️ CANDY FRUIT',
                    flag: '🇲🇦',
                    name: '🍬🍓❄️ CANDY FRUIT', 
                    farm: '🎻 MOZART FARM',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductCF.jpg',
                    video: 'VideoCF.mp4',
                    description: '🍬🍓❄️ DOUBLE STATIC ❄️🍓🍬 \n\n Le Double Static Candy Fruit de Mozart Farm semble être une résine orientée sur un profil très fruité et sucré, dans l’esprit des variétés modernes inspirées des génétiques Candy, Runtz, Zkittlez ou Fruit Cocktail\n\n ✨ Ce qui le distingue :\n Double purification statique pour obtenir un hash très propre.\n Forte concentration en têtes de trichomes.\n Excellent niveau de préservation des terpènes.\n Résine destinée aux amateurs de qualité premium.  \n\n 🍭 Profil aromatique\n Bonbon fruité très prononcé.\n Notes de fruits rouges, fruits exotiques et agrumes sucrés.\n Fond crémeux rappelant parfois certaines génétiques type Runtz ou Candy.\n Odeur puissante dès l’ouverture.  \n\n 🤤 Texture\n Souple et grasse.\n Très malléable à température ambiante.\n Aspect brillant avec une belle richesse en résine.\n Fond généralement mieux qu’un dry sift classique.  \n\n 💨 Effets recherchés\n Euphorie légère et agréable au départ.\n Sensation de bien-être et de détente.\n Relaxation corporelle progressive.\n Effet souvent décrit comme équilibré entre plaisir gustatif et puissance.  \n\n 🔥 Pourquoi les connaisseurs l’apprécient ?\n aveurs très marquées.\n Longueur en bouche importante.\n Extraction particulièrement propre.\n Excellent compromis entre gourmandise et puissance.  \n\n 🍬💎 DOUBLE STATIC CANDY FRUIT – MOZART FARM 💎🍬\n ✨ Résine premium aux terpènes ultra gourmands, dominée par des notes de bonbons fruités et de fruits mûrs. Grâce à son extraction Double Static, elle offre une texture fondante, une grande pureté et une expression aromatique intense qui séduit particulièrement les amateurs de hash moderne haut de gamme. ❄️🤤🔥\n\n 🍓🍭 Un hash pensé pour les vrais connaisseurs qui recherchent avant tout le goût, les terpènes et une qualité d’extraction irréprochable. 🍭🍓',
                    tarifs: [
                        { weight: '5G', price: 90.00 },
                        { weight: '10G', price: 160.00},
                        { weight: '25G', price: 380.00 },
                        { weight: '50G', price: 800.00 },
                    ]
                },
                {
                    id: '🍉❄️ WATERMELON',
                    flag: '🇲🇦',
                    name: '🍉❄️ WATERMELON', 
                    farm: '🎻 MOZART FARM',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductMel1.jpg',
                    video: 'VideoMel.mp4',
                    description: '🍉❄️ DOUBLE STATIC ❄️🍉 \n\n 💎 Type d’extraction : Double Static Sift\n Le « Double Static » désigne une double purification des trichomes par électricité statique afin d’éliminer un maximum d’impuretés végétales. Le résultat est généralement plus pur, plus fondant et plus riche en terpènes qu’un hash classique.  \n\n 🍉 Profil aromatique\n Notes sucrées rappelant la pastèque mûre.\n Fond légèrement crémeux et terreux typique des résines premium.\n Odeur très expressive à froid, avec une belle intensité terpénique.  \n\n 🤤 Texture\n Souple et grasse.\n Facile à travailler à température ambiante.\n Tendance à devenir plus collante lorsqu’elle est conservée dans de bonnes conditions.  \n\n ✨ Effets généralement recherchés\n Sensation de détente progressive.\n Effet mental agréable sans être trop lourd au départ.\n Relaxation corporelle marquée en fin d’expérience.\n Souvent apprécié pour les moments calmes en soirée.  \n\n 🔥 Pourquoi les connaisseurs l’apprécient ?\n Très bonne conservation des terpènes.\n Pureté élevée grâce au double tri statique.\n Saveurs plus nettes et plus persistantes qu’une mousse ou un dry classique.\n Format recherché par les amateurs de résines premium modernes.  \n\n 🫒🍉💎 Le Double Static Watermelon de Mozart Farm s’adresse surtout aux amateurs de hash premium qui recherchent une résine propre, fondante et extrêmement parfumée, avec un profil sucré et frais rappelant la pastèque. 💎🍉🫒',
                    tarifs: [
                        { weight: '5G', price: 90.00 },
                        { weight: '10G', price: 160.00},
                        { weight: '25G', price: 380.00 },
                        { weight: '50G', price: 800.00 },
                    ]
                },
             /*    {
                    id: 'HONEY (BANANAS x SPRITZER) 🍌🍯',
                    flag: '🇺🇸',
                    name: 'HONEY (BANANAS x SPRITZER) 🍌🍯', 
                    farm: '🌟 By Secret House Smoke Farm 🌟',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductHBS.png',
                    video: 'VideoHBS.mov',
                    description: '⚡🍯 STATIC SIFT PLASMA 70-130u 🍯⚡  \n\n 💎🔥 Un static sift premium sélectionné sur la tranche 70-130 microns, réputée pour offrir un excellent équilibre entre pureté, richesse aromatique et puissance. Cette extraction met en avant des trichomes soigneusement isolés afin de préserver un maximum de terpènes et de saveurs.  \n\n ✨ Génétique\n 🧬 Honey Bananas x Spritzer\n Une combinaison qui marie le caractère sucré et crémeux de Honey Bananas avec le profil frais et pétillant de Spritzer, donnant naissance à un hash moderne particulièrement expressif.\n\n 👃 Profil aromatique\n\n 🍯 Miel doux et gourmand\n 🍌 Banane mûre\n 🍬 Notes crémeuses et sucrées\n 🍋 Légère touche d’agrumes pétillante\n\n 😮‍💨 Effets\n\n ⚡ Euphorie rapide et agréable\n 🧠 Bien-être mental et humeur positive\n 😌 Relaxation corporelle progressive\n 🎵 Idéal pour une session détente, musique ou fin de journée\n\n 🎯 Pour les connaisseurs\n 🔥 Le calibre 70-130u est souvent recherché pour sa capacité à conserver une belle complexité aromatique tout en offrant une excellente qualité de résine.  \n 💎 Secret House Smoke Farm propose ici un plasma gourmand et très parfumé, où les notes de miel et de banane dominent la dégustation. Une pièce qui séduira les amateurs de hash moderne à la recherche d’un profil riche, doux et particulièrement savoureux. 🍯🍌✨',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 130.00},
                        { weight: '25G', price: 300.00 },
                        { weight: '50G', price: 450.00 },
                        { weight: '100G', price: 800.00 },
                    ]
                },
                {
                    id: '⚡🥣 CEREAL MILK 🥣⚡',
                    flag: '🇺🇸',
                    name: '⚡🥣 CEREAL MILK 🥣⚡', 
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductCCC.png',
                    video: 'VideoCCC.mov',
                    description: '⚡🇺🇸 Static plasma us 🇺🇸⚡  \n\n 💎🔥 Une variété connue pour son parfum gourmand et son effet équilibré. Son nom vient de son arôme qui rappelle le lait sucré restant au fond d’un bol de céréales. 🔥💎\n ✨ À quoi ça ressemble ?\n Dès l’ouverture, Cereal Milk dégage une odeur douce et agréable 🤤💨.\n\n 🥣 Notes de céréales sucrées\n 🍦 Touches crémeuses et vanillées\n 🍬 Parfum gourmand et réconfortant\n 🍓 Légères nuances fruitées\n\n 😮‍💨 Et au goût ?\n Chaque bouffée offre une saveur douce et persistante 💨✨.\n 🥛 Saveur crémeuse\n 🍪 Notes sucrées et gourmandes\n 🍦 Arrière-goût vanillé\n ☁️ Fumée douce et agréable\n ✨ Longueur en bouche appréciée\n\n 🧠 Quels effets ?\n Les effets peuvent varier selon la personne et le produit, mais sont souvent décrits comme :\n\n 😁 Bonne humeur\n 💬 Plus sociable et détendu\n 🌈 Sensation de bien-être\n 🧠 Relaxation mentale\n 💆‍♂️ Détente physique modérée\n ✨ Sensation générale de confort\n\n 🏆 En résumé\n ⚡🥣 Cereal Milk est appréciée pour son côté gourmand, ses saveurs crémeuses et son équilibre entre détente et bonne humeur. Une variété souvent choisie pour un moment agréable et relaxant. 💎🔥💨👑✨',
                    tarifs: [
                        { weight: '5G', price: 110.00 },
                        { weight: '10G', price: 200.00},
                        { weight: '25G', price: 450.00 },
                    ]
                },
                {
                    id: '🧩 GIRAFE PUZZY 🧩',
                    flag: '🇺🇸',
                    name: '🧩 GIRAFE PUZZY 🧩', 
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductPZ.png',
                    video: 'VideoPZ.mov',
                    description: '🧩⚡️ PLASMA STATIC ⚡️🧩 \n\n 💎🔥 Une variété qui mise avant tout sur l’intensité de ses terpènes et la qualité de son extraction. Une référence moderne qui séduit autant par son caractère que par son expérience globale. 🔥💎\n ✨ À quoi ça ressemble ?\n Dès l’ouverture, Static Plasma dévoile un parfum puissant et complexe 🤤💨. Un mélange d’agrumes, de fraîcheur et de notes sucrées qui attire immédiatement l’attention.\n\n 😮‍💨 Et au goût ?\n Chaque bouffée révèle une palette aromatique riche et persistante 💨✨.\n 🍋 Attaque fraîche et vive\n 🥭 Saveurs intenses et complexes\n 🍬 Douceur subtile en arrière-plan\n ☁️ Fumée agréable et soyeuse\n ✨ Belle longueur en bouche\n\n 🏆 En résumé\n Static Plasma est une variété appréciée pour son identité marquée et sa richesse aromatique 💎🔥.\n\n 😁 Bien-être\n 🌈 Bonne humeur\n 🧠 Relaxation mentale\n 💆‍♂️ Détente corporelle\n ☁️ Sensation de confort\n ✨ Expérience harmonieuse\n\n ⚡🧩 Une variété moderne et expressive qui combine caractère, richesse aromatique et moment de détente particulièrement agréable. 🔥💎💨👑✨',
                    tarifs: [
                        { weight: '5G', price: 110.00 },
                        { weight: '10G', price: 200.00},
                        { weight: '25G', price: 450.00 },
                    ]
                },
                {
                    id: '🦞 BLUE LOBSTER 🦞',
                    flag: '🇺🇸',
                    name: '🦞 BLUE LOBSTER 🦞', 
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductBLL.png',
                    video: 'VideoBLL.mp4',
                    description: '🦞⚡️ PLASMA STATIC ⚡️🦞 \n\n 💎🌊 Une sélection qui combine caractère, finesse et richesse aromatique. Blue Lobster n’est pas le genre de variété qui cherche à impressionner par l’excès, mais plutôt par son équilibre et son identité unique. 🌊💎\n ✨ Une génétique qui se démarque\n Dès les premiers instants, Blue Lobster dévoile un profil sophistiqué et moderne 🎯. Entre fraîcheur, douceur et profondeur aromatique, elle offre une expérience complète qui séduit aussi bien les connaisseurs que les curieux.\n\n ⚡ Les effets\n 😁 Sensation de bien-être rapide\n 🌈 Humeur positive et détendue\n 🧠 Relaxation mentale agréable\n 💆‍♂️ Relâchement corporel progressif\n ☁️ Sensation de confort et de légèreté\n ✨ Expérience équilibrée et harmonieuse\n\n 🌟 Ce qui fait sa différence\n Blue Lobster se distingue par sa complexité aromatique et sa capacité à évoluer tout au long de la dégustation. Chaque bouffée révèle de nouvelles nuances, offrant une expérience riche sans jamais devenir lourde.',
                    tarifs: [
                        { weight: '5G', price: 110.00 },
                        { weight: '10G', price: 200.00},
                        { weight: '25G', price: 450.00 },
                    ]
                }, */
                 
                /* {
                    id: 'MOTORBREAD',
                    flag: '🇲🇦',
                    name: 'MOTORBREAD 🛵', 
                    farm: '🏀 LAKERS FARM',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductMB.png',
                    video: 'VideoMB.mp4',
                    description: '⚡️ PLASMA STATIC ⚡️ \n\n La Motorbread est une variété qui séduit les amateurs de profils gazeux, crémeux et puissants. Réputée pour son caractère intense, elle développe un mélange complexe de notes de carburant, de pâte sucrée, d’épices et de terre, offrant une expérience aromatique riche et persistante.\n ✨ En version Plasma Static de Lakers Farm, on peut s’attendre à :\n\n 🔬 Une pureté exceptionnelle\n Sélection minutieuse des trichomes.\n Extraction très propre et raffinée.\n Texture grasse, fondante et homogène.\n Concentration élevée en terpènes.\n\n ⛽🍞 Profil terpénique\n Diesel puissant\n Essence fraîche\n Notes pâtissières et crémeuses\n Épices douces\n Fond terreux typé OG\n\n 😮‍💨 Effets généralement recherchés\n Relaxation profonde du corps\n Sensation de bien-être durable\n Euphorie calme et agréable\n Expérience idéale pour les moments de détente\n\n 💎 Pourquoi les connaisseurs l’apprécient ?\n La Motorbread combine la puissance des variétés gazy avec des nuances plus gourmandes et crémeuses. En extraction Plasma Static, son profil terpénique gagne encore en intensité, offrant une dégustation particulièrement savoureuse et complexe.\n\n 🏆 Lakers Farm Motorbread Plasma Static\n ➡️ Une résine premium destinée aux amateurs de gaz, de crème et de gros terpènes, avec une texture haut de gamme et une signature aromatique qui reste longtemps en bouche. Un vrai plaisir pour les connaisseurs de hash moderne. 🔥⛽🍞💎',
                    tarifs: [
                        { weight: '5G', price: 80.00 },
                        { weight: '10G', price: 150.00},
                        { weight: '25G', price: 320.00 },
                    ]
                },
                {
                    id: 'super boof 🦍⛽️',
                    flag: '🇲🇦',
                    name: 'SUPER BOOF 🦍⛽️', 
                    farm: '🏀 LAKERS FARM',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductSB.png',
                    video: 'VideoSB.mov',
                    description: '⚡️ PLASMA STATIC ⚡️ \n\n Une vraie dinguerie signée LAKERS FARM 😮‍💨🔥\n Ce Plasma Static Super boof envoie une énorme claque dès l’ouverture du pochon 🫠💨\n\n 👃 Profil aromatique :\n Une odeur ultra gazy ⛽️, bien lourde et puissante 💥\n Tu retrouves un mélange de notes diesel 🛢️, terreuses 🌱 et légèrement sucrées 🍬 avec un fond crémeux qui rend la strain encore plus folle 🤤🔥\n\n 👅 Goût :\n En bouche c’est une vraie explosion 💣💨\n Le côté essence/gaz ⛽️🔥 prend direct toute la place avec une finition douce et épicée 🌶️🍯\n Une fumée bien grasse 😮‍💨☁️ avec un goût qui reste longtemps en bouche 🫠\n\n 🧊 Texture & qualité :\n Static ultra propre ✨\n Texture sableuse/mousseuse 🏜️🧈 \n Full terpènes 🍯🌈 avec une finition premium digne des grosses sélections 🇲🇦💎\n\n 🧠💥 Effet :\n Très grosse frappe 🥊😵‍💫\n Montée rapide 🚀 relaxation lourde 🛋️ mental posé 😶‍🌫️ parfait pour les amateurs de grosses variétés bien gazy ⛽️🦍\n\n ⚡️🦍 Super boof – LAKERS FARM 🦍⚡️\n Du vrai plasma static premium 😮‍💨💎\n ⛽️ Goût violent • 🍬 Terps lourds • 🔥 Qualité top niveau',
                    tarifs: [
                        { weight: '5G', price: 80.00 },
                        { weight: '10G', price: 150.00},
                        { weight: '25G', price: 320.00 },
                    ]
                },
                {
                    id: 'IPANEMA 🍍🥭',
                    flag: '🇲🇦',
                    name: 'IPANEMA 🍍🥭', 
                    farm: '🏀 LAKERS FARM',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductIP.png',
                    video: 'VideoIP.mov',
                    description: '⚡️ PLASMA STATIC ⚡️ \n\n Encore une énorme sélection signée LAKERS FARM 😮‍💨💎\n Le Plasma Static IPANEMA balance un profil ultra exotique 🌈🔥 avec une qualité vraiment premium ✨\n\n 👃 Profil aromatique :\n Dès l’ouverture, ça explose en notes tropicales 🍍🥭🍬\n Un mélange fruité ultra frais avec des touches d’agrumes 🍊, de fruits sucrés 🍑 et un fond crémeux bien smooth 🧈😮‍💨\n Une odeur propre, puissante et ultra addictive 🤤💨\n\n 👅 Goût :\n En bouche c’est un vrai cocktail exotique 🍹🌴\n Tu sens direct les saveurs fruitées bien sucrées 🍍🍬 avec une petite touche creamy/gazy en fond ⛽️🧈 qui donne énormément de relief à la smoke 🔥💨\n Une fumée grasse ☁️ et pleine de terpènes 🍯\n\n 🧊 Texture & qualité :\n Static ultra mousseux 🏜️✨\n Extraction super propre 💎\n Full terpènes 🌈 avec une texture premium qui fond parfaitement 😮‍💨🔥\n\n 🧠💥 Effet :\n Très grosse détente 😶‍🌫️🛋️\n Effet lourd mais agréable 🧠💨 avec une montée relaxante et euphorique 🚀🔥\n\n 🌴🍍 IPANEMA – LAKERS FARM 🍍🌴\n 💎 Plasma Static ultra premium\n 🍬 Fruité exotique • ⛽️ Fond creamy/gazy • 🔥 Frappe lourde 😮‍💨',
                    tarifs: [
                        { weight: '5G', price: 80.00 },
                        { weight: '10G', price: 150.00},
                        { weight: '25G', price: 320.00 },
                    ]
                }, */
                /* {
                    id: 'GAZ MONKEY 🦍⛽️ ⚡️💎',
                    flag: '🇲🇦',
                    name: 'GAZ MONKEY 🦍⛽️', 
                    farm: '🏀 LAKERS FARM',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductGaz.png',
                    video: 'VideoGaz.mov',
                    description: '⚡️ PLASMA STATIC ⚡️ \n\n Une vraie dinguerie signée LAKERS FARM 😮‍💨🔥\n Ce Plasma Static Gaz Monkey envoie une énorme claque dès l’ouverture du pochon 🫠💨\n\n 👃 Profil aromatique :\n Une odeur ultra gazy ⛽️, bien lourde et puissante 💥\n Tu retrouves un mélange de notes diesel 🛢️, terreuses 🌱 et légèrement sucrées 🍬 avec un fond crémeux qui rend la strain encore plus folle 🤤🔥\n\n 👅 Goût :\n En bouche c’est une vraie explosion 💣💨\n Le côté essence/gaz ⛽️🔥 prend direct toute la place avec une finition douce et épicée 🌶️🍯\n Une fumée bien grasse 😮‍💨☁️ avec un goût qui reste longtemps en bouche 🫠\n\n 🧊 Texture & qualité :\n Static ultra propre ✨\n Texture sableuse/mousseuse 🏜️🧈\n Full terpènes 🍯🌈 avec une finition premium digne des grosses sélections 🇲🇦💎\n\n 🧠💥 Effet :\n Très grosse frappe 🥊😵‍💫\n Montée rapide 🚀 relaxation lourde 🛋️ mental posé 😶‍🌫️ parfait pour les amateurs de grosses variétés bien gazy ⛽️🦍\n\n ⚡️🦍 GAZ MONKEY – LAKERS FARM 🦍⚡️\n Du vrai plasma static premium 😮‍💨💎\n ⛽️ Goût violent • 🍬 Terps lourds • 🔥 Qualité top niveau',
                    tarifs: [
                        { weight: '5G', price: 80.00 },
                        { weight: '10G', price: 150.00},
                        { weight: '25G', price: 320.00 },
                    ]
                }, */
                /* {
                    id: 'RAINBOW x SPRITZER 🌈🍹',
                    flag: '🇲🇦',
                    name: 'RAINBOW x SPRITZER 🌈🍹', 
                    farm: 'SECRET HOUSE SMOKE FARM',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductRP.png',
                    video: 'VideoRP.mov',
                    description: '⚡️ PLASMA STATIC 70-130U ⚡️ \n\n Une vraie pépite marocaine signée Secret House Smoke Farm. Ce plasma static 70-130U sort un niveau de qualité ultra sérieux avec une extraction propre, mousseuse et blindée de terpènes 🔥\n\n 👃 Aromatique :\n Le croisement Rainbow x Spritzer développe un profil explosif : fruits sucrés, bonbon tropical 🌈, agrumes pétillants et petite touche creamy/gazeuse qui vient équilibrer parfaitement l’ensemble. À l’ouverture, ça sent direct le static premium travaillé avec soin.\n\n 👅 Goût :\n En bouche, c’est ultra riche : mélange de candy fruité 🍬, notes citronnées fraîches 🍋, raisin sucré et fond légèrement creamy qui reste longtemps après la taffe. Le plasma static ressort parfaitement tous les terpènes avec une fumée douce, épaisse et très propre.\n\n 💨 Effet :\n Une vraie frappe de static ⚡️\n Montée rapide avec un gros côté euphorique et relaxant en même temps. Effet puissant, propre et long lasting, parfait pour les amateurs de hash premium.\n\n Extraction 70-130U ultra qualitative, texture mousseuse et full terpènes.\n SECRET HOUSE SMOKE FARM a envoyé du très lourd sur cette Rainbow x Spritzer 🚀🔥',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 130.00},
                        { weight: '25G', price: 300.00 },
                        { weight: '50G', price: 450.00 },
                    ]
                }, */
                /* {
                    id: 'SPRITZER 🌈🍹',
                    flag: '🇲🇦',
                    name: 'SPRITZER 🌈🍹', 
                    farm: '🏀 LAKERS FARM',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductSpii.png',
                    video: 'VideoSpii.mp4',
                    description: '⚡️ PLASMA STATIC ⚡️ \n\n 💎🔥 Un Static Plasma qui met en avant toute la richesse aromatique de la génétique Spritzer, une variété réputée pour son profil ultra gourmand et sa production de résine exceptionnelle. Les extractions issues de Spritzer sont particulièrement appréciées des amateurs de hash moderne pour leur puissance aromatique et leur texture fondante.  \n\n ✨ Les effets recherchés :\n 😌 Sensation de détente progressive sans être trop lourde\n 😊 Humeur positive et euphorique\n 🧠 Esprit léger et agréable\n 💨 Moment relaxant tout en restant fonctionnel\n 🔥 Effet propre et équilibré, apprécié en journée comme en soirée  \n\n 🌿 Profil aromatique :\n 🍇 Raisin sucré\n 🍬 Bonbon fruité\n 🍊 Notes d’agrumes et de mandarine\n ⛽ Fond légèrement gazzy et crémeux\n 🍓 Touches de fruits rouges et de baies  \n\n ❄️ Texture Plasma Static :\n ✨ Très riche en têtes de trichomes sélectionnées\n 🤤 Texture grasse, souple et fondante\n 💎 Aspect clair et propre caractéristique des Static haut de gamme\n 🌿 Conservation maximale des terpènes grâce au procédé d’extraction statique  \n\n 🏆 Un hash qui plaira particulièrement aux amateurs de profils candy, raisin et agrumes, avec une fumée douce, savoureuse et une belle longueur en bouche. Une variété souvent recherchée par les connaisseurs de résines modernes pour son équilibre entre saveurs et effets.  \n 🔥 Pour les vrais connaisseurs de Static US, le Spritzer est considéré comme l’une des génétiques les plus intéressantes à travailler en hash grâce à son rendement en résine et à son profil “candy gas” particulièrement marqué.',
                    tarifs: [
                        { weight: '5G', price: 80.00 },
                        { weight: '10G', price: 150.00},
                        { weight: '25G', price: 320.00 },
                    ]
                },
                {
                    id: 'CHERRY PIE 🍒🥧⚡️',
                    flag: '🇲🇦',
                    name: 'CHERRY PIE 🍒🥧⚡️', 
                    farm: '🏀 LAKERS FARM',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductCh.png',
                    video: 'VideoCh.mp4',
                    description: '⚡️ PLASMA STATIC ⚡️ \n\n gourmand signé LAKERS FARM. La strain Cherry Pie envoie direct une vague sucrée et fruitée dès l’ouverture du pot 🔥\n\n 👃 Aromatique :\n Une grosse odeur de cerise sucrée mélangée à une pâte dessert crémeuse, avec un fond légèrement terreux et gazeux typique des grosses génétiques US. Le profil est riche, profond et ultra addictif.\n\n 👅 Goût :\n En bouche, c’est un vrai dessert : cerise mûre 🍒, notes pâtissières sucrées 🥧, avec une légère touche creamy et kush qui reste longtemps après l’expiration. Très terpy, très propre, chaque taffe est lourde en saveur.\n\n 💨 Effet :\n Une vraie frappe de static : détente puissante, montée rapide, effet lourd et relaxant sans perdre le côté euphorique. Parfait pour les amateurs de static bien fort avec un goût premium.\n PLASMA STATIC by LAKERS FARM = qualité très sérieuse ⚡️🍒',
                    tarifs: [
                        { weight: '5G', price: 80.00 },
                        { weight: '10G', price: 150.00},
                        { weight: '25G', price: 320.00 },
                    ]
                },
                {
                    id: 'HONEY BANANA 🍯🍌⚡️',
                    flag: '🇲🇦',
                    name: 'HONEY BANANA 🍯🍌⚡️', 
                    farm: '🏀 LAKERS FARM',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductHo.png',
                    video: 'VideoHo.mov',
                    description: '⚡️ PLASMA STATIC ⚡️ \n\n Une vraie dinguerie signée LAKERS FARM. Ce Plasma Static Honey Banana sort un profil ultra gourmand et collant en terpènes, avec une qualité de static vraiment violente. Dès l’ouverture, ça sent le produit travaillé proprement, lourd en goût et en puissance 🔥\n\n 👃 Aromatique :\n Le Honey Banana développe une odeur hyper riche mêlant banane bien mûre, miel sucré 🍯 et crème tropicale. Derrière, on retrouve une légère touche kush/gazeuse qui vient casser le côté trop sucré et donne un équilibre parfait. L’odeur remplit direct la pièce, avec ce côté dessert exotique très premium.\n\n 👅 Goût :\n En bouche, c’est ultra onctueux : grosse saveur de banana cream, miel chaud, sucre vanillé et petite note fruitée tropicale 🍌✨\n Le plasma static ressort parfaitement les terpènes : fumée douce, saveur intense et longue tenue en bouche. Chaque taffe laisse un arrière-goût crémeux et sucré vraiment propre.\n\n 💨 Effet :\n Une vraie frappe. Montée rapide avec une grosse détente physique, tout en gardant un côté euphorique et chill. Le genre de static qui tape fort mais reste ultra agréable à fumer.\n\n ⚡️ Texture premium, full terpènes, extraction très propre.\n LAKERS FARM a clairement sorti une pépite sur cette Honey Banana 🍯🍌',
                    tarifs: [
                        { weight: '5G', price: 80.00 },
                        { weight: '10G', price: 150.00},
                        { weight: '25G', price: 320.00 },
                    ]
                }, */
               /*  {
                    id: 'STATIC RS11 🍬⛽',
                    flag: '🇲🇦',
                    name: 'STATIC RS11 🍬⛽', 
                    farm: 'HASBULLA FARM 🇲🇦',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductRS11.png',
                    video: 'VideoRS11.mov',
                    description: '⚡️ STATIC HASH \n\n Une sélection ultra premium signée HASBULLA FARM autour de la célèbre strain RS11. Un static propre, gras et ultra parfumé qui mélange parfaitement le côté candy crémeux avec une lourde touche gazeuse 🔥\n\n 👃 Aromatique :\n ès l’ouverture, ça tape direct avec une odeur sucrée type bonbon fruité et crème vanillée, suivie d’un fond bien gazzy et légèrement terreux. Un profil complexe et très “US Cali” 🇺🇸🍭\n\n 👅 Goût :\n En bouche c’est une vraie dinguerie :\n 🍬 notes candy ultra sucrées\n ⛽ gaz puissant et propre\n 🍓 petite touche fruit rouge / tropicale\n 🥛 arrière-goût crémeux presque dessert\n\n La fumée est lisse, épaisse et reste longtemps en bouche avec un goût très reconnaissable de la RS11 😮‍💨\n\n 💨 Effets :\n Une montée rapide avec un gros mood relax et euphorique. Parfait pour se poser, rigoler, écouter du son ou simplement profiter d’une grosse frappe premium 🧠🔥\n ✨ Extraction ultra propre\n ✨ Terps très prononcés\n ✨ Qualité top shelf static hash',
                    tarifs: [
                        { weight: '5G', price: 80.00 },
                        { weight: '10G', price: 150.00},
                        { weight: '25G', price: 320.00 },
                    ]
                }, */
               /*  {
                    id: 'SPRITE RS 🍋🥤',
                    flag: '🇲🇦',
                    name: 'SPRITE RS 🍋🥤', 
                    farm: 'HASBULLA FARM 🇲🇦',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductRS.png',
                    video: 'VideoRS.mov',
                    description: '⚡️ STATIC HASH \n\n Un static ultra frais et explosif signé HASBULLA FARM. La strain Sprite RS apporte un profil hyper citronné et gazeux qui rappelle direct une boisson citron-lime bien glacée 🔥❄️\n\n 👃 Aromatique :\n À l’ouverture, une énorme claque d’agrumes sucrés envahit direct la pièce 🍋🍈\n On retrouve un mélange de citron vert, bonbon acidulé et une grosse note gazeuse propre typique des variétés modernes US 🇺🇸⛽\n\n 👅 Goût :\n En bouche c’est ultra savoureux :\n 🥤 effet soda citron-lime\n 🍬 touche candy sucrée\n 🍋 acidité fraîche et propre\n ⛽ fond gazzy puissant qui reste longtemps\n\n Une fumée douce mais bien lourde en terpènes avec un goût ultra addictif 😮‍💨\n\n 💨 Effets :\n High rapide et euphorique avec une bonne détente mentale et physique. Ça tape propre sans être trop lourd, parfait à tout moment de la journée 🔥🧠\n ✨ Texture grasse et fondante\n ✨ Extraction très propre\n ✨ Terps frais, citronnés et gazeux à fond ⚡️',
                    tarifs: [
                        { weight: '5G', price: 80.00 },
                        { weight: '10G', price: 150.00},
                        { weight: '25G', price: 320.00 },
                    ]
                }, */
             /*    {
                    id: 'CAP JUNKY HASH 🧪🔥',
                    flag: '🇲🇦',
                    name: 'CAP JUNKY HASH 🧪🔥', 
                    farm: 'HASBULLA FARM 🇲🇦',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductCAP.png',
                    video: 'VideoCAP.mov',
                    description: '🔥 DOUBLE STATIC 🔥 \n\n Une sélection double static hash ultra premium signée HASBULLA FARM, mettant en avant toute la complexité de la Cap Junky dans une extraction d’exception. Un profil moderne, puissant et ultra riche en terpènes 💎\n\n 👃 Aromatique :\n Un mélange crémeux et gassy avec des notes de vanille, carburant et une touche fruitée légèrement sucrée. Un nez complexe, à la fois lourd et raffiné.\n\n 👅 Goût :\n En bouche, c’est riche et enveloppant : creamy, gas, avec une finition sucrée et légèrement épicée. Texture grasse et fondante, combustion lente et propre — signature d’un double static parfaitement maîtrisé.\n\n 💨 Effets :\n High puissant et équilibré : euphorie mentale au début, suivie d’une relaxation progressive du corps. Idéal pour chiller tout en restant posé.\n\n ✨ Qualité :\n Double static hash full terpènes, extraction ultra propre, texture brillante, homogène et huileuse. Un produit travaillé avec précision pour exprimer toute la richesse de la Cap Junky.\n\n ⚡️ Conclusion :\n Un hash moderne haut de gamme, complexe et ultra savoureux.\n HASBULLA FARM propose ici une Cap Junky lourde, propre et parfaitement exécutée.',
                    tarifs: [
                        { weight: '5G', price: 90.00 },
                        { weight: '10G', price: 160.00},
                        { weight: '25G', price: 340.00 },
                    ]
                }, */
             /*    {
                    id: 'SFV HASH ⛽️🔥',
                    flag: '🇲🇦',
                    name: 'SFV HASH ⛽️🔥', 
                    farm: 'HASBULLA FARM 🇲🇦',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductSFV.png',
                    video: 'VideoSFV.mov',
                    description: '🔥 DOUBLE STATIC 🔥 \n\n Une sélection double static hash ultra premium signée HASBULLA FARM, mettant à l’honneur une SFV Kush puissante dans une extraction d’une pureté exceptionnelle. Dès l’ouverture, c’est une vraie signature OG : lourd, résineux et ultra gassy 💣\n\n 👃 Aromatique :\n Un profil intense et profond dominé par le diesel lourd, accompagné de notes terreuses, pine et une légère touche citronnée typique de la SFV. Un nez riche, authentique, old school.\n\n 👅 Goût :\n En bouche, c’est gras et savoureux : kush, gas, avec une finition légèrement lemon et épicée. La texture est huileuse et fondante, révélant une combustion lente et propre, typique d’un hash de très haute qualité.\n\n 💨 Effets :\n High puissant et enveloppant, relaxation profonde du corps avec un côté mental apaisant. Parfait pour chiller lourd ou en fin de journée.\n\n ✨ Qualité :\n Double static hash full terpènes, extraction raffinée, texture brillante, grasse et homogène. Un produit travaillé avec précision pour sublimer la richesse naturelle de la résine.\n\n ⚡️ Conclusion :\n Un hash double static OG gassy de très haut niveau, pour les vrais amateurs de Kush.\n HASBULLA FARM propose ici une SFV lourde, propre et ultra qualitative.',
                    tarifs: [
                        { weight: '5G', price: 90.00 },
                        { weight: '10G', price: 160.00},
                        { weight: '25G', price: 340.00 },
                    ]
                }, */
               /*  {
                    id: 'FF x SD HASH 🍓⛽️',
                    flag: '🇲🇦',
                    name: 'FF x SD HASH 🍓⛽️', 
                    farm: 'HASBULLA FARM 🇲🇦',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductFFS.png',
                    video: 'VideoFFS.mov',
                    description: '🔥 DOUBLE STATIC 🔥 \n\n Une sélection double static hash ultra premium signée HASBULLA FARM, issue d’un croisement explosif entre FF et Sour Diesel. Un profil intense, entre douceur fruitée et puissance gassy 💣\n\n 👃 Aromatique :\n Un nez complexe et percutant : notes fruitées sucrées (berries / fruits rouges) mêlées à un diesel puissant typique de la Sour D. Une légère touche acidulée et chimique vient renforcer le caractère.\n\n 👅 Goût :\n En bouche, c’est un contraste parfait : attaque fruitée et sucrée, suivie d’une montée gassy / diesel bien marquée. Finition propre et persistante, texture grasse et fondante.\n\n 💨 Effets :\n High rapide et énergisant au départ (Sour D vibes), avec une euphorie mentale qui évolue vers une détente plus posée. Idéal en journée ou début de soirée.\n\n ✨ Qualité :\n Double static hash full terpènes, extraction très propre, texture brillante, homogène et huileuse. Travail précis pour sublimer le croisement.\n\n ⚡️ Conclusion :\n Un hash hybride puissant et savoureux, parfait équilibre entre fruit et gas.\n HASBULLA FARM envoie une FF x SD nerveuse, propre et ultra addictive.',
                    tarifs: [
                        { weight: '5G', price: 90.00 },
                        { weight: '10G', price: 160.00},
                        { weight: '25G', price: 340.00 },
                    ]
                }, */
               /*  {
                    id: 'OBAMA KUSH 🇺🇸⚡️',
                    flag: '🇲🇦',
                    name: 'OBAMA KUSH 🇺🇸⚡️', 
                    farm: '🏀 LAKERS FARM',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductOB.png',
                    video: 'VideoOB.mov',
                    description: '⚡️ PLASMA STATIC ⚡️ \n\n Une sélection ultra premium signée LAKERS FARM, où le plasma static met en lumière une Kush profonde et authentique. Dès l’ouverture, ça sent le vrai OG : lourd, sombre et ultra résineux 🔥\n\n 👃 Aromatique :\n Un profil typique Kush old school : terreux, boisé, avec une forte dominante diesel/pine. Une légère touche épicée et citronnée vient apporter de la complexité.\n\n 👅 Goût :\n En bouche, c’est riche et enveloppant : notes de hashy kush, pin, terre humide, avec une finition légèrement citronnée et propre. Texture fondante, signature d’un static parfaitement travaillé.\n\n 💨 Effets :\n High profond et relaxant, avec une montée qui calme direct l’esprit. Sensation lourde dans le corps, idéale pour se poser et déconnecter.\n\n ✨ Qualité :\n Plasma static full terpènes, extraction précise, texture brillante et homogène. Un produit qui respecte parfaitement l’identité Kush.\n\n ⚡️ Conclusion :\n Un static OG puissant et authentique, pour les amateurs de vraies Kush.\n LAKERS FARM livre une OBAMA KUSH lourde, propre et ultra efficace.',
                    tarifs: [
                        { weight: '5G', price: 80.00 },
                        { weight: '10G', price: 150.00},
                        { weight: '25G', price: 320.00 },
                    ]
                }, */
              /*   {
                    id: 'GMO FUEL ⛽️⚡️',
                    flag: '🇲🇦',
                    name: 'GMO FUEL ⛽️⚡️', 
                    farm: '🏀 LAKERS FARM',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductGMF.png',
                    video: 'VideoGMF.mov',
                    description: '⚡️ PLASMA STATIC ⚡️ \n\n Une sélection ultra premium signée LAKERS FARM, où la puissance du plasma static rencontre un profil gassy extrême. Dès l’ouverture, ça annonce la couleur : lourd, profond, et ultra addictif 🔥\n\n 👃 Aromatique :\n Un mélange intense de diesel brut, ail fermenté et terre humide, typique de la GMO. Le côté “fuel” vient appuyer avec une note chimique/gazeuse très marquée qui reste longtemps en nez.\n\n 👅 Goût :\n En bouche, c’est lourd et complexe : gas pur, notes savory / garlic, avec une pointe légèrement épicée. La finition est ultra clean, signature d’un static parfaitement maîtrisé.\n\n 💨 Effets :\n Montée rapide avec un effet puissant et enveloppant. Relaxation mentale, sensation lourde dans le corps, parfait pour chiller ou en fin de journée.\n\n ✨ Qualité :\n Plasma static full terpènes, extraction ultra propre, texture brillante et homogène. Un travail de précision qui met en avant toute la richesse du profil GMO.\n\n ⚡️ Conclusion :\n Un static lourd et gassy pour les vrais amateurs.\n Puissance, profondeur et propreté — LAKERS FARM frappe encore fort avec cette GMO FUEL.',
                    tarifs: [
                        { weight: '5G', price: 80.00 },
                        { weight: '10G', price: 150.00},
                        { weight: '25G', price: 320.00 },
                    ]
                }, */
            /*     {
                    id: 'PINEAPPLE JUICE 🍍⚡️',
                    flag: '🇲🇦',
                    name: 'PINEAPPLE JUICE 🍍⚡️', // ⚠️ Corrigé ici (c'était écrit Zkittlez)
                    farm: '🏀 LAKERS FARM',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductPJ.png',
                    video: 'VideoPJ.mov',
                    description: '⚡️ PLASMA STATIC ⚡️ \n\n Une vraie pépite ultra premium signée LAKERS FARM. Ce plasma static sur la strain Pineapple Juice envoie direct une explosion tropicale dès l’ouverture 🔥\n\n 👃 Aromatique :\n Un profil hyper fruité dominé par l’ananas bien sucré, avec une touche acidulée qui rappelle un jus frais pressé. Derrière, t’as une légère note crémeuse et une pointe gazeuse qui vient équilibrer le tout.\n\n 👅 Goût :\n En bouche, c’est un vrai cocktail exotique : ananas juteux, agrumes doux, avec un fond légèrement sucré et une finition propre typique du static. Ça fond parfaitement, texture ultra clean.\n\n 💨 Effets :\n High rapide et clair, euphorique au début avec une montée énergisante.\n\n ✨ Qualité :\n  Extraction plasma static ultra raffinée, full terpènes, texture brillante et homogène. Un produit travaillé avec précision, qui met en avant toute la richesse aromatique de la strain.\n\n ⚡️ Conclusion :\n Un static tropical de très haut niveau, parfait pour les amateurs de saveurs fruitées puissantes avec une vraie propreté à la combustion. LAKERS FARM frappe fort avec cette Pineapple Juice.',
                    tarifs: [
                        { weight: '5G', price: 80.00 },
                        { weight: '10G', price: 150.00},
                        { weight: '25G', price: 320.00 },
                    ]
                }, */
              /*   {
                    id: 'ACAPULCO 🌴🔥',
                    flag: '🇲🇦',
                    name: 'ACAPULCO 🌴🔥', // ⚠️ Corrigé ici (c'était écrit Zkittlez)
                    farm: '💎 ORGANIC VALLEY',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductAca.png',
                    video: 'VideoAca.mov',
                    description: '🔥 Description\n Un static qui sent le soleil et le pur old school… Acapulco revisité en version ultra propre par ORGANIC VALLEY FARMZ, avec une vraie identité terpène qui tape direct 💥\n\n 👃 Aromatique :\n Profil intense et naturel, mélange de notes terreuses, épicées et légèrement citronnées, avec un fond tropical sec. Ça rappelle les variétés classiques, mais avec une fraîcheur moderne grâce au static.\n\n 👅 Goût :\n En bouche, c’est riche et profond : attaque sur des saveurs boisées et herbacées, suivies d’un twist citronné/agrume qui vient éclaircir le tout. Finition longue, propre, avec une vraie signature old school.\n\n  💨 Effets :\n  High énergisant et cérébral, très clair dans la tête. Ça boost la motivation, la concentration et l’humeur. \n Parfait en journée ou avant training.\n\n ✨ Qualité :\n  Static bien travaillé, texture fine et résineuse, couleur propre. Extraction qui respecte parfaitement la génétique Acapulco, avec un max de terpènes conservés.\n\n ⚡️ Conclusion :\n Un static authentique et puissant, parfait pour les amateurs de strains classiques avec une vraie montée clean et efficace. ORGANIC VALLEY FARMZ livre un produit propre, old school dans l’âme mais premium dans la finition.',
                    tarifs: [
                        { weight: '5G', price: 80.00 },
                        { weight: '10G', price: 140.00},
                        { weight: '25G', price: 300.00 },
                        { weight: '50G', price: 450.00},
                        { weight: '100G', price: 850.00}
                    ]
                },  */  
               /*  {
                    id: '🫒 PINK RUNTZ 🎀',
                    flag: '🇲🇦',
                    name: '🫒 PINK RUNTZ 🎀', // ⚠️ Corrigé ici (c'était écrit Zkittlez)
                    farm: '💎 ORGANIC VALLEY',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductPR.png',
                    video: 'VideoPR.mov',
                    description: '🔥 Description\n Le static Pink Runtz issu de la sélection NO FARMZ, c’est l’exigence à l’état pur. Une extraction minutieuse qui offre une résine d’une pureté exceptionnelle. Un vrai travail d’orfèvre pour les puristes qui cherchent une matière ultra clean et un profil terpénique respecté à 100%.\n\n 👃 Arômes & Saveurs\n Une véritable explosion de bonbons acidulés et de fruits rouges sucrés 🍓🍬. Le profil Runtz est indéniable, avec une base crémeuse et une légère touche gazeuse en fond qui vient tapisser le palais. À la chauffe, ça libère une fumée douce, épaisse et extrêmement gourmande.\n\n 👀 Aspect\n Teinte dorée à sable clair, avec une texture fine et soyeuse caractéristique des meilleurs statics. Ça s’effrite tout seul entre les doigts tout en gardant ce côté collant parfait pour le roulage. Zéro impureté.\n\n 😮‍💨 Effet\n Un high joyeux et euphorique qui monte rapidement à la tête, suivi d’une détente corporelle profonde et chaleureuse. Puissant mais lucide, parfait pour chill entre potes ou se relaxer en fin de journée sans être totalement assommé.\n\n 💎 Conclusion\n Le Pink Runtz NO FARMZ, c’est le bonbon ultime version premium. Un static qui allie une gourmandise extrême à une frappe nette et sans bavure. Une valeur sûre pour les amateurs de sucré.',
                    tarifs: [
                        { weight: '5G', price: 80.00 },
                        { weight: '10G', price: 140.00},
                        { weight: '25G', price: 300.00 },
                        { weight: '50G', price: 450.00},
                        { weight: '100G', price: 850.00}
                    ]
                }, */  
                 /* {
                    id: '🫒 ZKITTLEZ 🧸',
                    flag: '🇲🇦',
                    name: '🫒 ZKITTLEZ 🧸',
                    farm: '💎 ORGANIC VALLEY',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductZ.png',
                    video: 'VideoZ.mov',
                    description: '🔥 Description\n Le static Zkittlez de la sélection NO FARMZ frappe très fort. On est sur une extraction de très haute volée, avec un tri des trichomes chirurgical. Un produit brut, haut de gamme, qui capture parfaitement l\'essence de l\'une des génétiques les plus réputées au monde.\n\n 👃 Arômes & Saveurs\n Un véritable arc-en-ciel de saveurs 🌈. Dès l\'ouverture, tu te prends des notes intenses de fruits tropicaux, d’agrumes doux et de baies sucrées. À la combustion, le fameux côté "Z" se révèle pleinement, offrant une fumée riche, intensément fruitée et qui reste très longtemps en bouche.\n\n 👀 Aspect\n Une poudre d’or compacte. Couleur blonde très claire, texture sablonneuse et malléable qui bulle instantanément au contact de la flamme. Le tri est parfait, c\'est de la tête de trichome pure.\n\n 😮‍💨 Effet\n L\'équilibre parfait. La montée est stimulante, booste l\'humeur et la créativité, avant de glisser doucement vers un apaisement physique lourd et réconfortant. Une défonce premium qui dure dans le temps.\n\n 💎 Conclusion\n Le Zkittlez en static NO FARMZ, c’est le summum de l\'exotisme. Un profil terpénique explosif couplé à une qualité de filtration irréprochable. Un must-have absolu pour les chasseurs de terps fruités.',
                    tarifs: [
                        { weight: '5G', price: 80.00 },
                        { weight: '10G', price: 140.00},
                        { weight: '25G', price: 300.00 },
                        { weight: '50G', price: 450.00},
                        { weight: '100G', price: 850.00}
                    ]
                }, */
                 /* {
                    id: '🌟 CALYPSO',
                    flag: '🇲🇦',
                    name: '🌟 CALYPSO',
                    farm: 'MOZART FARM 🎹',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductC.png', // ⚠️ A changer
                    video: 'VideoC.mov',
                    description: '🔥 Description\n Le static Calypso signé MOZART FARM, c’est clairement du très haut niveau — une extraction propre, raffinée, où chaque détail est maîtrisé. On est sur un produit ultra clean, avec une texture sablonneuse fine, presque soyeuse, qui témoigne d’un tri précis et d’une qualité de résine exceptionnelle.\n\n 👃 Arômes & Saveurs\n Calypso, ça part sur un profil exotique et lumineux : des notes fruitées tropicales bien fraîches, mélangées à une touche sucrée presque creamy, avec derrière un léger fond gazeux qui vient équilibrer le tout. À la chauffe, ça développe encore plus — c’est riche, doux, et surtout hyper savoureux, sans agressivité.\n\n 👀 Aspect\n Couleur claire à dorée, homogène, avec cette texture “static” bien sèche mais collante juste comme il faut. Ça s’effrite parfaitement, signe d’une extraction premium et bien travaillée.\n\n 😮‍💨 Effet\n Un high propre et progressif : ça démarre avec une montée cérébrale légère, euphorique, puis ça pose tranquillement le corps sans t’écraser. Idéal pour rester fonctionnel tout en profitant d’un vrai moment de détente qualitative.\n\n 💎 Conclusion\n Le Calypso en static de chez MOZART FARM, c’est un produit d’esthète — goût précis, effet maîtrisé, et finition premium. Clairement une pièce de collection pour ceux qui cherchent du clean et du goût au-dessus de la moyenne.',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 130.00},
                        { weight: '25G', price: 300.00 },
                        { weight: '50G', price: 450.00},
                        { weight: '100G', price: 800.00}
                    ]
                },   */
                 /* {
                    id: '🌑 BLACK CHERRY',
                    flag: '🇲🇦',
                    name: '🌑 BLACK CHERRY',
                    farm: 'MOZART FARM 🎹',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductBC.png', // ⚠️ A changer
                    video: 'VideoBC.mov',
                    description: '🔥 Description\n Le static Black Cherry de chez MOZART FARM, c’est une extraction ultra propre avec une vraie identité. On est sur un produit travaillé avec précision, texture fine et homogène, qui montre direct que le tri a été fait sérieusement. Un static premium, propre, sans impuretés, avec ce côté sablonneux haut de gamme. \n\n 👃 Arômes & Saveurs \n Là on part sur un profil gourmand et profond : grosse dominante cerise noire bien mûre 🍒, presque confiturée, accompagnée de notes sucrées et légèrement crémeuses. En fond, tu retrouves une touche terreuse/gazeuse qui vient donner du relief et éviter le côté trop sucré. À la chauffe, ça devient encore plus riche, avec une vraie longueur en bouche. \n\n 👀 Aspect \n Couleur beige clair à doré, texture sèche et aérienne, qui s’effrite parfaitement. Brillance légère, signe d’une extraction bien maîtrisée. C’est propre, fin, et très agréable à manipuler. \n\n 😮‍💨 Effet \n Effet chill mais qualitatif : une montée douce avec une sensation de bien-être mentale, suivie d’un relâchement physique progressif. Pas assommant, mais bien relaxant — parfait pour poser sans être KO. \n\n 💎 Conclusion \n Le Black Cherry en static de chez MOZART FARM, c’est le parfait mélange entre gourmandise et puissance maîtrisée. Une vraie signature aromatique avec ce côté fruit noir sucré, et une qualité d’extraction qui place le produit dans le haut du panier.',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 130.00},
                        { weight: '25G', price: 300.00 },
                        { weight: '50G', price: 450.00},
                        { weight: '100G', price: 800.00}
                    ]
                },  */ 
                /*  {
                    id: '🌬️ B. GARLIC JAM',
                    flag: '🇲🇦',
                    name: '🌬️ B. GARLIC JAM',
                    farm: 'DR FRENCH 🥖',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductBG.png', // ⚠️ A changer
                    video: 'VideoBG.mp4',
                    description: '🔥 Description \n\n  Le Static B. Garlic Jam, signé DR French, c’est une vraie pièce de caractère. On est sur un concentré ultra propre, travaillé avec précision pour garder toute la richesse terpénique de la strain. Dès l’ouverture, ça envoie direct : une attaque garlic bien pungente, mélangée à une douceur presque confiturée (“jam”), avec un fond légèrement épicé et crémeux.  \n\n Le résultat est unique : un équilibre entre le funky US bien sale et une rondeur sucrée qui rend le produit hyper addictif.  \n\n 🌿 Texture & Aspect  \n Static clair, presque sableux, avec une texture fine et soyeuse. Les grains sont propres, bien séparés, avec une couleur beige doré tirant parfois vers le blond clair — signe d’une extraction maîtrisée et d’une sélection premium.  \n\n👃 Profil aromatique \n • 🧄 Garlic / onion funky (dominant) \n • 🍯 Sucré “jam” / confiture légère \n • 🌶️ Épicé subtil \n • 🌿 Notes terreuses & creamy en fond  \n\n 💨 Effet  \n Une montée rapide qui frappe direct au cerveau avec un côté euphorique et focus, puis une descente plus lourde, relaxante, qui te pose sans t’éteindre complètement. Parfait pour ceux qui aiment les profils puissants avec du goût qui reste en bouche longtemps.  \n\n 💎 Conclusion  \n Le B. Garlic Jam en static, c’est un produit de connaisseur : un goût sale mais maîtrisé, une extraction clean, et une vraie identité. Typiquement le genre de pièce que tu retrouves pas partout.  \n\n OG Legacy approved 🔥',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 130.00},
                        { weight: '25G', price: 300.00 },
                        { weight: '50G', price: 450.00},
                        { weight: '100G', price: 800.00}
                    ]
                }, */ 
                 /* {
                    id: 'ALL BLUE 🫐',
                    flag: '🇲🇦',
                    name: 'ALL BLUE 🫐',
                    farm: 'DR FRENCH 🥖',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductAllB.png', // ⚠️ A changer
                    video: 'VideoAllB.mp4',
                    description: '🫐 STATIC SINGLE SOURCE \n\n 🔥 Description\n All Blue, c’est une strain ultra fruitée qui tourne autour de notes intenses de myrtille, baies sauvages et une légère touche sucrée presque candy. À l’ouverture, ça sent direct le fruit mûr avec une profondeur fraîche et légèrement crémeuse — un profil terpénique propre et addictif. \n\n 🌿 Qualité Static \n Single source signé DR FRENCH = qualité maîtrisée de A à Z. Le static est propre, clair, texture sableuse fine avec un reflet légèrement doré, signe d’une extraction propre et bien travaillée. Ça fond parfaitement et ça libère tous les arômes. \n\n 😶‍🌫️ Effet \n Effet équilibré avec une montée mentale douce et euphorique, suivie d’un relâchement corporel léger. Ça reste fonctionnel mais ultra chill — parfait pour kiffer sans être KO. \n\n 💎 Conclusion \n All Blue, c’est la combinaison parfaite entre fraîcheur fruitée, douceur et qualité premium. Un static propre qui parle aux amateurs de goûts nets et raffinés.',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 130.00},
                        { weight: '25G', price: 300.00 },
                        { weight: '50G', price: 450.00},
                        { weight: '100G', price: 800.00}
                    ]
                },  */
            /*      {
                    id: 'ALL CAKEZ 🍰',
                    flag: '🇲🇦',
                    name: 'ALL CAKEZ 🍰',
                    farm: 'DR FRENCH 🥖',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductAll.png', // ⚠️ A changer
                    video: 'VideoAll.mp4',
                    description: '🍰 STATIC SINGLE SOURCE \n\n 🔥 Description \n All Cakez, c’est une vraie pâtisserie version haut de gamme. Une strain ultra gourmande qui mélange des notes sucrées, crémeuses et légèrement vanillées, avec une profondeur riche typique des meilleures génétiques “cake”. Dès l’ouverture, ça dégage un parfum lourd et raffiné, entre dessert fraîchement sorti du four et touche légèrement gassy qui rappelle son côté premium. \n\n 🌿 Qualité Static \n Extraction single source = pureté maximale. Tout vient de la même farm DR FRENCH, ce qui garantit une cohérence parfaite entre goût, effet et qualité. Le résultat : un static clean, blond clair, texture sableuse ultra fine, qui fond parfaitement. \n\n 😶‍🌫️ Effet \n Un high smooth mais puissant. Ça commence par une montée euphorique et relaxante, puis ça s’installe dans un chill profond sans t’éteindre. Parfait pour se poser, kiffer ou créer. \n\n 💎 Conclusion \n  Un produit élite pour les vrais connaisseurs. All Cakez en static single source, c’est le mélange parfait entre gourmandise, puissance et pureté.',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 130.00},
                        { weight: '25G', price: 300.00 },
                        { weight: '50G', price: 450.00},
                        { weight: '100G', price: 800.00}
                    ]
                },  */
              
               /*  {
                    id: 'OLIVE',
                    flag: '🇲🇦',
                    name: '🍫 OLIVE HASBULLA 🍯🫒',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductOlive.png', // ⚠️ A changer
                    video: 'VideoOlive.mov',
                    description: 'OLIVE DOUBLE STATIC TRES GROS GOUT PRONONCÉ ET HIGH QUI TE MET UNE VRAI FRAPPE POUR LES GROS PECS 🍯',

                         // 👇 NOUVELLE STRUCTURE
                         variantTitle: 'Choisis ton goût 🥣 :',
                         jars: [
                             { name: 'CEREAL MILK', emoji: '🍼🥵', colorClass: 'style-passion' },
                             { name: 'PINA', emoji: '🍍🤯', colorClass: 'style-melon' },
                             { name: 'GEORGIA PIE', emoji: '🍑🍯', colorClass: 'style-orange' }
                         ],

                    tarifs: [
                        { weight: '5G', price: 100.00 },
                        { weight: '10G', price: 150.00 },
                        { weight: '20G', price: 280.00 },
                    ]
                }, */
            ]
        },
        // ============================================================
        // CATEGORIE 1 : CALI 🌿
        // ============================================================
        {
            id: 'WEED',
            name: 'WEED CALI 🇺🇸 🥦',
            type: 'Weed',
            quality: 'WEED CALI 🇺🇸 🥦',
            image: 'CategWeed.png', // Ton image de catégorie Weed

            products: [
                {
                    id: 'Cherry runtz 🍒',
                    flag: '🇺🇸',
                    name: 'Cherry runtz 🍒',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductCHR.jpg', 
                    images:['ProductCHRR.jpg'],
                    video: '',
                    description: '',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                    ]
                },
                 {
                    id: '🌴💣 SUPER BOMBE 💣🌴',
                    flag: '🇺🇸',
                    name: '🌴💣 SUPER BOMBE 💣🌴',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductS.jpg', 
                    video: 'VideoSB.mp4',
                    description: '✨ Cette génétique est appréciée pour son profil aromatique très expressif :\n 🍬 Notes sucrées et fruitées\n ⛽ Fond gazeux et légèrement diesel\n 🍋 Touches d’agrumes selon les phénotypes\n ❄️ Têtes très résineuses et visuellement attractives\n\n 💨 Effets généralement recherchés :\n 😁 Euphorie rapide\n 🚀 Sensation cérébrale puissante\n 😌 Relaxation progressive du corps\n 🎨 Peut favoriser la créativité et la bonne humeur\n\n 👃 Ce qui séduit les connaisseurs, c’est surtout son mélange entre douceur sucrée et caractère gassy, offrant une fumée riche en terpènes et une belle longueur en bouche.  \n\n 💎 Une variété moderne qui mise avant tout sur l’intensité aromatique, la résine et une expérience complète du premier nez jusqu’à la dernière bouffée. 🔥🌴💨',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                    ]
                }, 
                 {
                    id: '🍨🌿 GELATO #33 🌿🍨',
                    flag: '🇺🇸',
                    name: '🍨🌿 GELATO #33 🌿🍨',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductG.jpg', 
                    video: 'VideoG.mp4',
                    description: '💎🔥 Une des variétés les plus célèbres de la famille Gelato, réputée pour son équilibre entre puissance, saveurs gourmandes et effets agréables. 🔥💎\n\n ✨ Origines\n Gelato #33 est issue du croisement entre la variété Sunset Sherbet et Thin Mint GSC (Girl Scout Cookies). Cette génétique lui a permis de devenir une référence mondiale dans l’univers du cannabis.  \n\n 🌈 Aspect\n • Têtes denses et compactes 🟣🟢\n • Couleurs vert foncé à violettes ✨\n • Couvertes d’une épaisse couche de résine givrée ❄️\n • Pistils orange vif 🧡  \n\n 👃 Arômes & Saveurs\n 🍦 Crémeux et gourmand\n 🍓 Notes de fruits rouges et d’agrumes\n 🍪 Fond biscuité et légèrement mentholé\n 🍋 Touches sucrées et citronnées  \n\n ⚡ Effets recherchés\n 😄 Euphorie et bonne humeur\n 🧠 Sensation de bien-être mental\n 🎨 Créativité et sociabilité\n 😌 Relaxation corporelle sans forcément être assommante\n 🌙 À dose plus élevée, elle peut devenir très relaxante et favoriser le repos  \n\n 🎯 Profil général\n • Hybride équilibrée (légère dominance indica selon les phénotypes)\n • THC souvent situé entre 20 % et 29 % 🔥\n • Adaptée aussi bien pour se détendre que pour profiter d’une activité calme ou entre amis.  \n\n ⭐ En résumé\n Gelato #33 est souvent appréciée pour son mélange de détente physique et d’euphorie mentale. Elle procure généralement un effet heureux, relaxant et agréable, accompagné d’un profil aromatique crémeux et sucré qui a fait sa réputation. 🍨✨',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                    ]
                }, 
                {
                    id: 'Pech sherbet 🍨',
                    flag: '🇺🇸',
                    name: 'Pech sherbet 🍨',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductPS.jpg', 
                    images:['ProductPSS.jpg'],
                    video: '',
                    description: '',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                    ]
                },
                {
                    id: 'GlueBerry 🧴',
                    flag: '🇺🇸',
                    name: 'GlueBerry 🧴',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'productGL.jpg', 
                    images:['ProductGLL.jpg'],
                    video: '',
                    description: '',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                    ]
                },
                {
                    id: 'ROCKET 🚀🔥',
                    flag: '🇺🇸',
                    name: 'ROCKET 🚀🔥',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductROCK.jpg', 
                    images:['ProductROCKK.jpg'],
                    video: '',
                    description: 'Une strain qui porte parfaitement son nom. Rocket envoie une vraie montée puissante avec un profil moderne ultra terpy, mélangeant gaz, fruits sucrés et notes crémeuses pour une fumée lourde et premium.\n\n 👃 Aromatique :\n Dès l’ouverture, ça explose avec une odeur gazeuse bien forte ⛽️ accompagnée de touches fruitées et sucrées. On retrouve aussi un fond creamy/kush qui donne beaucoup de profondeur au profil.\n\n 👅 Goût :\n En bouche, c’est intense : mélange de candy fruité 🍬, gaz lourd et légère touche tropicale qui reste longtemps après la taffe. La fumée est épaisse, propre et ultra savoureuse.\n\n 💨 Effet :\n Montée rapide et puissante 🚀 avec un gros effet euphorique au début avant une détente physique bien lourde. Une vraie frappe pour les amateurs de strains qui tapent fort.\n\n 🌿 Buds bien résineux, full terpènes et qualité premium.',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                    ]
                },
            ]
        },
                /* {
                    id: 'Pech sherbet 🍨',
                    flag: '🇺🇸',
                    name: 'Pech sherbet 🍨',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductPS.jpg', 
                    images:['ProductPSS.jpg'],
                    video: '',
                    description: '',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                    ]
                },
                {
                    id: 'GlueBerry 🧴',
                    flag: '🇺🇸',
                    name: 'GlueBerry 🧴',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'productGL.jpg', 
                    images:['ProductGLL.jpg'],
                    video: '',
                    description: '',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                    ]
                },
                {
                    id: 'ROCKET 🚀🔥',
                    flag: '🇺🇸',
                    name: 'ROCKET 🚀🔥',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductROCK.jpg', 
                    images:['ProductROCKK.jpg'],
                    video: '',
                    description: 'Une strain qui porte parfaitement son nom. Rocket envoie une vraie montée puissante avec un profil moderne ultra terpy, mélangeant gaz, fruits sucrés et notes crémeuses pour une fumée lourde et premium.\n\n 👃 Aromatique :\n Dès l’ouverture, ça explose avec une odeur gazeuse bien forte ⛽️ accompagnée de touches fruitées et sucrées. On retrouve aussi un fond creamy/kush qui donne beaucoup de profondeur au profil.\n\n 👅 Goût :\n En bouche, c’est intense : mélange de candy fruité 🍬, gaz lourd et légère touche tropicale qui reste longtemps après la taffe. La fumée est épaisse, propre et ultra savoureuse.\n\n 💨 Effet :\n Montée rapide et puissante 🚀 avec un gros effet euphorique au début avant une détente physique bien lourde. Une vraie frappe pour les amateurs de strains qui tapent fort.\n\n 🌿 Buds bien résineux, full terpènes et qualité premium.',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                    ]
                },
                {
                    id: '⛽🔥 E85 ',
                    flag: '🇺🇸',
                    name: '⛽🔥 E85',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'Product85.jpg', 
                    images:['Product855.jpg'],
                    video: '',
                    description: 'Une strain au caractère brutal, inspirée par les profils fuel/gas modernes. La E85 est connue pour son mélange intense entre douceur sucrée et puissance “diesel”, avec une vraie identité lourde et marquante.\n\n 👃 Aromatique :\n Dès l’ouverture, t’as un gros hit gazeux ⛽, avec des notes diesel bien présentes. Derrière, ça s’équilibre avec une touche sucrée et crémeuse 🍬, parfois légèrement fruitée, qui rappelle certaines génétiques type Gelato/Runtz.\n Un fond terreux et kushy vient renforcer le côté profond et “sale”.\n\n 👅 Goût :\n En bouche, c’est puissant et complexe :\n * Attaque : gazeuse et intense ⛽\n * Milieu : mélange sucré/crémeux qui adoucit le profil 🤤\n * Finale : une lourde note diesel qui reste longtemps en bouche\n Le rendu est lourd, épais et très persistant, parfait pour ceux qui aiment les profils gas bien marqués.\n\n 👀 Aspect :\n Buds denses, bien compactes, avec une grosse couche de trichomes ✨, souvent avec des nuances vert foncé et parfois violettes.\n\n 💥 Effets :\n Puissants et rapides : une montée cérébrale forte, suivie d’un effet relaxant lourd, typique des strains bien gas.\n\n 🔥 Une strain pour les amateurs de fuel pur, entre douceur moderne et puissance brute.',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                        { weight: '100g', price: 750.00 },
                    ]
                }, */
                /*  {
                    id: '🍇💜 GRAPE SODA 💜🍇',
                    flag: '🇺🇸',
                    name: '🍇💜 GRAPE SODA 💜🍇',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductGrp.png', 
                    video: 'VideoGrp.mp4',
                    description: '🔥 Une variété qui ne cherche pas à en faire trop : elle mise sur un profil terpénique riche et une détente profonde. Très appréciée des connaisseurs pour son identité marquée autour du raisin et son effet relaxant qui s’installe progressivement. 🔥\n\n ✨ Ce qu’elle apporte\n 😌 Relaxation physique prononcée\n 🧠 Apaisement mental sans agitation\n 😊 Sensation de bien-être durable\n 🌙 Effet qui invite naturellement à ralentir le rythme\n 🍽️ Peut ouvrir l’appétit en fin de session\n\n 👃 Profil aromatique\n 🍇 Raisin mûr dominant\n 🍬 Notes de bonbon au raisin\n 🌲 Fond légèrement terreux et résineux\n 🍋 Pointe d’agrumes qui apporte de la fraîcheur\n\n 💨 L’expérience\n L’effet débute généralement par une sensation de confort mental et de bonne humeur avant de laisser place à une détente corporelle plus marquée. Une variété souvent recherchée pour les moments calmes, lorsque l’objectif est simplement de profiter de la session sans être bousculé.\n\n ⭐ Pourquoi les amateurs l’apprécient ?\n 💜 Terpènes très reconnaissables\n ❄️ Têtes souvent très résineuses\n 😌 Relaxation propre et agréable\n 🍇 Signature raisin difficile à confondre\n 🔥 Un classique pour ceux qui aiment les profils sucrés et profonds sans sacrifier la puissance.',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                    ]
                }, */ 
                /*  {
                    id: '🌴🔥 CALI MIAMI 🔥🌴',
                    flag: '🇺🇸',
                    name: '🌴🔥 CALI MIAMI 🔥🌴',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductCM.png', 
                    video: 'VideoCM.mp4',
                    description: '💎 Une variété inspirée de l’univers californien et de l’ambiance tropicale de Miami. Bien que son pedigree puisse varier selon les breeders, elle est généralement appréciée pour son profil aromatique gourmand et exotique. 💎\n\n ✨ Au nez :\n 🍊 Notes d’agrumes sucrés\n 🥭 Touches de fruits tropicaux (mangue, ananas)\n 🍬 Fond légèrement candy et crémeux\n ⛽ Une pointe gazeuse typique des génétiques modernes\n\n ✨ À la dégustation :\n 💨 Fumée douce et savoureuse\n 🍭 Saveurs fruitées persistantes\n 🌴 Mélange équilibré entre fraîcheur exotique et gourmandise\n\n ✨ Effets généralement recherchés :\n 😌 Sensation de bien-être et de détente\n 😊 Humeur positive et euphorique\n 🧠 Esprit léger et créatif\n 🛋️ Relaxation progressive sans être trop écrasante\n\n 👑 Une variété qui plaît particulièrement aux amateurs de profils fruités modernes, avec des terpènes expressifs et une fumée agréable du début à la fin. Un choix souvent apprécié par ceux qui recherchent un compromis entre puissance, saveur et confort de dégustation. 🔥🌴🍬💨',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                    ]
                }, 
                 {
                    id: '🍰⛽ Cali Gascake ⛽🍰',
                    flag: '🇺🇸',
                    name: '🍰⛽ Cali Gascake ⛽🍰',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductCG.png', 
                    video: 'VideoCG.mp4',
                    description: '💎 Une variété très appréciée des amateurs de profils gassy/cake, mélangeant des notes de carburant, de vanille crémeuse et de pâtisserie sucrée. Les génétiques les plus souvent associées à Gas Cake proviennent du croisement High Octane × Jungle Cake, ce qui lui donne un profil puissant et très résineux.  \n\n ✨ Effets généralement recherchés :\n 😌 Relaxation profonde du corps\n 😊 Sensation de bien-être et d’euphorie\n 🧠 Esprit détendu sans être complètement assommé au départ\n 🍕 Ouverture de l’appétit\n 😴 Peut devenir très relaxante en fin de session  \n\n 👃 Profil aromatique :\n ⛽ Diesel / essence prononcé\n 🍰 Vanille crémeuse\n 🍬 Notes pâtissières et sucrées\n 🌿 Fond terreux et légèrement épicé  \n\n 🔥 Pour les connaisseurs :\n La Cali Gascake est souvent recherchée pour son équilibre entre la gourmandise des variétés « Cake » et la puissance terpènique des lignées « Gas ». Elle offre généralement une fumée riche, grasse et très parfumée, avec une détente marquée qui plaît aux amateurs de fleurs ou de hash haut de gamme.',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                    ]
                },  */
              /*   {
                    id: '💜👑 JEALOUSY 👑💜',
                    flag: '🇺🇸',
                    name: '💜👑 JEALOUSY 👑💜',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductGJ.png', 
                    video: 'VideoGJ.mp4',
                    description: '🔥 Une variété qui s’est imposée parmi les références modernes grâce à son mélange de puissance, d’élégance et de complexité aromatique. Récompensée à plusieurs reprises, elle est devenue un incontournable pour les amateurs de génétiques haut de gamme. 🔥\n ✨ Ce qu’elle apporte\n\n 😄 Euphorie intense et agréable\n 🧠 Montée cérébrale stimulante\n 😌 Relaxation corporelle progressive\n 🎯 Sensation de bien-être durable\n 🌙 Effet puissant qui peut devenir très relaxant en fin de session\n\n 👃 Profil aromatique\n\n ⛽ Notes gazy et funky\n 🍬 Douceur sucrée caractéristique\n 🍋 Touches d’agrumes et de fruits mûrs\n 🌲 Fond terreux et légèrement épicé\n 💜 Un profil complexe qui évolue tout au long de la dégustation\n\n 💨 L’expérience\n ealousy offre généralement une montée rapide qui apporte bonne humeur, confiance et confort mental. Progressivement, le corps se détend sans forcément provoquer un effet “couch-lock” immédiat. Son équilibre entre intensité mentale et détente physique en fait une variété très appréciée aussi bien en journée qu’en soirée selon la tolérance de chacun.\n\n ⭐ Pourquoi les connaisseurs l’apprécient ?\n\n 👑 Génétique devenue une référence moderne\n ❄️ Têtes souvent très résineuses et colorées\n ⛽ Profil terpénique riche et sophistiqué\n 🔥 Puissance souvent au rendez-vous\n 💎 Une variété reconnue pour son équilibre entre saveur, caractère et effets, capable de satisfaire aussi bien les amateurs de profils sucrés que les passionnés de notes plus gazy et complexes. 💜✨',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                    ]
                }, 
                {
                    id: '🥣🥛 CEREAL MILK 🥛🥣',
                    flag: '🇺🇸',
                    name: '🥣🥛 CEREAL MILK 🥛🥣',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductGSM.png', 
                    video: 'VideoGSM.mp4',
                    description: '🔥 Une variété devenue incontournable grâce à son profil terpénique unique, à mi-chemin entre les céréales sucrées, le lait crémeux et une puissance moderne parfaitement maîtrisée. Très appréciée des amateurs de génétiques américaines pour son équilibre entre saveur et effet. 🔥\n ✨ Ce qu’elle apporte\n\n 😄 Euphorie propre et immédiate\n 🧠 Esprit léger et positif\n 🎯 Bonne clarté mentale\n 😌 Relaxation progressive sans lourdeur excessive\n 💨 Effet équilibré qui peut accompagner aussi bien une discussion qu’un moment de détente\n\n 👃 Profil aromatique\n\n 🥣 Céréales sucrées\n 🥛 Lait crémeux\n 🍦 Notes vanillées et gourmandes\n 🍬 Fond sucré rappelant parfois les marshmallows\n 🍋 Légère touche fruitée et citronnée selon les phénotypes\n\n 💨 L’expérience\n\n Dès les premières bouffées, Cereal Milk se distingue par sa douceur et son côté gourmand. L’effet démarre souvent par une montée euphorique et agréable qui améliore l’humeur, avant d’évoluer vers une détente confortable sans écraser l’esprit. C’est cette combinaison entre puissance, saveurs et équilibre qui lui a valu sa réputation.\n ⭐ Pourquoi les connaisseurs l’apprécient ?\n\n 🥛 Terpènes ultra gourmands et reconnaissables\n ❄️ Production de résine souvent impressionnante\n 🧠 Effet à la fois lucide et relaxant\n 🍦 Profil moderne très recherché dans les génétiques américaines\n 🔥 Une variété qui a marqué toute une génération de cultivars “dessert” et qui reste aujourd’hui une référence du haut de gamme. 💎✨',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                    ]
                }, 
                {
                    id: '🍇💜 GRAPE SODA 💜🍇',
                    flag: '🇺🇸',
                    name: '🍇💜 GRAPE SODA 💜🍇',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductGS.png', 
                    video: 'VideoGS.mp4',
                    description: '🔥 Une variété qui ne cherche pas à en faire trop : elle mise sur un profil terpénique riche et une détente profonde. Très appréciée des connaisseurs pour son identité marquée autour du raisin et son effet relaxant qui s’installe progressivement. 🔥\n ✨ Ce qu’elle apporte\n\n 😌 Relaxation physique prononcée\n 🧠 Apaisement mental sans agitation\n 😊 Sensation de bien-être durable\n 🌙 Effet qui invite naturellement à ralentir le rythme\n 🍽️ Peut ouvrir l’appétit en fin de session\n\n 👃 Profil aromatique\n\n 🍇 Raisin mûr dominant\n 🍬 Notes de bonbon au raisin\n 🌲 Fond légèrement terreux et résineux\n 🍋 Pointe d’agrumes qui apporte de la fraîcheur\n\n 💨 L’expérience\n L’effet débute généralement par une sensation de confort mental et de bonne humeur avant de laisser place à une détente corporelle plus marquée. Une variété souvent recherchée pour les moments calmes, lorsque l’objectif est simplement de profiter de la session sans être bousculé.\n\n ⭐ Pourquoi les amateurs l’apprécient ?\n\n 💜 Terpènes très reconnaissables\n ❄️ Têtes souvent très résineuses\n 😌 Relaxation propre et agréable\n 🍇 Signature raisin difficile à confondre\n 🔥 Un classique pour ceux qui aiment les profils sucrés et profonds sans sacrifier la puissance.',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                    ]
                }, 
                {
                    id: '🍨🌿 GELATO #33 🌿🍨',
                    flag: '🇺🇸',
                    name: '🍨🌿 GELATO #33 🌿🍨',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductG3.png', 
                    video: 'VideoG3.mp4',
                    description: '💎🔥 Une des variétés les plus célèbres de la famille Gelato, réputée pour son équilibre entre puissance, saveurs gourmandes et effets agréables. 🔥💎\n\n ✨ Origines\n Gelato #33 est issue du croisement entre la variété Sunset Sherbet et Thin Mint GSC (Girl Scout Cookies). Cette génétique lui a permis de devenir une référence mondiale dans l’univers du cannabis.  \n\n 🌈 Aspect\n\n • Têtes denses et compactes 🟣🟢\n • Couleurs vert foncé à violettes ✨\n • Couvertes d’une épaisse couche de résine givrée ❄️\n • Pistils orange vif 🧡  \n\n 👃 Arômes & Saveurs\n\n 🍦 Crémeux et gourmand\n 🍓 Notes de fruits rouges et d’agrumes\n 🍪 Fond biscuité et légèrement mentholé\n 🍋 Touches sucrées et citronnées  \n\n ⚡ Effets recherchés\n\n 😄 Euphorie et bonne humeur\n 🧠 Sensation de bien-être mental\n 🎨 Créativité et sociabilité\n 😌 Relaxation corporelle sans forcément être assommante\n 🌙 À dose plus élevée, elle peut devenir très relaxante et favoriser le repos  \n\n 🎯 Profil général\n\n • Hybride équilibrée (légère dominance indica selon les phénotypes)\n • THC souvent situé entre 20 % et 29 % 🔥\n • Adaptée aussi bien pour se détendre que pour profiter d’une activité calme ou entre amis.  \n\n ⭐ En résumé\n Gelato #33 est souvent appréciée pour son mélange de détente physique et d’euphorie mentale. Elle procure généralement un effet heureux, relaxant et agréable, accompagné d’un profil aromatique crémeux et sucré qui a fait sa réputation. 🍨✨',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                    ]
                },  */
               /*  {
                    id: 'Lemon cherry 🇺🇸 🍋🔥',
                    flag: '🇺🇸',
                    name: 'Lemon cherry 🇺🇸 🍋🔥',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductLCR.png', 
                    video: 'VideoLCR.mov',
                    description: 'Une strain qui se démarque direct par son profil lourd et original.Lemon mélange parfaitement le côté sucré crémeux avec une petite touche gazeuse et épicée qui lui donne un vrai caractère premium.\n\n 👃 Aromatique :\n Dès l’ouverture, ça dégage une odeur puissante : notes fruitées sucrées, crème légère, avec un fond kush/gaz bien présent. Un profil complexe qui rappelle les grosses génétiques US modernes 🇺🇸\n\n 👅 Goût :\n En bouche, la Lemon est ultra savoureuse : mélange de fruits sucrés 🍬, cream douce et petite finition terreuse/gazeuse qui reste longtemps après la taffe. La fumée est épaisse, propre et très agréable.\n\n 💨 Effet :\n Bonne montée euphorique au début avant de laisser place à une détente lourde et relaxante. Une vraie strain pour les amateurs de goût et de grosse frappe 🔥\n\n 🌿 Têtes bien résineuses, terpènes puissants et qualité premium',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                    ]
                },  */
              /*   {
                    id: 'Larry bird 🍬⛽️🔥',
                    flag: '🇺🇸',
                    name: 'Larry bird 🍬⛽️🔥',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductLB.png', 
                    video: 'VideoLB.mov',
                    description: 'Une vraie pépite pour les amateurs de grosses génétiques US. Larry bird  mélange parfaitement le côté candy ultra sucré des avec un fond gazeux et crémeux qui donne une fumée lourde et premium.\n\n 👃 Aromatique :\n Une explosion de bonbon fruité dès l’ouverture 🍭🍓 avec des notes tropicales, crémeuses et un léger fond diesel/kush qui apporte beaucoup de profondeur au profil. \n\n 👅 Goût :\n En bouche, c’est ultra gourmand : candy sucré, fruits exotiques, crème vanillée et petite touche gaz qui reste collée au palais. Une fumée dense, douce et pleine de terpènes.\n\n 💨 Effet :\n Montée rapide avec un gros mood euphorique 😮‍💨 puis une détente progressive bien lourde. La frappe est puissante mais le smoke reste super agréable.\n\n 🌿 Têtes compactes, ultra résineuses, full terpènes avec un vrai profil  premium 🇺🇸🔥',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                    ]
                },  */
               /*  {
                    id: 'ROCKET 🚀🔥',
                    flag: '🇺🇸',
                    name: 'ROCKET 🚀🔥',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductRC.png', 
                    video: 'VideoRC.mov',
                    description: 'Une strain qui porte parfaitement son nom. Rocket envoie une vraie montée puissante avec un profil moderne ultra terpy, mélangeant gaz, fruits sucrés et notes crémeuses pour une fumée lourde et premium.\n\n 👃 Aromatique :\n Dès l’ouverture, ça explose avec une odeur gazeuse bien forte ⛽️ accompagnée de touches fruitées et sucrées. On retrouve aussi un fond creamy/kush qui donne beaucoup de profondeur au profil.\n\n 👅 Goût :\n En bouche, c’est intense : mélange de candy fruité 🍬, gaz lourd et légère touche tropicale qui reste longtemps après la taffe. La fumée est épaisse, propre et ultra savoureuse.\n\n 💨 Effet :\n Montée rapide et puissante 🚀 avec un gros effet euphorique au début avant une détente physique bien lourde. Une vraie frappe pour les amateurs de strains qui tapent fort.\n\n 🌿 Buds bien résineux, full terpènes et qualité premium.',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                    ]
                }, */
               /*  {
                    id: 'SHARPEI 🐶🔥',
                    flag: '🇺🇸',
                    name: 'SHARPEI 🐶🔥',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductSH.png', 
                    video: 'VideoSH.mov',
                    description: 'Une strain qui se démarque direct par son profil lourd et original. Sharpei mélange parfaitement le côté sucré crémeux avec une petite touche gazeuse et épicée qui lui donne un vrai caractère premium.\n\n 👃 Aromatique :\n Dès l’ouverture, ça dégage une odeur puissante : notes fruitées sucrées, crème légère, avec un fond kush/gaz bien présent. Un profil complexe qui rappelle les grosses génétiques US modernes 🇺🇸\n\n 👅 Goût :\n En bouche, la Sharpei est ultra savoureuse : mélange de fruits sucrés 🍬, cream douce et petite finition terreuse/gazeuse qui reste longtemps après la taffe. La fumée est épaisse, propre et très agréable.\n\n 💨 Effet :\n Bonne montée euphorique au début avant de laisser place à une détente lourde et relaxante. Une vraie strain pour les amateurs de goût et de grosse frappe 🔥\n\n 🌿 Têtes bien résineuses, terpènes puissants et qualité premium',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                    ]
                }, */
            /*     {
                    id: 'ARCHIVE RUNTZ 🍬⛽️🔥',
                    flag: '🇺🇸',
                    name: 'ARCHIVE RUNTZ 🍬⛽️🔥',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductAR.png', 
                    video: 'VideoAR.mov',
                    description: 'Une vraie pépite pour les amateurs de grosses génétiques US. Archive Runtz mélange parfaitement le côté candy ultra sucré des Runtz avec un fond gazeux et crémeux qui donne une fumée lourde et premium.\n\n 👃 Aromatique :\n Une explosion de bonbon fruité dès l’ouverture 🍭🍓 avec des notes tropicales, crémeuses et un léger fond diesel/kush qui apporte beaucoup de profondeur au profil.\n\n 👅 Goût :\n En bouche, c’est ultra gourmand : candy sucré, fruits exotiques, crème vanillée et petite touche gaz qui reste collée au palais. Une fumée dense, douce et pleine de terpènes.\n\n 💨 Effet :\n Montée rapide avec un gros mood euphorique 😮‍💨 puis une détente progressive bien lourde. La frappe est puissante mais le smoke reste super agréable.\n\n 🌿 Têtes compactes, ultra résineuses, full terpènes avec un vrai profil Runtz premium 🇺🇸🔥',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                    ]
                }, */
               /*  {
                    id: '⛽🔥 E85 ',
                    flag: '🇺🇸',
                    name: '⛽🔥 E85',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'Product85.png', 
                    video: 'Video85.mov',
                    description: 'Une strain au caractère brutal, inspirée par les profils fuel/gas modernes. La E85 est connue pour son mélange intense entre douceur sucrée et puissance “diesel”, avec une vraie identité lourde et marquante.\n\n 👃 Aromatique :\n Dès l’ouverture, t’as un gros hit gazeux ⛽, avec des notes diesel bien présentes. Derrière, ça s’équilibre avec une touche sucrée et crémeuse 🍬, parfois légèrement fruitée, qui rappelle certaines génétiques type Gelato/Runtz.\n Un fond terreux et kushy vient renforcer le côté profond et “sale”.\n\n 👅 Goût :\n En bouche, c’est puissant et complexe :\n * Attaque : gazeuse et intense ⛽\n * Milieu : mélange sucré/crémeux qui adoucit le profil 🤤\n * Finale : une lourde note diesel qui reste longtemps en bouche\n Le rendu est lourd, épais et très persistant, parfait pour ceux qui aiment les profils gas bien marqués.\n\n 👀 Aspect :\n Buds denses, bien compactes, avec une grosse couche de trichomes ✨, souvent avec des nuances vert foncé et parfois violettes.\n\n 💥 Effets :\n Puissants et rapides : une montée cérébrale forte, suivie d’un effet relaxant lourd, typique des strains bien gas.\n\n 🔥 Une strain pour les amateurs de fuel pur, entre douceur moderne et puissance brute.',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                        { weight: '100g', price: 750.00 },
                    ]
                },  */
              /*   {
                    id: '🫐🍓 SOUR BERRY BLUE 🇺🇸',
                    flag: '🇺🇸',
                    name: '🫐🍓 SOUR BERRY BLUE 🇺🇸',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductSBB.png', 
                    video: 'VideoSBB.mp4',
                    description: 'Une variété qui mélange parfaitement fraîcheur acidulée et gourmandise fruitée. La Sour Berry Blue se distingue par un profil aromatique vif, dominé par les fruits rouges et les notes “sour” bien marquées.\n\n 👃 Aromatique :\n Dès l’ouverture, t’as une explosion de baies sucrées 🫐🍓 (myrtille, fraise), accompagnées d’une acidité citronnée 🍋 qui donne ce côté “sour” bien présent.\n En fond, on retrouve une légère note terreuse et musquée, avec parfois une touche diesel qui apporte du caractère.\n\n 👅 Goût :\n En bouche, c’est ultra expressif :\n * Attaque : acidulée et fruitée, très fraîche 🤤\n * Milieu : dominance de myrtille + fruits rouges bien sucrés\n * Finale : une pointe sour/diesel qui reste en bouche et donne de la profondeur\n Le goût est équilibré entre sucré et acide, avec une belle longueur et une vraie intensité.\n\n 👀 Aspect :\n Buds compactes, bien résineuses, avec des nuances allant du vert au violet, souvent recouvertes de trichomes brillants ✨.\n\n 💥 Effets :\n Montée énergisante et euphorique, parfaite pour booster l’humeur, suivie d’un relâchement léger sans te clouer.\n\n 🔥 Une strain fraîche et punchy, idéale pour les amateurs de profils sour et fruités avec du caractère.',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                        { weight: '100g', price: 750.00 },
                    ]
                },  */
                /* {
                    id: '🌈🍬 RAINBOW BELTS 🇺🇸',
                    flag: '🇺🇸',
                    name: '🌈🍬 RAINBOW BELTS 🇺🇸',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductRBS.png', 
                    video: 'VideoRBS.mp4',
                    description: 'Une strain devenue incontournable dans les profils candy modernes. La Rainbow Belts est connue pour son mélange explosif de saveurs sucrées et acidulées, avec une vraie signature “bonbon fruité” ultra addictive.\n\n 👃 Aromatique :\n Dès l’ouverture, ça sent le bonbon acidulé 🍬🍋, avec un mix de fruits tropicaux, agrumes et une légère touche de fruits rouges.\n On retrouve aussi un fond crémeux et légèrement terreux, qui apporte de la profondeur et équilibre le côté sucré.\n\n 👅 Goût :\n En bouche, c’est une vraie explosion de saveurs :\n * Attaque : sucrée et acidulée, très candy 🤤\n * Milieu : notes de fruits tropicaux + agrumes bien marquées\n * Finale : une touche légèrement crémeuse et sucrée qui reste longtemps\n Le goût est intense, vif et persistant, avec un équilibre parfait entre sucre et acidité.\n\n 👀 Aspect :\n Buds compactes et bien résineuses, avec des teintes vertes parfois mélangées à des reflets violets, le tout recouvert d’une belle couche de trichomes brillants ✨.\n\n 💥 Effets :\n Effet équilibré : une montée euphorique et énergisante, suivie d’un relâchement progressif. Idéal pour chiller avec une bonne vibe.\n\n 🔥 Une strain ultra candy, moderne et addictive, parfaite pour les amateurs de profils fruités puissants.',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                        { weight: '100g', price: 750.00 },
                    ]
                },  */
              /*   {
                    id: '🍬🌈 RUNTZ BUTTONZ 🇺🇸',
                    flag: '🇺🇸',
                    name: '🍬🌈 RUNTZ BUTTONZ 🇺🇸',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductRBZ.png', 
                    video: 'VideoRBZ.mov',
                    description: 'Une déclinaison moderne de la famille Runtz, la Runtz Buttonz se distingue par un profil ultra gourmand et sucré, avec une vraie touche candy qui la rend immédiatement reconnaissable.\n\n 👃 Aromatique :\n Dès l’ouverture, ça tape sur des notes sucrées et fruitées 🍓🍬, très bonbon, avec un mélange de fruits rouges, de fruits tropicaux et une légère touche acidulée.\n On retrouve aussi un fond crémeux et légèrement gazeux/diesel, typique des génétiques Runtz, qui apporte de la profondeur et évite le côté trop sucré.\n\n 👅 Goût :\n En bouche, c’est une vraie explosion :\n v* Attaque : sucrée, candy, très fruitée 🤤\n * Milieu : mélange fruits rouges + tropical avec une texture douce et crémeuse\n * Finale : une légère note gazeuse et sucrée qui reste bien en bouche\n e goût est intense, propre et très persistant, parfait pour les amateurs de strains modernes à forte identité.\n\n 👀 Aspect :\n Des buds bien compactes, résineuses, avec des couleurs allant du vert clair au violet, recouvertes de trichomes brillants ✨. Un visuel très attractif, typique des variétés premium.\n\n 💥 Effets :\n Équilibrés et efficaces : une montée euphorique et stimulante suivie d’un relâchement progressif du corps. Idéal pour chiller tout en restant actif.\n 🔥 Une Runtz revisitée, ultra candy et moderne, qui combine goût, puissance et bag appeal.',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                        { weight: '100g', price: 750.00 },
                    ]
                },  */
             /*    {
                    id: '🌿 BX1 x LCG',
                    flag: '🇺🇸',
                    name: '🌿 BX1 x LCG',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductBXL.png', 
                    video: 'VideoBXL.mov',
                    description: '— Croisement d’exception\n Une génétique ultra travaillée qui mélange la stabilité du BX1 🔁 avec la puissance aromatique de la Lemon Cherry Gelato 🍋🍒. Résultat : une weed premium, propre, dense, faite pour les vrais connaisseurs.\n\n 👃 Arômes & saveurs :\n À l’ouverture, ça frappe direct — citrons frais 🍋, cerise sucrée 🍒, avec une touche crémeuse 🍦 et un fond gazeux/kush ⛽ bien présent. En bouche, c’est smooth, riche, avec une finale légèrement candy 🍬 qui reste longtemps.\n\n 👁️ Aspect :\n Buds bien compacts et résineux 💎, avec des teintes violettes foncées 💜, vert profond 🌲 et une couche de trichomes brillants ✨. Ultra collant — qualité visible direct.\n\n 💨 Effets :\n Montée rapide ⚡ avec un effet euphorique et créatif 🧠🔥, puis une descente progressive vers un côté chill et relax 😌 sans te clouer direct. Parfait équilibre entre mental et physique.\n\n ⚖️ Profil :\n Hybride équilibré ⚖️ (léger indica)\n Puissance élevée 💪 — réservé aux habitués\n\n 🏆 Verdict :\n Un croisement qui coche toutes les cases : goût, puissance, visuel 🔥. La signature LCG est bien là, boostée par un BX1 solide. Une vraie frappe premium 🚀',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                        { weight: '100g', price: 750.00 },
                    ]
                },  */
               /*  {
                    id: '🍬 White Sugar Runtz',
                    flag: '🇺🇸',
                    name: '🍬 White Sugar Runtz',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductWSR.png', 
                    video: 'VideoWSR.mov',
                    description: '— La douceur qui frappe fort\n Une version ultra gourmande de la famille Runtz, avec un profil sucré poussé à l’extrême 🍭 et une puissance bien maîtrisée. Une strain qui allie plaisir gustatif et effet solide.\n\n 👃 Arômes & saveurs :\n Dès l’ouverture, c’est une vague de sucre blanc 🍬, bonbons fruités 🍓🍇 et une touche crémeuse/vanillée 🍦. En bouche, c’est doux, rond, presque dessert, avec un léger fond gazeux ⛽ qui équilibre parfaitement.\n\n 👁️ Aspect :\n Têtes bien givrées ❄️, couvertes de trichomes blancs ✨ (d’où le “White Sugar”), avec des nuances vert clair 🌿 et parfois des reflets violets 💜. Dense, collant, visuellement très propre.\n\n 💨 Effets :\n High rapide ⚡ avec une montée euphorique 😄, suivie d’un effet relaxant 😌 qui détend sans éteindre. Parfait pour chiller tout en restant actif.\n\n ⚖️ Profil :\n Hybride équilibré ⚖️\n Puissance moyenne à élevée 💪\n\n 🏆 Verdict :\n Une Runtz version ultra sucrée et raffinée 🍬🔥, idéale pour ceux qui cherchent un goût dessert sans négliger les effets. Un vrai bonbon premium.',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                        { weight: '100g', price: 750.00 },
                    ]
                },  */
               /*  {
                    id: '🔁 BX1',
                    flag: '🇺🇸',
                    name: '🔁 BX1',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductBX.png', 
                    video: 'VideoBX.mov',
                    description: '— La base solide, version backcross\n\n BX1 (Backcross 1) c’est pas juste une strain, c’est une génétique retravaillée 🔬 pour revenir au meilleur phéno d’origine et le renforcer. Résultat : une weed stable, puissante et ultra propre.\n\n 👃 Arômes & saveurs :\n Profil bien marqué avec un mélange de terre kush 🌲, notes gazeuses ⛽, et une légère touche épicée/boisée 🌿. Selon le cut, tu peux aussi sentir un fond crémeux ou sucré 🍦 qui arrondit le tout. Goût profond, authentique, pas de chichi.\n\n 👁️ Aspect :\n Buds denses et compacts 💎, souvent bien verts avec parfois des reflets plus foncés 🌑. Couche de résine brillante ✨, texture collante — ça annonce direct la qualité.\n\n 💨 Effets :\n High solide 💥, plutôt physique et relaxant 😌, avec une montée qui peut être un peu lourde derrière les yeux 👀. Ça détend bien le corps tout en gardant un minimum de clarté mentale.\n\n ⚖️ Profil :\n Dominance indica 🌙\n Puissance élevée 💪\n\n 🏆 Verdict :\n Une génétique fiable et travaillée 🔁🔥, parfaite pour ceux qui cherchent un effet authentique, puissant et une vraie base kush. BX1, c’est le sérieux, sans compromis',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                        { weight: '100g', price: 750.00 },
                    ]
                },  */
               /*  {
                    id: '🍍🍬 TROPICAL CANDY 🌴',
                    flag: '🇺🇸',
                    name: '🍍🍬 TROPICAL CANDY 🌴',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductTropicc.png', 
                    video: 'VideoTropicc.mov',
                    description: '🔥 Description \n Tropical Candy, c’est une vraie vague exotique. Dès que t’ouvres, t’as une explosion d’arômes tropicaux : ananas, mangue, fruits de la passion… mélangés à un côté bonbon sucré bien prononcé. Une strain ultra gourmande, fraîche et addictive, avec parfois une légère touche creamy/gazzy en fond.  \n\n 🌿 Aspect  \n Des buds bien colorés, vert clair avec parfois des reflets dorés ou violets. Bien denses, recouverts de trichomes brillants qui donnent un effet givré. Pistils orange flashy — visuellement très attractif.  \n\n 😶‍🌫️ Effet  \n Un high énergisant au début : \n ➡️ boost mental, bonne humeur, créativité \n ➡️ puis une détente légère du corps sans t’alourdir  \n  Parfaite en journée ou en soirée chill, sans te mettre KO.  \n\n 🍭 Saveur  \n Tropical / sweet / fruity candy  \n Un vrai goût de cocktail exotique sucré, avec une sensation bonbon bien smooth en bouche.     \n\n ⚖️ Type  \n Hybride à tendance sativa      \n\n 💎 Conclusion  \n  Tropical Candy, c’est le délire vacances en version weed. Ultra parfumée, easy à fumer et super agréable — parfaite pour ceux qui aiment les profils fruités et sucrés bien marqués 🍍🔥🍬',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                        { weight: '100g', price: 750.00 },
                    ]
                },  */
               /*  {
                    id: '🍋 LCG 🍒🍦',
                    flag: '🇺🇸',
                    name: '🍋 LCG 🍒🍦',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductChery.png', 
                    video: 'VideoChery.mov',
                    description: '🍋 Lemon Cherry Gelato 🍒🍦\n\n 🔥 Description\n La LCG (Lemon Cherry Gelato), c’est une des strains les plus demandées en ce moment. Un vrai mélange entre fraîcheur citrus et gourmandise sucrée. À l’ouverture, t’as direct un parfum complexe : citron acidulé, cerise sucrée et une base crémeuse typique des Gelato, avec un petit fond gazzy qui donne du caractère.\n\n 🌿 Aspect\n Des buds bien compacts, ultra résineux, souvent avec des reflets violets et vert foncé. Blindés de trichomes bien blancs, ça brille fort — qualité visuelle premium directe.\n\n 😶‍🌫️ Effet\n  Un high puissant et propre :\n ➡️ montée rapide euphorique, boost mental\n ➡️ puis une détente progressive du corps sans t’endormir\n   Parfaite pour rester focus mais détendu, ou pour chill sans être KO.\n\n  🍬 Saveur\n  Citrus / cherry / creamy / gas\n  Un mix unique entre acidité citronnée et douceur fruitée, avec une touche dessert en fin de bouche.\n\n  ⚖️ Type\n Hybride équilibrée (légère tendance indica)\n\n  💎 Conclusion\n La LCG, c’est une vraie star : goût signature, effet clean et look premium. Une des strains les plus complètes du moment — validée par tous les amateurs de cali 🔥🍋🍒',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                        { weight: '100g', price: 750.00 },
                    ]
                },  */
              /*   {
                    id: '🍬 CANDY GELATO 🍦',
                    flag: '🇺🇸',
                    name: '🍬 CANDY GELATO 🍦',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductCGR.png', 
                    video: 'VideoCGR.mov',
                    description: '🍬 (Gelato x Candy genetics) 🍦\n\n 🔥 Description  \n Candy Gelato, c’est la rencontre parfaite entre la puissance de la famille Gelato et un côté bonbon ultra sucré. Dès que t’ouvres le pot, t’es frappé par une odeur gourmande de candy, fruits sucrés et crème vanillée, avec un fond légèrement gazzy qui rappelle les meilleures cali.    \n\n 🌿 Aspect  \n Des têtes bien denses et résineuses, avec des nuances vert clair parfois tirant vers le violet. Blindées de trichomes brillants qui collent aux doigts, avec des pistils orange vif — visuellement c’est très propre, très premium.\n\n 😶‍🌫️ Effet  \n Un high équilibré mais bien présent : \n  ➡️ montée euphorique et mentale au début \n ➡️ puis relaxation du corps progressive \n Ça te met bien sans te casser, parfait pour chill, social ou même après l’entraînement pour relâcher la pression.  \n\n 🍭 Saveur  \n Ultra sweet / candy / creamy \n Un vrai goût de bonbon fruité avec une touche gelato bien crémeuse, légèrement gazeuse en fin de bouche.  \n\n  ⚖️ Type  \n Hybride (légère dominance indica)  \n\n  💎 Conclusion  \n Candy Gelato, c’est une valeur sûre : grosse saveur, belle puissance et un rendu clean. Parfaite pour ceux qui aiment les strains sucrées avec du caractère 🍬🔥',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                        { weight: '100g', price: 750.00 },
                    ]
                },  */
                /* {
                    id: '🌸 MOCHI 🍡',
                    flag: '🇺🇸',
                    name: '🌸 MOCHI 🍡',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductMoch.png', 
                    video: 'VideoMoch.mov',
                    description: '🌸 (Gelato 47 x Mochi Gelato) 🍡\n\n 🔥 Description \n La Mochi, c’est une vraie pépite californienne, issue de la famille Gelato. Elle se démarque direct avec un profil ultra gourmand et raffiné. À l’ouverture, t’as une explosion de notes sucrées et crémeuses, avec un mélange subtil de vanille, fruits rouges et une touche légèrement terreuse qui vient équilibrer le tout.  \n\n 🌿 Aspect  \n Des buds bien compacts, denses comme il faut, avec des teintes vert clair à violet, recouvertes d’une couche épaisse de trichomes bien blancs. Les pistils orangés ressortent fort, signe d’une qualité bien travaillée.  \n\n 😶‍🌫️ Effet  \n Un high smooth mais puissant : ça commence par une montée euphorique, légère dans la tête, puis ça glisse vers une détente corporelle bien chill. Parfait pour se poser sans être complètement éclaté. Idéal fin de journée ou après un gros training.  \n\n  🍬 Saveur  \n  Sucré / creamy / dessert vibes \n Un vrai goût de mochi japonais avec une touche gelato — doux, légèrement fruité, et super agréable en bouche.  \n\n ⚖️ Type  \n Hybride équilibrée (légère dominance indica)  \n\n  💎 Conclusion  \n  La Mochi, c’est clairement une strain premium pour les amateurs de saveurs fines et de high clean. Pas la plus violente, mais une des plus agréables à fumer. Un vrai délire gourmand 🍡🔥',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                        { weight: '100g', price: 750.00 },
                    ]
                },  */
              /*   {
                    id: '🌸 PINK RUNTZ 💎',
                    flag: '🇺🇸',
                    name: '🌸 PINK RUNTZ 💎',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductPK.png', 
                    video: 'VideoPK.mov',
                    description: 'Une des strains les plus reconnues de la nouvelle génération, célèbre pour son profil candy ultra gourmand et son équilibre parfait. \n\n 🍭 Profil aromatique \n La Pink Runtz offre une explosion de saveurs sucrées et fruitées, avec des notes de bonbon, fruits tropicaux et une légère touche crémeuse. En bouche, c’est rond, doux et très persistant, avec une vraie signature “candy” qui reste longtemps 🍓🍍\n\n 🌿 Aspect\n Des buds bien denses et givrés, recouverts de trichomes brillants, avec des nuances de vert clair et parfois rosées, accompagnées de pistils orangés.\n\n 😮‍💨 Effet\n Un high équilibré et agréable, qui commence par une sensation euphorique et légère avant de s’installer progressivement dans un état de détente sans être trop lourd.\n\n 💎 Signature\n Une strain moderne incontournable, parfaite pour ceux qui recherchent le goût avant tout, avec une qualité aromatique marquée et reconnaissable.',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                        { weight: '100g', price: 700.00 },
                    ]
                },  */
               
             /*    {
                    id: '🖤 BLACK RUNTZ 🍬',
                    flag: '🇺🇸',
                    name: '🖤 BLACK RUNTZ 🍬',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductBlackR.png', 
                    video: 'VideoBlackR.mp4',
                    description: '🎱 EXCLUSIVITÉ SOMBRE • CALI CANDY 🇺🇸 \n\n Le phénotype le plus obscur et recherché de la famille Runtz. La Black Runtz se distingue par ses teintes ténébreuses et son profil terpénique explosif, bien plus profond et lourd que la Runtz classique. \n\n 👀 Aspect : Buds compacts, violet très foncé (presque noir), contrastant avec des pistils orange fluo et une résine brillante.\n 👃 Arômes : Bonbon acidulé, fruits des bois, avec un fond terreux et gazeux très prononcé.\n 👅 Goût : Frappe fruitée Zkittlez en première ligne, finition lourde et crémeuse Gelato.\n 🧠 Effets : Montée euphorique rapide (High clair) qui bascule rapidement vers un body-high profond et apaisant. Puissance validée.',                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                        { weight: '100g', price: 750.00 },
                    ]
                },              
                */
        
        {
            id: 'FROZEN',
            name: 'FROZEN 🇲🇦🍯',
            type: 'Frozen',
            quality: 'FROZEN 🇲🇦🍯',
            image: 'CategFrozen.png', // Ton image de catégorie Weed

            products: [
                {
                    id: 'L\'Etoile ✨',
                    flag: '🇺🇸',
                    name: 'L\'Etoile ✨',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductEti.jpg', 
                    video: '',
                    description: '',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 120.00 },
                        { weight: '25G', price: 250.00 },
                    ]
                },
                 {
                    id: '🫒❄️🔥 OLIVE 🔥❄️🫒',
                    flag: '🇲🇦',
                    name: '🫒❄️🔥 OLIVE 🔥❄️🫒',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Frozen',
                    image: 'ProductOl.jpg', 
                    video: 'VideoOl.mp4',
                    description: '🫒❄️🔥 SÉLECTION PREMIUM 🔥❄️🫒 \n 💎 Une sélection d’olives de Frozen, Static et Double Static.\n\n 🌿 Variétés disponibles :\n 🍬 Double Static – Profil riche et résineux, très apprécié pour son intensité aromatique.\n 🫐 Gelato Blue – Notes crémeuses et fruitées avec une touche sucrée de baies.\n 🍌 Pink Banana Runtz – Saveurs exotiques de banane et de bonbon fruité.\n 🥷 Ninja Runtz – Profil gourmand, sucré et légèrement crémeux.\n 💜 Purple Kush Cali Connection – Arômes terreux et épicés, avec une touche de raisin.\n 🍒 Lemon Cherry Gelato – Mélange explosif de citron, de cerise et de crème.\n 🌴 Jungle Cookie – Notes sucrées et biscuitées avec une pointe tropicale.\n 🍒🍋 Lemon Cherry Runtz – Alliance parfaite entre agrumes, cerise et bonbon.\n 🍈 Melonade – Saveurs fraîches de melon et d’agrumes.\n 💜 Purple Indica Cali Connection – Profil profond, floral et fruité.\n 🍊 Orange Bud – Arômes d’orange fraîche et d’agrumes sucrés.\n 🍬 Runtz – Référence incontournable aux saveurs de bonbons fruités.\n 🍊 Mandarin Cookie – Mélange gourmand de mandarine et de biscuit sucré.\n 💎 Static Full Melt – Résine d’exception, extrêmement riche en terpènes et à la texture fondante.\n 🍰 Hashringan Ice Cream Cake – Profil crémeux et pâtissier, aux notes de vanille et de dessert gourmand.\n 🥤 Hashringan Fanta Juice – Explosion d’agrumes et de fruits sucrés, avec une touche tropicale rafraîchissante.\n 🍇 Hashringan Grape Juicy – Saveurs intenses de raisin et de fruits rouges, au profil sucré et gourmand.\n 🏁 Fin du Game Purple Kush – Notes profondes de terre, d’épices et de raisin, avec un caractère puissant et authentique.\n\n 💎 Une collection pensée pour les véritables amateurs de résines modernes et de profils terpéniques d’exception. 🫒❄️🔥',
                    
                    // 👇 NOUVELLE STRUCTURE DE VARIANTES
                    variantTitle: 'Choisis ta variété 🫒 :',
                    jars: [
                        { name: 'Double Static', emoji: '🍬', colorClass: 'style-gold' },
                        { name: 'Gelato Blue', emoji: '🫐', colorClass: 'style-blue' },
                        { name: 'Pink Banana Runtz', emoji: '🍌', colorClass: 'style-yellow' },
                        { name: 'Ninja Runtz', emoji: '🥷', colorClass: 'style-glue' },
                        { name: 'Purple Kush CC', emoji: '💜', colorClass: 'style-purple' },
                        { name: 'Lemon Cherry Gelato', emoji: '🍒', colorClass: 'style-cherry' },
                        { name: 'Jungle Cookie', emoji: '🌴', colorClass: 'style-green' },
                        { name: 'Lemon Cherry Runtz', emoji: '🍋', colorClass: 'style-passion' },
                        { name: 'Melonade', emoji: '🍈', colorClass: 'style-melon' },
                        { name: 'Purple Indica CC', emoji: '💜', colorClass: 'style-indigo' },
                        { name: 'Orange Bud', emoji: '🍊', colorClass: 'style-orange' },
                        { name: 'Runtz', emoji: '🍬', colorClass: 'style-pink' },
                        { name: 'Mandarin Cookie', emoji: '🍊', colorClass: 'style-brown' },
                        { name: 'Static Full Melt', emoji: '💎', colorClass: 'style-silver' },
                        { name: 'Hashringan Ice Cream', emoji: '🍰', colorClass: 'style-white' },
                        { name: 'Hashringan Fanta', emoji: '🥤', colorClass: 'style-fanta' },
                        { name: 'Hashringan Grape', emoji: '🍇', colorClass: 'style-grape' },
                        { name: 'Fin du Game Purple', emoji: '🏁', colorClass: 'style-dark' }
                    ],

                    tarifs: [
                        { weight: '1 olive', price: 90.00 },
                    ]
                },
               /*   {
                    id: '🍓 SINFUL STRAWBERRY',
                    flag: '🇲🇦',
                    name: '🧊🍓 SINFUL STRAWBERRY',
                    farm: 'HASBULLA FARM 🇲🇦',
                    promoEligible: true,
                    type: 'Frozen',
                    image: 'ProductSin.png', 
                    video: 'VideoSin.mp4',
                    description: '🧊🍓 Sinful Strawberry — Hasbulla Farm\n 🤯🤯🥶💆‍♂️🔥🔥☄️🌪️⭐️💨\n\n 🔥Pour les connaisseurs 🔥\n\n 🧬 Génétique : Stuntz × Strawberry Poptartz\n ⚖️ Hybride équilibrée\n 🍓 Arômes dominants : fraise mûre, fruits rouges\n 🍬 Notes gourmandes de bonbon et de dessert\n 🍦 Fond crémeux avec une légère touche épicée\n\n ✨ Effets mentaux\n\n 😄 Euphorie agréable\n 😊 Bonne humeur durable\n 🗣️ Effet sociable et convivial\n 🎨 Créativité légère à modérée\n 🧠 Relaxation mentale sans lourdeur excessive\n\n 🛋️ Effets physiques\n\n 😌 Détente progressive du corps\n 💆 Sensation de relâchement musculaire\n 🌊 Bien-être général\n\n ⚡ Montée plus rapide\n 🔥 Effets plus concentrés\n 🍓 Saveurs fruitées plus prononcées\n 😌 Relaxation corporelle \n 🌬️ Expérience aromatique plus riche grâce à la concentration des terpènes\n\n Résumé :\n 🍓 + 🍬 + 😄 + 😌 + 🧊\n\n Une variété au profil très gourmand, avec une dominante fraise sucrée, une montée joyeuse et sociable, suivie d’une détente physique confortable sans être excessivement assommante. ✨🌿',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 120.00 },
                        { weight: '25G', price: 250.00 },
                    ]
                }, */
              /*   {
                    id: '🥭 FORBIDDEN MANGO',
                    flag: '🇲🇦',
                    name: '🥭 FORBIDDEN MANGO',
                    farm: 'HASBULLA FARM 🇲🇦',
                    promoEligible: true,
                    type: 'Frozen',
                    image: 'ProductForbi.png', 
                    video: 'VideoForbi.mov',
                    description: 'Une pépite glacée qui respire l’exotisme pur. La Forbidden Mango en version frozen dévoile un profil aromatique explosif, dominé par une mangue bien mûre, sucrée et juteuse, accompagnée de notes tropicales intenses et d’une légère touche crémeuse en fond.\n\n Visuellement, on est sur une texture propre, brillante, avec cette finition légèrement collante et sablée typique d’un frozen bien travaillé. La couleur oscille entre un doré clair et des reflets légèrement orangés, signe d’une extraction fraîche et riche en terpènes.\n\n Au niveau du goût, c’est une vraie claque : une entrée sucrée et fruitée, suivie d’un côté plus profond, presque résineux, qui vient équilibrer l’ensemble. La mangue reste dominante du début à la fin, avec une longueur en bouche incroyable.\n\n Les effets sont puissants mais maîtrisés : une montée euphorique et relaxante, idéale pour se poser tout en gardant un esprit léger. Parfait pour les amateurs de profils fruités haut de gamme avec une vraie identité.\n 🔥 Un frozen premium, ultra terpénique, qui met la mangue à l’honneur dans sa version la plus pure.',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 120.00 },
                        { weight: '25G', price: 250.00 },
                    ]
                }, */
           /*      {
                    id: 'TIRAMISU 🍰☕🍫✨',
                    flag: '🇲🇦',
                    name: 'TIRAMISU 🍰☕🍫✨',
                    farm: 'HASBULLA FARM 🇲🇦',
                    promoEligible: true,
                    type: 'Frozen',
                    image: 'ProductTir.png', 
                    video: 'VideoTir.mov',
                    description: 'Une pièce d’exception dans la gamme. Cette Tiramisu en version frozen se distingue clairement par un niveau supérieur, avec un travail propre et une richesse aromatique rare. On est sur un produit premium, pensé pour les amateurs de profils gourmands puissants et raffinés.\n\n 👃 Aromatique :\n La strain Tiramisu offre une signature unique orientée dessert. Dès l’ouverture, tu retrouves un mélange profond de café doux ☕, cacao intense 🍫 et crème sucrée 🍰.\n À ça s’ajoutent des notes vanillées, légèrement biscuitées, avec parfois une touche subtile de noisette/amande.\n En fond, un léger côté terreux/kush vient équilibrer le côté sucré et apporter de la profondeur. C’est riche, propre et parfaitement maîtrisé.\n\n 👅 Goût :\n Une vraie expérience gustative complète :\n * Attaque : crémeuse, douce et sucrée 🤤\n * Milieu : le café et le chocolat prennent le dessus, bien ronds et enveloppants\n * Finale : une note biscuitée/lactée qui reste longtemps en bouche, avec une belle persistance\n\n Le rendu est dense, gourmand et équilibré, jamais écœurant, avec une vraie identité “dessert”.\n\n 👀 Aspect :\n Texture sablée ultra fine ✨, légèrement grasse et brillante, avec une couleur beige clair à doré premium 🟡. Une extraction fraîche, riche en terpènes, typique d’un frozen haut niveau.\n\n💥 Effets :\n Puissants et enveloppants 😮‍💨 : une montée relaxante avec une sensation de bien-être immédiate, idéale pour se poser et profiter.\n\n 🔥 LE PREMIUM DE LA GAMME 💎\n Une strain qui sort clairement du lot par son profil gourmand et sa complexité. La Tiramisu, c’est le dessert version haut de gamme, transformé en expérience complète.',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 130.00 },
                        { weight: '25G', price: 270.00 },
                    ]
                }, */
                /* {
                    id: '☣️ TOXIC CHERRY',
                    flag: '🇲🇦',
                    name: '☣️ TOXIC CHERRY',
                    farm: 'HASBULLA FARM 🇲🇦',
                    promoEligible: true,
                    type: 'Frozen',
                    image: 'ProductTox.png', 
                    video: 'VideoTow.mov',
                    description: 'Une variété au caractère explosif qui mélange parfaitement gourmandise et agressivité aromatique. La Toxic Cherry propose un profil intense dominé par une cerise noire bien mûre, presque sirupeuse, accompagnée de notes légèrement acidulées et d’un fond “toxic” aux accents chimiques, gazeux et légèrement amers.\n\n Visuellement, on est sur un frozen ultra propre, avec une texture sablée et grasse, brillante, signe d’une extraction fraîche blindée en terpènes. Les teintes varient entre beige doré et reflets légèrement rosés, typiques des profils fruités bien travaillés.\n\n À la dégustation, c’est une vraie claque : une attaque sucrée et fruitée sur la cerise, rapidement rattrapée par une puissance plus brute, presque métallique/gaz, qui donne toute sa signature à la strain. L’équilibre entre le côté candy et le côté “toxique” rend le produit unique.\n\n Les effets sont puissants et rapides : une montée cérébrale marquée, suivie d’un relâchement profond. Idéal pour les amateurs de produits avec du caractère et une vraie intensité.\n 🔥 Un frozen sombre et addictif, entre cerise sucrée et puissance chimique. Réservé aux connaisseurs.',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 120.00 },
                        { weight: '25G', price: 250.00 },
                    ]
                }, */
               /*  {
                    id: '🧊 SAVAGE LYCHEE',
                    flag: '🇲🇦',
                    name: '🧊 SAVAGE LYCHEE',
                    farm: 'HASBULLA FARM 🇲🇦',
                    promoEligible: true,
                    type: 'Frozen',
                    image: 'ProductSav.png', 
                    video: 'VideoSav.mov',
                    description: 'Une variété rare au profil exotique ultra raffiné. La Savage Lychee se distingue par une signature aromatique unique, dominée par le litchi sucré et floral, accompagné de nuances tropicales légères et d’une touche légèrement acidulée qui vient réveiller l’ensemble.\n\n Visuellement, on est sur un frozen très propre, à la texture sablée et légèrement huileuse, avec des reflets clairs tirant vers le beige doré. Une finition brillante qui témoigne d’une extraction fraîche et d’un produit riche en terpènes.\n\n En bouche, l’expérience est élégante et intense : une attaque douce, sucrée et florale typique du litchi, suivie d’une profondeur plus crémeuse avec une pointe fraîche presque juteuse. Le goût reste longtemps en bouche, avec une signature aromatique vraiment différente des profils classiques.\n\n Les effets sont équilibrés et progressifs : une montée légère et euphorique, accompagnée d’un relâchement du corps sans lourdeur. Parfait pour une dégustation chill avec un produit qui sort du lot.',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 120.00 },
                        { weight: '25G', price: 250.00 },
                    ]
                }, */
              /*   {
                    id: '🍍 DIRTY PINEAPPLE',
                    flag: '🇲🇦',
                    name: '🍍 DIRTY PINEAPPLE',
                    farm: 'HASBULLA FARM 🇲🇦',
                    promoEligible: true,
                    type: 'Frozen',
                    image: 'ProductDir.png', 
                    video: 'VideoDir.mov',
                    description: 'Une variété au caractère bien marqué qui mélange parfaitement fruité exotique et puissance brute. La Dirty Pineapple propose un profil aromatique intense, dominé par un ananas bien mûr et juteux, accompagné de notes légèrement acidulées et d’un fond plus “dirty” aux accents gazeux et terreux.\n\n Visuellement, on est sur un frozen propre et lumineux, avec une texture sablée légèrement grasse, témoignant d’une extraction fraîche riche en terpènes. Les couleurs tirent vers un beige doré avec des reflets brillants, signe d’une qualité premium.\n\n À la dégustation, l’attaque est vive et fruitée avec une explosion d’ananas sucré, rapidement suivie par un côté plus profond et complexe, presque diesel, qui vient donner toute son identité à la strain. L’équilibre entre le sucré tropical et le côté “sale” fait toute la différence.\n\n Les effets sont puissants et rapides : une montée cérébrale stimulante suivie d’un relâchement progressif du corps. Idéal pour ceux qui cherchent un produit à la fois savoureux et efficace.\n 🔥 Un frozen exotique avec une vraie personnalité, entre fraîcheur tropicale et puissance underground.',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 120.00 },
                        { weight: '25G', price: 250.00 },
                    ]
                },
                {
                    id: '🍓 SINFUL STRAWBERRY',
                    flag: '🇲🇦',
                    name: '🍓 SINFUL STRAWBERRY',
                    farm: 'HASBULLA FARM 🇲🇦',
                    promoEligible: true,
                    type: 'Frozen',
                    image: 'ProductSin.png', 
                    video: 'VideoSin.mov',
                    description: 'Une sélection frozen ultra gourmande qui met la fraise au centre de tout. La Sinful Strawberry dévoile un profil aromatique riche et séduisant, avec une fraise sucrée bien mûre, presque confiturée, accompagnée de notes candy et d’une légère touche crémeuse en arrière-plan.\n\n Visuellement, on est sur un produit propre et brillant, avec une texture sablée et légèrement grasse, signe d’une extraction fraîche parfaitement maîtrisée. Les teintes vont du beige clair au doré avec des reflets subtils, preuve d’un frozen chargé en terpènes.\n\n À la dégustation, c’est une explosion fruitée : une attaque douce et sucrée qui rappelle la fraise fraîche, suivie d’une profondeur plus ronde et légèrement lactée. Le goût reste intense en bouche avec une belle longueur, typique des produits premium bien travaillés.\n\n Les effets sont équilibrés : une montée relaxante accompagnée d’une sensation de bien-être et de légèreté mentale, parfaite pour chiller sans être trop lourd.\n 🔥 Un frozen sucré et addictif, pensé pour les amateurs de profils fruités et gourmands avec une vraie signature.',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 120.00 },
                        { weight: '25G', price: 250.00 },
                    ]
                }, */
                /* {
                    id: '🥭 FORBIDDEN MANGO',
                    flag: '🇲🇦',
                    name: '🥭 FORBIDDEN MANGO',
                    farm: 'HASBULLA FARM 🇲🇦',
                    promoEligible: true,
                    type: 'Frozen',
                    image: 'ProductForbi.png', 
                    video: 'VideoForbi.mov',
                    description: 'Une pépite glacée qui respire l’exotisme pur. La Forbidden Mango en version frozen dévoile un profil aromatique explosif, dominé par une mangue bien mûre, sucrée et juteuse, accompagnée de notes tropicales intenses et d’une légère touche crémeuse en fond.\n\n Visuellement, on est sur une texture propre, brillante, avec cette finition légèrement collante et sablée typique d’un frozen bien travaillé. La couleur oscille entre un doré clair et des reflets légèrement orangés, signe d’une extraction fraîche et riche en terpènes.\n\n Au niveau du goût, c’est une vraie claque : une entrée sucrée et fruitée, suivie d’un côté plus profond, presque résineux, qui vient équilibrer l’ensemble. La mangue reste dominante du début à la fin, avec une longueur en bouche incroyable.\n\n Les effets sont puissants mais maîtrisés : une montée euphorique et relaxante, idéale pour se poser tout en gardant un esprit léger. Parfait pour les amateurs de profils fruités haut de gamme avec une vraie identité.\n 🔥 Un frozen premium, ultra terpénique, qui met la mangue à l’honneur dans sa version la plus pure.',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 120.00 },
                        { weight: '25G', price: 250.00 },
                    ]
                }, */
                /*  {
                    id: 'Chocolato 🍪',
                    flag: '🇲🇦',
                    name: 'Chocolato 🍪',
                    farm: 'CaliPlate ⚜️',
                    promoEligible: true,
                    type: 'Frozen',
                    image: 'ProductChoco.png', 
                    video: 'VideoChoco.mov',
                    description: '🔥 Description\n Le frozen sift Chocolato par CaliPlate, c\'est le summum de l\'exclusivité. Une extraction ultra-premium réservée à l\'élite des connaisseurs. CaliPlate signe ici une véritable masterclass avec un produit d\'une rareté et d\'une pureté phénoménales, justifiant son positionnement top-shelf.\n\n 👃 Arômes & Saveurs\n Un profil terpénique lourd, sombre et incroyablement gourmand. Grosse attaque de cacao brut et de chocolat fondant 🍫, parfaitement adoucie par la rondeur crémeuse et vanillée propre aux génétiques Gelato. Une fumée épaisse et onctueuse qui laisse un goût de dessert luxueux sur le palais.\n\n 👀 Aspect\n Visuel hors norme. Une résine translucide, brillante, qui se rapproche presque d\'une texture cireuse ou de caviar. Le tri des trichomes est millimétré, sans aucun déchet végétal. Ça fond et bulle violemment à la moindre source de chaleur (Full Melt absolu).\n\n 😮‍💨 Effet\n Une frappe dévastatrice. La montée cérébrale est instantanée et te scotche littéralement, suivie très vite d\'un body-stone profond, presque narcotique. Réservé aux tolérances élevées vu la concentration massive en principes actifs.\n\n 💎 Conclusion\n Le Chocolato de CaliPlate, c\'est le caviar du Frozen Sift. Une qualité stratosphérique pour un rendement d\'extraction minuscule. L\'expérience ultime pour les palais les plus exigeants qui ne veulent que le meilleur.',
                    tarifs: [
                        { weight: '5G', price: 150.00 },
                        { weight: '10G', price: 250.00 },
                    ]
                }, */
              /*      {
                    id: 'Peach Lassi 🍑',
                    flag: '🇲🇦',
                    name: 'Peach Lassi 🍑',
                    farm: 'La Source x Dirham Farm ⚗️',
                    promoEligible: true,
                    type: 'Frozen',
                    image: 'ProductPea.png', // ⚠️ A changer
                    video: 'VideoPea.mov',
                    description: '🔥 Description \n Un frozen sift premium issu du travail précis de La Source x Dirham Farm. Avec la Peach Lassi, on est sur une génétique ultra gourmande qui mélange douceur fruitée et profondeur crémeuse. \n\n 🌿 Profil aromatique \n Dès l’ouverture, ça frappe avec des notes intenses de pêche mûre, accompagnées d’une touche crémeuse et sucrée qui rappelle la célèbre boisson indienne Lassi. Une terpène profile très dessert / fruit exotique, rond et puissant. \n\n ✨ Texture & aspect \n Une résine claire et sableuse, riche en trichomes, qui devient huileuse et collante sous la chaleur. La qualité du sift montre un travail de filtration propre avec une matière très aromatique. \n\n 😶‍🌫️ Effet \n Un effet relaxant et euphorique, qui commence par une montée douce et joyeuse avant de laisser place à une détente profonde. Parfait pour apprécier toute la richesse des saveurs. \n\n 💎 Conclusion \n  Un frozen sift gourmand et premium, idéal pour les amateurs de hash fruité et crémeux. Une signature terpène peach dessert qui se démarque clairement.',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 120.00 },
                        { weight: '25G', price: 250.00 },
                        { weight: '50G', price: 400.00 },
                        { weight: '100G', price: 750.00 },
                    ]
                }, */ 
               /*     {
                    id: 'Exotic Thai 🌴',
                    flag: '🇲🇦',
                    name: 'Exotic Thai 🌴',
                    farm: 'La Source x Dirham Farm ⚗️',
                    promoEligible: true,
                    type: 'Frozen',
                    image: 'ProductExo.png', // ⚠️ A changer
                    video: 'VideoExo.mov',
                    description: '🔥 Description \n  Un frozen sift d’exception né de la collaboration entre La Source et Dirham Farm, deux noms qui travaillent la matière avec précision. Cette version issue de la Exotic Thai apporte un profil aromatique rare et très recherché, inspiré des génétiques asiatiques. \n\n 🌿 Profil aromatique \n  Des notes exotiques et tropicales qui explosent dès l’ouverture : mangue mûre, agrumes sucrés et une légère touche florale typique des variétés Thai. En bouche, le hash développe un côté crémeux et légèrement épicé, avec une longueur très propre. \n\n  ✨ Texture & aspect \n Un frozen sift ultra propre, texture sable doré qui devient huileuse à la chaleur. La matière est riche en résine, brillante et très parfumée — signe d’un travail de filtration précis et d’une génétique de qualité. \n\n  😶‍🌫️ Effet \n  Un high clair et euphorique, qui commence par une montée cérébrale énergisante typique des strains Thai, avant de se transformer en une détente douce et agréable. Parfait pour profiter de l’arôme et de l’expérience complète. \n\n 💎 Conclusion \n  Un produit exotic et premium, réservé aux amateurs de résine fine qui recherchent quelque chose de différent du classique gas californien. Ici on est sur une signature aromatique tropicale rare.',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 120.00 },
                        { weight: '25G', price: 250.00 },
                        { weight: '50G', price: 400.00 },
                        { weight: '100G', price: 750.00 },
                    ]
                },  */
            /*        {
                    id: '🍋🦞 LEMON LOBSTER',
                    flag: '🇲🇦',
                    name: '🍋🦞 LEMON LOBSTER',
                    farm: 'JCVD Farm 🎹',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductLob.png', // ⚠️ A changer
                    video: 'VideoLob.mov',
                    description: '💎 Type : Frozen Sift premium \n 🌿 Farm : JCVD \n 🧬 Strain : Lemon Lobster   \n\n 🔥 Description  \n\n La Lemon Lobster, c’est une frappe ultra propre signée JCVD Farm. \n Dès l’ouverture, ça explose au nez : une vague citronnée puissante, zestée, presque acidulée, avec un fond gaz subtil qui rappelle les meilleures génétiques US.  \n\n On est sur un frozen clair, travaillé proprement, texture sableuse fine, riche en trichomes. Ça colle, ça brille, ça sent fort rien à voir avec du jaune classique.   \n\n 👃 Terpènes & Saveur \n  • 🍋 Citron frais / zeste intense \n  • ⛽ Légère touche gaz en fond \n  • 🌬️ Finale propre, légèrement sucrée  \n\n  En bouche, c’est frais, citronné, avec une petite amertume noble qui reste longtemps. Pas écœurant, pas lourd juste précis et qualitatif.   \n\n  🧠 Effet  \n\n   Effet clean, progressif, qui monte doucement à la tête avant de détendre le corps. \n   Parfait pour ceux qui aiment sentir la puissance sans être assommés direct.  \n\n  ✔️ Bonne clarté mentale \n   ✔️ Relaxation agréable \n  ✔️ High équilibré mais présent   \n\n  🏆 Verdict    \n  La Lemon Lobster JCVD, c’est du frozen travaillé sérieusement.  \n  Profil citron dominant, qualité premium, effet propre.  \n  Un produit pour connaisseurs qui cherchent du goût avant tout',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 120.00 },
                        { weight: '25G', price: 250.00 },
                        { weight: '50G', price: 400.00 },
                        { weight: '100G', price: 750.00 },
                    ]
                },  */
                  
                  /*  {
                    id: 'GRAPENANA 🍫 🍯',
                    flag: '🇲🇦',
                    name: 'GRAPENANA 🍫 🍯',
                    farm: 'NOUS C’EST LE GOUT 🍝',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductGrapa.png', // ⚠️ A changer
                    video: 'VideoGrapa.mp4',
                    description: 'Une signature construite autour du goût 🤤 \n\n Grapenana, c’est une base fruitée profonde qui mêle des nuances de raisin mûr et de banane veloutée, relevée par une touche agrumes gaz qui apporte du relief et une sensation presque pétillante.\n\n L’équilibre 60% indica / 40% sativa donne un caractère posé mais vivant.\n Une structure qui commence ronde et douce, puis qui laisse place à une énergie subtile et maîtrisée.\n\n FROZEN porte bien son nom 🧊 \n  une attaque fraîche, nette, presque glaciale…\n puis une montée aromatique qui s’installe et marque les esprits.\n\n Ici, tout est pensé autour du profil.\n Pas de hasard. Pas de compromis.\n\n FARM : NOUS C’EST LE GOÛT PAR LES CONNAISSEURS POUR LES CONNAISSEURS 🍯',
                    tarifs: [
                        { weight: '5G', price: 60.00 },
                        { weight: '10G', price: 100.00 },
                        { weight: '50G', price: 350.00 },
                        { weight: '100G', price: 650.00 },
                    ]
                },  */
                /* {
                    id: '🥵 FROZEN SIFT 🍫',
                    flag: '🇲🇦',
                    name: '🥵 FROZEN SIFT 🍫',
                    farm: 'HLA SOURCE x DHF 💥',
                    promoEligible: true,
                    type: 'Frozen',
                    image: 'ProductFroz2.png', // ⚠️ A changer
                    videos: ['VideoFrozs.mov','VideoFrozs2.mov','VideoFrozs3.mov'],
                    description: 'Votre meilleur farm du moment plusieurs strains disponible 🍯',

                       // 👇 NOUVELLE STRUCTURE
                       variantTitle: 'Saveurs Frozen ❄️ :',
                       jars: [
                         { name: 'SOUR CHERRY', emoji: '🍒', colorClass: 'style-cherry' }, // <-- Modifié
                         { name: 'ACAPULCO GOLD', emoji: '💛', colorClass: 'style-gold' },   // <-- Modifié
                       ],

                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 120.00 },
                        { weight: '50G', price: 400.00 },
                        { weight: '100G', price: 750.00 },
                    ]
                }, */
              /*   {
                    id: '🧊 FROZEN',
                    flag: '🇲🇦',
                    name: '🧊 FROZEN',
                    farm: 'HASBULLA FARM 🇲🇦',
                    promoEligible: true,
                    type: 'Frozen',
                    image: 'ProductFroz.png', // ⚠️ A changer
                    video: 'VideoFroz.mp4',
                    description: 'Votre meilleur farm du moment plusieurs strains disponible 🍯',

                       // 👇 NOUVELLE STRUCTURE
                       variantTitle: 'Saveurs Frozen ❄️ :',
                       jars: [
                           { name: 'Carbon fiber', emoji: '🥵❤️‍🔥', colorClass: 'style-orange' },
                       ],

                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 120.00 },
                        { weight: '50G', price: 400.00 },
                        { weight: '100G', price: 750.00 },
                    ]
                }, */
            ]
        },
        {
            id: '3xFiltre',
            name: '3X FILTRE PREMIUM 🇲🇦🍫',
            type: '3xFiltre',
            quality: '3X FILTRE PREMIUM 🇲🇦🍫',
            image: 'Categ3X.png', // Ton image de catégorie Weed

            products: [
                 {
                    id: 'KitKat 🌰',
                    flag: '🇲🇦',
                    name: 'KitKat 🌰',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductKit.jpg', 
                    video: '',
                    description: '💨🔥 Une véritable gourmandise pour les amateurs de filtré premium 🔥💨\n 🍫🍪 120U – KitKat 🍪🍫\n\n ✨ Profil aromatique ✨\n Dès l’ouverture, KitKat dévoile un profil terpénique ultra-gourmand 💥🍫. Une vague de chocolat au lait envahit instantanément les sens, dominée par le cacao doux 🍫, le biscuit croquant 🍪 et une pointe de noisette torréfiée 🌰. En arrière-plan, des notes sucrées et lactées rappellent la célèbre barre chocolatée, accompagnées d’un fond terreux discret typique des bonnes résines 🌱✨.\n\n 😮‍💨🍫 Goût\n En bouche, c’est une véritable explosion chocolatée 💥🍫. L’attaque est douce et sucrée ⚡, rapidement équilibrée par une rondeur biscuitée rappelant une gaufrette croustillante 🍪🤤. La fumée est dense, propre et particulièrement savoureuse grâce à la triple filtration ☁️✨. La finale laisse une persistance longue et gourmande, avec des notes de cacao qui restent agréablement sur le palais 😋.\n\n ⚡🧠 Effets\n KitKat offre une montée chaleureuse et réconfortante 🚀✨.\n\n 😁 Sensation de bien-être immédiate\n 🌞 Effet positif et chill\n 🧠 Esprit apaisé et détendu\n ✨ Sensation de douceur mentale\n 😌 Relaxation progressive du corps\n 🌙 Parfait pour une fin de journée gourmande\n\n 🏆🍫 Le verdict\n KitKat s’impose comme une évidence pour les amateurs de profils chocolatés et de filtrés premium 🔥🍫. Son bouquet aromatique intense, sa fumée propre et son goût ultra-gourmand en font une variété qui marque les esprits dès les premières bouffées 💨✨.',
                    tarifs: [
                        { weight: '5G', price: 50.00 },
                        { weight: '10G', price: 80.00 },
                        { weight: '20G', price: 140.00 },
                        { weight: '50G', price: 250.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                },
                {
                    id: 'Snickers 🧸',
                    flag: '🇲🇦',
                    name: 'Snickers 🧸',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductSni.jpg', 
                    video: '',
                    description: '💨🔥 Une frappe lourde et ultra-gourmande pour les puristes du filtré 🔥💨\n 🥜🍫 120U – Snickers 🍫🥜\n\n ✨ Profil aromatique ✨\n Dès l’ouverture, Snickers dévoile un profil terpénique lourd et complexe 💥🥜. Une vague de caramel fondant envahit instantanément les sens, dominée par la cacahuète grillée 🥜, le chocolat noir 🍫 et le nougat sucré 🍬. En arrière-plan, des notes terreuses et crémeuses rappellent un dessert riche, accompagnées d’un fond kush bien prononcé 🌱✨.\n\n 😮‍💨🥜 Goût\n En bouche, c’est une véritable explosion de saveurs denses 💥🍫. L’attaque est riche et caramélisée ⚡, rapidement équilibrée par une profondeur de fruits à coque rappelant la célèbre barre gourmande 🥜🤤. La fumée est épaisse, propre et particulièrement savoureuse grâce au processus 3X Filtré ☁️✨. La finale laisse une persistance longue et terreuse, avec des notes de caramel salé qui restent agréablement sur le palais 😋.\n\n ⚡🧠 Effets\n Snickers offre une montée puissante et enveloppante 🚀✨.\n\n 😁 Sensation d\'euphorie immédiate\n 🌞 Effet lourd et profondément stimulant\n 🧠 Esprit déconnecté des tensions\n ✨ Sensation de lourdeur agréable\n 😌 Relaxation totale et rapide du corps\n 🌙 Idéal pour s\'écraser dans le canapé après une grosse journée\n\n 🏆🥜 Le verdict\n Snickers s’impose comme un poids lourd pour les amateurs de profils denses, caramélisés et de filtrés premium 🔥🥜. Son bouquet aromatique complexe, sa fumée épaisse et son goût ultra-réconfortant en font une variété qui marque les esprits dès les premières bouffées 💨✨.',
                    tarifs: [
                        { weight: '5G', price: 50.00 },
                        { weight: '10G', price: 80.00 },
                        { weight: '20G', price: 140.00 },
                        { weight: '50G', price: 250.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                },
                 {
                    id: 'LEMON SORBET ❄️',
                    flag: '🇲🇦',
                    name: 'LEMON SORBET ❄️',
                    farm: 'Est Side Cartel 🥷',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductLemon.jpg', 
                    video: 'VideoLemon.mp4',
                    description: '💨🔥 Une vraie grosse frappe pour les amateurs de filtré premium 🔥💨\n 🍋🍨 120U – Lemon Sorbet 🍨🍋\n\n ✨ Profil aromatique ✨\n Dès l’ouverture, Lemon Sorbet dévoile un profil terpénique explosif 💥🍋. Une vague d’agrumes ultra-fraîche envahit instantanément les sens, dominée par le citron jaune 🍋, le citron confit 🍬 et le zeste d’agrumes fraîchement râpé 🌿. En arrière-plan, des notes sucrées et crémeuses rappellent un sorbet citron artisanal 🍨, accompagnées d’une légère touche florale et d’un fond kush discret 🌱✨.\n\n 😮‍💨🍋 Goût\n En bouche, c’est une véritable explosion citronnée 💥🍋. L’attaque est vive et acidulée ⚡, rapidement équilibrée par une douceur crémeuse rappelant une glace au citron artisanale 🍨🤤. La fumée est dense, propre et particulièrement savoureuse grâce à la sélection 120U ☁️✨. La finale laisse une persistance longue et fraîche, avec des notes d’agrumes qui restent agréablement sur le palais 😋.\n\n ⚡🧠 Effets\n Lemon Sorbet offre une montée rapide et agréable 🚀✨.\n\n 😁 Sensation de bonne humeur immédiate\n 🌞 Effet positif et stimulant\n 🧠 Esprit léger et détendu\n ✨ Sensation de clarté mentale\n 😌 Relaxation progressive du corps\n 🌙 Équilibre idéal entre détente et plaisir gustatif\n\n 🏆🍋 Le verdict\n Lemon Sorbet s’impose comme une référence pour les amateurs de profils citronnés puissants et de filtrés premium 🔥🍋. Son bouquet aromatique intense, sa fumée propre et son goût gourmand en font une variété qui marque les esprits dès les premières bouffées 💨✨.',
                    tarifs: [
                        { weight: '5G', price: 60.00 },
                        { weight: '10G', price: 100.00 },
                        { weight: '25G', price: 200.00 },
                        { weight: '50G', price: 280.00 },
                        { weight: '100G', price: 450.00 },
                    ]
                },
               /*  {
                    id: '🍋⛰️🇲🇦 Lemon’s',
                    flag: '🇲🇦',
                    name: '🍋⛰️🇲🇦 Lemon’s',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductL.png', 
                    video: 'VideoL.mov',
                    description: '🍋⛰️🇲🇦 Filtre X3 – Dry Sift 90u \n Le Filtre X3 90u Lemon’s est généralement considéré comme un hash marocain moderne de bonne qualité, obtenu par trois filtrations successives afin d’éliminer un maximum d’impuretés végétales et de conserver principalement les têtes de trichomes. Le grade 90 microns (90u) est souvent recherché car il correspond à une taille de résine réputée pour offrir un bon équilibre entre puissance, pureté et richesse aromatique.  \n\n 🍋 Profil aromatique\n La variété Lemon’s est connue pour développer des notes : \n • Citron frais 🍋 \n • Zestes d’agrumes 🍊 \n • Léger côté sucré et crémeux 🍬 \n • Fond terreux typique du hash marocain 🇲🇦\n\n ✨ Texture\n • Souple et grasse à température ambiante 🤤\n  • Peut devenir très malléable lorsqu’il est légèrement chauffé 🔥 \n • Couleur souvent blonde à dorée selon le lot 🌟\n\n 😌 Effets généralement recherchés\n  • Montée cérébrale agréable 🧠\n  • Sensation de bien-être et de détente 😌\n  • Humeur positive et légère euphorie 😊\n  • Relaxation progressive sans être trop assommante 🌙\n\n 💎 Pour les connaisseurs\n Le Filtre X3 90u se situe souvent au-dessus d’un dry classique ou d’une mousse commerciale grâce à son nettoyage plus poussé et à sa concentration plus élevée en trichomes.\n\n 🔥 En résumé :\n Un hash marocain moderne, propre et parfumé, dominé par des arômes citronnés intenses, offrant une expérience équilibrée entre saveurs, détente et plaisir aromatique. Idéal pour ceux qui apprécient les profils agrumes et les dry sift bien travaillés. 🍋⛰️🇲🇦',
                    tarifs: [
                        { weight: '5G', price: 50.00 },
                        { weight: '10G', price: 80.00 },
                        { weight: '20G', price: 140.00 },
                        { weight: '50G', price: 250.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                },
                {
                    id: '🍒🔥 Local River Cherries 🔥🍒',
                    flag: '🇲🇦',
                    name: '🍒🔥 Local River Cherries 🔥🍒',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductLRC.png', 
                    video: 'VideoLRC.mov',
                    description: '🍒🔥 Dry-Sift 90u  🔥🍒\n 💎 Le Local River Cherries 90u est un dry-sift haut de gamme élaboré à partir d’une génétique orientée cerise sucrée, souvent accompagnée de notes fruitées et légèrement crémeuses. Le tamisage en 90 microns (90u) permet de récupérer une grande quantité de têtes de trichomes matures, recherchées pour leur richesse en terpènes et leur pureté.  \n\n ✨ Ce qui le distingue : \n • 🍒 Arômes dominants de cerise mûre et fruits rouges. \n • 🍬 Fond légèrement sucré rappelant parfois le bonbon ou la pâtisserie. \n • 🧈 Texture grasse et malléable lorsqu’il est bien conservé. \n • 💨 Fumée douce et savoureuse, appréciée des amateurs de résines modernes. \n • 🌿 Profil terpénique très présent grâce à la sélection 90u.  \n\n ⚡ Effets généralement recherchés : \n • 😄 Euphorie agréable et bonne humeur.\n  • 🧠 Sensation de détente mentale sans être trop lourde.\n  • 🤤 Moment de relaxation idéal en fin de journée.\n  • 🛋️ Effet physique progressif, confortable et relaxant.  \n\n 🏆 Pour les connaisseurs, un 90u bien travaillé est souvent considéré comme l’un des meilleurs compromis entre puissance, richesse aromatique et qualité de combustion. Les plages comprises entre 73u et 120u sont d’ailleurs souvent citées parmi les plus intéressantes pour obtenir les têtes de trichomes les plus qualitatives.  \n 🍒💨 Local River Cherries 90u s’adresse avant tout aux amateurs de résines fruitées qui recherchent une expérience savoureuse, propre et riche en terpènes.',
                    tarifs: [
                        { weight: '5G', price: 50.00 },
                        { weight: '10G', price: 80.00 },
                        { weight: '20G', price: 140.00 },
                        { weight: '50G', price: 250.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                }, */
               /*  {
                    id: 'El Mero  💥💥',
                    flag: '🇲🇦',
                    name: 'El Mero 🌰',
                    farm: '🇨🇭 SUISSE FARMZ',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductEM.png', 
                    video: 'VideoEM.mov',
                    description: '☕️🤍🔥 Nouvelle Récolte 2026 – Suisse Farm 🔥🤍☕️\n 🇨🇭💎 Une sélection ultra gourmande tout droit venue de Suisse Farm, pensée pour les amateurs de filtrés premium et de profils riches en terpènes. 💎🇨🇭\n 🌿✨ 3x Filtré 45u – El Mero ✨🌿\n\n ✨ Profil aromatique ✨\n El Mero dévoile un profil particulièrement gourmand et raffiné 🤤🔥. Dès l’ouverture, une vague d’arômes crémeux et pâtissiers 🍪🥛 envahit les sens, accompagnée de notes de café fraîchement torréfié ☕, de caramel fondant 🍮 et de fruits à coque grillés 🌰. En fond, une touche kush légèrement terreuse 🌿 apporte équilibre et profondeur à l’ensemble.\n\n 😮‍💨🍬 Goût\n À la dégustation, El Mero confirme tout son potentiel gourmand 🤍🔥. L’attaque est douce, ronde et crémeuse ☁️, portée par des saveurs de café latte ☕🥛 et de biscuit caramélisé 🍪. Des notes de noisette grillée 🌰 et de vanille 🍦 viennent ensuite enrichir le palais avant de laisser place à une finale longue, onctueuse et légèrement épicée 🌿✨.\n\n ⚡🧠 Effets\n Une expérience harmonieuse et réconfortante 😌💨.\n\n 😁 Sensation de bien-être rapide\n ✨ Humeur positive et apaisée\n 🧘 Relaxation mentale progressive\n 💆 Détente corporelle confortable\n ☁️ Effet enveloppant et chaleureux\n 🌙 Parfait pour les fins de journée et les moments de détente\n\n 🏆🇨🇭 Le verdict\n Avec cette Nouvelle Récolte 2026 signée Suisse Farm, El Mero s’impose comme une référence pour les amateurs de résines gourmandes et soigneusement travaillées 💎🔥. Son profil café-caramel ultra réconfortant, sa fumée soyeuse et sa belle richesse aromatique en font une pièce de choix dans la catégorie des 45u premium.',
                    tarifs: [
                        { weight: '5G', price: 50.00 },
                        { weight: '10G', price: 80.00 },
                        { weight: '20G', price: 140.00 },
                        { weight: '50G', price: 250.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                },
                {
                    id: 'Freakshow 💥💥',
                    flag: '🇲🇦',
                    name: 'Freakshow 💥💥',
                    farm: '🇨🇭 SUISSE FARMZ',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductFK.png', 
                    video: 'VideoFK.mov',
                    description: '☕️🤍🔥 Nouvelle Récolte 2026 – Suisse Farm 🔥🤍☕️\n 🇨🇭💎 Une sélection originale et haut de gamme venue de Suisse Farm, destinée aux amateurs de filtrés premium et de profils terpéniques hors du commun. 💎🇨🇭\n 🌿👽 3x Filtré 45u – Freakshow 👽🌿\n\n ✨ Profil aromatique ✨\n Freakshow se distingue par un profil aromatique atypique et captivant 🤤🔥. Dès l’ouverture, des notes d’agrumes frais 🍋, de pin résineux 🌲 et d’herbes sauvages 🌿 prennent le dessus. Rapidement, des nuances fruitées 🍏🍈 et légèrement épicées 🌶️ viennent enrichir l’ensemble, offrant une palette complexe et surprenante qui ne ressemble à aucune autre.\n 👃💨 Arômes dominants\n\n 😮‍💨🍃 Goût\n À la dégustation, Freakshow dévoile toute sa singularité 💨✨. L’attaque est vive et fraîche, dominée par les agrumes 🍋 et les notes résineuses 🌲. En milieu de bouche, des saveurs végétales nobles 🌿 se mélangent à des touches fruitées 🍏, avant de laisser place à une finale longue, fraîche et légèrement épicée 😮‍💨🔥.\n\n ⚡🧠 Effets\n Une expérience équilibrée et agréable 😌✨.\n\n 😁 Sensation de bien-être rapide\n 🌈 Humeur positive et légère\n 🧠 Esprit détendu et confortable\n ✨ Sensation de clarté agréable\n 💆‍♂️ Relaxation progressive du corps\n 🌙 Idéal pour apprécier un moment de calme\n\n 🏆🇨🇭 Le verdict\n Avec cette Freakshow 45u 3x filtrée, Suisse Farm propose une résine qui sort des sentiers battus 💎🔥. Son profil frais, résineux et fruité séduira les amateurs de saveurs originales à la recherche d’une expérience différente des classiques profils sucrés ou kush.',
                    tarifs: [
                        { weight: '5G', price: 50.00 },
                        { weight: '10G', price: 80.00 },
                        { weight: '20G', price: 140.00 },
                        { weight: '50G', price: 250.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                },
                {
                    id: 'Black Truffle 🌑',
                    flag: '🇲🇦',
                    name: 'Black Truffle 🌑',
                    farm: '🇨🇭 SUISSE FARMZ',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductBT.png', 
                    video: 'VideoBT.mov',
                    description: '🖤🍄🔥 Nouvelle Récolte 2026 – Suisse Farm 🔥🍄🖤\n 🇨🇭💎 Une génétique de caractère réservée aux amateurs de profils profonds, complexes et intensément gourmands. Avec Black Truffle, Suisse Farm signe une résine aussi élégante que puissante sur le plan aromatique. 💎🇨🇭\n 🖤✨ 3x Filtré 45u – Black Truffle ✨🖤\n 🌌 Une immersion dans les saveurs sombres et raffinées 🌌\n Dès l’ouverture, Black Truffle impose sa signature unique 😮‍💨🔥. Un mélange riche de cacao noir 🍫, de truffe fraîche 🍄 et de bois noble 🌳 s’échappe instantanément. Derrière cette première impression intense apparaissent des notes de noisette torréfiée 🌰, de café corsé ☕ et une subtile touche de terre humide après la pluie 🌧️🌿.\n\n 😮‍💨🖤 Goût\n En bouche, Black Truffle joue dans une autre catégorie 🎩✨. La fumée est épaisse, soyeuse et particulièrement persistante ☁️. Les saveurs oscillent entre le chocolat noir amer 🍫, le café torréfié ☕ et des notes terreuses nobles 🍄🌿. Une légère touche crémeuse vient adoucir l’ensemble avant une finale longue, élégante et profondément aromatique.\n\n ⚡🌙 Effets\n Black Truffle offre une expérience enveloppante et sophistiquée 😌💨.\n\n 🧘‍♂️ Relaxation progressive et profonde\n 😁 Sensation de confort et de sérénité\n ☁️ Effet chaleureux et apaisant\n 🌌 Déconnexion douce du quotidien\n 💆‍♂️ Relâchement physique agréable\n 🌙 Parfaite pour les soirées calmes et les moments de détente\n\n 🏆🇨🇭 Le verdict\n Black Truffle n’est pas une variété qui cherche à plaire à tout le monde… et c’est précisément ce qui fait sa force 👑🔥. Son profil sombre, boisé et gourmand séduira les amateurs de résines raffinées à la recherche de quelque chose de différent et de mémorable.',
                    tarifs: [
                        { weight: '5G', price: 50.00 },
                        { weight: '10G', price: 80.00 },
                        { weight: '20G', price: 140.00 },
                        { weight: '50G', price: 250.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                },
                {
                    id: 'Zkittles ☕️🤍',
                    flag: '🇲🇦',
                    name: 'Zkittles 🎀',
                    farm: '🇨🇭 SUISSE FARMZ',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductZKS.png', 
                    video: 'VideoZKS.mov',
                    description: '🌈🍬🔥 Nouvelle Récolte 2026 – Suisse Farm 🔥🍬🌈\n 🇨🇭💎 Une véritable explosion de terpènes fruités signée Suisse Farm. Une sélection pensée pour les amoureux des profils sucrés, exotiques et ultra parfumés. 💎🇨🇭\n 🍭✨ 3x Filtré 45u – Zkittlez ✨🍭\n 🌈 Le bonbon qui a conquis le monde du hash 🌈\n Dès l’ouverture, Zkittlez dévoile un bouquet aromatique exceptionnel 🤤💨. Une avalanche de fruits tropicaux 🥭🍍, d’agrumes sucrés 🍊🍋 et de bonbons fruités 🍬 envahit instantanément les sens. Son profil gourmand est accompagné de légères notes florales 🌸 et d’une touche crémeuse qui apporte beaucoup de rondeur à l’ensemble.\n\n 😮‍💨🍭 Goût\n En bouche, c’est une véritable confiserie artisanale 🍬🤍. L’attaque est intensément fruitée avec des saveurs de fruits exotiques 🥭🍍 et de bonbons acidulés 🍭. La fumée est douce, crémeuse et particulièrement savoureuse ☁️✨. La finale laisse une persistance sucrée impressionnante avec des notes de fruits mûrs qui restent longtemps sur le palais 😋🔥.\n\n ⚡🧠 Effets\n Une expérience agréable et équilibrée qui accompagne parfaitement les moments de détente 😌✨.\n\n 😁 Bonne humeur instantanée\n 🌈 Sensation de légèreté et de confort\n ✨ Esprit détendu et positif\n 💆‍♂️ Relaxation progressive du corps\n ☁️ Effet doux et enveloppant\n 🌙 Idéal pour profiter d’un moment tranquille\n\n 🏆🇨🇭 Le verdict\n Avec cette Zkittlez 45u 3x filtrée, Suisse Farm propose un classique incontournable revisité avec soin 💎🔥. Un profil explosif, une richesse aromatique impressionnante et une gourmandise rare qui séduira immédiatement les amateurs de résines fruitées.',
                    tarifs: [
                        { weight: '5G', price: 50.00 },
                        { weight: '10G', price: 80.00 },
                        { weight: '20G', price: 140.00 },
                        { weight: '50G', price: 250.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                }, */
               /*  {
                    id: 'PURPLE STORM 😈',
                    flag: '🇲🇦',
                    name: 'PURPLE STORM 😈',
                    farm: '🦊 KGF FARM',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductPS.png', 
                    video: 'VideoPS.mp4',
                    description: '💨🔥 Une nouvelle bombe signée KGF FARM 🔥💨\n 🌪️🍇 3x Filtré 45u – Purple Storm 🍇🌪️\n\n ✨ Profil aromatique ✨\n Dès l’ouverture, Purple Storm libère une vague de terpènes gourmands et envoûtants 🤤💜. Un mélange intense de raisin sucré 🍇, de fruits rouges 🍓, de mûre et de myrtille 🫐 envahit les sens. En fond, des notes florales délicates 🌸🌿 rappellent la violette et la lavande, tandis qu’une touche terreuse et kush 🌲🍂 apporte profondeur et caractère.\n\n 😮‍💨🍬 Goût\n À la dégustation, c’est une véritable explosion fruitée 💥🍇. L’attaque est douce, sucrée et crémeuse 🍯, portée par des saveurs de raisin et de baies sauvages 🫐🍓. La filtration 45u apporte une fumée particulièrement propre et onctueuse ☁️✨. En fin de bouche, les notes florales 🌸 se mêlent à un léger côté kush 🌿 qui reste longtemps sur le palais 😋.\n\n ⚡🧠 Effets\n Purple Storm propose une montée progressive et agréable 🚀✨.\n\n 😁 Humeur positive et sensation de bien-être\n 🌈 Léger effet euphorique et relaxant\n 🧘‍♂️ Apaisement mental sans lourdeur excessive\n 💆‍♂️ Détente corporelle progressive\n 😌 Sensation cocooning et réconfortante\n 🌙 Idéal pour décompresser en soirée\n\n 🔥💜 Le verdict\n Purple Storm est une vraie pépite pour les amateurs de profils fruités et floraux 🍇🫐🌸. Son 3x filtré 45u offre une fumée douce ☁️, des saveurs gourmandes 🍬 et une relaxation parfaitement équilibrée ⚖️😮‍💨',
                    tarifs: [
                        { weight: '5G', price: 50.00 },
                        { weight: '10G', price: 80.00 },
                        { weight: '20G', price: 140.00 },
                        { weight: '50G', price: 250.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                },
                {
                    id: 'WHITE MOCHA ',
                    flag: '🇲🇦',
                    name: 'WHITE MOCHA ☕️🤍',
                    farm: '🦊 KGF FARM',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductMoc.png', 
                    video: 'VideoMoc.mp4',
                    description: '💨🔥 Une nouvelle pépite signée KGF FARM 🔥💨\n 🤍☕ 3x Filtré 45u – White Mocha ☕🤍\n\n ✨ Profil aromatique ✨\n White Mocha séduit dès les premiers instants par un profil riche, crémeux et gourmand 🤤🍨. Cette variété développe un mélange raffiné de café torréfié ☕, de chocolat blanc 🍫🤍 et de notes lactées 🥛, le tout sublimé par une touche sucrée rappelant les pâtisseries et la vanille 🍪🍦. En arrière-plan, on retrouve une base légèrement terreuse et boisée 🌿🌲 qui équilibre parfaitement l’ensemble.\n\n 😮‍💨🍬 Goût\n À la dégustation, White Mocha offre une fumée particulièrement ronde et veloutée ☁️✨. L’attaque dévoile des saveurs de café latte ☕🥛 accompagnées d’une douceur sucrée évoquant le chocolat blanc 🍫🤍 et la vanille 🍦. La finale est longue, crémeuse et légèrement épicée 🌿, laissant une agréable sensation gourmande en bouche 😋.\n\n ⚡🧠 Effets\n White Mocha propose une expérience équilibrée entre confort mental et relaxation physique 😌✨.\n\n 😁 Sensation de bien-être immédiate\n 🌈 Humeur positive et esprit léger\n 🧘‍♂️ Relaxation mentale progressive\n 💆‍♂️ Détente corporelle douce et agréable\n ☁️ Effet enveloppant sans être trop lourd\n 🌙 Parfait pour les moments de calme et de détente\n\n 🔥🤍 Le verdict\n hite Mocha est un véritable dessert version hash 🍰☕. Son profil gourmand, mêlant café, chocolat blanc et vanille, en fait une variété particulièrement appréciée des amateurs de saveurs riches et crémeuses 🤤💨.',
                    tarifs: [
                        { weight: '5G', price: 50.00 },
                        { weight: '10G', price: 80.00 },
                        { weight: '20G', price: 140.00 },
                        { weight: '50G', price: 250.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                },
                {
                    id: 'MELONATTA 🍈 🍯 ',
                    flag: '🇲🇦',
                    name: 'MELONATTA 🍈🍯',
                    farm: '🦊 KGF FARM',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductMel.png', 
                    video: 'VideoMel.mp4',
                    description: 'Une vraie pépite signée KGF FARM pour cette nouvelle récolte 2026 🔥\n Ce 3x filtré 45u sur la strain Melonatta envoie un profil ultra fruité, crémeux et exotique, avec une texture propre et fondante digne des grosses sélections premium.\n\n 👃 Profil aromatique :\n Dès l’ouverture, ça explose sur des notes de melon sucré bien mûr 🍈, accompagnées d’une touche citronnée et tropicale qui rappelle les bonbons fruités premium. Derrière, on retrouve un léger côté creamy/gazeux avec une finition fraîche et terpénée très raffinée.  \n\n 👅 Goût :\n En bouche, c’est ultra doux et savoureux : melon, agrumes sucrés, fruits exotiques et une petite pointe acidulée parfaitement équilibrée. La fumée est grasse, propre et laisse un goût fruité longtemps après la taffe 🤤🍈\n\n 💥 Effets :\n Une frappe euphorique et motivante qui monte progressivement avec un bon mood énergique et relax à la fois. Parfait pour ceux qui aiment les profils fruités modernes avec une vraie puissance derrière ⚡️😮‍💨  \n\n ✨ Nouvelle récolte 2026 — qualité premium KGF FARM\n Le genre de filtré qui part vite chez les connaisseurs.',
                    tarifs: [
                        { weight: '5G', price: 50.00 },
                        { weight: '10G', price: 80.00 },
                        { weight: '20G', price: 140.00 },
                        { weight: '50G', price: 250.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                },
                {
                    id: 'LEMON SORBET ❄️',
                    flag: '🇲🇦',
                    name: 'LEMON SORBET ❄️',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductLemon.png', 
                    video: 'VideoLemon.mp4',
                    description: '💨🔥 Une vraie grosse frappe pour les amateurs de filtré premium 🔥💨\n 🍋🍨 120U – Lemon Sorbet 🍨🍋\n\n ✨ Profil aromatique ✨\n Dès l’ouverture, Lemon Sorbet dévoile un profil terpénique explosif 💥🍋. Une vague d’agrumes ultra-fraîche envahit instantanément les sens, dominée par le citron jaune 🍋, le citron confit 🍬 et le zeste d’agrumes fraîchement râpé 🌿. En arrière-plan, des notes sucrées et crémeuses rappellent un sorbet citron artisanal 🍨, accompagnées d’une légère touche florale et d’un fond kush discret 🌱✨.\n\n 😮‍💨🍋 Goût\n En bouche, c’est une véritable explosion citronnée 💥🍋. L’attaque est vive et acidulée ⚡, rapidement équilibrée par une douceur crémeuse rappelant une glace au citron artisanale 🍨🤤. La fumée est dense, propre et particulièrement savoureuse grâce à la sélection 120U ☁️✨. La finale laisse une persistance longue et fraîche, avec des notes d’agrumes qui restent agréablement sur le palais 😋.\n\n ⚡🧠 Effets\n Lemon Sorbet offre une montée rapide et agréable 🚀✨.\n\n 😁 Sensation de bonne humeur immédiate\n 🌞 Effet positif et stimulant\n 🧠 Esprit léger et détendu\n ✨ Sensation de clarté mentale\n 😌 Relaxation progressive du corps\n 🌙 Équilibre idéal entre détente et plaisir gustatif\n\n 🏆🍋 Le verdict\n Lemon Sorbet s’impose comme une référence pour les amateurs de profils citronnés puissants et de filtrés premium 🔥🍋. Son bouquet aromatique intense, sa fumée propre et son goût gourmand en font une variété qui marque les esprits dès les premières bouffées 💨✨.',
                    tarifs: [
                        { weight: '5G', price: 60.00 },
                        { weight: '10G', price: 100.00 },
                        { weight: '25G', price: 200.00 },
                        { weight: '50G', price: 280.00 },
                        { weight: '100G', price: 450.00 },
                    ]
                }, */
                /*  {
                    id: '🍯 FRITTER LICKER 🔥',
                    flag: '🇲🇦',
                    name: '🍯 FRITTER LICKER 🔥',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductLicker.png', 
                    video: 'VideoLicker.mov',
                    description: '💎 Description\n\n Fritter Licker, c’est du très lourd pour les connaisseurs. Un produit 3x filtré ultra propre, travaillé avec précision pour garder uniquement la crème du hash. Dès l’ouverture, ça dégage une odeur intense mêlant notes sucrées de pâtisserie, touche crémeuse et fond légèrement gaz qui rappelle les meilleures génétiques modernes.  \n\n 🌿 Texture & Aspect\n\n Une texture grasse, souple et brillante, signe d’un filtrage maîtrisé. La matière est homogène, facile à travailler, avec une couleur claire et dorée qui annonce direct la qualité. À chaud, ça bulle et fond parfaitement, preuve d’un produit bien sélectionné.\n\n 😶‍🌫️ Effet\n\n Un high profond et enveloppant, qui commence par une montée mentale relaxante avant de poser un effet lourd et agréable dans le corps. Parfait pour se détendre, se poser entre amis ou savourer un moment chill avec une vraie frappe.\n\n 🔥 Signature\n  Un 3x filtré premium, riche en goût et en puissance — le genre de produit qui se reconnaît dès la première taffe.',
                    tarifs: [
                        { weight: '5G', price: 50.00 },
                        { weight: '10G', price: 80.00 },
                        { weight: '20G', price: 140.00 },
                        { weight: '50G', price: 250.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                }, */
               /*  {
                    id: '🍓 TWIX STRAWBERRY GUMMY 🍫',
                    flag: '🇲🇦',
                    name: '🍓 TWIX STRAWBERRY GUMMY 🍫',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductTSG.png', 
                    video: 'VideoTSG.mov',
                    description: '🍓 3x FILTERED 90u 🍫 \n Un profil ultra gourmand et régressif. Ce 3x filtré 90 microns TWIX STRAWBERRY GUMMY combine des notes sucrées de fraise candy, de chocolat doux et une touche biscuitée crémeuse, rappelant une confiserie fondante et addictive.\n Grâce au triple filtrage, la matière est extrêmement propre, avec une texture grasse, souple et fondante. La combustion est nette, la fumée douce et savoureuse, laissant une longueur en bouche sucrée et fruitée parfaitement maîtrisée.\n\n 🔥 Points forts :\n  • Arômes fraise gummy, chocolat et biscuit\n • Triple filtration pour une pureté maximale\n • Texture fondante et combustion clean\n • Sélection NO FARM  \n\n Un hash premium, intensément gourmand, pensé pour les amateurs de saveurs sucrées, candy et ultra clean. 🍬💎',
                    tarifs: [
                        { weight: '5G', price: 50.00 },
                        { weight: '10G', price: 80.00 },
                        { weight: '20G', price: 140.00 },
                        { weight: '50G', price: 250.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                }, */
             /*    {
                    id: '🍭 RUNTZ 💎',
                    flag: '🇲🇦',
                    name: '🍭 RUNTZ 💎',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductRT.png', 
                    video: 'VideoRT.mp4',
                    description: '🍭 3x FILTERED 90u 💎 \n Une sélection triple filtrée en 90 microns, offrant une matière pure et une restitution aromatique précise, fidèle à l’identité de la strain.   \n\n 🍬 Profil aromatique \n La Runtz est une vraie signature candy : des notes sucrées, fruitées et bonbon, avec une touche légèrement crémeuse et exotique. En bouche, c’est gourmand, rond et ultra agréable, avec une longueur sucrée qui reste bien présente.   \n\n 🔥 Texture \n Fine, homogène et parfaitement travaillée, avec une propreté visible et une finition maîtrisée.   \n\n 😮‍💨 Rendu \n Une expérience douce et équilibrée, avec une sensation smooth et un profil accessible mais marqué, typique des variétés candy modernes.   \n\n 💎 Signature \n Un classique revisité en version filtrée premium, mettant en avant toute la richesse sucrée et addictive de la Runtz.',
                    tarifs: [
                        { weight: '5G', price: 50.00 },
                        { weight: '10G', price: 80.00 },
                        { weight: '20G', price: 140.00 },
                        { weight: '50G', price: 250.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                },
                {
                    id: '🍓 ZKITTLEZ 💎',
                    flag: '🇲🇦',
                    name: '🍓 ZKITTLEZ 💎',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductZK.png', 
                    video: 'VideoZK.mov',
                    description: '🍓 3x FILTERED 90u 💎\n Une sélection triple filtrée en 90 microns, conçue pour capturer toute la richesse aromatique de la strain avec une pureté optimale. \n\n 🍭 Profil aromatique\n La Zkittlez offre une explosion de saveurs fruitées et sucrées, rappelant un mélange de bonbons tropicaux 🍬🍍. On retrouve des notes de fruits rouges, agrumes et touches exotiques, avec une douceur naturelle qui enrobe parfaitement le palais. \n\n 🔥 Texture\n Fine, propre et homogène, avec une finition soignée qui met en valeur un travail de filtration précis.     \n\n 😮‍💨 Rendu \n Un profil smooth et ultra agréable, avec une sensation légère et une expression aromatique qui ressort pleinement à chaque utilisation.   \n\n 💎 Signature \n Une strain iconique dans sa version la plus propre, où le goût fruité prend le dessus avec une intensité maîtrisée et une vraie longueur en bouche.',
                    tarifs: [
                        { weight: '5G', price: 50.00 },
                        { weight: '10G', price: 80.00 },
                        { weight: '20G', price: 140.00 },
                        { weight: '50G', price: 250.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                }, */
              /*   {
                    id: '🌊 SUPER SOAKER 💎',
                    flag: '🇲🇦',
                    name: '🌊 SUPER SOAKER 💎',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductSoak.png', 
                    video: 'VideoSoak.mov',
                    description: '🌊 3x FILTERED 90u 💎\n Une sélection triple filtrée en 90 microns, pensée pour offrir une matière d’une pureté remarquable et une expression aromatique nette. \n\n 🍬 Profil aromatique\n La Super Soaker dévoile un mélange intense de fruits sucrés et tropicaux, accompagné d’une légère touche crémeuse et gassy. En bouche, c’est rond, riche et persistant, avec une vraie profondeur de saveur qui reste longtemps. \n\n  🔥 Texture \n Fine, propre et homogène, avec une finition soignée qui reflète un travail précis sur la filtration.  \n\n 😮‍💨 Rendu \n Une expérience smooth et équilibrée, avec une montée progressive et un ressenti clair, sans lourdeur.  \n\n  💎 Signature \n  Un produit moderne, axé sur le goût et la propreté, qui met en avant toute la richesse aromatique de la strain Super Soaker.',
                    tarifs: [
                        { weight: '5G', price: 50.00 },
                        { weight: '10G', price: 80.00 },
                        { weight: '20G', price: 140.00 },
                        { weight: '50G', price: 250.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                }, */
               
               /* ,
                {
                    id: 'PremiumDur',
                    flag: '🇲🇦',
                    name: 'PREMIUM DUR CASSANT 🍯',
                    farm: '👨‍🌾 DHF Farmz 👨‍🌾',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductPremiumDur.png',
                    videos: [
                        'VideoUni.mp4',
                        'VideoCandy.mp4',
                        'VideoHead.mp4'
                                        ],
                    description: '🏺 L’ART DU DUR CASSANT BY DHF 🏺 \n\n Oubliez le mou commercial. Ici on parle de "Glassy Tech" : un hash dur comme de la pierre à froid, qui devient une crème bulleuse au contact de la flamme. \n\n 🔥 Pourquoi le choisir ?\n • Conservation des terpènes maximale (coque protectrice)\n • Défonce lucide et puissante (High Clean)\n • 5 Variétés certifiées (Pas de mélange)\n\n 👅 Les Saveurs :\n Du fruité (Unicornz) au Gazeux (Head Banger) en passant par le Crémeux (Purple/Zushi). \n\n ⚠️ Conseil : À travailler au couteau ou à effriter finement pour une combustion parfaite.',
                    variantTitle: 'Saveurs Premium ❄️ :',
                    jars: [
                        { name: 'UNICORNZ ÉLITE', emoji: '🟠', colorClass: 'style-brown' },
                        { name: 'CANDY CANE', emoji: '🔴', colorClass: 'style-red' },
                        { name: 'HEAD BANGER', emoji: '🟡', colorClass: 'style-yellow' },
                
                    ],
                    tarifs: [
                        { weight: '5G', price: 60.00 },
                        { weight: '10G', price: 80.00, badge: 'PROMO ⚡️' },
                        { weight: '25G', price: 200.00 },
                        { weight: '50G', price: 280.00, badge: 'PROMO ⚡️' },
                        { weight: '100G', price: 450.00, badge: 'PROMO ⚡️' },
                    ]
                } */
            ]
        },
        {
            id: 'HASH',
            name: 'HASH 🌰',
            type: 'HASH',
            quality: 'HASH 🌰',
            image: 'CategHash.png', // Ton image de catégorie Weed

            products: [
                {
                    id: 'Wazabis 🈯',
                    flag: '🇲🇦',
                    name: 'Wazabis 🈯',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductWaza.jpg', 
                    video: '',
                    description: '',
                    tarifs: [
                        { weight: '10g', price: 60.00 },
                        { weight: '20g', price: 100.00 },
                        { weight: '50g', price: 200.00 },
                        { weight: '100g', price: 330.00 },
                    ]
                },
                {
                    id: 'Banana Candy 🍌',
                    flag: '🇲🇦',
                    name: 'Banana Candy 🍌',
                    farm: '🧪 Kilogrammes Farm',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductBCY.png', 
                    video: 'VideoBCY.mov',
                    description: '🌕🍌🍬 SUPER MOUSSEUX 🍬🍌🌕\n 🦊🔥 Une vraie pépite signée KGF 🔥🦊\n 💛✨ Un jaune ultra mousseux qui attire l’œil dès le premier regard et qui promet une expérience aussi gourmande que généreuse. ✨💛\n 🍌🍭 Strain : Banana Candy 🍭🍌\n\n 🌴✨ Profil aromatique ✨\n Banana Candy porte parfaitement son nom 🤤🔥. Dès l’ouverture, une vague de banane mûre 🍌 envahit les sens, accompagnée d’un mélange de bonbons fruités 🍬, de crème vanillée 🍦 et d’une légère touche tropicale 🥭. En arrière-plan, quelques nuances sucrées rappelant le caramel tendre 🍯 viennent compléter un profil particulièrement gourmand.\n\n 😮‍💨🍌 Goût\n À la dégustation, Banana Candy offre une fumée particulièrement douce et savoureuse ☁️✨. La banane est omniprésente dès les premières bouffées 🍌🔥, rapidement accompagnée par des notes de confiserie fruitée 🍬 et de crème sucrée 🍦. La texture mousseuse apporte une sensation fondante agréable, tandis que la finale laisse une empreinte gourmande et légèrement exotique sur le palais 😋💨.\n\n 💛☁️ Texture\n 🌕 Aspect jaune doré éclatant\n ☁️ Texture très mousseuse et aérée\n 🤲 Souple et facile à travailler\n ✨ Belle richesse en résine\n 🔥 Combustion homogène et agréable\n\n ⚡🌈 Ambiance\n Banana Candy séduit avant tout par son profil ultra gourmand et sa douceur de dégustation 😌✨.\n 😁 Sensation de confort immédiat\n 🍭 Expérience axée sur le plaisir aromatique\n 🌴 Atmosphère détendue et agréable\n ☁️ Moment de dégustation tout en douceur\n 🌙 Idéal pour les amateurs de profils dessert et fruités\n\n 🏆🦊 Le verdict\n 🌕🍌🍬 Un nuage de banane crémeuse et de bonbons fruités, porté par une texture ultra mousseuse qui fait toute la différence. Une vraie gourmandise signée KGF. 🦊🔥💨👑💛✨',
                    tarifs: [
                        { weight: '10g', price: 60.00 },
                        { weight: '20g', price: 100.00 },
                        { weight: '50g', price: 200.00 },
                        { weight: '100g', price: 330.00 },
                    ]
                },
                {
                    id: 'Cherry Soda 🍒',
                    flag: '🇲🇦',
                    name: 'Cherry Soda 🍒',
                    farm: '🧪 Kilogrammes Farm',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductCSA.png', 
                    video: 'VideoCSA.mov',
                    description: '🌕🍒🥤 SUPER MOUSSEUX 🥤🍒🌕\n 🦊🔥 Une vraie pépite signée KGF 🔥🦊\n 💛✨ Un jaune ultra mousseux à la texture aérienne et fondante, associé à une génétique qui ne passe jamais inaperçue. Une sélection qui mise autant sur le plaisir visuel que sur la richesse aromatique. ✨💛\n 🍒🥤 Strain : Cherry Soda 🥤🍒\n\n ✨ Profil aromatique ✨\n Dès l’ouverture, Cherry Soda dévoile un bouquet explosif et terriblement gourmand 🤤💨. Les premières notes rappellent une limonade à la cerise fraîche 🍒🥤, accompagnée d’un côté sucré évoquant les bonbons acidulés 🍬. À mesure que les arômes se développent, on découvre des touches de fruits rouges mûrs 🍓, de sirop de cerise 🍒 et une légère fraîcheur pétillante qui fait toute l’originalité de cette variété. \n\n 😮‍💨🍒 Goût\n À la dégustation, Cherry Soda offre une expérience particulièrement savoureuse ☁️✨. L’attaque est dominée par une cerise sucrée et juteuse 🍒, rapidement rejointe par des notes de soda fruité 🥤 et de confiserie acidulée 🍬. La fumée est douce, ronde et agréable, tandis que la finale laisse une sensation fruitée persistante avec un léger côté pétillant caractéristique de la variété 😋🔥.\n\n 💛☁️ Texture\n 🌕 Belle couleur jaune dorée\n ☁️ Texture ultra mousseuse et légère\n 🤲 Facile à travailler et à effriter\n ✨ Aspect résineux particulièrement attractif\n 🔥 Consommation homogène et agréable\n\n ⚡🌈 Ambiance\n 🍒 Bonne humeur et plaisir aromatique au rendez-vous\n ✨ Expérience douce et gourmande\n 😌 Moment de détente agréable\n ☁️ Sensation légère et réconfortante\n 🌙 Idéal pour les amateurs de profils fruités et sucrés\n\n 🏆🦊 Le verdict\n 🌕🍒🥤 Une explosion de cerise sucrée, de bonbons acidulés et de fraîcheur pétillante dans une texture jaune ultra mousseuse. Une vraie gourmandise signée KGF. 🦊🔥💨👑✨🍬🍓💛',
                    tarifs: [
                        { weight: '10g', price: 60.00 },
                        { weight: '20g', price: 100.00 },
                        { weight: '50g', price: 200.00 },
                        { weight: '100g', price: 330.00 },
                    ]
                },
                /* {
                    id: 'MANGO',
                    flag: '🇲🇦',
                    name: 'MANGO 🥭',
                    farm: '🧪 Kilogrammes Farm',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductMan.png', 
                    video: 'VideoMan.mov',
                    description: '🌕🥭🔥 SUPER MOUSSEUX 🔥🥭🌕\n 🦊💎 Une vraie pépite signée KGF 💎🦊\n 💛✨ Ce jaune ultra mousseux attire immédiatement l’attention avec sa texture aérienne, sa couleur dorée éclatante et son profil tropical débordant de gourmandise. ✨💛\n 🥭🌴 Strain : Mango 🌴🥭\n\n ✨ Profil aromatique ✨\n Préparez-vous à une véritable escapade sous les tropiques 🌞🏝️. Dès l’ouverture, Mango libère un parfum intense de mangue bien mûre 🥭, accompagné de notes exotiques sucrées 🍍 et d’une légère touche d’agrumes 🍊. Son profil riche et ensoleillé est complété par des nuances crémeuses et fruitées qui rappellent un smoothie tropical fraîchement préparé 🥤🤤.\n\n 😮‍💨🥭 Goût\n À la dégustation, Mango dévoile toute sa richesse aromatique 💨✨. L’attaque est dominée par une mangue charnue et sucrée 🥭🔥, suivie de notes exotiques rappelant l’ananas et les fruits tropicaux 🍍🌴. La fumée est douce, crémeuse et particulièrement agréable ☁️🤍. La finale laisse une sensation fruitée persistante avec une belle longueur en bouche 😋💛.\n\n 💛☁️ Texture\n 🌕 Couleur jaune dorée lumineuse\n ☁️ Texture ultra mousseuse et fondante\n 🤲 Très souple et agréable à manipuler\n ✨ Aspect résineux premium\n 🔥 Belle homogénéité à la dégustation\n\n ⚡🌴 Ambiance\n 😁 Sensation de plaisir immédiat\n 🌞 Profil lumineux et gourmand\n ✨ Moment de détente agréable\n 🥭 Explosion tropicale à chaque bouffée\n ☁️ Expérience douce et savoureuse\n 🌙 Idéal pour les amateurs de variétés fruitées et exotiques\n\n 🏆🦊 Le verdict\n 🌕🥭🍍 Une vague de mangue sucrée, de fruits exotiques et de douceur tropicale dans un jaune super mousseux qui risque de faire fondre les amateurs de saveurs fruitées. 🦊💛🔥💨👑🌴✨🍯☀️',
                    tarifs: [
                        { weight: '10g', price: 60.00 },
                        { weight: '20g', price: 100.00 },
                        { weight: '50g', price: 200.00 },
                        { weight: '100g', price: 330.00 },
                    ]
                },
                {
                    id: '💥 Berry w7 💥',
                    flag: '🇲🇦',
                    name: '💥 Berry w7 💥',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductB7.png', 
                    video: 'VideoB7.mov',
                    description: '🌕 SUPER MOUSSEUX 🌕 \n\n Récolte 2026\n Une vraie pépite signée Berry W7\n Ce jaune super mousseux sur la strain envoie un profil ultra gourmand et fruité, avec une texture bien grasse et mousseuse comme les amateurs aiment 🔥\n\n 👃 Aromatique :\n À l’ouverture, ça dégage direct une grosse odeur , \n\n Derrière, t’as une légère touche creamy/gazeuse avec un fond un peu tropical qui reste longtemps au nez. Une strain connue pour son profil dessert fruité ultra propre.  \n\n 👅 Goût :\n En bouche c’est super doux et bien terpy 😮‍💨 mûr, fruits exotiques et candy sucré avec une finition légèrement crémeuse. La fumée est épaisse, propre et ultra savoureuse du début à la fin.\n\n 💨 Effets :\n Bonne grosse détente mentale et physique, montée euphorique puis relaxation bien lourde 🫠\n Parfait pour les amateurs de hash premium avec une vraie identité gustative.\n\n ✨ Texture mousseuse\n ✨ Full terpènes\n ✨ Très propre à la combustion\n ✨ Grosse frappe 2026\n\n Berry w7 produit tres demander = du très très lourd',
                    tarifs: [
                        { weight: '10g', price: 60.00 },
                        { weight: '20g', price: 100.00 },
                        { weight: '50g', price: 200.00 },
                        { weight: '100g', price: 330.00 },
                    ]
                }, */
                {
                    id: '🌕🍈 SUPER MOUSSEUX 🍈🌕',
                    flag: '🇲🇦',
                    name: '🌕🍈 Moon Melon 🍈🌕',
                    farm: '🧪 Kilogrammes Farm',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductMoo.png', 
                    video: 'VideoMoo.mov',
                    description: '🌕🍈🚀 SUPER MOUSSEUX 🚀🍈🌕\n\n 🦊🔥 Une vraie pépite signée KGF 🔥🦊\n 💛✨ Ce jaune super mousseux se démarque par sa texture fondante et son profil fruité d’une rare gourmandise. Une sélection qui sent bon l’été et les fruits gorgés de soleil. ✨💛\n\n 🍈🌙 Strain : Moon Melon 🌙🍈\n\n ✨ Profil aromatique ✨\n Moon Melon dévoile un univers aromatique aussi doux qu’exotique 🤤💨. Dès l’ouverture, des notes intenses de melon sucré 🍈 envahissent les sens, accompagnées d’une touche de pastèque fraîche 🍉 et de fruits tropicaux juteux 🥭. L’ensemble est sublimé par une légère fraîcheur florale 🌸 et une douceur crémeuse qui rappelle les bonbons aux fruits d’été 🍬☀️.\n 👃💨 Arômes dominants\n\n 😮‍💨🍈 Goût\n À la dégustation, Moon Melon offre une expérience particulièrement douce et savoureuse ☁️✨. L’attaque est dominée par un melon sucré et désaltérant 🍈🔥, rapidement rejoint par des notes de pastèque 🍉 et de fruits tropicaux 🥭. La fumée est ronde, légère et agréable, avec une finale fraîche et fruitée qui reste longtemps en bouche 😋💨.\n\n 💛☁️ Texture\n 🌕 Jaune doré éclatant\n ☁️ Texture ultra mousseuse et aérienne\n 🤲 Souple et facile à travailler\n ✨ Aspect fondant et résineux\n 🔥 Qualité visuelle premium\n\n ⚡🌴 Ambiance\n 😁 Sensation de plaisir immédiat\n 🍈 Profil ultra fruité et gourmand\n ✨ Moment de détente tout en douceur\n ☀️ Saveurs parfaites pour les amateurs de fruits d’été\n ☁️ Expérience légère et savoureuse\n 🌙 Une variété qui invite à la détente et à l’évasion\n\n 🏆🦊 Le verdict\n\n 🌕🍈🍉 Une explosion de melon juteux, de pastèque sucrée et de fruits exotiques dans un jaune super mousseux aussi beau à regarder qu’agréable à déguster. 🦊🔥💨👑💛✨🌴🍬🚀',
                    tarifs: [
                        { weight: '10g', price: 60.00 },
                        { weight: '20g', price: 100.00 },
                        { weight: '50g', price: 200.00 },
                        { weight: '100g', price: 330.00 },
                    ]
                },
                /* {
                    id: 'NICOLE KUSH ✨',
                    flag: '🇺🇸',
                    name: 'NICOLE KUSH ✨',
                    farm: '🧪 Kilogrammes Farm',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductNicole.png', 
                    video: 'VideoNicole.mov',
                    description: '💛 JAUNE MOUSSEUX \n\n 🇫🇷 Premium France \n 🧪 Travaillé par Kilogrammes Farm  \n\n 🔥 Description  \n\n Oublie le “jaune mousseux” classique. \n Ici on est sur un jaune mousseux premium de très haute qualité, travaillé par Kilogrammes Farm sur la génétique Nicole Kush — un produit qui met tout le monde d’accord dès la première odeur.  \n\n Le goût est propre, rond et puissant : notes kushy bien grasses, touches légèrement sucrées, avec un fond crémeux qui reste longtemps en bouche. Zéro goût chimique, zéro sensation cheap — c’est du vrai jaune mousseux de connaisseur.  \n\n  La texture est bien mousseuse, grasse, fondante, facile à travailler, qui s’effrite parfaitement sans coller. \n À l’odeur, c’est lourd, kush, propre, ça annonce direct le niveau premium.  \n\n 😶‍🌫️ Effet / High  \n\n Grosse montée propre et progressive. \n  High puissant mais clean, mental détendu + corps lourd, parfait pour se poser fort sans être éclaté. \n Tu sens direct que c’est au-dessus du lot.  \n\n 🏆 Pourquoi c’est du haut niveau \n • 🌿 Travaillé par Kilogrammes Farm \n • 🧬 Génétique : Nicole Kush \n • 💛 Jaune mousseux premium (pas du jaune basique) \n • 😮‍💨 Goût lourd, kushy, crémeux \n • 💎 Texture mousseuse grasse \n • 🇫🇷 Clairement dans le top des jaunes premium en France  \n\n  📦 Pour les vrais amateurs de qualité \n Si tu veux du jaune mousseux qui a du goût + du high + du standing, celui-là coche toutes les cases.',
                    tarifs: [
                        { weight: '10g', price: 60.00 },
                        { weight: '20g', price: 100.00 },
                        { weight: '50g', price: 200.00 },
                        { weight: '100g', price: 330.00 },
                    ]
                },  */
            ]
        },
      

   /*      // ============================================================
        // CATEGORIE 2 : HASH 🍫
        // ============================================================
        {
            id: 'HASH',
            name: '🍫 HASH',
            type: 'Hash',
            quality: '🍫 Hashish',
            image: 'CategExctra.png',

            farms: [
                // 1. JAUNE CRÉMEUX 🍯
                {
                    id: 'JAUNE_CREMEUX',
                    name: 'JAUNE CRÉMEUX 🍯',
                    image: '',
                    badgeText: 'Classique',
                    products: [
                        {
                            id: 'Og',
                            flag: '🇪🇸',
                            name: '🧽 OG KUSH & BUBAA KUSH 🧽',
                            farm: '🌾 No Farm 🌾',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductOg.jpg',
                            video: 'VideoOg.mov',
                            description: '🧽Jaune mousseux top crème 🧽⬇️ \n\n - Jaune crémeux comme on aime avec bonne défonce  🚬 \n -super odeur de bonne plante 🌱',
                            tarifs: [
                                { weight: '10g', price: 40.00 },
                                { weight: '25g', price: 100.00 },
                                { weight: '50g', price: 160.00 },
                                { weight: '100g', price: 280.00 },
                            ]
                        }
                    ]
                },

                // 2. CALI MOUSSE 🧬 (Nouvelle entrée distincte)
                {
                    id: 'CALI_MOUSSE_BTN',
                    name: 'CALI MOUSSE 🧬',
                    image: '', // Mets l'image qui correspond au Cali Mousse
                    badgeText: 'Filtré',
                    products: [
                  
                    ]
                },

                // 3. DRY SIFT HASH ⚡️ 
                {
                    id: 'DRY_SIFT',
                    name: 'DRY SIFT HASH ⚡️',
                    image: '',
                    badgeText: '90u',
                    products: [
                        {
                            id: 'feat',
                            flag: '🇲🇦',
                            name: 'Barbara punch 90u⚡️',
                            farm: 'Goat Farmers 🐐🍀',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductFeat.png',
                            video: 'VideoFeat.mov',
                            description: 'Réel collaborations avec La farmz Goat farmers \n ( single source marocain de grande qualité )',
                            tarifs: [
                                { weight: '10g', price: 60.00 },
                                { weight: '25g', price: 150.00 },
                                { weight: '50g', price: 250.00 },
                                { weight: '100g', price: 430.00 },
                            ]
                        }
                       
                    ]
                },

                // 4. 120U PREMIUM (Avec les options de goût qu'on a ajoutées)
                {
                    id: '120U_PREMIUM',
                    name: '120U PREMIUM 🛖',
                    image: '',
                    badgeText: 'Top Qualité',
                    products: [
                        {
                            id: '120u',
                            flag: '🇲🇦',
                            name: '🛖 120u Premium 2026',
                            farm: 'DHF FARMZ ✨',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductPapaya.png',
                            images: [
                                'ProductGrandDaddy.jpg',
                                'ProductPapaya.jpg',
                            ],
                            video: 'VideoPapaya.mov',
                            description: 'La maison et connue 🏠🔥\n un super 120u prenium 🤝 \n Sec petant avec un goût assez fruité...',

                            // 👇 NOUVELLE STRUCTURE
                            variantTitle: 'Choisis ton goût 🥣 :',
                            jars: [
                                { name: 'PAPAYA BOMB', emoji: '🥤🧨', colorClass: 'style-red' },
                                { name: 'LA GRANDADDY', emoji: '☔️☔️', colorClass: 'style-purple' }
                            ],

                            tarifs: [
                                { weight: '10g', price: 70.00 },
                                { weight: '25g', price: 170.00 },
                                { weight: '50g', price: 230.00 },
                                { weight: '100g', price: 450.00 },
                            ]
                        },
                        {
                            id: 'PURPLE',
                            flag: '🇲🇦',
                            name: 'PURPLE CREAM',
                            farm: 'DHF FARMZ ✨',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductCream.png',
                            video: 'VideoCream.mov',
                            description: '🛖 120u Premium 2026 \n\n La maison et connue 🏠🔥\n un super 120u prenium 🤝 \n Sec petant avec un goût assez fruité...',
                            tarifs: [
                                { weight: '10g', price: 70.00 },
                                { weight: '25g', price: 170.00 },
                                { weight: '50g', price: 230.00 },
                                { weight: '100g', price: 450.00 },
                            ]
                        },
                        {
                            id: 'BLUE ZUSHI',
                            flag: '🇲🇦',
                            name: 'BLUE ZUSHI',
                            farm: 'DHF FARMZ ✨',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductBlueZ.png',
                            video: 'VideoBlueZ.mov',
                            description: '🛖 120u Premium 2026 \n\n La maison et connue 🏠🔥\n un super 120u prenium 🤝 \n Sec petant avec un goût assez fruité...',
                            tarifs: [
                                { weight: '10g', price: 70.00 },
                                { weight: '25g', price: 170.00 },
                                { weight: '50g', price: 230.00 },
                                { weight: '100g', price: 450.00 },
                            ]
                        },
                        {
                            id: 'CANDY GANE',
                            flag: '🇲🇦',
                            name: 'CANDY GANE',
                            farm: 'DHF FARMZ ✨',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductGane.png',
                            video: 'VideoGane.mov',
                            description: '🛖 120u Premium 2026 \n\n La maison et connue 🏠🔥\n un super 120u prenium 🤝 \n Sec petant avec un goût assez fruité...',
                            tarifs: [
                                { weight: '10g', price: 70.00 },
                                { weight: '25g', price: 170.00 },
                                { weight: '50g', price: 230.00 },
                                { weight: '100g', price: 450.00 },
                            ]
                        },
                        {
                            id: 'HEAD BANGER',
                            flag: '🇲🇦',
                            name: 'HEAD BANGER',
                            farm: 'DHF FARMZ ✨',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductHead.png',
                            video: 'VideoHead.mov',
                            description: '🛖 120u Premium 2026 \n\n La maison et connue 🏠🔥\n un super 120u prenium 🤝 \n Sec petant avec un goût assez fruité...',
                            tarifs: [
                                { weight: '10g', price: 70.00 },
                                { weight: '25g', price: 170.00 },
                                { weight: '50g', price: 230.00 },
                                { weight: '100g', price: 450.00 },
                            ]
                        },
                        {
                            id: 'UNICORNZ ÉLITE',
                            flag: '🇲🇦',
                            name: 'UNICORNZ ÉLITE',
                            farm: 'DHF FARMZ ✨',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductUni.png',
                            video: 'VideoUni.mov',
                            description: '🛖 120u Premium 2026 \n\n La maison et connue 🏠🔥\n un super 120u prenium 🤝 \n Sec petant avec un goût assez fruité...',
                            tarifs: [
                                { weight: '10g', price: 70.00 },
                                { weight: '25g', price: 170.00 },
                                { weight: '50g', price: 230.00 },
                                { weight: '100g', price: 450.00 },
                            ]
                        },
                    ]
                },

                // 5. FROZEN PREMIUM ❄️
                {
                    id: 'FROZEN',
                    name: 'FROZEN PREMIUM ❄️',
                    image: '',
                    badgeText: 'Terps',
                    products: [
                        {
                            id: 'Buchettes',
                            flag: '🇲🇦',
                            name: 'Buchettes 🪵',
                            farm: 'Singe Source ♻️',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductBuchettes.jpg',
                            videos: [
                                'VideoBuch.mov', // Ta 1ère vidéo
                                'VideoBuch2.mov'  // Ta 2ème vidéo
                            ],
                            description: '🎄❄️ Exclu Uniquement chez nous Noël chez PISTACHIO420 🌿🔥\n\n ~ Extraction haut de gamme, arômes ultra frais✨ \n ~ texture propre et qualité premium 🥇 \n\n 🎄😮‍💨 Cette année, la bûche de Noël se déguste aussi en version Fresh Frozen ❄️🔥',

                            // 👇 NOUVELLE STRUCTURE
                            variantTitle: 'Saveurs Frozen ❄️ :', 
                            jars: [
                                { name: 'RS11', emoji: '💨💨', colorClass: 'style-purple' },
                                { name: 'I.C.C', emoji: '🍦🍦', colorClass: 'style-brown' },
                            ],

                            tarifs: [
                                { weight: '🪵x1', price: 130.00 },               
                                { weight: '🪵x2', price: 250.00 },
                                { weight: '🪵x4', price: 420.00 },


                            ]
                        },
                        {
                            id: 'Frozensift',
                            flag: '🇲🇦',
                            name: '🫒 Frozen sift ⚡️🏆',
                            farm: '🌾 No Farm 🌾',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductSift.jpg',
                            videos: [
                                'VideoSift.mov', // Ta 1ère vidéo
                                'VideoSift2.mov'  // Ta 2ème vidéo
                            ],
                            description: '🏠 No FARMZ incroyable 🏆   \n Vous les connaissait déjà produit plus que satisfaisant 🥇\n  Sec pétante 🫡\n Défonce super présente ces pour les gros pec 🤓\n 130 chez nous 😋😋\n On me chuchote que sa les vend 170 en I.D.F 🤭🤭',

                            // 👇 NOUVELLE STRUCTURE
                            variantTitle: 'Saveurs Frozen ❄️ :',
                            jars: [
                                { name: 'POISON', emoji: '💀', colorClass: 'style-purple' },
                                { name: 'ORANGE GROW', emoji: '🍊', colorClass: 'style-orange' },
                                { name: 'OREOZ', emoji: '🍩', colorClass: 'style-brown' },
                                { name: 'PANNACOTA', emoji: '🍮', colorClass: 'style-red' },

                            ],

                            tarifs: [
                                { weight: '🫒x1', price: 130.00 },               
                                { weight: '🫒x3', price: 350.00 },
                                { weight: '🫒x5', price: 500.00 },
                            ]
                        },
                        
                        {
                            id: 'FrozenSource',
                            flag: '⚡️',
                            name: '🇲🇦Frozen Sift Hash ⚡️🌬️',
                            farm: 'LA SOURCE 🥇',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductSource.png',
                               images: [
                                'ProductSource.png',
                                'ProductSource2.jpg',
                            ],
                            videos: [
                                'VideoSource.mov', // Ta 1ère vidéo
                                'VideoSource2.mov'  // Ta 2ème vidéo
                            ],
                            description: '~ Saison 2026 🪐 \n La source 🏠 Nous à sortie un ❄️ magnifique 🔥 \n Le goût l’odeur tout et la 🏆 \n Juste les vidéo donne envie 😋',

                            // 👇 NOUVELLE STRUCTURE
                            variantTitle: 'Choisis ton goût 🥣 :',
                            jars: [
                                { name: 'Pink passion', emoji: '👛❤️‍🔥', colorClass: 'style-passion' },
                                { name: 'Water melon ', emoji: '🍈 💦', colorClass: 'style-melon' }
                            ],

                            tarifs: [
                                { weight: '10g', price: 130.00 },
                                { weight: '25g', price: 250.00 },
                                { weight: '50g', price: 370.00 },
                            ]
                        }
                    ]
                },

                // 6. STATIC MOROCCO 🇲🇦
                {
                    id: 'STATIC_MOROCCO',
                    name: 'STATIC MOROCCO 🇲🇦',
                    image: '', // Mets une image de Static
                    badgeText: 'Saison 2026',
                    products: [
                        {
                            id: 'Tepo / Gelato',
                            flag: '🇲🇦',
                            name: 'Tepo / Gelato 🦅',
                            farm: '🏠 STATIC NO FARMZ',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductTepo.jpg',
                            video: 'VideoTepo.mov',
                            description: '180/90u 🍁',
                            tarifs: [
                                { weight: '5g', price: 70.00 },
                                { weight: '10g', price: 130.00 },
                            ]
                        },
                        {
                            id: 'Black',
                            flag: '🇲🇦',
                            name: 'Black Cherry 🍒',
                            farm: '🏠 STATIC NO FARMZ',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductBlack.jpg',
                            video: 'VideoBlack.mov',
                            description: 'Un static marocain haut de gamme, travaillé avec soin, qui se distingue immédiatement par son profil aromatique intense et profond.🥇⚡️ 🏆 \n Un static marocain de très haut niveau, axé sur une intensité aromatique rare, avec un profil Black Cherry sombre, sucré et profond. Idéal pour ceux qui privilégient l’odeur, le goût et la finesse du filtrage. 🔱',
                            tarifs: [
                                { weight: '5g', price: 80.00 },
                                { weight: '10g', price: 150.00 },
                                { weight: '20g', price: 250.00 },
                            ]
                        },
                        {
                            id: '220u',
                            flag: '🇲🇦',
                            name: 'K.G.F STATIC 🏆🥇',
                            farm: 'KILO GRAMMES FARMERZ ⚡️',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductKgf.png',
                          
                            video: 'VideoKgf.mov',
                            description: 'K.G.F STATIC 🏆🥇 \n Un produit d’exception de la maison KGF 🏆 \n uJamais déçu 🥇 \n Goût plus fumette douce mes en même temp forte 💪\n Une odeur qui se dégage quand tu allume le joint wahouu 🔱🔱🔥 🏠🔥\n\n 190/220u ( Réal no fake )🔥',

                            // 👇 NOUVELLE STRUCTURE
                            variantTitle: 'Choisis ton goût 🥣 :',
                            jars: [
                                { name: 'CHEERY CAKE X ORANGE PUNCH', emoji: '🍒🍊', colorClass: 'style-red' },
                                { name: 'LAMPONI', emoji: '✅', colorClass: 'style-brown' }
                            ],

                            tarifs: [
                                { weight: '5g', price: 90.00 },
                                { weight: '10g', price: 160.00 },
                      
                            ]
                        }
                    ]
                },

                // 7. STATIC USA 🇺🇸
                {
                    id: 'STATIC_USA',
                    name: 'STATIC USA 🇺🇸',
                    image: '',
                    badgeText: 'Exclusif',
                    products: [
                        {
                            id: 'StaticUSA',
                            flag: '🇺🇸',
                            name: '🗽 Kevin breats 🇺🇸',
                            farm: 'BLOOD&PRESS 🔱',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductKevin.png',
                            video: 'VideoKevin.mov',
                            description: '~Un hybride premium combinant la gourmandise crémeuse Forbidden et les notes sucrée de son fruit. 🍇   \n ~ En bouche ou à l’odeur on sent que sa était travailler avec amour 😍 🇺🇸\n ~Arômes sucrés, texture résineuse et pétante après mutation légère🌬️💨 et profil terpène riche🔥🧨 \n ~Déjà connue des habituer 🥇🏅🎖️',
                            tarifs: [
                                { weight: '1g', price: 40.00 },
                                { weight: '3g', price: 100.00 },
                                { weight: '10g', price: 320.00 },

                            ]
                        },
                        {
                            id: 'HASHIVAStaticUSA',
                            flag: '🇺🇸',
                            name: '🇺🇸💎 CANDY BEZELS 💎🇺🇸',
                            farm: 'HASHIVA STATIC 💙',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductBezels.jpg',
                            video: 'VideoBezels.mov',
                            description: '💎 HASHIVA STATIC USA 💎 \n Straight from USA 🇺🇸, ce static sift d’élite affiche une robe dorée brillante ✨🍯, résultat d’un tri ultra-clean et d’un savoir-faire top-shelf 🧬.\n\n Profil terpènique candy luxury 🍬🍭 : \n 🍓 fruits sucrés \n 🍬 bonbon haut de gamme \n ⛽ touche gazzy crémeuse signature US',
                            tarifs: [
                                { weight: '2g', price: 80.00 },
                                { weight: '5g', price: 180.00 },
                                { weight: '10g', price: 330.00 },

                            ]
                        },
                    ]
                },
                // 8. EXCTRACTION 🇺🇸
                {
                    id: 'ExctraUsa',
                    name: 'EXCTRACTION 🇺🇸',
                    image: '',
                    badgeText: 'Piatella',
                    products: [
                        {
                            id: 'LEMON TREEZ',
                            flag: '🇺🇸',
                            name: '🍋 LEMON TREEZ 🌲',
                            farm: 'PIATELLA ALBINOS 🧉',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductKevin.png',
                            video: 'VideoKevin.mov',
                            description: '159/73u 🎖️',
                            tarifs: [
                                { weight: '1g', price: 50.00 },
                                { weight: '5g', price: 220.00 },
                                { weight: '10g', price: 380.00 },

                            ]
                        }
                    ]
                }
            ]
        },
        // ============================================================
    // CATEGORIE 3 : PACKS DE NOEL 🎄
    // ============================================================
    {
        id: 'PACKS',
        name: '⏳ PACK 2025 ⌛️',
        type: 'Pack',
        quality: '⭐️ Offres Spéciales', // S'affichera dans le filtre "Sélection du chef"
        image: 'CategPack2025.png', // ⚠️ Pense à mettre une image festive ici

        // PAS DE FARMS, DIRECTEMENT LES PRODUITS
        products: [
            {
                id: '🌟 PACK 150 🌟',
                flag: '🎁',
                name: '🌟 PACK 150 🌟',
                farm: '🚨 MEGA PACK 2026 📅',
                promoEligible: false, // En général pas de code promo sur les packs déjà remisés
                type: 'Pack',
                image: '', // L'image du pack
                video: '', // Tu peux mettre une vidéo de l'ensemble si tu as

                // 'targetId' doit être l'ID EXACT du produit vers lequel tu veux aller
                packContents: [
                    { name: '5g : Cali Us ( au choix ) 🇺🇸', targetId: 'CALI_USA' },
                    { name: '5g : Frozen Sift Hash ⚡️🌬️ ', targetId: 'FrozenSource' },
                    { name: '5g : 🛖 120u Premium 2026 ( au choix ) ', targetId: '120U_PREMIUM' },
                ],
                
                // Description formatée avec les sauts de ligne
                description: 'Qualité lourde, terps ouverts à fond 🤤🌿🔥',
                
                tarifs: [
                    { weight: 'LE PACK 📦', price: 150.00 },
                ]
            },
            {
                id: '🔥 PACK 300 🔥',
                flag: '🎁',
                name: '🔥 PACK 300 🔥',
                farm: '🚨 MEGA PACK 2026 📅',
                promoEligible: false, // En général pas de code promo sur les packs déjà remisés
                type: 'Pack',
                image: '', // L'image du pack
                video: '', // Tu peux mettre une vidéo de l'ensemble si tu as

                // 'targetId' doit être l'ID EXACT du produit vers lequel tu veux aller
                packContents: [
                    { name: '10g : Cali 🇨🇦💎', targetId: 'PurpleBud' },
                    { name: '10g : Frozen Sift 🫒❄️', targetId: 'Frozensift' },
                    { name: '10g : Fresh Frozen 🪵🧊', targetId: 'Buchettes' },
                    { name: '2g : KGF Static 🇲🇦✨', targetId: '220u' } // usa'ai mis StaticUSA en exemple, mets l'ID de ta Cali
                ],
                
                // Description formatée avec les sauts de ligne
                description: 'Qualité lourde, terps ouverts à fond 🤤🌿🔥',
                
                tarifs: [
                    { weight: 'LE PACK 📦', price: 300.00 },
                ]
            },
            {
                id: '💥 PACK 600 💥',
                flag: '🎁',
                name: '💥 PACK 600 💥',
                farm: '🚨 MEGA PACK 2026 📅',
                promoEligible: false, // En général pas de code promo sur les packs déjà remisés
                type: 'Pack',
                image: '', // L'image du pack
                video: '', // Tu peux mettre une vidéo de l'ensemble si tu as

                // 'targetId' doit être l'ID EXACT du produit vers lequel tu veux aller
                packContents: [
                    { name: '25g : Cali 🇨🇦💎', targetId: 'PurpleBud' },
                    { name: '20g : Frozen Sift 🫒❄️', targetId: 'Frozensift' },
                    { name: '20g : Fresh Frozen 🪵🧊', targetId: 'Buchettes' },
                ],
                
                // Description formatée avec les sauts de ligne
                description: 'Qualité lourde, terps ouverts à fond 🤤🌿🔥',
                
                tarifs: [
                    { weight: 'LE PACK 📦', price: 300.00 },
                ]
            }
        ]
    } */
    ];

    // --- VARIABLES D'ÉTAT ---
    let cart = [];
    let currentFilters = {
        searchTerm: '',
        quality: 'all',
        farm: 'all'
    };
    let currentView = 'categories'; // 'categories', 'farms', ou 'products'
    let currentCategoryId = null; // Garde en mémoire la catégorie sélectionnée
    let currentFarmId = null; // Garde en mémoire la farm sélectionnée
    let appliedPromo = null; // Pour suivre le code promo
    let paymentMethod = 'Espèce'; // Méthode de paiement par défaut

    // --- DÉFINIS TES CODES PROMO ICI ---
    const validPromoCodes = {
      /*   "": {
            type: 'fixed', // 'percent' (pourcentage) ou 'fixed' (fixe)
            value: 10,       // 20%
            appliesTo: 'eligible', // 'eligible' (articles marqués) ou 'all' (tout le panier)
            cumulative: false // <-- AJOUTE CETTE LIGNE
        },
        "": {
            type: 'fixed', // 'percent' (pourcentage) ou 'fixed' (fixe)
            value: 10,       // 20%
            appliesTo: 'eligible', // 'eligible' (articles marqués) ou 'all' (tout le panier)
            cumulative: false // <-- AJOUTE CETTE LIGNE
        } */
        /*  "WELCOME5": {
             type: 'percent',   // 20%
             value: 20,        // 20%
             appliesTo: 'all' // S'applique à tout
         } */
        // Ajoute d'autres codes ici

        // ADD CUMULABLE FONCTION POUR PLUTARD
    };


    // --- SÉLECTEURS D'ÉLÉMENTS DU DOM ---
    const pages = document.querySelectorAll('.page');
    const productListContainer = document.getElementById('product-list');
    const loaderPage = document.getElementById('page-loader');

    const filterContainer = document.querySelector('.filters');

    // --- NOUVEAUX SÉLECTEURS POUR CHAQUE FILTRE ---
    const searchFilterWrapper = document.getElementById('search-filter').parentElement;
    const qualityFilterWrapper = document.getElementById('quality-filter').parentElement;
    const farmFilterWrapper = document.getElementById('farm-filter').parentElement;
    // --- FIN NOUVEAUX SÉLECTEURS ---

    // --- HELPER : TROUVER UN PRODUIT PAR SON ID ---
    function getProductById(productId) {
        for (const category of appData) {
            // 1. Cherche dans les produits directs (Nouveau cas)
            if (category.products) {
                const product = category.products.find(p => p.id === productId);
                if (product) return product;
            }

            // 2. Cherche dans les farms (Ancien cas)
            if (category.farms) {
                for (const farm of category.farms) {
                    const product = farm.products.find(p => p.id === productId);
                    if (product) return product;
                }
            }
        }
        return undefined; // Non trouvé
    }

    // --- NAVIGATION ---
    function showPage(pageId) {
        // 👇 AJOUT STRATÉGIQUE : Coupe toutes les vidéos instantanément au changement de page
        document.querySelectorAll('video').forEach(video => {
            video.pause();
        });
        pages.forEach(p => p.classList.remove('active'));
        // S'assure que la page existe avant de l'activer
        const page = document.getElementById(pageId);
        if (page) {
            page.classList.add('active');
        }

        // --- GESTION AUTOMATIQUE DES BOUTONS NAV ---
        const homeNav = document.getElementById('nav-menu');
        const infoNav = document.getElementById('nav-info'); // On ajoute l'info
        const contactNav = document.getElementById('nav-contact');
        const avisNav = document.getElementById('nav-avis'); // <-- AJOUT ICI

        // On reset tout
        homeNav.classList.remove('active');
        infoNav.classList.remove('active');
        contactNav.classList.remove('active');
        if (avisNav) avisNav.classList.remove('active'); // <-- AJOUT ICI

        // On active le bon
        if (pageId === 'page-contact') {
            contactNav.classList.add('active');
        } else if (pageId === 'page-info') {
            infoNav.classList.add('active');
        } else if (pageId === 'page-avis') { // <-- LA NOUVELLE CONDITION
            if (avisNav) avisNav.classList.add('active');
        }else {
            // Pour page-home, page-produit, panier, etc.
            homeNav.classList.add('active');
        }
    }

    // --- LOGIQUE D'AFFICHAGE ---

    // --- MODIFIÉ : renderHomePage ---

    function renderHomePage() {
        // Toujours afficher le conteneur principal des filtres
        filterContainer.style.display = 'flex';

        // On enlève les anciens boutons "retour"
        const existingBackBtnCat = filterContainer.querySelector('.back-to-categories-btn');
        if (existingBackBtnCat) existingBackBtnCat.remove();
        const existingBackBtnFarm = filterContainer.querySelector('.back-to-farms-btn');
        if (existingBackBtnFarm) existingBackBtnFarm.remove();


        if (currentView === 'categories') {
            renderCategoryList();

            // --- GESTION DES FILTRES (Vue Catégorie) ---
            searchFilterWrapper.style.display = 'none';
            farmFilterWrapper.style.display = 'none';
            qualityFilterWrapper.style.display = 'flex'; // On montre QUE la qualité

            // --- GESTION DU STYLE DE GRILLE ---
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';

        } else if (currentView === 'farms') {
            renderFarmList(currentCategoryId);

            // --- GESTION DES FILTRES (Vue Farms) ---
            searchFilterWrapper.style.display = 'none';
            farmFilterWrapper.style.display = 'none'; // Pas de filtres pour les farms
            qualityFilterWrapper.style.display = 'none';

            // --- GESTION DU STYLE DE GRILLE ---
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)'; // 1 colonne pour les farms

            // --- AJOUT BOUTON RETOUR (vers Catégories) ---
            const category = appData.find(c => c.id === currentCategoryId);
            const backButton = document.createElement('button');
            backButton.className = 'back-to-categories-btn'; // CLASSE IMPORTANTE
            backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;
            backButton.style.cssText = `
            border: none;
            color: #f16101;
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
            background: linear-gradient(194deg, rgb(100 35 33), #0000004f);
            border-radius: 10px;`;

            filterContainer.prepend(backButton);

        } else if (currentView === 'simple_products') { 

            updateFarmFilter(currentCategoryId);

            renderProductListSimple(currentCategoryId);

            // --- GESTION DES FILTRES ---
            // 1. On AFFICHE la barre de recherche
            searchFilterWrapper.style.display = 'flex';
            
            // 2. On AFFICHE le filtre Farm
            farmFilterWrapper.style.display = 'flex'; 
            
            // 3. On CACHE le filtre Qualité ("Sélection du chef")
            qualityFilterWrapper.style.display = 'none';

            // --- AJOUT BOUTON RETOUR (vers Catégories) ---
            const category = appData.find(c => c.id === currentCategoryId);
            const backButton = document.createElement('button');
            backButton.className = 'back-to-categories-btn';
            backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;

            backButton.style.cssText = `
            border: none;
            color: #f16101;
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
            background: linear-gradient(194deg, rgb(100 35 33), #0000004f);
            border-radius: 10px;`;

            filterContainer.prepend(backButton);

            // --- GESTION DU STYLE DE GRILLE ---
            productListContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';

        } else if (currentView === 'products') {
            updateFarmFilter(currentCategoryId, currentFarmId); 

            renderProductList(currentCategoryId, currentFarmId);

            // --- GESTION DES FILTRES (Vue Produit) ---
            searchFilterWrapper.style.display = 'flex';
            farmFilterWrapper.style.display = 'flex'; // On montre les filtres produits
            qualityFilterWrapper.style.display = 'none'; // On cache la qualité

            // --- GESTION DU STYLE DE GRILLE ---
            productListContainer.style.gridTemplateColumns = 'repeat(2, 1fr)'; // 2 colonnes

            // --- AJOUT BOUTON RETOUR (vers Farms) ---
            const category = appData.find(c => c.id === currentCategoryId);
            const farm = category.farms.find(f => f.id === currentFarmId);
            const backButton = document.createElement('button');
            backButton.className = 'back-to-farms-btn'; // CLASSE IMPORTANTE
            backButton.innerHTML = `<svg width="24"
             height="24"
              viewBox="0 0 24 24"
              ><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>  ${farm.name}`;
            backButton.style.cssText = `
            border: none;
            color: white;
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
            background: linear-gradient(182deg, #480092, transparent);
                        border-radius: 10px;`;

            filterContainer.prepend(backButton);
        }
    }

// --- FONCTION MODIFIÉE : Filtre intelligent par Sous-Catégorie ---
function updateFarmFilter(categoryId, subCategoryId = null) {
    const category = appData.find(c => c.id === categoryId);
    const farmFilter = document.getElementById('farm-filter');
    
    if (!category) return;

    let availableFarms = [];

    // CAS 1 : On est dans une sous-catégorie précise (ex: Cali USA)
    if (subCategoryId && category.farms) {
        const subCategory = category.farms.find(f => f.id === subCategoryId);
        if (subCategory) {
            subCategory.products.forEach(p => {
                if (p.farm) availableFarms.push(p.farm);
            });
        }
    } 
    // CAS 2 : On est dans une catégorie globale ou simple (ex: Packs Noel ou tout voir)
    else {
        if (category.farms) {
            // Si c'est une catégorie à tiroirs, on prend tout
            category.farms.forEach(sub => {
                sub.products.forEach(p => {
                    if (p.farm) availableFarms.push(p.farm);
                });
            });
        } else if (category.products) {
            // Si c'est une catégorie simple
            category.products.forEach(p => {
                if (p.farm) availableFarms.push(p.farm);
            });
        }
    }

    // 2. On enlève les doublons
    const uniqueFarms = ['all', ...new Set(availableFarms)];

    // 3. On génère le HTML
    const currentValue = currentFilters.farm;
    
    farmFilter.innerHTML = uniqueFarms.map(farm => 
        `<option value="${farm}">${farm === 'all' ? '👨‍🌾  -  Toutes les farms' : farm}</option>`
    ).join('');

    // 4. On remet la valeur si elle existe toujours
    if (uniqueFarms.includes(currentValue)) {
        farmFilter.value = currentValue;
    } else {
        farmFilter.value = 'all';
        currentFilters.farm = 'all'; 
    }
}

    // --- MODIFIÉ : renderCategoryList ---
    // Prend en compte le filtre qualité
    function renderCategoryList() {
        const filteredCategories = appData.filter(category => {
            const searchMatch = category.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
            // --- AJOUT ---
            const qualityMatch = currentFilters.quality === 'all' || category.quality === currentFilters.quality;
            return searchMatch && qualityMatch;
            // --- FIN AJOUT ---
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

            card.innerHTML = `
                <img src="${category.image}" alt="${category.name}">
              
            `;
            productListContainer.appendChild(card);
        });
    }

    // --- NOUVELLE FONCTION ---
    // Affiche la liste des FARMS pour une catégorie
    // --- FONCTION MODIFIÉE : Affichage liste bouton ---
    function renderFarmList(categoryId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category) {
            productListContainer.innerHTML = '<p class="no-results">Catégorie non trouvée.</p>';
            return;
        }

        const farms = category.farms;

        // On change le style de la grille pour avoir une seule colonne (liste verticale)
        productListContainer.style.gridTemplateColumns = '1fr';
        productListContainer.style.gap = '10px'; // Espacement entre les boutons

        productListContainer.innerHTML = '';
        if (farms.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucune farm trouvée.</p>';
            return;
        }

        farms.forEach(farm => {
            const btn = document.createElement('div');
            // On change la classe pour ne plus utiliser le style "card"
            btn.className = 'farm-list-btn';
            btn.dataset.farmId = farm.id;

            if (farm.clickable === false) {
                btn.classList.add('unclickable');
            }

            const productCount = farm.products.length;
            const countText = productCount > 0 ? `${productCount} prod.` : '';

            // Structure : Icone | Nom + Badge | Flèche
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
            </div>
        `;
            productListContainer.appendChild(btn);
        });
    }


// Affiche la liste des PRODUITS (Version corrigée : Pleine largeur + Sans image vide)
function renderProductListSimple(categoryId) {
    const category = appData.find(c => c.id === categoryId);
    if (!category || !category.products) {
        productListContainer.innerHTML = '<p class="no-results">Aucun produit ne correspond à cette catégorie.</p>';
        return;
    }

    // Mise à jour du filtre farm intelligent
    if(typeof updateFarmFilter === "function") updateFarmFilter(categoryId); 

    // On filtre le tableau products
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
        
        // --- 1. LOGIQUE PLEINE LARGEUR ---
        // Si c'est un Pack, on ajoute la classe spéciale
        if (product.type === 'Pack' || product.id === 'PackNoel2025') {
            card.classList.add('full-width');
        }

        if (product.clickable === false) card.classList.add('unclickable');

        let flagHTML = product.flag ? `<span class="product-flag">${product.flag}</span>` : '';

        // --- 2. LOGIQUE IMAGE (On affiche seulement si elle existe) ---
        let imgHTML = '';
        if (product.image && product.image !== '') {
            imgHTML = `<img src="${product.image}" alt="${product.name}">`;
        }

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
    // Affiche la liste des PRODUITS pour une farm
    function renderProductList(categoryId, farmId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category) {
            productListContainer.innerHTML = '<p class="no-results">Catégorie non trouvée.</p>';
            return;
        }
        const farm = category.farms.find(f => f.id === farmId);
        if (!farm) {
            productListContainer.innerHTML = '<p class="no-results">Farm non trouvée.</p>';
            return;
        }
        const filteredProducts = farm.products.filter(product => {
            const searchMatch = product.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
            // On a supprimé 'qualityMatch'. Le choix de la catégorie suffit.
            const farmMatch = currentFilters.farm === 'all' || product.farm === currentFilters.farm;

            return searchMatch && farmMatch; // On retourne sans le qualityMatch
        });

        productListContainer.innerHTML = '';
        if (filteredProducts.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucun produit ne correspond à votre recherche.</p>';
            return;
        }

        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card product-item-card';
            card.dataset.productId = product.id;

            // Si c'est le Pack de Noël (vérifie bien que l'ID est correct), on met la classe large
        if (product.id === 'PackNoel2025' || product.type === 'Pack') {
            card.classList.add('full-width');
        }

            if (product.clickable === false) {
                card.classList.add('unclickable');
            }

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


    // Affiche la page de détail d'un produit
    function renderProductPage(productId) {
        const product = getProductById(productId);
        if (!product) return;
    
        document.getElementById('product-page-title').innerText = product.name;
        const detailsContainer = document.getElementById('product-details-content');
    
        // --- 1. GESTION INTELLIGENTE DES MÉDIAS ---
        let galleryHTML = '';
        let hasMedia = false;
    
        // Images
        let mediaItems = [];
        if (product.images && product.images.length > 0) {
            mediaItems = product.images;
        } else if (product.image && product.image !== '') {
            mediaItems = [product.image];
        }
    
        if (mediaItems.length > 0) {
            hasMedia = true;
            galleryHTML += mediaItems.map(imgSrc => `
                <div class="gallery-item"><img src="${imgSrc}" alt="${product.name}"></div>
            `).join('');
        }
    
        // Vidéos
        if (product.videos && product.videos.length > 0) {
            hasMedia = true;
            product.videos.forEach(videoSrc => {
                galleryHTML += `
                    <div class="gallery-item">
                        <video controls playsinline poster="${product.image || ''}">
                            <source src="${videoSrc}" type="video/mp4">
                        </video>
                    </div>`;
            });
        } else if (product.video && product.video !== '') {
            hasMedia = true;
            galleryHTML += `
                <div class="gallery-item">
                    <video controls playsinline poster="${product.image || ''}">
                        <source src="${product.video}" type="video/mp4">
                    </video>
                </div>`;
        }
    
        // --- 2. LE RESTE (OPTIONS, DESCRIPTION, TARIFS) ---

        // --- GESTION DU CONTENU PACK (Liens internes) ---
    let packLinksHTML = '';
    if (product.packContents && product.packContents.length > 0) {
        const links = product.packContents.map(item => `
            <div class="pack-item-btn" data-target-id="${item.targetId}">
                <span>${item.name}</span>
                <span class="pack-arrow">›</span>
            </div>
        `).join('');
        
        packLinksHTML = `
            <div class="pack-content-container">
                <div style="color:#8e8e93; font-size:0.9rem; margin-bottom:5px;">📦 CONTENU DU PACK :</div>
                ${links}
            </div>
        `;
    }
        let variantsHTML = '';
        if (product.jars && product.jars.length > 0) {
            const buttonsHTML = product.jars.map((jar, index) => `
                <div class="variant-btn ${index === 0 ? 'active ' + jar.colorClass : ''}" 
                     data-name="${jar.name} ${jar.emoji}" 
                     data-color-class="${jar.colorClass}">
                    <span class="emoji">${jar.emoji}</span>
                    <span class="text">${jar.name}</span>
                </div>
            `).join('');
            variantsHTML = `<div class="variant-selector-container"><div class="variant-title">${product.variantTitle || 'Choisir une option :'}</div><div class="variant-grid">${buttonsHTML}</div></div>`;
        } else if (product.options && product.options.length > 0) {
            variantsHTML = `<div class="product-options-container" style="margin-bottom: 15px;"><label style="color: #8e8e93; font-size: 0.9rem; margin-bottom: 5px; display:block;">Choisir :</label><select id="product-variant-select" style="width: 100%; padding: 12px; border-radius: 8px; background: #2c2c2e; color: white; border: 1px solid #3a3a3c;">${product.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}</select></div>`;
        }
    
        let tarifsHTML = product.tarifs.map(tarif => `
            <div class="tarif-item">
                <div class="box-tarif">
                ${tarif.badge ? `<span class="tarif-badge">${tarif.badge}</span>` : ''} <div class="tarif-wieght">${tarif.weight}</div>
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
    
        // --- 3. INJECTION (On cache la galerie si pas de média) ---
        detailsContainer.innerHTML = `
            ${hasMedia ? `<div class="product-gallery-wrapper">${galleryHTML}</div>` : ''}
            ${hasMedia ? `<div class="gallery-counter">Swipe ➡️</div>` : ''}
            
            <div class="name" style="margin-top: ${hasMedia ? '0' : '20px'}">${product.name}</div>
            <div class="farm">${product.farm}</div>
            ${packLinksHTML} ${descriptionHTML}
                        ${variantsHTML}
            <h4 class="tarifs-title">💰 Tarifs disponibles :</h4>
            <div class="tarifs-grid-container">${tarifsHTML}</div>
        `;
    
        showPage('page-product');
    
        // Réattache les événements (pour les variantes de couleurs)
        if (product.jars && product.jars.length > 0) {
            const variantBtns = document.querySelectorAll('.variant-btn');
            const cartBtns = document.querySelectorAll('.add-to-cart-btn');
            const updateCartButtonsColor = (colorClass) => {
                cartBtns.forEach(btn => {
                    btn.classList.remove('style-purple', 'style-red', 'style-green', 'style-yellow', 'style-orange', 
                        'style-brown', 'style-passion', 'style-melon', 'style-gold', 'style-cherry', 
                        'style-glue', 'style-blue', 'style-pink', 'style-indigo', 'style-silver', 
                        'style-white', 'style-grape', 'style-fanta', 'style-dark');
                    if (colorClass) btn.classList.add(colorClass);
                });
            };
            updateCartButtonsColor(product.jars[0].colorClass);
            variantBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    variantBtns.forEach(b => {
                        b.classList.remove('active');
                        const color = b.dataset.colorClass;
                        b.classList.remove(color);
                    });
                    this.classList.add('active');
                    this.classList.add(this.dataset.colorClass);
                    updateCartButtonsColor(this.dataset.colorClass);
                    if(window.Telegram.WebApp.HapticFeedback) window.Telegram.WebApp.HapticFeedback.selectionChanged();
                });
            });
        }
    }

    // Met à jour l'affichage du panier (CORRIGÉ : Cache l'image si vide)
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

  // Affiche la page de confirmation (VERSION WHATSAPP DIRECT)
  function renderConfirmation() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // --- Logique de calcul des prix (inchangée) ---
    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    let discountableAmount = 0;

    if (appliedPromo) {
        const promo = validPromoCodes[appliedPromo];
        if (promo.appliesTo === 'eligible') {
            cart.forEach(item => {
                const product = getProductById(item.productId);
                if (product && product.promoEligible) {
                    discountableAmount += item.totalPrice;
                }
            });
        } else {
            discountableAmount = subTotal;
        }
        if (promo.type === 'percent') {
            discount = (discountableAmount * promo.value) / 100;
        } else { 
            discount = promo.value;
        }
    }
    if (discount > subTotal) discount = subTotal;
    const totalPrice = subTotal - discount;
    // --- Fin calcul ---

    // Mise à jour du résumé
    document.getElementById('confirmation-items-count').innerText = `${totalItems} article${totalItems > 1 ? 's' : ''}`;
    document.getElementById('confirmation-total-price').innerText = `${totalPrice.toFixed(2)}€`;

    // Liste des articles
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

    // UI Promo
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

    // UI Paiement
    document.querySelectorAll('.payment-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.method === paymentMethod);
    });

    // Résumé final
    const summaryContainer = document.getElementById('confirmation-summary');
    let summaryHTML = `
        <div class="summary-line">
            <span>Sous-total:</span>
            <span>${subTotal.toFixed(2)}€</span>
        </div>
    `;
    if (discount > 0) {
        summaryHTML += `
        <div class="summary-line discount">
            <span>Réduction:</span>
            <span>-${discount.toFixed(2)}€</span>
        </div>
        `;
    }
    summaryHTML += `
        <div class="summary-line total">
            <span>💰 Total final:</span>
            <span>${totalPrice.toFixed(2)}€</span>
        </div>
    `;
    summaryContainer.innerHTML = summaryHTML;

    // --- MODIFICATION POUR WHATSAPP DIRECT ---
    const copyBtn = document.getElementById('copy-order-btn');
    const contactBtn = document.getElementById('confirm-order-button');

    // 1. On CACHE le bouton "Copier" car il ne sert plus
    if(copyBtn) copyBtn.style.display = 'none';

    // 2. On configure le bouton "Confirmer" pour être actif tout de suite
    if(contactBtn) {
        contactBtn.classList.remove('secondary-action-btn'); // Enlève le gris
        contactBtn.classList.add('main-action-btn');      // Met le rouge (ou couleur principale)
        contactBtn.disabled = false;                      // Active le clic
        contactBtn.innerHTML = 'CONFIRMER SUR WHATSAPP 📞'; // Change le texte
    }

    showPage('page-confirmation');
}
    // Affiche la page de contact (inchangé)
    function renderContactPage() {
        const linksContainer = document.getElementById('contact-links-container');
        linksContainer.innerHTML = contactLinks.map(link => `
        <a href="${link.url}" class="contact-link ${link.className}" target="_blank">
        
            <span>${link.text}</span>
        </a>
        `).join('');
    }

    // Met à jour le compteur du panier (inchangé)
    function updateCartCount() {
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountElements = document.querySelectorAll('.cart-count');
        cartCountElements.forEach(el => {
            el.innerText = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
    }

  // --- MODIFIÉ : populateFilters ---
  function populateFilters() {
    const searchFilter = document.getElementById('search-filter');
    const qualityFilter = document.getElementById('quality-filter');
    const farmFilter = document.getElementById('farm-filter');

    // 1. On récupère TOUS les produits de l'app pour trouver toutes les farms
    const allNestedProducts = [];
    appData.forEach(category => {
        if (category.farms) {
            category.farms.forEach(farm => allNestedProducts.push(...farm.products));
        } else if (category.products) {
            allNestedProducts.push(...category.products);
        }
    });

    // 2. On remplit le filtre QUALITÉ (Pour la page d'accueil)
    const categoryQualities = appData.map(c => c.quality).filter(Boolean); // filter Boolean enlève les vides
    const qualities = ['all', ...new Set(categoryQualities)];
    qualityFilter.innerHTML = qualities.map(q => `<option value="${q}">${q === 'all' ? 'SELECTION DU CHEF' : q}</option>`).join('');

    // 3. On remplit le filtre FARM (Pour la page produits)
    // On récupère la propriété 'farm' de chaque produit
    const productFarms = allNestedProducts.map(p => p.farm).filter(f => f); // Garde seulement si une farm est définie
    const farms = ['all', ...new Set(productFarms)];
    
    farmFilter.innerHTML = farms.map(farm => `<option value="${farm}">${farm === 'all' ? '👨‍🌾  -  Toutes les farms' : farm}</option>`).join('');

    // 4. Les écouteurs d'événements
    searchFilter.addEventListener('input', (e) => {
        currentFilters.searchTerm = e.target.value;
        renderHomePage();
    });

    qualityFilter.addEventListener('change', (e) => {
        currentFilters.quality = e.target.value;
        renderHomePage();
    });

    farmFilter.addEventListener('change', (e) => {
        currentFilters.farm = e.target.value;
        renderHomePage();
    });
}

    // --- NOTIFICATION (inchangé) ---
    let notificationTimeout;
    function showNotification(message) {
        const notification = document.getElementById('notification-toast');
        if (!notification) return;

        clearTimeout(notificationTimeout);
        notification.classList.remove('show');
        void notification.offsetWidth;

        notification.innerText = message;
        notification.classList.add('show');

        notificationTimeout = setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // --- LOGIQUE DU PANIER ---

    // Ajoute le paramètre 'variant' à la fin
    function addToCart(productId, weight, price, variant = null) {
        // L'ID du panier doit inclure la variante pour différencier (ex: 10g Gelato vs 10g Papaya)
        const cartItemId = `${productId}-${weight}-${variant ? variant.replace(/\s+/g, '') : 'default'}`;

        const existingItem = cart.find(item => item.id === cartItemId);
        const product = getProductById(productId);

        // On prépare le nom à afficher (ex: "120u (Papaya Bomb)")
        const displayName = variant ? `${product.name} \n👉 ${variant}` : product.name;

        if (existingItem) {
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
        } else {
            cart.push({
                id: cartItemId,
                productId: productId,
                name: displayName, // On utilise le nom avec la variante
                image: product.image,
                weight: weight,
                quantity: 1,
                unitPrice: price,
                totalPrice: price,
                variant: variant // On garde la variante en mémoire si besoin
            });
        }
        renderCart();
        tg.HapticFeedback.notificationOccurred('success');
        showNotification('✅ Produit ajouté au panier !');
    }
    // updateQuantity (inchangé)
    function updateQuantity(cartItemId, action) {
        const item = cart.find(i => i.id === cartItemId);
        if (!item) return;

        if (action === 'increase') {
            item.quantity++;
        } else if (action === 'decrease') {
            item.quantity--;
        }

        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== cartItemId);
        } else {
            item.totalPrice = item.quantity * item.unitPrice;
        }
        renderCart();
    }

  // --- FORMATAGE DU MESSAGE WHATSAPP (STYLE PRO & EMOJIS) ---
  function formatOrderMessage() {
    // --- 1. CALCULS (Inchangés) ---
    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    let discountableAmount = 0;

    if (appliedPromo) {
        const promo = validPromoCodes[appliedPromo];
        if (promo.appliesTo === 'eligible') {
            cart.forEach(item => {
                const product = getProductById(item.productId);
                if (product && product.promoEligible) {
                    discountableAmount += item.totalPrice;
                }
            });
        } else {
            discountableAmount = subTotal;
        }
        if (promo.type === 'percent') {
            discount = (discountableAmount * promo.value) / 100;
        } else {
            discount = promo.value;
        }
    }
    if (discount > subTotal) discount = subTotal;
    const totalPrice = subTotal - discount;

    // --- 2. CONSTRUCTION DU MESSAGE (NOUVEAU DESIGN) ---
    
    // En-tête
    let message = "*🛒 DÉTAIL DE LA COMMANDE:*\n\n";

    // Boucle sur les articles
    cart.forEach((item, index) => {
        // On nettoie le nom (enlève les sauts de ligne techniques si variante)
        // On met en majuscules pour faire comme sur ta capture
        let cleanName = item.name.replace(/\n/g, ' ').toUpperCase();

        // Ligne 1 : Numéro + Nom du produit (en Gras *)
        message += `*${index + 1}. ${cleanName}*\n`;
        
        // Ligne 2 : Quantité
        message += `• Quantité: ${item.quantity}x ${item.weight}\n`;
        
        // Ligne 3 : Prix unitaire
        message += `• Prix unitaire: ${item.unitPrice.toFixed(2)}€\n`;
        
        // Ligne 4 : Total de la ligne
        message += `• Total: ${item.totalPrice.toFixed(2)}€\n\n`;
    });

    // Résumé financier
    // Si promo, on affiche le détail, sinon juste le total
    if (discount > 0) {
        message += `Sous-total: ${subTotal.toFixed(2)}€\n`;
        message += `Réduction (${appliedPromo}): -${discount.toFixed(2)}€\n`;
        message += `\n*💰 TOTAL: ${totalPrice.toFixed(2)}€*\n`;
    } else {
        message += `*💰 TOTAL: ${totalPrice.toFixed(2)}€*\n`;
    }

    // Pied de page
    message += `\n📍 Livraison à convenir\n`;
    message += `💳 Paiement: ${paymentMethod}`;

    return message;
}

    // --- NOUVELLE FONCTION POUR COPIER DANS LE PRESSE-PAPIERS ---
    function copyToClipboard(text) {
        if (navigator.clipboard) { // API moderne et sécurisée
            navigator.clipboard.writeText(text).then(() => {
                showNotification('✅ Commande copiée ! Colle-la dans le chat.');
                tg.HapticFeedback.notificationOccurred('success');
            }, (err) => {
                showNotification('❌ Erreur en copiant le message');
            });
        } else { // Ancien fallback (pour certains navigateurs)
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed'; // Hors de l'écran
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                showNotification('✅ Commande copiée ! Colle-la dans le chat.');
                tg.HapticFeedback.notificationOccurred('success');
            } catch (err) {
                showNotification('❌ Erreur en copiant le message');
            }
            document.body.removeChild(textArea);
        }
    }

    // --- GESTION PAGE AVIS ---

    // 1. Bouton vers le canal Potato
/*     const btnChannel = document.getElementById('btn-open-channel');
    if (btnChannel) {
        btnChannel.addEventListener('click', function() {
            // Remplace par ton vrai lien de canal
            const channelLink = "https://dympt.org/RetourP420"; 
            
            // Ouvre le lien via Telegram
            tg.openLink(channelLink); 
        });
    }
 */
    // 2. (Optionnel) Zoom sur l'image quand on clique dessus
    window.openImage = function(imgElement) {
        const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('img-in-modal');
        
        modal.style.display = "flex";
        modalImg.src = imgElement.src;
        tg.BackButton.show(); // Affiche le bouton retour natif
        
        // Clic pour fermer
        modal.onclick = function() {
            modal.style.display = "none";
            tg.BackButton.hide(); // Cache le bouton retour
        }
        
        // Gestion du bouton retour physique/natif Telegram
        tg.onEvent('backButtonClicked', function() {
            modal.style.display = "none";
            tg.BackButton.hide();
        });
    };
    // --- GESTION DES ÉVÉNEMENTS ---

    // Clics sur la barre de navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const pageId = item.dataset.page;
            if (!pageId) return;

            // Les lignes gérant la classe 'active' ont été supprimées
            // showPage(pageId) s'en occupe maintenant.

            if (pageId === 'page-contact') {
                renderContactPage();
            }

            if (pageId === 'page-home') {
                currentView = 'categories';
                currentCategoryId = null;
                // On reset TOUS les filtres
                currentFilters.searchTerm = '';
                currentFilters.quality = 'all';
                currentFilters.farm = 'all';
                document.getElementById('search-filter').value = '';
                document.getElementById('quality-filter').value = 'all';
                document.getElementById('farm-filter').value = 'all';

                renderHomePage();
            }

            showPage(pageId);
        });
    });

    // Clics sur le reste de la page
    document.body.addEventListener('click', async function (e) {
                const target = e.target;

        if (target.closest('#copy-order-btn')) {
            let message = formatOrderMessage();
            message = message.replace(/\*/g, '');

            copyToClipboard(message);

            // --- AJOUT : Inverser les styles des boutons ---
            const copyBtn = document.getElementById('copy-order-btn');
            const contactBtn = document.getElementById('confirm-order-button');

            // Copier devient Gris (secondary)
            copyBtn.classList.remove('main-action-btn');
            copyBtn.classList.add('secondary-action-btn');

            // Contacter devient Rouge (main) et est activé
            contactBtn.classList.remove('secondary-action-btn');
            contactBtn.classList.add('main-action-btn');
            contactBtn.disabled = false; // <-- ON DÉVERROUILLE LE BOUTON
            return; // On s'arrête là
        }

        // Gère l'accordéon sur la page contact
        const accordionHeader = target.closest('.accordion-header');
        if (accordionHeader) {
            const accordionItem = accordionHeader.parentElement;

            // On ferme les autres items
            document.querySelectorAll('#page-info .accordion-item.active').forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                }
            });

            // On ouvre/ferme l'item cliqué
            accordionItem.classList.toggle('active');
            return; // On arrête là pour ne pas déclencher d'autres clics
        }

        // 1. Clic sur une carte CATÉGORIE
        const categoryCard = target.closest('.category-card');
        if (categoryCard) {
            const category = appData.find(c => c.id === categoryCard.dataset.categoryId);

            if (category.products) {
                // Si la catégorie a des produits directement (pas de sous-catégorie)
                currentView = 'simple_products'; // <-- NOUVEL ÉTAT
                currentCategoryId = category.id;
            } else if (category.farms) {
                // Si la catégorie a des farms
                currentView = 'farms';
                currentCategoryId = category.id;
            } else {
                return; // Ne fait rien si la catégorie est vide
            }

            // On reset les filtres et on lance la page
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }
        // 2. MODIFIÉ : Clic sur un BOUTON FARM (Anciennement "carte farm")
        const farmBtn = target.closest('.farm-list-btn'); // <-- J'ai changé le nom de la classe ici
        if (farmBtn) {

            if (farmBtn.classList.contains('unclickable')) {
                return;
            }

            currentView = 'products';
            currentFarmId = farmBtn.dataset.farmId;

            // On reset les filtres
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';

            renderHomePage();
            return;
        }
        // 3. Clic sur une carte PRODUIT
        const productCard = target.closest('.product-item-card');
        if (productCard) {

            if (productCard.classList.contains('unclickable')) {
                return;
            }
            renderProductPage(productCard.dataset.productId);
            return;
        }

        // 4. NOUVEAU : Clic sur le bouton "Retour" (vers Catégories)
        if (target.closest('.back-to-categories-btn')) {
            currentView = 'categories';
            currentCategoryId = null;
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // 5. NOUVEAU : Clic sur le bouton "Retour" (vers Farms)
        if (target.closest('.back-to-farms-btn')) {
            currentView = 'farms';
            currentFarmId = null;
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // Clic sur "Appliquer" le code promo
        if (target.closest('#apply-promo-btn')) {
            const input = document.getElementById('promo-code-input');
            const code = input.value.toUpperCase(); // Mets en majuscule

            if (validPromoCodes[code]) {
                appliedPromo = code;
                tg.HapticFeedback.notificationOccurred('success');
                showNotification('✅ Code promo appliqué !');
            } else {
                appliedPromo = null; // Reset au cas où
                tg.HapticFeedback.notificationOccurred('error');
                showNotification('❌ Code promo invalide.');
            }
            renderConfirmation(); // Met à jour la page de confirmation
        }

        // Clic sur "Supprimer" le code promo
        if (target.closest('#remove-promo-btn')) {
            appliedPromo = null;
            showNotification('Code promo retiré.');
            renderConfirmation(); // Met à jour la page
        }

        // Clic sur un bouton de paiement
        if (target.closest('.payment-btn')) {
            paymentMethod = target.closest('.payment-btn').dataset.method;
            // Pas besoin de rafraîchir toute la page, juste les boutons
            document.querySelectorAll('.payment-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.method === paymentMethod);
            });
        }

        // Clic sur "Ajouter au panier"
        if (target.closest('.add-to-cart-btn')) {
            const btn = target.closest('.add-to-cart-btn');

            let selectedVariant = null;

            // CAS 1 : Nouveau système (Boutons JARs)
            const activeVariantBtn = document.querySelector('.variant-btn.active');
            if (activeVariantBtn) {
                selectedVariant = activeVariantBtn.dataset.name;
            }
            // CAS 2 : Ancien système (Select) - Fallback
            else {
                const variantSelect = document.getElementById('product-variant-select');
                if (variantSelect) {
                    selectedVariant = variantSelect.value;
                }
            }

            addToCart(btn.dataset.productId, btn.dataset.weight, parseFloat(btn.dataset.price), selectedVariant);
        }

        // Clic sur les boutons de quantité
        if (target.closest('.quantity-btn')) {
            const btn = target.closest('.quantity-btn');
            updateQuantity(btn.dataset.id, btn.dataset.action);
        }

        // Clic sur le bouton "fermer"
        if (target.closest('.close-button')) {
            showPage('page-home');
            // La gestion des classes 'active' est maintenant dans showPage
        }

        // Clic sur "Continuer les achats"
        if (target.closest('#cart-continue-shopping')) {
            showPage('page-home');
            // La gestion des classes 'active' est maintenant dans showPage
        }

        // Clic sur les boutons "retour" (des pages produits, panier...)
        if (target.closest('.back-button')) {
            showPage('page-home');
            // La gestion des classes 'active' est maintenant dans showPage
        }

        // Clic sur le bouton du panier
        if (target.closest('#home-cart-button')) {
            renderCart();
            showPage('page-cart');
        }

        // Clic sur "Commander"
        if (target.closest('#checkout-button')) {
            renderConfirmation();
        }

        // Clic sur "Modifier"
        if (target.closest('#confirmation-modify-order')) {
            showPage('page-cart');
        }

        // Clic sur un produit DANS un Pack
        if (target.closest('.pack-item-btn')) {
            const btn = target.closest('.pack-item-btn');
            const targetId = btn.dataset.targetId;
            
            // On charge la page du produit ciblé
            renderProductPage(targetId);
            return;
        }
          // Clic sur "Confirmer la commande" (VERSION WHATSAPP DIRECT)
    if (target.closest('#confirm-order-button')) {

        // 1. TON NUMÉRO WHATSAPP (Format international sans le +)
        const myPhoneNumber = '33745907270'; 
        
        // 2. On prépare le message
        let message = formatOrderMessage();
        
        // 3. On encode le message pour qu'il passe dans une URL
        const encodedMessage = encodeURIComponent(message);
        
        // 4. On crée le lien magique WhatsApp
        const whatsappUrl = `https://wa.me/${myPhoneNumber}?text=${encodedMessage}`;

        // 5. On ouvre WhatsApp
        tg.openLink(whatsappUrl);
    }

    });

    // --- INITIALISATION DE L'APP ---
    function init() {
        setTimeout(() => {
            populateFilters();
            renderHomePage(); // Affiche les catégories au début
            updateCartCount();
            showPage('page-home');
        }, 1500);
    }

    init();
});