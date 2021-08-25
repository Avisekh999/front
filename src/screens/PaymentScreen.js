import React, { useState } from "react";

import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../actions/cartActions";

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  // const [address, setAddress] = useState(shippingAddress.address);
  // const [city, setCity] = useState(shippingAddress.city);
  // const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  // const [country, setCountry] = useState(shippingAddress.country);
  const [paymentMethod, setPaymentMethod] = useState("Razorpay");
  console.log(paymentMethod)


  if (!shippingAddress) {
    history.push("/shipping");
  }

  
  const dispatch = useDispatch();

  const submitHandler = (e) => {
   
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <FormContainer>
      <br />
      <br />
      <CheckoutSteps step1 step2 step3 />
      <br />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <h2>Select Method</h2>

          <Col>
            <Form.Check
              type="radio"
              label="Debit or Credit card"
              id="Razorpay"
              name="paymentMethod"
              value="Debit / Credit card"
              checked={paymentMethod === "Debit / Credit card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Cash on Delivery"
              id="COD"
              name="payementMethod"
              value="COD"
              checked={paymentMethod === "COD"}
             
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>

        <Button className="mt-1" type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
