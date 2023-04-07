const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const Transaction = require("./models/transaction");
const Stripe = require("stripe")(
  "sk_test_51Mqj7DEYINMUWJgYm54rRNuJtPc4Sc9DtNFaIdc0hsoa3qHXfPMJhVAL5dv9KeLpjk1Ja8pQ5IgUmdHyBdmCewJH00x3ZWkdic"
);
var cors = require("cors");
const router = require("./routes/routes");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Transaction", function (err, db) {
  if (err) throw err;
  console.log("Db connected");
});

const PORT = 5000;
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => {
  console.log(`server is starting at port ${PORT}`);
});
