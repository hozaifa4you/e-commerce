const { Schema, model } = require("mongoose");

const productSchema = new Schema(
	{
		name: { type: String, required: true, trim: true },
		description: { type: String, required: true, trim: true },
		price: { type: Number, required: true, trim: true },
		countInStock: { type: Number, required: true },
		imageUrl: { type: String, required: true, trim: true },
	},
	{ timestamps: true }
);

const Product = model("Product", productSchema);

module.exports = Product;
