import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const invoiceDetailsSchema = new Schema({
	lineNo: Number,
	productName: String,
	UnitNo: Number,
	price: Number,
	quantity: Number,
	total: Number,
	expiryDate: Date,
  });

const unitSchema = new Schema({
	unitNo: Number,
	unitName: String,
})
  const InvoiceDetails = model('InvoiceDetails', invoiceDetailsSchema);

  export default InvoiceDetails;
