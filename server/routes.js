var Products = require('./model/products');
var imgArray = ["https://www.bigbasket.com/media/uploads/p/s/10000428_7-bb-popular-toorarhar-dal.jpg", "https://www.bigbasket.com/media/uploads/p/s/40042841_2-bb-royal-toor-dalarhar-dal-desi.jpg", "https://www.bigbasket.com/media/uploads/p/s/10000446_8-bb-royal-raw-peanuts-mungaphalishengdana.jpg", "https://www.bigbasket.com/media/uploads/p/s/40053931_2-bb-royal-moong-dal.jpg", "https://www.bigbasket.com/media/uploads/p/s/10000565_7-bb-royal-rajma-whitechitra.jpg", "https://www.bigbasket.com/media/uploads/p/s/10000563_7-bb-royal-rajma-kashmiri.jpg", "https://www.bigbasket.com/media/uploads/p/s/40026594_2-bb-royal-green-moong-splitchilka.jpg", "https://www.bigbasket.com/media/uploads/p/s/30005420_2-bb-popular-moong-dal.jpg", "https://www.bigbasket.com/media/uploads/p/mm/30010371_2-bb-royal-moth-wholematki.jpg", "https://www.bigbasket.com/media/uploads/p/mm/70001286_2-bb-royal-white-peasmatar.jpg", "https://www.bigbasket.com/media/uploads/p/mm/30000101_4-bb-royal-green-moong-wholesabut.jpg", "https://www.bigbasket.com/media/uploads/p/mm/30010385_2-bb-popular-peanutsmungaphali-raw.jpg", "https://www.bigbasket.com/media/uploads/p/mm/30002287_2-tata-sampann-moong-dal.jpg", "https://www.bigbasket.com/media/uploads/p/mm/10000477_7-bb-royal-urad-black-wholesabut.jpg", "https://www.bigbasket.com/media/uploads/p/mm/20000432_2-bb-popular-channa-dal.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40003550_3-bb-popular-soya-chunks.jpg", "https://www.bigbasket.com/media/uploads/p/mm/70001288_2-bb-royal-rajma-red.jpg", "https://www.bigbasket.com/media/uploads/p/mm/30000120_5-bb-royal-raw-peanutsmungaphalishengdana.jpg", "https://www.bigbasket.com/media/uploads/p/mm/30000103_3-bb-royal-channa-brown-big.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40040909_2-bb-popular-toor-dal-economy.jpg", "https://www.bigbasket.com/media/uploads/p/mm/20005213_2-tata-sampann-moong-whole.jpg", "https://www.bigbasket.com/media/uploads/p/mm/30002286_2-tata-sampann-masoor-dal.jpg", "https://www.bigbasket.com/media/uploads/p/mm/60000720_2-bb-royal-channa-dal-unpolished.jpg", "https://www.bigbasket.com/media/uploads/p/mm/258588_2-nutrela-soya-mini-chunk.jpg", "https://www.bigbasket.com/media/uploads/p/mm/30010466_2-bb-royal-mix-dal.jpg", "https://www.bigbasket.com/media/uploads/p/mm/30010367_1-bb-popular-moong-green-splitchilka.jpg", "https://www.bigbasket.com/media/uploads/p/mm/10000474_7-bb-royal-urad-black-splitchilka.jpg", "https://www.bigbasket.com/media/uploads/p/mm/30010377_2-bb-popular-urad-dal-split.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40058665_1-bb-popular-masoor-dal.jpg", "https://www.bigbasket.com/media/uploads/p/mm/20000430_5-bb-royal-urad-wholegota.jpg", "https://www.bigbasket.com/media/uploads/p/mm/30002288_2-tata-sampann-chana-dal-unpolished.jpg", "https://www.bigbasket.com/media/uploads/p/mm/10000561_7-bb-royal-peasmatar-green.jpg", "https://www.bigbasket.com/media/uploads/p/mm/10000470_7-bb-royal-lobia-white.jpg", "https://www.bigbasket.com/media/uploads/p/mm/30000207_3-bb-royal-jowar.jpg", "https://www.bigbasket.com/media/uploads/p/mm/20005211_2-tata-sampann-moong-chilka.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40003518_2-nutrela-soya-chunks.jpg", "https://www.bigbasket.com/media/uploads/p/mm/30000201_2-bb-royal-bajra.jpg", "https://www.bigbasket.com/media/uploads/p/mm/30010370_1-bb-popular-moth-wholematki.jpg", "https://www.bigbasket.com/media/uploads/p/mm/30010383_2-bb-popular-peanutsmungaphalishengdana-raw.jpg", "https://www.bigbasket.com/media/uploads/p/mm/10000487_7-bb-royal-soya-bean.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40017980_2-tata-sampann-urad-dal-whole-unpolished.jpg", "https://www.bigbasket.com/media/uploads/p/mm/30008840_1-satyam-dalia.jpg", "https://www.bigbasket.com/media/uploads/p/mm/257383_3-nutrela-soya-granules.jpg", "https://www.bigbasket.com/media/uploads/p/mm/60000018_2-bb-royal-channa-green.jpg", "https://www.bigbasket.com/media/uploads/p/mm/10000800_6-bb-royal-fried-grambengal-gram.jpg", "https://www.bigbasket.com/media/uploads/p/mm/20005212_2-tata-i-shakti-chana-dal-unpolished.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40017981_4-tata-sampann-urad.jpg", "https://www.bigbasket.com/media/uploads/p/mm/10000438_10-bb-royal-red-lobia.jpg", "https://www.bigbasket.com/media/uploads/p/mm/10000562_7-bb-royal-horse-gramkulthi.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40003551_2-bb-popular-ragiraglu.jpg", "https://www.bigbasket.com/media/uploads/p/mm/60000722_2-bb-royal-urad-wholegota-unpolished.jpg", "https://www.bigbasket.com/media/uploads/p/mm/30010382_1-bb-popular-jowar.jpg", "https://www.bigbasket.com/media/uploads/p/mm/60000724_2-bb-royal-unpolish-urad-dalsplit.jpg", "https://www.bigbasket.com/media/uploads/p/mm/30008843_1-satyam-khobra.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40061861_1-bb-royal-watana-black.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40061795_1-bb-royal-chavli-black-eye.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40053928_2-bb-popular-urad-black-spilt.jpg", "https://www.bigbasket.com/media/uploads/p/mm/257382_2-nutrela-soya-chunks.jpg", "https://www.bigbasket.com/media/uploads/p/mm/30008839_1-satyam-barley.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40056517_2-bb-royal-khichdi-mix.jpg", "https://www.bigbasket.com/media/uploads/p/mm/30008838_2-satyam-alshi.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40056521_2-bb-royal-tadka-dal.jpg", "https://www.bigbasket.com/media/uploads/p/mm/261821_3-nutrela-soya-granules-high-protein.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40081216_1-fortune-soya-bari-mini.jpg", "https://www.bigbasket.com/media/uploads/p/mm/20000538_3-bb-popular-urad-gota.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40019481_2-fortune-soya-chunks.jpg", "https://www.bigbasket.com/media/uploads/p/mm/30008810_1-satyam-math.jpg", "https://www.bigbasket.com/media/uploads/p/mm/20000501_1-bb-royal-ragluragi.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40096734_1-delight-foods-rajma-bhaderwahi-made-in-kashmir.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40081217_1-fortune-soya-bari-chura.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40109157_2-india-gate-quinoa.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40099846_1-bb-popular-masoor-dal-horeca.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40099836_1-bb-economy-toor-dal-horeca.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40099848_1-bb-popular-channa-brown-horeca.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40110643_1-bb-economy-chavli-whole.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40099845_1-bb-popular-green-moong-whole-horeca.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40099847_1-bb-popular-green-peas-horeca.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40099849_1-bb-economy-kabuli-channa-horeca.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40099851_1-bb-popular-white-peas-horeca.jpg", "https://www.bigbasket.com/media/uploads/p/mm/1202029_2-bb-combo-bb-popular-toorarhar-dal-1kg-bb-royal-basmati-rice-premium-1kg.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40056516_3-bb-royal-dal-makhani-mix.jpg", "https://www.bigbasket.com/media/uploads/p/mm/40108014_1-bb-economy-soya-bean-chunks-horeca.jpg"];
var productArray = ["Toor/Arhar Dal", "Toor Dal/Arhar Dal (Desi)", "Raw Peanuts/Mungaphali/Raw Shengdane", "Moong Dal", "Kabuli Channa/Kabuli Harbhara/Chana", "Masoor Dal", "Urad Dal - Split", "Green Moong Whole/Sabut/Hive Moong Purna/Sabut", "Channa Dal/Harbhara", "Toor Dal", "Channa Brown (Small)/Harbhara Tapkiri (Lahan)", "Moong Dal Unpolished", "Kabuli Channa/Kabuli Harbhara/Chana", "Masoor Black Whole/Sabut", "Toor Dal Unpolished", "Chawli/Lobia White/Chawli Pandhri", "Rajma White/Chitra/Rajma Pandhra", "Rajma - Kashmiri", "Green Moong Split/Chilka/Hirve Moong Chilka", "Moong Dal", "Moth Whole/Matki", "White Peas/Matar/Pandhre Watane", "Green Moong Whole/Sabut", "BB PopularRaw Peanuts/Mungaphali/BB Kacche Shengdane", "Moong Dal", "Urad Black Whole/Sabut/Udid Kale Purna", "Channa Dal/Harbhara", "Soya Chunks/Soyabean Wade", "Rajma Red/Rajma Lal", "Channa Brown (Big)/Harbhara Tapkiri (Mothe)", "Toor Dal - Economy", "Moong Whole", "Masoor Dal", "Channa Dal Unpolished", "Soya - Mini Chunk", "Mix Dal/Mishra Dal", "Green Moong Split/Chilka/Hirve Moong Chilka", "Urad Black Split/Chilka/Udid Kale Chilka", "Urad Dal - Split", "Masoor Dal", "Urad Whole/Urad purna/Gota", "Chana Dal - Unpolished", "Green Peas/Matar/Hirve Watane/Matar", "Lobia White/Chavali Pandhri", "Jowar/Jawari", "Moong Chilka", "Soya - Chunks", "Bajra", "Moth - Whole/Matki", "Raw Peanuts/Mungaphali/Kacche Shengdane", "Soya Bean", "Urad Dal Whole Unpolished", "Dalia", "Soya - Granules", "Channa Green", "Fried Gram/Bengal Gram/Talalele Chane Gram", "Chana Dal - Unpolished", "Urad", "Red Lobia", "Horse Gram/Kulthi", "Ragi/Raglu", "Urad Whole/Gota Unpolished", "Jowar/Jawari", "Unpolish - Urad Dal/Split", "Khobra", "Watana Black", "Chavli - Black Eye", "Urad - Black Spilt", "Soya - Chunks", "Barley", "Khichdi Mix", "Alshi", "Tadka Dal", "Soya Granules - High Protein", "Soya Bari - Mini", "Urad Gota", "Soya chunks", "Math", "Raglu/Ragi", "Rajma - Bhaderwahi Made in Kashmir", "Soya Bari - Chura", "Quinoa", "Masoor Dal Horeca", "Toor Dal Horeca", "Channa Brown Horeca", "Chavli Whole", "Green Moong Whole Horeca", "Green Peas Horeca", "Kabuli Channa Horeca", "White Peas Horeca", "Dal Makhani Mix", "Soya Bean Chunks Horeca"];
var prices = [100.00, 200.00, 300.00, 240.00, 325.00];
module.exports = function (app) {

	//Scraping images from bigbasket
	app.get('/getProducts/:page', function (req, res) {
		var page = req.params.page;
		// setTimeout(function() {
		Products.paginate({}, { page: page, limit: 16 }, function (err, data) {
			if (err) {
				res.send(err);
			}
			res.json(data);
		});
		// }, 3000);
	});

	app.get('/getProduct/:id', function (req, res) {
		var id = req.params.id;
		Products.findOne({ _id: id }, function (err, data) {
			if (err) {
				res.send(err);
			}
			res.json(data);
		});
	});

	app.get('/getHomeProducts', function (req, res) {
		// var page = req.params.page;
		// setTimeout(function() {
		Products.paginate({}, { page: 1, limit: 8 }, function (err, data) {
			if (err) {
				res.send(err);
			}
			res.json(data);
		});
		// }, 3000);
	});

	app.get('/searchProducts/:keyword', function (req, res) {
		console.log(req.params.keyword);
		var keyword = req.params.keyword;
		var page = req.params.page;
		var query = { name: { '$regex': keyword, '$options': 'i' } };
		Products.paginate(query, { sort: { _id: -1 }, page: 1, limit: 100 }, function (err, data) {
			if (err) {
				res.send(err);
			}
			res.json(data);
		});
	});

	app.get('/createProducts', function (req, res) {
		var products = [];
		for (var index = 0; index < 100; index++) {
			var image = imgArray[Math.floor(Math.random() * imgArray.length)];
			var name = productArray[Math.floor(Math.random() * productArray.length)];
			var price = prices[Math.floor(Math.random() * prices.length)];
			var mrp = 0;
			if (Math.floor(Math.random() * 3)) {
				mrp = price + Math.floor(Math.random() * 100) + 1;
			}
			products.push({
				image: image,
				name: name,
				price: price,
				mrp: mrp
			});
		}


		Products.insertMany(products, function (err, data) {
			if (err) {
				res.send(err);
			}
			res.json(data);
		});
	});
};