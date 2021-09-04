import mongoose from "mongoose";
const { Schema } = mongoose;

const advertSchema = new Schema({
	title: String,
	description: String,
	date: {
		type: Date,
		default: Date.now(),
	},
	hidden: Boolean,
});

const Advert = mongoose.model("Advert", advertSchema);

export default Advert;
