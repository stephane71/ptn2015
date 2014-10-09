Ptn2015.IndexRoute = Ember.Route.extend({
   /* setupController:function(model, controller){*/
		//controller.set('model', model);
	/*},*/

    model: function () {
        return {
			category: [
					'Autopartage', 
					'Appartement', 
					'Tous type de biens',
					'Place de parking',
					'Service VTC',
					'Salle à manger', 
					'Bureaux, terrains, espace',
					'Imprimente 3D',
					'Crédit',
					'Echange de devises',
					'Services',
					'Crowdfounding',
					'Micro-cédit',
					'Crowdsourcing',
					'Mise en concurrence',
					'Autres',
					
			],
			startup: [{
				id: 0,
				name: 'Livementor',
				url: 'https://www.livementor.com',
				img: 'http://38.media.tumblr.com/avatar_be95c27d745a_128.png',
				description: 'Cours particulier par Internet',
				category: 10
			},
			{
				id: 1,
				name: 'Zilok',
				url: 'http://fr.zilok.com',
				img: 'http://altaide.typepad.com/.a/6a00d83451e4be69e20120a6376df3970c-120wi',
				description: 'Location particulier et pro. Tout louer.',
				category: 2
			},
			{
				id: 2,
				name: 'Parkadom',
				url: 'http://www.parkadom.com',
				img: 'http://www.parkadom.com/images/frontend/logo.jpg',
				description: 'Partager votre parking\nParkadom est la première communauté de partage de parking entre particuliers en France.',
				category: 3
			},
			{
				id: 3,
				name: 'Monsieur Parking',
				url: 'http://www.monsieurparking.com',
				img: 'http://www.monsieurparking.com/images/monsieur_parking_logo.png',
				description: 'Le spécialiste du parking',
				category: 3
			},
			{
				id: 4,
				name: 'Zenpark',
				url: 'http://zenpark.com',
				img: 'https://lh5.googleusercontent.com/-N0Zbc1K8QJg/AAAAAAAAAAI/AAAAAAAAACE/dess0lTVa3Y/photo.jpg?sz=48',
				description: 'Zenpark est un réseau de parkings partagés pour se garer sereinement en ville',
				category: 3
			},
			{
				id: 5,
				name: 'Sharette',
				url: 'https://sharette.fr',
				img: 'https://sharette.fr/img/logo/Typo-555a9dc0.png',
				description: '"Nous créons un nouveau transport en commun."\nSharette intègre le covoiturage dans le réseau de transport en commun : nous calculons des itinéraires combinant le trajet des conducteurs avec l’offre de RER, Métro, Transilien, Bus et Tramway. Pourquoi faire ? Pour réduire le temps de trajet des passagers et les frais des conducteurs. Le tout de manière conviviale !',
				category: 0
			},
			{
				id: 6,
				name: 'BlaBlaCar',
				url: 'http://www.covoiturage.fr',
				img: 'https://lh4.googleusercontent.com/-REg2RtdDNzM/AAAAAAAAAAI/AAAAAAAAAmQ/zVn2ui5QM-A/photo.jpg?sz=48',
				description: 'Voyagez moins cher en toute confiance.',
				category: 0
			},
			{
				id: 7,
				name: 'OuiCar',
				url: 'http://www.ouicar.fr',
				img: 'https://lh4.googleusercontent.com/-YHhJsKGftzM/AAAAAAAAAAI/AAAAAAAAACw/e_YtgR_ZvMw/photo.jpg?sz=48',
				description: 'Location de voiture entre particuliers',
				category: 0
			},
			{
				id: 8,
				name: 'Buzzcar',
				url: 'http://www.buzzcar.com/fr/',
				img: 'https://lh4.googleusercontent.com/-QH1gpMompNY/AAAAAAAAAAI/AAAAAAAABSc/ToThWWjO914/photo.jpg?sz=48',
				description: "Location de voiture entre particuliers à l'heure ou à la journée",
				category: 0
			},
			{
				id: 9,
				name: 'Livop',
				url: 'http://www.livop.fr/',
				img: 'http://www.livop.fr/images/livop/LogoLivop2013.jpg',
				description: "Louer une voiture de particulier dans votre ville\nLouer une voiture de particulier à partir de 3 € /h et 15 € /j ACCÈS VIA SMARTPHONE - PAS D'ABONNEMENT - INSCRIPTION GRATUITE",
				category: 0
			},
			{
				id: 10,
				name: 'Koolicar',
				url: 'https://www.koolicar.com',
				img: 'https://www.koolicar.com/assets/logo_koolicar-autopartage-7b8ad0e0ce9532ff0d4a7aa23132e512.png',
				description: 'Location de voitures entre particuliers sans échange de clés, de 1 heure à plusieurs jours\n ',
				category: 0,
				ref : [{
					url:'http://frenchweb.fr/carsharing-koolicar-leve-26-millions-deuros-aupres-de-la-maif/163804http://frenchweb.fr/carsharing-koolicar-leve-26-millions-deuros-aupres-de-la-maif/163804',
					text:'Koolicar lève 2,6 millions d’euros auprès de la MAIF'	
				}]
			},
			{
				id: 11,
				name: 'Zipcar',
				url: 'http://www.zipcar.fr',
				img: 'http://dru-cdn.zipcar.com/sites/default/files/zipcar_header_logo_notag.svg',
				description: "Des véhicules, à l'heure ou à la journée, disponibles dès que vous l'êtes",
				category: 0
			},
			{
				id: 12,
				name: 'Carsonar',
				url: 'http://www.carsonar.com',
				img: 'http://shareannuaire.com/wp-content/uploads/2014/07/carsonar-230x230.png',
				description: "26 000 véhicules de professionnels et particuliers 26 opérateurs d'autopartage\nComparateur de location de voiture entre particuliers",
				category: 0
			},
			{
				id: 13,
				name: 'Drivy',
				url: 'https://www.drivy.com/',
				img: 'https://lh5.googleusercontent.com/-aHkAvwBcDs0/AAAAAAAAAAI/AAAAAAAAAS8/Fb_j2Ywac18/photo.jpg?sz=48',
				description: 'Service de location de voiture entre particulier',
				category: 0
			},
			{
				id: 14,
				name: 'Carnomise',
				url: 'http://www.carnomise.com',
				img: 'http://www.carnomise.com/images/logo/logo-200x200.png',
				description: "Location de voiture entre voyageurs. Carnomise permet aux voyageurs partant de profiter d’un parking gratuit à l’aéroport en louant leur voiture aux voyageurs arrivants qui ont besoin d’un véhicule pour un ou plusieurs jours. Le propriétaire de la voiture profite du parking gratuit à l’aéroport et gagne de l'argent (50% des revenus) grâce à la location de sa voiture tandis que le locataire loue nettement moins cher.",
				category: 0
			},
			{
				id: 15,
				name: 'Tripndrive',
				url: 'https://www.tripndrive.com/fr',
				img: 'https://lh6.googleusercontent.com/-HKHX2Mq33Yg/AAAAAAAAAAI/AAAAAAAAAQg/UQHx8THEB3Q/photo.jpg?sz=48',
				description: "Autopartage pour les voyageurs à l'aéroport et à la gare",
				category: 0
			},
			{
				id: 16,
				name: 'SnapCar',
				url: 'http://www.snapcar.com',
				img: 'http://www.snapcar.com/i/logo-lg.png',
				description: "SnapCar vient instantanément vous chercher là où vous vous trouvez !",
				category: 4
			},
			{
	
				id: 17,
				name: 'Chauffeur-Privé',
				url: 'http://www.chauffeur-prive.com',
				img: 'http://www.chauffeur-prive.com/images/logocp.png',
				description: "Laissez-vous transporter avec classe & simplicité",
				category: 4
			},
			{
				id: 18,
				name: 'GuestToGuest',
				url: 'http://www.guesttoguest.com',
				img: 'https://lh4.googleusercontent.com/-wVTwuTVwkyY/AAAAAAAAAAI/AAAAAAAAAIs/Z3yEy630Yos/photo.jpg?sz=48',
				description: "GuestToGuest est le site internet qui vous permet d’échanger votre maison ou votre appartement pour les vacances.",
				category: 1
			},
			{
				id: 19,
				name: 'BNB Sitter',
				url: 'http://alpha.bnbsitter.com',
				img: 'http://www.usine-digitale.fr/mediatheque/7/2/7/000170727_logoStartup.jpg',
				description: "Services d’accueil et ménage professionnel en moins de deux minutes.",
				category: 1
			},
			{
				id: 20,
				name: 'BedyCasa',
				url: 'http://fr.bedycasa.com',
				img: 'http://cdn.bedycasa.com/bundles/bedycasacore/images/logo-bedycasa-flat-209x59.png',
				description: "Chambres à louer chez l'habitant !",
				category: 1
			},
			{
				id: 21,
				name: 'Cookening',
				url: 'data:image/jpeg;base64,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',
				img: 'https://cookening-assets-eu.s3.amazonaws.com/assets/cookening-bbc8f2ec6ffb7c8fb538b94de26f62ef.svg',
				description: "Des repas à la maison pour des rencontres improbables",
				category: 5
			},
			{
				id: 22,
				name: 'Bureaux à partager',
				url: 'https://www.bureauxapartager.com',
				img: 'https://lh6.googleusercontent.com/-EhRn_gQS_QU/AAAAAAAAAAI/AAAAAAAAAEM/6MvqU-nqe_E/photo.jpg?sz=48',
				description: "LOCATION DE BUREAUX, SALLES DE RÉUNION ET COWORKING",
				category: 6
			},
			{
				id: 23,
				name: 'Sculpteo',
				url: 'http://www.sculpteo.com/fr/',
				img: "data:image/jpeg;base64,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",
				description: "Acheter, vendre et imprimer vos idées en 3D, sous forme d’objets avec Sculpteo.",
				category: 7
			},
			{
				id: 24,
				name: "Prêt d'union",
				url: 'http://www.pret-dunion.fr/',
				img: "http://www.pret-dunion.fr/static/img/fr/logo_0.gif",
				description: "LEADER DU CRÉDIT « ENTRE PARTICULIERS ».",
				category: 8
			},
			{
				id: 25,
				name: 'Kantox',
				url: 'http://kantox.com/fr/accueil-kantox',
				img: 'http://d31ipgo7t4xaw0.cloudfront.net/assets/new_branding/kantox-logo-c972a06266e76c692264f61c50025e63.png',
				description: "Kantox offre aux PME et aux ETI une solution uniquement disponible pour les grands groupes. Les taux de change réels sont toujours mentionnés afin de favoriser la transparence et les opérations se font en 1 clic.",
				category: 9
			},
			{
				id: 26,
				name: 'Vayable',
				url: 'https://www.vayable.com',
				img: 'http://oneday.wpengine.netdna-cdn.com/wp-content/uploads/vayable-logo.jpg',
				description: "FIND A NEW EXPERIENCE	Discover and book unique experiences offered by local insiders.",
				category: 10
			},
			{
				id: 27,
				name: 'TaskRabbit',
				url: 'https://www.taskrabbit.com',
				img: 'http://lsvp.com/wp-content/themes/wulightspeed/timthumb.php?src=http://lsvp.com/wp-content/uploads/2012/02/TaskRabbit_Logo_3.png&w=350&h=205&zc=2',
				description: "",
				category: 10
			},
			{
				id: 28,
				name: 'oDesk',
				url: 'https://www.odesk.com/',
				img: 'https://d1u2uhea8ugy8e.cloudfront.net/info/static/img/globals/odesk-logo.svg',
				description: "",
				category: 10
			},
			{
				id: 29,
				name: 'TalenTroc',
				url: 'http://www.talentroc.com',
				img: 'http://www.talentroc.com/sites/default/themes/myc_bootstrap/logo.png',
				description: "Apprends avec des passionnés et découvre le troc de compétences !",
				category: 10
			},
			{
				id: 30,
				name: 'KissKissBankBank',
				url: 'http://www.kisskissbankbank.com',
				img: 'https://d3v4jsc54141g1.cloudfront.net/assets/header/logos2x/logo-2x-a162ebcf55053f96fd640e227a59d33a.png',
				description: "KissKissBankBank met en relation des créateurs de projets et des contributeurs passionnés par la créativité.",
				category: 11
			},
			{
				id: 31,
				name: 'MyMajorCompany',
				url: 'https://www.mymajorcompany.com',
				img: 'https://www.mymajorcompany.com/mmcMediaPlugin/media/cache/3/2/b/1/e/32b1ed6ddfb41e71b504789bd02a055e8de93d8c.png',
				description: "Chaque créateur définit le montant dont il a besoin pour réaliser son projet (sa jauge) et la durée de sa collecte (3 mois maximum). L'objectif du porteur de projet est de remplir sa jauge avant sa date de fin de collecte. Pour convaincre les internautes de le soutenir, il présente son projet et fixe les contreparties qu'il offrira à ses contributeurs si son objectif de collecte est atteint.",
				category: 11
			},
			{
				id: 32,
				name: 'WeDoGood',
				url: 'https://www.wedogood.co',
				img: 'https://www.wedogood.co/wp-content/themes/yproject/images/logo.png',
				description: "Contribuons à une économie plus responsable en investissant sur des projets à fort impact sociétal.",
				category: 11
			},
			{
				id: 33,
				name: 'Resodefi',
				url: 'http://www.resodefi.fr',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c0.0.160.160/p160x160/10517515_748003471924242_5369143383701549187_n.png?oh=6d407da25d11d5db70089a5bb9ef0f48&oe=54BB66ED&__gda__=1421496851_f24bb2e082d490635e26d7d59089c216',
				description: "Développer la première communauté d'entraide ouverte à tous qui finance directement et solidairement sous forme de dons les projets de tous ses membres",
				category: 11
			},
			{
				id: 34,
				name: 'Babyloan',
				url: 'http://www.babyloan.org/fr/',
				img: 'http://ess.sciencespo-alumni.fr/blog/wp-content/uploads/2013/03/url-150x150.jpg',
				description: "Sur Babyloan, vous pouvez aider une personne en lui prêtant une somme d’argent de façon désinteressée. Ce que nous appelons un prêt solidaire.",
				category: 12
			},
			{
				id: 35,
				name: 'Clic and walk',
				url: 'http://fr.clicandwalk.com',
				img: 'http://91.68.209.9/bmi/www.clicandwalk.com//images/clicandwalk.png',
				description: "Obtenez vos données marketing et commerciales en temps réel & photo",
				category: 13
			},
			{
				id: 36,
				name: 'Salezeo',
				url: 'http://www.salezeo.com/fr/',
				img: 'http://www.salezeo.com/images/new-logo.png',
				description: "Trouvez gratuitement vos prospects au sein de la première base de données collaborative d'Europe",
				category: 13
			},
			{
				id: 37,
				name: 'Quirky',
				url: 'https://www.quirky.com/shop',
				img: 'http://s3.amazonaws.com/kpcbweb/companies/455/logo/grid_3/quirky_logo.jpg?1347307957',
				description: "Inventions for people who are always plugged in.",
				category: 14
			},
			{
				id: 38,
				name: 'Creads',
				url: 'http://www.creads.fr',
				img: 'http://www.creads.fr/blog/wp-content/uploads/2012/02/picto-creads.jpg',
				description: "L'AGENCE PARTICIPATIVE - Nous organisons la créativité de milliers de créatifs pour vos projets de communication",
				category: 14
			},
			{
				id: 39,
				name: 'OuiShare',
				url: 'http://ouishare.net/en',
				img: 'http://groupe.sfr.fr/sites/default/files/oui_share.jpg',
				description: "",
				category: 15
			},
			{
				id: 40,
				name: 'Yoopies',
				url: 'https://yoopies.fr/',
				img: 'https://static.yoopies.com/bundles/yoopiescore/img/logo-yoopies.png?4',
				description: "Trouver la baby-sitter ou la nounou que toute votre famille va adorer !",
				category: 10,
				model: 1
			},
			{
				id: 41,
				name: 'ILokYou',
				url: 'http://www.ilokyou.com',
				img: 'http://www.ilokyou.com/public/images/v2/logo.png',
				description: "Je recherche un objet à la vente ou à la location, ou une prestation de service. - OU - Je souhaite vendre ou louer des objets ou réaliser des prestations de service.",
				category: 10,
				model: 1
			},
			{
				id: 42,
				name: 'Fieldin',
				url: 'http://www.fieldin.com',
				img: 'http://www.fieldin.com/styles/images/logo-fieldin.png',
				description: "LE PREMIER SITE DE RÉSERVATION MULTISPORT",
				category: 6,
				model: 1
			},
			{
				id: 43,
				name: 'Recipay',
				url: 'http://www.recipay.com/fr/',
				img: 'http://guidedugout.fr/wp-content/uploads/2013/06/recipay-logo-1.png',
				description: "Recipay.com est la première plateforme qui récompense financièrement les utilisateurs qui concoctent des recettes de cuisine et qui les partagent avec tous.",
				category: 13,
				model: 2
			},
			{
				id: 44,
				name: 'Youmiam',
				url: 'http://youmiam.com',
				img: 'https://youmiam.com/images/logo-youmiam-share-facebook.png?v0000042',
				description: "Créez, partagez & découvrez de bonnes recettes. Simplement.",
				category: 13,
				model: 2
			},
			{
				id: 45,
				name: 'Kikast',
				url: 'https://www.kikast.com/#/',
				img: 'https://www.kikast.com/img/logo-kikast-petit.png',
				description: "Kikast couvre toutes les rencontres sportives en audio et en direct, en permettant à chacun de devenir commentateur sportif, depuis chez soi.",
				category: 10,
				model: 2
			},
			{
				id: 46,
				name: 'Costockage',
				url: 'https://www.costockage.fr/',
				img: 'https://www.costockage.fr/catalog/view/theme/default/image/logo.png',
				description: "Le garde-meuble entre particuliers",
				category: 10,
				model: 1
			},
			{
				id: 47,
				name: 'Carpe dièse',
				url: 'http://carpediese.fr',
				img: 'http://1001startups.fr/wp-content/uploads/2013/08/carpe-diese.png',
				description: "Chaque semaine, le professeur que vous avez choisi vous appelle sur Skype, et vous prenez votre cours en direct par webcam.",
				category: 10,
				model: 1
			},
			{
				id: 48,
				name: 'We are the shops',
				url: 'https://wearetheshops.com',
				img: 'https://remixjobs-cache.s3-eu-west-1.amazonaws.com/178x178_thumbnail/1404312808-38c57c6a7f3bf4ee5bc53007c97cab97.png',
				description: "Trouvez en ligne, Achetez en ville",
				category: 15,
				model: 1
			},
			{
				id: 49,
				name: 'Centimeo',
				url: 'http://www.centimeo.fr/',
				img: '',
				description: "Machines acceptant les pièces 'rouges' pour acheter des chewing-gums",
				category: 15,
				model: 2
			},
			{
				id: 50,
				name: 'La ruche qui dit oui',
				url: 'http://www.laruchequiditoui.fr',
				img: 'http://blog.kisskissbankbank.com/wp-content/uploads/2012/10/La-Ruche-qui-dit-Oui.jpeg',
				description: "La Ruche qui dit Oui ! permet de vous réunir pour acheter directement aux producteurs de votre région.",
				category: 11,
				model: 1
			},
			{
				id: 51,
				name: 'Crème & Ciseaux',
				url: 'http://www.creme-ciseaux.com',
				img: 'http://www.creme-ciseaux.com/images/logo_white.png',
				description: "Réservation de prestations de beauté et bien être",
				category: 10,
				model: 1
			},
			{
				id: 52,
				name: 'LocalEyes',
				url: 'http://localeyes-app.com',
				img: 'https://media.licdn.com/mpr/mpr/jc/p/5/005/052/311/35ea2e4.png',
				description: "Permet aux marques de grande distribution de demander à près de 30 000 utilisateurs rémunérés de vérifier, via une application mobile, comment leurs produits sont mis en valeur en magasin.",
				category: 12,
				model: 2
			},
			{
				id: 53,
				name: 'PosterCloud',
				url: 'http://www.postercloud.fr/',
				img: 'http://www.postercloud.fr/images/design/logo.png',
				description: "Service web à destination des annonceurs pour les aider à planifier leurs campagnes d'affichage publicitaire physique",
				category: 15,
				model: 1
			},
			{
				id: 54,
				name: 'SoundsGoood',
				url: 'http://soundsgoood.com/',
				img: 'http://www.startinparis.com/wp-content/uploads/2014/09/Logo_Soundsgoood_Background-300x300.jpg',
				description: "Soundsgoood est un service de découverte musicale basé sur des recommandations d’experts.",
				category: 10,
				model: 2
			},
			{
				id: 55,
				name: 'SharyShary',
				url: 'http://www.sharyshary.fr/',
				img: 'http://91.68.209.12/bmi/www.sharyshary.fr/assets/image/logo.png',
				description: "Sharyshary est le premier réseau social dédié au partage d’objets et de conseils entre amis.",
				category: 2
			},
			{
				id: 56,
				name: 'Bird Office',
				url: 'https://www.bird-office.com/',
				img: 'https://www.bird-office.com/img/logo-bird-office.png',
				description: "Réservez votre salle de réunion, formation,séminaire, conférence...",
				category: 6
			},
			{
				id:57,
				name: 'Leetchi',
				url: 'http://www.leetchi.com/',
				img: 'http://asset.leetchi.com/Content/Quenette/img/meta.png',
				description: "Le service idéal pour collecter et gérer de l'argent à plusieurs",
				category: 15
			},
			{
				id:58,
				name: 'Frizbiz',
				url: 'https://www.frizbiz.com/fr',
				img: 'http://www.topdil.eu/images/photos/2014/07/10/j6924pv9z6.png',
				description: "Jobbing : mise en relation des particuliers pour différents jobs",
				category: 10
			},
			{
				id:59,
				name: 'Payname',
				url: 'https://payname.fr/',
				img: 'https://payname.fr/images/logo-payname-full.jpg',
				description: "Payez et faites-vous payer avec Payname, et profitez d'avantages pour chaque paiement.",
				category: 15
			},
			{
				name: '',
				url: '',
				img: '',
				description: "",
				category: 1
			},
			{
				name: '',
				url: '',
				img: '',
				description: "",
				category: 1
			},
			{
				name: '',
				url: '',
				img: '',
				description: "",
				category: 1
			},
			{
				name: '',
				url: '',
				img: '',
				description: "",
				category: 1
			},
			{
				name: '',
				url: '',
				img: '',
				description: "",
				category: 1
			},
			{
				name: '',
				url: '',
				img: '',
				description: "",
				category: 1
			},
			{
				name: 'Fiverr',
				url: 'https://www.fiverr.com',
				img: 'http://www.bvp.com/sites/all/themes/BVP2011/templates/slir/w281/sites/default/files/fiverr_283_224.jpg',
				description: "What do you need done? Find it on Fiverr Browse. Buy. Done.",
				category: 1
		}]};
    }
});
