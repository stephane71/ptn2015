Ptn2015.Startup = DS.Model.extend({
	name: DS.attr('string'),
	url: DS.attr('string'),
	img: DS.attr('string'),
	description: DS.attr('string'),
	category: DS.attr()
});

Ptn2015.Startup.FIXTURES = [{
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
				img: 'http://mag.livenet.fr/i/48789231a9ff877035e88c6706dd0541.jpg',
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
				url: 'https://www.cookening.com/fr',
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/p160x160/182018_451317294904111_557694859_n.jpg?oh=067bf05e0bbfaf51458d13ed5374318b&oe=54F8C584&__gda__=1420556016_7e0abc276b39b07765ca960533cbeb28',
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
				img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAG4AbgMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBBAcCA//EADoQAAEDAwEEBgcHBAMAAAAAAAEAAgMEBREGITFBURIiYXGRoQcTFIGxwdEjMkJDUnKSFTNiwiQ0ov/EABoBAQACAwEAAAAAAAAAAAAAAAAEBQEDBgL/xAAuEQACAgECAwYFBQEAAAAAAAAAAQIDBBExBRIhIjJBUWGRExRCobFScYHR4RX/2gAMAwEAAhEDEQA/AO4oAgCA8ve1jS55DWgZJJ2BDDehWbprm0UJdHC99ZKOEA6v8js8MqdVw6+zq1ovUg28Rpg9F1foVur9ItweSKSjpoW8PWF0h8sKfDhNa70m/sQZ8Usfdil9zRdrq/E/34G9jYR81uXDMfyfuav+jkea9j3Fr6+MPX9klHJ8JHwIXl8Loe2pmPEr/HT2Jm3+kdhIbcLe5vN8D+l5HHxUWzhMl3Je5Kr4qvrj7FttV8t12bmgqmSOAyWHY8d7TtVdbj2UvSa0LGrIqtXYZIrSbggCAIAgCAidQX+jsVMJKk9OV/8Abhaes/6DtW/HxrL5aRI+RkwojrI5ZfNQ3C9yH2qToQZ6sEZwwd/M966HHxK6Nt/MoL8qy/vPp5ESpRGCA26C119xz7DRzTgfiY3q+O5arL6qu/LQ2wpss7kdTefpS/xt6TrXNj/FzXHwBWpZ2M/r/JseFkL6PwRVRBNTSeqqYZIZP0yMLT4FSIzjNaxepolGUXpJaHhj3xyNkic5j2nLXNOCD2FZaTWjMJtPVF501rp8bmU18PTZubUgbW/uHHvCqMrhi71Pt/RbY3EWuzb7/wBnQo5Gysa+Nwc1wyHA5BCpdujLhNNao9oZCAICJ1Je4bHb3VEmHyO6sUWdr3fTmt+Njyvnyr+SPk5EaIczOPV9bUXGrkqqyQyTSHaeXYOQXUVVRqioR2OasslZJylua69ngICa0faorxe46apP2DGGV7c46YGNnmPcomdfKmnWO76ErDpjdbyy23OwwwxwRNihY1kbRhrWjAA7AuYbberOlSUVoj6YQya1dQ0tfCYa2COaM/he3PhyXqE5QesXoeJ1xmtJLU59qbQslK11VZunNENrqc7Xt/afxDs396usXiXN2bfcp8nhzj2quq8itssF5kGW2qsx2wuHxU95dC+tEFY172gyzaRuN1sczaK6UNY2gecNe+B2ITzzjHR58t/NVubVTcviVyXN++5Pw7bqZclkXo/sdHG0KmLoygMOcGglxAA3koDjGqby69XaScE+zx9SBvJvP37/AA5LqMPH+BUk93ucxl3u+xy8FsRClEYIAgPtSVU9FUx1NLIY5ozlrhwXmyuNkXGS1R6hOUJc0dy8Wr0igNay6UZzuMtOdh7eifqqe3hL3rl7ltVxTwsXsWWj1bY6wDoXCKNx/DNmM+agzw8iG8SdDNontImIZ4pm9KGRkjTxY4EKM01uSVJPY9rBkygCADYgCArXpAuJoNPyMjdiWqd6luOR+95Aj3qbw+r4l612XUg8Qt+HS0t30OSrpTnQgCAIAgCALIMxPfC7pQvdG7mw4PkvLSlujKbjt0JOm1HeqXHqrnU4HB7umP8A1lR54ePPeCN8Mu+G0mTlB6QrlCQK2ngqW8S37N3zHkolnCq33Hp9yXXxS1d9alus2sLVdXNiEpp53bop+rnuO4qtvwbqerWq9Cxpzqbemuj9SwqGTAgOa+lGp6dxoqQHZHCZCP3HH+qvOEw7EplHxWes4x8ilAFzg1oJJOAAMkq2bS6sq112Jmj0rfKwB0dvkYw/ilIj8ic+SiTzseG8vYlQwr57R9yRZ6P744ZJo29jpnfJq0vilHr7f6blwzI9Pf8AwO0BfG8aN37ZnfNqLilHr7f6P+Zf6e/+GpPoy/wgn2H1g5xysPlnK2R4jjS+rT+DXLAyI/SRFXQVtET7ZSTwY4yRlo8dykwurn3ZJkadU4d5NGutp4CwAgCAb9+1ZBcdH6vmo5o6G6SmSlceiyV5yYjwyeLfh3KpzcCMk7Kt/LzLPCznBqFj6fg6aNyoi9OZawoKi762bRUw67oWDJ3NbtJJ8Ve4VsaMTnl5sosyqV2XyR8kXawadoLLEBTxh8+OtO8dZ30HYFVX5Vl77T6eRaUYtdK7K6+ZLgYUckmUAQBAYc0OBDhkHeCg01IC66Ps1xDnezCnlP5lP1Dnu3HwUunOvq2eq9SHbg02+Gj9Cg6g0jcLMHTN/wCTSDfKwbWj/IcO/crnG4hXd2X0ZUZGDZT1XVFeU8hBYAQDfsIz3oDsujaqSs0zQTTEl/QLCTvPRcW58ly2ZBQvlFHTYc3OiLZ9oraGX+ouWB9rTRxDmCHOJ8uj4LW7W6lX5Ns2KpK52eaSJRajcEBjIQGjVXq10ji2puFLG4b2ulbnwW2FFs+7Fv8Ag1Tvqh3pJfyao1TYicf1Wl/mvfymR+hmv5zH/WiRo66krozJR1MM7AcF0Tw4A8ti0zhKD0ktDdCyE1rF6mwvJ7MOAcCCMoDlmvrBDaqqOro2hlNUEgxjcx+/Z2EZ8Ff8OynanCW6KDiGMqpKcdmVRWZXBAEB2TRcXqtLW5p/FF0/5Eu+a5fNlrkT/c6bCWmPD9ibUUlBAVjU2sKWzF1PA0VNbj7gOGs/cfl8FOxcGd/afSJBys2NPZXVnOrrqC6XZzvbKt/qz+TGeiwe4b/flXlOJTV3YlLblW296RF4A3KQRzKA27Xc6y01QqaGYxv3OG9rxycOIWq6iF0eWaNtV06pc0GXy2ekSkkY1tzppIJOL4h02H3bx3be9U9vCrF1req9i2q4pBrSxafck5Nc2BjOk2rkeeDWwPz5hR1w7J/T90b3xHH03+zKJq3Ur7/PG2OIw0sOSxjj1nE8T9FcYeH8um29Wypy8v5hpJaJEAppDCA9wQvqZ44Iv7krwxveTgLEpKEXJ+BmMXKSivE7tSQNpqWGnj+5ExrG9wGFx8pczbfidbCPLFR8j7LB6IXV91faLHNUQnE7sRxdjjx9wyfcpOHT8a5RexFzLnTU5Lc425xc5znkuc45JJySea6lLRaI5lvV6swgCAIAgCyAsAIAgCAtvo5tJrLsa6Rp9TSfd7ZCNngNvgqzid/JX8Nbv8Fjw2nns53svydSVAX4QFW9I1HJVadL4mlxp5RK4D9O0E+7Ofcp/DbFC9a+PQgcRrc6Onh1OUroznggCAIAgCAIAgCA2KCinuNZFSUrOlLKcDkOZPYF4tsjVBzlsbK65WSUI7s7PY7XDZ7bFRwbQwZc7i9x3lcrddK6bnI6aimNNagiQWo3BAYc1r2lrgCDvB4oDmertGyULn1tqjL6U9Z8LRkxd3NvwV7hcQUuxa+vn5lHmYDh26108imDarYqzKwAgCAIAgCA2LfQ1Vyqm01FCZZXcBuA5k8AtdtsKo802bK6p2y5YLVnWNK6bgsVNk4lq5B9rN/qOQ+K5vKy5ZEtfDwR0OLixoj6k+opLCAIAgMEZQFW1Bomhubnz0hFJUu2lzR1HHtb8wp+NxC2nsy6ogZGBXb1j0ZQ7ppe72wkzUjpYh+bB12/Ue8K4pzqLdno/UqLcO6rdar0IbiRxG8clLXXYihZAQH1paaesk9XSQyTv5RNLvgvE7IQ6yeh6hCU+kVqWuzaArqotkucgpIv0NIdIfkPNVt/FK49K1q/sWNPDZy62dF9zoNptNFaKb1FDA2Np2uO9zjzJ4qmtusulzTepcU0wpjywWhvLUbQgCAIAgCAIDGAgNWrtlBW/wDboqebtkiDvivcLZw7raNc6q596KZoO0pYXHP9LgHcCPgt3zuQvrZq+Tx/0I+kOmbJCcstVJnm6MO+Kw8u+W82ZjiUR2giTiijhYGRMaxo3NaMBaG29zeklse1gyEAQBAEB//Z",
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
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c12.12.155.155/306937_10150983368399334_357343891_n.jpg?oh=745c9665a12aafc6c02e0ef654bbd593&oe=54BDFA01&__gda__=1420997292_9d3e73ef72144d664446fbff103b34cb',
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
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/v/t1.0-1/c0.0.160.160/p160x160/1385198_518139994947434_251760386_n.png?oh=7698a29ef551fe350e444bb82622d64d&oe=54B3B50B&__gda__=1421899169_8ace368b73612baafaff21cc8e1d8143',
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
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p160x160/1381410_692923417403951_975814982_n.png?oh=63d24871046adaaaca62688c51199889&oe=54F7411B&__gda__=1420848563_4ddbfcc483348fc4e034d5d444f4b33a',
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
				img: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/v/t1.0-1/p160x160/1236334_558909187490615_236505217_n.png?oh=e69a231d611fbdf8fc6672207bd072a2&oe=54BC5C5F&__gda__=1425363342_abfee965ef4725b3ea006682913ea9b0',
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
				img: 'http://www.sharyshary.fr/assets/image/logo.png',
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
				id: 60,
				name: 'Fiverr',
				url: 'https://www.fiverr.com',
				img: 'http://www.bvp.com/sites/all/themes/BVP2011/templates/slir/w281/sites/default/files/fiverr_283_224.jpg',
				description: "What do you need done? Find it on Fiverr Browse. Buy. Done.",
				category: 1
			},
			{
				id: 61 ,
				name: 'Hello Merci',
				url: 'https://www.hellomerci.com/fr',
				img:'https://assets1.hellomerci.com/assets/logos/hellomerci-6577b3ea70b96b5b0cb6ea43ac4fcd22.svg', 
				description: 'EMPRUNTEZ À DES GENS QUI VOUS VEULENT DU BIEN',
				category: 11
			},
			{
				id: 62 ,
				name: 'Pretachanger',
				url:'http://www.pretachanger.fr/' ,
				img:'http://static.pretachanger.fr/images/front/logo.png?v=382', 
				description:'ÉCHANGE & VENDS TES VÊTEMENTS, CHAUSSURES ET ACCESSOIRES DE MODE' ,
				category: 2
			},
			{
				id: 63,
				name:'alittleMarket' ,
				url: 'http://www.alittlemarket.com/',
				img:'http://assets_orig.alittlemarket.com/image/header/logo.svg', 
				description: 'Sur A Little Market, retrouvez des créations 100% fait-main et achetez directement au créateur !',
				category: 12
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
   /*         {*/
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
