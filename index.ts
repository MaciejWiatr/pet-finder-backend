import app from "./app";
import mongoose from "mongoose";
import dotenv from "dotenv";
const port = 3000;

dotenv.config();

const main = async () => {
	await mongoose.connect(process.env.MONGO_CONNECTION_STRING!);

	app.listen(port, () => {
		console.log(`Example app listening at http://localhost:${port}`);
	});
};

main();
