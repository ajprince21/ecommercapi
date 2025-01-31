const router = require("express").Router();

const stripe = require("stripe")(process.env.STRIPE_KEY);

// Payment route
router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (err, stripeRes) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
