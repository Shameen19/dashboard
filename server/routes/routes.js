const express = require("express");
const router = express.Router();
const Transaction = require("../models/transaction");
const Stripe = require("stripe")(
  "sk_test_51Mqj7DEYINMUWJgYm54rRNuJtPc4Sc9DtNFaIdc0hsoa3qHXfPMJhVAL5dv9KeLpjk1Ja8pQ5IgUmdHyBdmCewJH00x3ZWkdic"
);

router.post("/payment", async (req, res) => {
  let status, error;
  const { token, amount, date, check } = req.body;
  const token2 = token;
  try {
    if (check === true) {
      await Stripe.charges.create({
        source: token.id,
        amount,
        currency: "usd",
      });
      const email = token2.email;
      const transactiontype = "credits purchased";
      const details = "credits purchased";
      var creditscount = "";
      if (amount === 1000) {
        creditscount = "5";
      } else {
        creditscount = "7";
      }
      const mode = "credit";
      const transactiondate = date;
      const transaction = new Transaction({
        email,
        transactiontype,
        details,
        creditscount,
        mode,
        date: transactiondate,
      });
      await transaction.save();
      console.log("-------------User data---------");
      console.log(email);
      console.log(transactiontype);
      console.log(details);
      console.log(creditscount);
      console.log(mode);
      console.log(date);
      res.status(200).json("success");
    } else {
      console.log("Not found");
    }
  } catch (err) {
    console.error(err);
    status = "Failure";
  }
});
router.post("/savetransaction", async (req, res) => {
  const {
    email,
    transactiontype,
    details,
    creditscount,
    mode,
    transactiondate,
  } = req.body;
  try {
    const transaction = new Transaction({
      email,
      transactiontype,
      details,
      creditscount,
      mode,
      date: transactiondate,
    });
    await transaction.save();
    console.log("-------------User data---------");
    console.log(email);
    console.log(transactiontype);
    console.log(details);
    console.log(creditscount);
    console.log(mode);
    console.log(transactiondate);
    res.status(200).json("success");
  } catch (err) {
    console.error(err);
    res.status(400).json("Not found");
  }
});

router.get("/viewdata", async (req, res) => {
  try {
    const transactiondata = await Transaction.find();
    res.status(201).json(transactiondata);
    console.log(transactiondata);
  } catch (error) {
    res.status(422).json(error);
    console.log("error");
  }
});

router.get("/transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    const creditsEarned = transactions
      .filter((t) => t.mode === "credit")
      .map((t) => t.creditscount);
    const creditsUsed = transactions
      .filter((t) => t.mode === "debit")
      .map((t) => t.creditscount);
    const labels = transactions.map((t) => t.date.toISOString().slice(0, 10));
    console.log(creditsEarned);
    console.log("-------------labels----------------");
    console.log(labels);
    console.log("----------credits used----------------");
    console.log(creditsUsed);
    res.json({ creditsEarned, creditsUsed, labels });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
