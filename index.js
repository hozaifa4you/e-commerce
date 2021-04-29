require("dotenv").config();
const express = require("express");

// custom module
const connectDB = require("./config/db");

// config
const PORT = process.env.PORT || 5000;
connectDB();
const app = express();

// middleware
app.use(express.json());

// end points
app.use("/api/products", require("./routes/productRoute"));

// listen
app.listen(PORT, () =>
	console.log(`Server running at: http://localhost:${PORT}`)
);
