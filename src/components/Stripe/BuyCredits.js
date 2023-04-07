import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const BuyCredits = () => {
  const [products, setProducts] = useState({
    name: "Buy Credits",
    price: 10,
  });
  const priceForStripe = products.price * 100;
  let check = false;
  const handleSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Payment Successful",
      time: 4000,
    });
  };

  const handleFailue = () => {
    MySwal.fire({
      icon: "error",
      title: "Error occured",
      time: 4000,
    });
  };

  const payNow = async (token) => {
    try {
      var date = new Date();
      const response = await axios({
        url: "http://localhost:5000/payment",
        method: "POST",
        data: {
          amount: products.price * 100,
          token,
          date,
          check: true,
        },
      });
      if (response.status === 200) {
        handleSuccess();
      }
    } catch (error) {
      handleFailue();
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h2>Stripe Payment Tutorial</h2>
      <p>
        <span>Product: </span>
        {products.name}
      </p>
      <p>
        <span>Price: </span>
        {products.price}
      </p>
      <StripeCheckout
        stripeKey="pk_test_51Mqj7DEYINMUWJgYQTw78v33czX8EnKiPTrDoFuqT9AqIPNUHicvCfzJCoH36A9mIjX8Tvv7YXML7TtlipaSPc8u00HuVbHO9d"
        billingAddress
        shippingAddress
        amount={priceForStripe}
        description={`Your total is ${products.price}`}
        token={payNow}
      />
    </div>
  );
};

export default BuyCredits;
