import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
  getOrderDetails,
  payOrder,
  deliverOrder,
} from "../actions/orderActions";
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
} from "../constants/orderConstants";

import axios from "axios";

const OrderScreen = ({ match, history }) => {
  const orderId = match.params.id;
  console.log(orderId)

  const [products, setProduts] = useState([]);
  const [payment, setPayment] = useState(false);
  const [paymentOrderId, setPaymentOrderId] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [signature, setSignature] = useState("");

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [value, setValues] = useState([]);

  const baseUrl = "http://localhost:5000";

  if (!loading) {
    //Calculate Price
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  useEffect(() => {
    getPayment();
  }, []);

  const getPayment = async () => {
    const res1 = await axios.get(`${baseUrl}/api/orders/payment`);
    console.log(res1);
    if (res1.status === 200) {
      setValues(res1.data);
    }
  };

  const paymentHandler = async () => {
    const paymentId = order._id;
    console.log(paymentId);
    const res = await axios.get(`${baseUrl}/api/orders/payment/${paymentId}`);
    console.log(res);

    if (res.status !== 200) {
      return;
    }

    const options = {
      key: "rzp_live_YIZELtB0QPxPPv", // Enter the Key ID generated from the Dashboard
      amount: res.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: res.data.receipt,
      description: "Test Transaction",
      image: "https://i0.wp.com/banknotecoinstamp.com/bncs-content/uploads/2020/01/main-banner-razor-pay-650x510-1.jpg?w=650&ssl=1",
      // order_id: res.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
         alert(response.razorpay_payment_id);
         alert(response.razorpay_order_id);
        console.log(response)
        alert(response.razorpay_signature);
        setPaymentOrderId(response.razorpay_order_id);
        setPaymentId(response.razorpay_payment_id);
        setSignature(response.razorpay_signature);
        setPayment(true);
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
       notes: {
         address: "Razorpay Corporate Office",
       },
       theme: {
         color: "#3399cc",
       },
    };

    const rzp1 = new window.Razorpay(options);

    rzp1.open();

    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
  };
  
 
  useEffect(() => {
     if(signature){
      successPaymentHandler()

    } 

  },[signature])

  
 
  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }

    if(!order || successPay || successDeliver || order._id !== orderId) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(getOrderDetails(orderId));
    } 
      
 

    //eslint-disable-next-line
  }, [dispatch, orderId, successPay, order, successDeliver]);




  const successPaymentHandler = () => {
    
    dispatch(payOrder(orderId));
  };

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <h1>Order {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
           
              <p>
                <strong>Name: </strong> {order.user.name}
              </p>
              <p>
                <strong>Email: </strong>
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                <strong>Address : </strong>
                {order.shippingAddress.address},{order.shippingAddress.city},
                {order.shippingAddress.postalCode},
                {order.shippingAddress.country}
              </p>
              {order.isDelivered ? (
                <Message variant="success">
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant="danger">Not Delivered</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant="success">paid</Message>
              ) : (
                <Message variant="danger">Not paid</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {order.orderItems.length == 0 ? (
                <Message> Order is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ₹{item.price} = ₹{item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>₹{order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>₹{order.shippingPrice}</Col>
                </Row>
                <Row>
                  <Col>Tax</Col>
                  <Col>₹{order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>₹{order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {/* {!order.isPaid && (
                // <ListGroup.Item>
                //   {loadingPay && <Loader />}
                //   {!sdkReady ? (
                //     <Loader />
                //   ) : (
                //     <PayPalButton
                //       amount={order.totalPrice}
                //       onSuccess={successPaymentHandler}
                //     />
                //   )}
                // </ListGroup.Item>
              )} */}

              {loadingDeliver && <Loader />}
              {userInfo &&
                userInfo.isAdmin &&
               
                !order.isDelivered && (
                  <ListGroup.Item>
                    <Button
                      type="button"
                      className="btn btn-block"
                      onClick={deliverHandler}
                    >
                      Mark As delievered
                    </Button>
                  </ListGroup.Item>
                )}
              {order.paymentMethod === "COD" && <Message>Order is placed. Thank you{" "}<Link to={'/profile'}>view Order</Link></Message>}
              
               {order.paymentMethod === "Debit / Credit card" &&
                <ListGroup.Item>
                  <Button
                    type="button"
                    className="btn btn-block"
                    onClick={ paymentHandler}
                  >
                    Proceed To Payment
                  </Button>
                </ListGroup.Item> }
              
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;
