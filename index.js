require("dotenv").config();
const express = require("express");

// config
const PORT = process.env.PORT || 5000;
const app = express();

// listen
app.listen(PORT, () =>
	console.log(`Server running at: http://localhost:${PORT}`)
);
