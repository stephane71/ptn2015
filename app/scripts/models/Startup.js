Ptn2015.Startup = DS.Model.extend({
	name: DS.attr('string'),
	url: DS.attr('string'),
	img: DS.attr('string'),
	description: DS.attr('string'),
	category: DS.attr(),
	team: DS.attr(),
	facebook:DS.attr(),
	description_long: DS.attr(),
	model_eco: DS.attr(),
	choice: DS.attr(),
	star: DS.attr(),
});

Ptn2015.Startup.FIXTURES = [{
				id: 0,
				name: 'Livementor',
				url: 'https://www.livementor.com',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p160x160/10647164_556622361108410_3003220382169356197_n.png?oh=091cb46ed27e92abfcc8708a5695f894&oe=54F32739&__gda__=1424046908_84a70a4556a1b5134a028f192c9c9cd2',
				facebook: 'https://www.facebook.com/LiveMentorFans',
				description: 'Cours particulier par Internet',
				description_long: "LiveMentor est un site de cours particuliers en ligne. Cette solution permet de prendre des cours dispensés par des mentors certifiés depuis n’importe où.",
				model_eco: "Commission de 10 à 20% (selon l'ancienneté du mentor) sur le prix d'un cours particulier.",
				choice: "LiveMentor se différentie des autres solutions de cours particuliers en surpriment la contrainte des déplacements.",
				team: [{
					name: "Alexandre Dana",
					linkedin: "https://www.linkedin.com/in/alexandredana",
					photo: "https://media.licdn.com/mpr/mpr/shrink_200_200/p/2/005/029/29f/0bfdbca.jpg",
					description: "Première entreprise: Top Prepas juin 2010 -  mars 2011 (10 mois). Ouvrage: Guide studyrama de survie en Prépa HEC",
					school: "ESCP Europe",
					job: "Co-fondateur & Designer" 
				},
				{
					name: "Charles Lefebvre du Prey",
					linkedin: "https://www.linkedin.com/profile/view?id=174888288&authType=name&authToken=Xx5S&trk=Skyline_click_NBM&sl=NBM%3B116367148%3A1414328958904%3B0%3B102007373%3B",
					photo: "https://media.licdn.com/mpr/mpr/shrink_200_200/p/1/005/03a/3e6/36d47e8.jpg",
					description: "",
					school: "ESCP Europe",
					job: "Co-fondateur"
				},
				{
					name: "Grégoire Clermont",
					linkedin: "https://www.linkedin.com/profile/view?id=93564136&authType=name&authToken=iJgQ&trk=Skyline_click_NBM&sl=NBM%3B116367148%3A1414328958904%3B1%3B174888288%3B",
					photo: "https://media.licdn.com/mpr/mpr/shrink_200_200/p/5/000/25c/2ad/26207e2.jpg",
					description: "",
					school: "EPITECH",
					job: "Technical Lead"
				}],
				star: 1,
				category:5 
			},
			{
				id: 1,
				name: 'Zilok',
				url: 'http://fr.zilok.com',
				img: 'http://mag.livenet.fr/i/48789231a9ff877035e88c6706dd0541.jpg',
				description: 'Location particulier et pro. Tout louer.',
				category: 5
			},
			{
				id: 2,
				name: 'Parkadom',
				url: 'http://www.parkadom.com',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/p160x160/284665_344341182323446_79402774_n.jpg?oh=d17cef14e2c8cbadceebf1d4e090df2e&oe=54E3781A&__gda__=1423331596_414f69f8cd6a6f91fe3c98d8e20a3918',
				description: 'Partager votre parking\nParkadom est la première communauté de partage de parking entre particuliers en France.',
				star: 1,
				category: 0
			},
			{
				id: 3,
				name: 'Monsieur Parking',
				url: 'http://www.monsieurparking.com',
				img: 'http://www.monsieurparking.com/images/monsieur_parking_logo.png',
				description: 'Le spécialiste du parking',
				category: 0
			},
			{
				id: 4,
				name: 'Zenpark',
				url: 'http://zenpark.com',
				img: 'https://lh5.googleusercontent.com/-N0Zbc1K8QJg/AAAAAAAAAAI/AAAAAAAAACE/dess0lTVa3Y/photo.jpg?sz=48',
				description: 'Zenpark est un réseau de parkings partagés pour se garer sereinement en ville',
				category: 0
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
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/v/t1.0-1/c141.41.517.517/s160x160/227612_143131549177218_1334241524_n.png?oh=732e5cceab13ac4e65ac2f7508af929c&oe=54E0BA95&__gda__=1424738660_406d59f1d64f43383c965ad1379c6bdb',
				description: 'Location de voiture entre particuliers',
				category: 0
			},
			{
				id: 8,
				name: 'Buzzcar',
				url: 'http://www.buzzcar.com/fr/',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c6.0.160.160/p160x160/10156029_632682783479314_4262043832607299372_n.jpg?oh=b7e1ddc330f2c1e8d0e91527df433274&oe=54D98EF8&__gda__=1423340550_1b3dac0ceaf2ef80a50dc7e21c7e1cc5',
				description: "Location de voiture entre particuliers à l'heure ou à la journée",
				category: 0
			},
			{
				id: 9,
				name: 'Livop',
				url: 'http://www.livop.fr/',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c36.13.157.157/180832_199927046684473_3824215_n.jpg?oh=45e744a318568d0e3b449d90e1e23a79&oe=54E5A5DB&__gda__=1424968696_5f40dcb4a8d30b3d50554cc8bebf175d',
				description: "Louer une voiture de particulier dans votre ville\nLouer une voiture de particulier à partir de 3 € /h et 15 € /j ACCÈS VIA SMARTPHONE - PAS D'ABONNEMENT - INSCRIPTION GRATUITE",
				category: 0
			},
			{
				id: 10,
				name: 'Koolicar',
				url: 'https://www.koolicar.com',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/p160x160/1947345_606712889411424_4082947136061782850_n.png?oh=279c84f16e3e621bf886764b6170c903&oe=54D809C7&__gda__=1425014346_7193111ec505b888a9f21ee7a0d91e58',
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
				star: 1,
				category: 6
			},
			{
				id: 13,
				name: 'Drivy',
				url: 'https://www.drivy.com/',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c83.3.827.827/s160x160/10523976_10152677690664101_7489848044299557218_n.png?oh=1ae6f914dcb921a193625d8ac6c4674c&oe=54D66552&__gda__=1424021111_121c7d1be1a78e974dc9d3f064c15423',
				facebook: 'https://www.facebook.com/drivyfr',
				description: 'Service de location de voiture entre particulier',
				description_long: "Drivy est une solution de location de voitures entre particuliers.",
				model_eco: "Commission de 30% par location",
				choice: "Drivy à le park de véhicule le plus important et se différentie sur ce marché exploité par de nombreux acteurs grâce à une communauté active.",
				team: [{
					name: "Paulin Dementhon",
					linkedin: "https://www.linkedin.com/in/paulin",
					photo: "https://media.licdn.com/mpr/mpr/shrink_200_200/p/5/005/017/3a4/326c0b9.jpg",
					description: "Quivaou.com (décembre 2008 - mai 2010) covoiturage pour de courts trajets en ville",
					school: "HEC",
					job: "Fondateur"
				},
				{
					name: "30 employés"
				}],
				star: 1,
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
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p160x160/10320544_568506736595678_2876702887042518811_n.png?oh=101980635eb1fb708e7d349117c9e657&oe=54E0CA60&__gda__=1424270693_c4c29a5498589e7b6700a9a2d53aa2d6',
				description: "Autopartage pour les voyageurs à l'aéroport et à la gare",
				star: 1,
				category: 0
			},
			{
				id: 16,
				name: 'SnapCar',
				url: 'http://www.snapcar.com',
				img: 'http://www.snapcar.com/i/logo-lg.png',
				description: "SnapCar vient instantanément vous chercher là où vous vous trouvez !",
				category: 5 
			},
			{
	
				id: 17,
				name: 'Chauffeur-Privé',
				url: 'http://www.chauffeur-prive.com',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/p160x160/1900045_638011649568041_654036601_n.png?oh=b8ea4b05ab92a2714d8ec61649f38c8d&oe=54F2E447&__gda__=1424392010_94cc08ab223e19eaafa6b3a3b89f068b',
				description: "Laissez-vous transporter avec classe & simplicité",
				category: 5
			},
			{
				id: 18,
				name: 'GuestToGuest',
				url: 'http://www.guesttoguest.com',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c0.0.160.160/p160x160/1620534_667943469936367_60763000_n.png?oh=26fcce94ae6bedb81935632b5e47d2eb&oe=54DF35AB&__gda__=1424533437_3c9662e4bae96f5306989bbd7e5d10ae',
				description: "GuestToGuest est le site internet qui vous permet d’échanger votre maison ou votre appartement pour les vacances.",
				star: 1,
				category: 1
			},
			{
				id: 19,
				name: 'BNB Sitter',
				url: 'http://alpha.bnbsitter.com',
				img: 'http://www.usine-digitale.fr/mediatheque/7/2/7/000170727_logoStartup.jpg',
				description: "Services d’accueil et ménage professionnel en moins de deux minutes.",
				star: 1,
				category: 6
			},
			{
				id: 20,
				name: 'BedyCasa',
				url: 'http://fr.bedycasa.com',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p160x160/10469223_791920630858813_1118347205803068111_n.png?oh=c02cc468ae5d80bf9a5fa4df9c126049&oe=54EDEF51&__gda__=1424574804_0b557d8bc4f64aa746f8c7ef71bfca60',
				description: "Chambres à louer chez l'habitant !",
				star: 1,
				category: 1
			},
			{
				id: 21,
				name: 'Cookening',
				url: 'https://www.cookening.com/fr',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/p160x160/182018_451317294904111_557694859_n.jpg?oh=067bf05e0bbfaf51458d13ed5374318b&oe=54F8C584&__gda__=1420556016_7e0abc276b39b07765ca960533cbeb28',
				description: "Des repas à la maison pour des rencontres improbables",
				category: 2
			},
			{
				id: 22,
				name: 'Bureaux à partager',
				url: 'https://www.bureauxapartager.com',
				img: 'https://lh6.googleusercontent.com/-EhRn_gQS_QU/AAAAAAAAAAI/AAAAAAAAAEM/6MvqU-nqe_E/photo.jpg?sz=48',
				description: "LOCATION DE BUREAUX, SALLES DE RÉUNION ET COWORKING",
				category: 2
			},
			{
				id: 23,
				name: 'Sculpteo',
				url: 'http://www.sculpteo.com/fr/',
				img: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p160x160/10520669_717664748281353_4535885492657011507_n.jpg?oh=7f9bb7ffcd53d0945524775e7a0bcef0&oe=54DC8ED6&__gda__=1424716243_da179cb84c602858bfe69b1d4d28a2d6",
				description: "Acheter, vendre et imprimer vos idées en 3D, sous forme d’objets avec Sculpteo.",
				star: 1,
				category: 5
			},
			{
				id: 24,
				name: "Prêt d'union",
				url: 'http://www.pret-dunion.fr/',
				img: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c145.54.670.670/s160x160/398175_425342517527683_2019078674_n.jpg?oh=e033ca90457cea2335f0782572cd0bd6&oe=54D9282E&__gda__=1423790128_5ac1f504045c1f1c719ae85c476805c7",
				description: "LEADER DU CRÉDIT « ENTRE PARTICULIERS ».",
				star: 1,
				category: 3
			},
			{
				id: 25,
				name: 'Kantox',
				url: 'http://kantox.com/fr/accueil-kantox',
				img: 'http://d31ipgo7t4xaw0.cloudfront.net/assets/new_branding/kantox-logo-c972a06266e76c692264f61c50025e63.png',
				description: "Kantox offre aux PME et aux ETI une solution uniquement disponible pour les grands groupes. Les taux de change réels sont toujours mentionnés afin de favoriser la transparence et les opérations se font en 1 clic.",
				category: 5
			},
			{
				id: 26,
				name: 'Vayable',
				url: 'https://www.vayable.com',
				img: 'http://oneday.wpengine.netdna-cdn.com/wp-content/uploads/vayable-logo.jpg',
				description: "FIND A NEW EXPERIENCE	Discover and book unique experiences offered by local insiders.",
				category: 1
			},
			{
				id: 27,
				name: 'TaskRabbit',
				url: 'https://www.taskrabbit.com',
				img: 'http://lsvp.com/wp-content/themes/wulightspeed/timthumb.php?src=http://lsvp.com/wp-content/uploads/2012/02/TaskRabbit_Logo_3.png&w=350&h=205&zc=2',
				description: "",
				category: 5
			},
			{
				id: 28,
				name: 'oDesk',
				url: 'https://www.odesk.com/',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c12.12.155.155/306937_10150983368399334_357343891_n.jpg?oh=745c9665a12aafc6c02e0ef654bbd593&oe=54BDFA01&__gda__=1420997292_9d3e73ef72144d664446fbff103b34cb',
				description: "",
				category: 5
			},
			{
				id: 29,
				name: 'TalenTroc',
				url: 'http://www.talentroc.com',
				img: 'http://www.talentroc.com/sites/default/themes/myc_bootstrap/logo.png',
				description: "Apprends avec des passionnés et découvre le troc de compétences !",
				category: 5
			},
			{
				id: 30,
				name: 'KissKissBankBank',
				url: 'http://www.kisskissbankbank.com',
				img: 'https://d3v4jsc54141g1.cloudfront.net/assets/header/logos2x/logo-2x-a162ebcf55053f96fd640e227a59d33a.png',
				description: "KissKissBankBank met en relation des créateurs de projets et des contributeurs passionnés par la créativité.",
				category: 3
			},
			{
				id: 31,
				name: 'MyMajorCompany',
				url: 'https://www.mymajorcompany.com',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/p160x160/1489285_10152730635588805_2974386140831763894_n.jpg?oh=f8b4d386d6d433583ff3bf112cdfbf4e&oe=54F350AD&__gda__=1424570849_1165c632381c81e22b18cb76cc1ce079',
				description: "Chaque créateur définit le montant dont il a besoin pour réaliser son projet (sa jauge) et la durée de sa collecte (3 mois maximum). L'objectif du porteur de projet est de remplir sa jauge avant sa date de fin de collecte. Pour convaincre les internautes de le soutenir, il présente son projet et fixe les contreparties qu'il offrira à ses contributeurs si son objectif de collecte est atteint.",
				category: 3
			},
			{
				id: 32,
				name: 'WeDoGood',
				url: 'https://www.wedogood.co',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/v/t1.0-1/c0.0.160.160/p160x160/1385198_518139994947434_251760386_n.png?oh=7698a29ef551fe350e444bb82622d64d&oe=54B3B50B&__gda__=1421899169_8ace368b73612baafaff21cc8e1d8143',
				description: "Contribuons à une économie plus responsable en investissant sur des projets à fort impact sociétal.",
				category: 3
			},
			{
				id: 33,
				name: 'Resodefi',
				url: 'http://www.resodefi.fr',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c0.0.160.160/p160x160/10517515_748003471924242_5369143383701549187_n.png?oh=6d407da25d11d5db70089a5bb9ef0f48&oe=54BB66ED&__gda__=1421496851_f24bb2e082d490635e26d7d59089c216',
				description: "Développer la première communauté d'entraide ouverte à tous qui finance directement et solidairement sous forme de dons les projets de tous ses membres",
				category: 3
			},
			{
				id: 34,
				name: 'Babyloan',
				url: 'http://www.babyloan.org/fr/',
				img: 'http://ess.sciencespo-alumni.fr/blog/wp-content/uploads/2013/03/url-150x150.jpg',
				description: "Sur Babyloan, vous pouvez aider une personne en lui prêtant une somme d’argent de façon désinteressée. Ce que nous appelons un prêt solidaire.",
				category: 3
			},
			{
				id: 35,
				name: 'Clic and walk',
				url: 'http://fr.clicandwalk.com',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p160x160/1381410_692923417403951_975814982_n.png?oh=63d24871046adaaaca62688c51199889&oe=54F7411B&__gda__=1420848563_4ddbfcc483348fc4e034d5d444f4b33a',
				description: "Obtenez vos données marketing et commerciales en temps réel & photo",
				star: 1,
				category: 4
			},
			{
				id: 36,
				name: 'Salezeo',
				url: 'http://www.salezeo.com/fr/',
				img: 'http://www.salezeo.com/images/new-logo.png',
				description: "Trouvez gratuitement vos prospects au sein de la première base de données collaborative d'Europe",
				category: 4
			},
			{
				id: 37,
				name: 'Quirky',
				url: 'https://www.quirky.com/shop',
				img: 'http://s3.amazonaws.com/kpcbweb/companies/455/logo/grid_3/quirky_logo.jpg?1347307957',
				description: "Inventions for people who are always plugged in.",
				category: 4
			},
			{
				id: 38,
				name: 'Creads',
				url: 'http://www.creads.fr',
				img: 'http://www.creads.fr/blog/wp-content/uploads/2012/02/picto-creads.jpg',
				description: "L'AGENCE PARTICIPATIVE - Nous organisons la créativité de milliers de créatifs pour vos projets de communication",
				star: 1,
				category: 4
			},
			{
				id: 39,
				name: 'OuiShare',
				url: 'http://ouishare.net/en',
				img: 'http://groupe.sfr.fr/sites/default/files/oui_share.jpg',
				description: "",
				category: 6
			},
			{
				id: 40,
				name: 'Yoopies',
				url: 'https://yoopies.fr/',
				img: 'https://static.yoopies.com/bundles/yoopiescore/img/logo-yoopies.png?4',
				description: "Trouver la baby-sitter ou la nounou que toute votre famille va adorer !",
				category: 5,
				model: 1
			},
			{
				id: 41,
				name: 'ILokYou',
				url: 'http://www.ilokyou.com',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/c0.0.100.100/p100x100/1800472_213118908892680_1174538681_n.jpg?oh=df05a4d93b3c1fdea79614541dbd6e4b&oe=54E67036&__gda__=1423439364_020406eebe65782d038f5abcb619113d',
				description: "Je recherche un objet à la vente ou à la location, ou une prestation de service. - OU - Je souhaite vendre ou louer des objets ou réaliser des prestations de service.",
				category: 5,
				model: 1
			},
			{
				id: 42,
				name: 'Fieldin',
				url: 'http://www.fieldin.com',
				img: 'http://www.fieldin.com/styles/images/logo-fieldin.png',
				description: "LE PREMIER SITE DE RÉSERVATION MULTISPORT",
				category: 2,
				model: 1
			},
			{
				id: 43,
				name: 'Recipay',
				url: 'http://www.recipay.com/fr/',
				img: 'http://guidedugout.fr/wp-content/uploads/2013/06/recipay-logo-1.png',
				description: "Recipay.com est la première plateforme qui récompense financièrement les utilisateurs qui concoctent des recettes de cuisine et qui les partagent avec tous.",
				category: 4,
				model: 2
			},
			{
				id: 44,
				name: 'Youmiam',
				url: 'http://youmiam.com',
				img: 'https://youmiam.com/images/logo-youmiam-share-facebook.png?v0000042',
				description: "Créez, partagez & découvrez de bonnes recettes. Simplement.",
				category: 5,
				model: 2
			},
			{
				id: 45,
				name: 'Kikast',
				url: 'https://www.kikast.com/#/',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p160x160/10256161_631107510308312_3543542030076385470_n.jpg?oh=d31999edf95f341a124e7ede5600bf1b&oe=54D6BA95&__gda__=1424194600_f59b24201b02c79e75e4e3c973d55162',
				description: "Kikast couvre toutes les rencontres sportives en audio et en direct, en permettant à chacun de devenir commentateur sportif, depuis chez soi.",
				category: 4,
				model: 2
			},
			{
				id: 46,
				name: 'Costockage',
				url: 'https://www.costockage.fr/',
				img: 'https://www.costockage.fr/catalog/view/theme/default/image/logo.png',
				description: "Le garde-meuble entre particuliers",
				category: 2,
				model: 1
			},
			{
				id: 47,
				name: 'Carpe dièse',
				url: 'http://carpediese.fr',
				img: 'http://1001startups.fr/wp-content/uploads/2013/08/carpe-diese.png',
				description: "Chaque semaine, le professeur que vous avez choisi vous appelle sur Skype, et vous prenez votre cours en direct par webcam.",
				category: 5,
				model: 1
			},
			{
				id: 48,
				name: 'We are the shops',
				url: 'https://wearetheshops.com',
				img: 'https://remixjobs-cache.s3-eu-west-1.amazonaws.com/178x178_thumbnail/1404312808-38c57c6a7f3bf4ee5bc53007c97cab97.png',
				description: "Trouvez en ligne, Achetez en ville",
				category: 5,
				model: 1
			},
			{
				id: 49,
				name: 'Centimeo',
				url: 'http://www.centimeo.fr/',
				img: '',
				description: "Machines acceptant les pièces 'rouges' pour acheter des chewing-gums",
				category: 7,
				model: 2
			},
			{
				id: 50,
				name: 'La ruche qui dit oui',
				url: 'http://www.laruchequiditoui.fr',
				img: 'http://blog.kisskissbankbank.com/wp-content/uploads/2012/10/La-Ruche-qui-dit-Oui.jpeg',
				description: "La Ruche qui dit Oui ! permet de vous réunir pour acheter directement aux producteurs de votre région.",
				star: 1,
				category: 3,
				model: 1
			},
			{
				id: 51,
				name: 'Crème & Ciseaux',
				url: 'http://www.creme-ciseaux.com',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/v/t1.0-1/p160x160/1236334_558909187490615_236505217_n.png?oh=e69a231d611fbdf8fc6672207bd072a2&oe=54BC5C5F&__gda__=1425363342_abfee965ef4725b3ea006682913ea9b0',
				description: "Réservation de prestations de beauté et bien être",
				category: 5,
				model: 1
			},
			{
				id: 52,
				name: 'LocalEyes',
				url: 'http://localeyes-app.com',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c66.66.828.828/s160x160/1234764_232616163553896_20606335_n.png?oh=5af8c1a0d0ec7597c7915bcfae537bf6&oe=54E75DFE&__gda__=1420492331_98cae9b680c9da595129a1d9a97d241a',
				description: "Permet aux marques de grande distribution de demander à près de 30 000 utilisateurs rémunérés de vérifier, via une application mobile, comment leurs produits sont mis en valeur en magasin.",
				category: 4,
				model: 2
			},
			{
				id: 53,
				name: 'PosterCloud',
				url: 'http://www.postercloud.fr/',
				img: 'http://www.postercloud.fr/images/design/logo.png',
				description: "Service web à destination des annonceurs pour les aider à planifier leurs campagnes d'affichage publicitaire physique",
				category: 4,
				model: 1
			},
			{
				id: 54,
				name: 'SoundsGoood',
				url: 'http://soundsgoood.com/',
				img: 'http://www.startinparis.com/wp-content/uploads/2014/09/Logo_Soundsgoood_Background-300x300.jpg',
				description: "Soundsgoood est un service de découverte musicale basé sur des recommandations d’experts.",
				category: 4,
				model: 2
			},
			{
				id: 55,
				name: 'SharyShary',
				url: 'http://www.sharyshary.fr/',
				img: 'http://www.sharyshary.fr/assets/image/logo.png',
				description: "Sharyshary est le premier réseau social dédié au partage d’objets et de conseils entre amis.",
				category: 5
			},
			{
				id: 56,
				name: 'Bird Office',
				url: 'https://www.bird-office.com/',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/p160x160/1619135_701950959827709_3199535960913097102_n.png?oh=a6a2f0f7389ef10566f285dfdd8e08f5&oe=54E0442C&__gda__=1423873718_e6e29ebdb04f67233c3408183157b927',
				description: "Réservez votre salle de réunion, formation,séminaire, conférence...",
				star: 1,
				category: 2
			},
			{
				id:57,
				name: 'Leetchi',
				url: 'http://www.leetchi.com/',
				img: 'http://asset.leetchi.com/Content/Quenette/img/meta.png',
				description: "Le service idéal pour collecter et gérer de l'argent à plusieurs",
				category: 3
			},
			{
				id:58,
				name: 'Frizbiz',
				url: 'https://www.frizbiz.com/fr',
				img: 'http://www.topdil.eu/images/photos/2014/07/10/j6924pv9z6.png',
				description: "Jobbing : mise en relation des particuliers pour différents jobs",
				category: 5
			},
			{
				id:59,
				name: 'Payname',
				url: 'https://payname.fr/',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/p160x160/1959422_722113654499307_2748423299031423492_n.jpg?oh=da870849a66bd9d8c5c76f3e9c9476ee&oe=54F20926&__gda__=1424198315_a4806f344f17b51e17fb9405af028ece',
				description: "Payez et faites-vous payer avec Payname, et profitez d'avantages pour chaque paiement.",
				category: 6 
			},
			{
				id: 60,
				name: 'Fiverr',
				url: 'https://www.fiverr.com',
				img: 'http://www.bvp.com/sites/all/themes/BVP2011/templates/slir/w281/sites/default/files/fiverr_283_224.jpg',
				description: "What do you need done? Find it on Fiverr Browse. Buy. Done.",
				category: 5
			},
			{
				id: 61 ,
				name: 'Hello Merci',
				url: 'https://www.hellomerci.com/fr',
				img:'https://assets1.hellomerci.com/assets/logos/hellomerci-6577b3ea70b96b5b0cb6ea43ac4fcd22.svg', 
				description: 'EMPRUNTEZ À DES GENS QUI VOUS VEULENT DU BIEN',
				star: 1,
				category: 3
			},
			{
				id: 62 ,
				name: 'Pretachanger',
				url:'http://www.pretachanger.fr/' ,
				img:'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p160x160/1559568_723017054385781_8075206721746796024_n.jpg?oh=6e4ae5ddad483d8472ea9ed5666d35e5&oe=54F06EDA&__gda__=1425311205_0d63ac955917060278d1ce48e8c02f20', 
				description:'ÉCHANGE & VENDS TES VÊTEMENTS, CHAUSSURES ET ACCESSOIRES DE MODE' ,
				category: 5
			},
			{
				id: 63,
				name:'alittleMarket' ,
				url: 'http://www.alittlemarket.com/',
				img:'http://assets_orig.alittlemarket.com/image/header/logo.svg', 
				description: 'Sur A Little Market, retrouvez des créations 100% fait-main et achetez directement au créateur !',
				category: 5
			},
			{
				id: 64,
				name: 'Chambre à louer.com',
				url: 'http://fr.chambrealouer.com/location',
				img:'http://fr.chambrealouer.com/picture/logo.png', 
				description: 'Chambrealouer.com propose à des Propriétaires d’un logement alternatif de publier gratuitement des annonces de location, et d’être contactés par des Locataires à la recherche de convivialité et de logements pas chers.' ,
				category: 1
			},
			{
				id:65 ,
				name:'citygo' ,
				url: 'http://citygoo.fr/',
				img:'http://citygoo.fr/skin/frontend/hithik/default/images/logo.png', 
				description: "FINI LES GALÈRES DE TRANSPORT !L'APPLICATION POUR VOS TRAJETS URBAINS EST LÀ",
				category: 0
			},
			{
				id:66 ,
				name: 'Place de la Loc',
				url: 'http://www.placedelaloc.com/',
				img: 'http://www.placedelaloc.com/sites/default/files/logo.jpg', 
				description: "Louez un objet, une voiture ... entre particuliers près de chez vous, en toute sécurité",
				category: 0
			},
			{
				id: 67,
				name: 'Alterre',
				url: 'https://www.alterre.org/',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/p160x160/10540844_759080800815322_4494244251295879402_n.jpg?oh=633a8686dd5a5e121846231ea4b14ef7&oe=54F60542&__gda__=1424281291_3785cd739b862c5d7541d30251626c19', 
				description: "Moteur de recherche qui regroupe l'ensemble des biens mis en partage sur internet.",
				star: 1,
				category: 6
			},
			{
				id: 68,
				name: 'Gamping',
				url: 'https://www.gamping.fr/',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p160x160/10629855_715603845180951_3835189916866969262_n.png?oh=cf5552252d459159af8381299609f638&oe=54EA2494&__gda__=1423830313_a60783f339ba8a93de6138782b3f9796', 
				description: "TROUVEZ UN TERRAIN PRIVÉ OÙ CAMPER",
				star: 1,
				category: 1
			},
			{
				id: 69,
				name:  'SwitchAround',
				url: 'http://www.switcharound.com/',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c0.0.160.160/p160x160/1926830_1070496852994778_5905107267447368176_n.jpg?oh=5948965c22a3bdec4a24ed4b928d9293&oe=54D70BBB&__gda__=1423822697_39b6f3f41337377d2a36338d45d7fc91',
				description: "Sous-location légale de logement entre étudiants",
				category: 1
			},
			{
				id: 70,
				name: 'Owlcamp',
				url: 'http://owlcamp.com/fre',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/p160x160/10354095_680184828754443_7158657505456890634_n.png?oh=d7c374a34b39a8c2dc101e6f5e6269fb&oe=54ABC340&__gda__=1423604134_9f9ecb608021a339a582b73d827ff729',
				description: "Le camping entre particuliers",
				category: 1
			},
			{
				id: 71,
				name: 'Tripnco',
				url: 'http://www.tripnco.com/fr/',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p160x160/1609940_770622226315490_7568490191366005168_n.png?oh=7f9b585c7973260085c619c85e5976ed&oe=54EE8B28&__gda__=1423340567_d6372f2fd890fc1c3575fe50d4e798ec', 
				description: "Bons plans sports et sorties à partager autour de vous !",
				category: 1
			},
			{
				id: 72,
				name: 'TrocMaison.com',
				url: 'http://www.tripnco.com/fr://www.trocmaison.com/fr/',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p160x160/1013242_939674682713809_4934162569340010454_n.png?oh=0316ae36876c87971fe0e129c9438703&oe=54DEFAC1&__gda__=1423638784_51b3b679ae36a8bae2cd206429e359b7',
				description: "Voyagez Vivez comme un habitant du pays Séjournez gratuitement",
				category: 1
			},
			{
				id: 73,
				name: "Je rêve d'une maison",
				url: 'http://www.jerevedunemaison.com',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/p160x160/10501890_342028549293962_7098296879853727092_n.jpg?oh=f3e26c78af7068b0675b1323b13f9105&oe=54E31DE0&__gda__=1425419147_ba7dfcf10f8135cb62cbe2f801f61fd9',
				description: "TROUVEZ LES RÉSIDENCES SECONDAIRES QUI VOUS CORRESPONDENT PARMI NOTRE SÉLECTION DE PLUS DE 5 000 BIENS.",
				category: 3 
			},
			{
				id: 74,
				name: 'wehome',
				url: 'http://fr.mywehome.com/',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p160x160/1455965_697620923583460_120010262_n.png?oh=d90c4d751d1850b3640df54d9f405787&oe=54EB14D9&__gda__=1423865713_459093592100bf08731e726794e304fc', 
				description: "Achetez votre villa avec piscine au prix d’un studio…",
				category: 3
			},
			{
				id: 75,
				name: 'Agorize',
				url: 'http://www.agorize.com/',
				img: 'http://www.agorize.com/wp-content/uploads/2014/10/logo.png',
				description: "Accédez dès aujourd’hui aux idées et aux talents de demain",
				star: 1,
				category: 4
			},
			//{
				//id: ,
				//name: ,
				//url: ,
				//img:, 
				//description: ,
				//category: 1
			//},
			//{
				//id: ,
				//name: ,
				//url: ,
				//img:, 
				//description: ,
				//category: 1
			//},
			//{
				//id: ,
				//name: ,
				//url: ,
				//img:, 
				//description: ,
				//category: 1
			//},
			//{
				//id: ,
				//name: ,
				//url: ,
				//img:, 
				//description: ,
				//category: 1
			
		
		/*}*/];
