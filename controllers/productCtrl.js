const Product = require("../models/Products");

exports.getAllProducts = async (req, res) => {
	try {
		const products = await Product.find({});

		res.status(200).json(products);
	} catch (err) {
		console.error(err);
		res.status(500).json({ errMsg: "Server Error" });
	}
};

exports.getProductById = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);

		res.status(200).json(product);
	} catch (err) {
		console.error(err);
		res.status(500).json({ errMsg: "Server Error" });
	}
};
