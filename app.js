
import InvoiceDetails from './models/invoiceDetails.js';
import Unit from './models/unit.js';
import mongoose from 'mongoose'
import express from 'express';
mongoose.connect();
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

  
app.get('/', (req, res) => {
  res.render('home');
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

