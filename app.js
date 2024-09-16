
import InvoiceDetails from './models/invoiceDetails.js';
import Unit from './models/unit.js';
import mongoose from 'mongoose'
import express from 'express';
mongoose.connect("mongodb+srv://mammkbih:YNoaykAJjX7qHUA3@cluster0.kyeya.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

  
app.get('/', (req, res) => {
  res.render('home');
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

