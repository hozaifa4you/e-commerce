const { connect, connection } = require("mongoose");

const connectDB = async () => {
	try {
		await connect(
			process.env.DB,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
			},
			() =>
				console.log(
					`Database connected at: ${connection.host}:${connection.port}`
				)
		);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

module.exports = connectDB;
