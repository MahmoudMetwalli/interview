import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const unitSchema = new Schema({
	unitNo: Number,
	unitName: String,
});

const Unit = model('Unit', unitSchema);
export default Unit;
