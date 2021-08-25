import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card, } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from '../components/Message'
import CheckoutSteps from "../components/CheckoutSteps";
import {createOrder} from '../actions/orderActions'
import {CART_RESET_ITEM} from "../constants/cartConstants"
import { ORDER_CREATE_RESET } from "../constants/orderConstants";
import { USER_DETAILS_RESET } from "../constants/userConstants";
import {mailTo } from "../actions/mailActions"


const PlaceOrderScreen = ({history}) => {
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    console.log(cart)



    //CALCULATE PRICE
    
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    cart.itemsPrice = addDecimals(cart.cartItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    ))

    // cart.shippingPrice = addDecimals(cart.itemsPrice > 1000 ? 0 : 100)

    // cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)))

    // cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)

    cart.totalPrice = (Number(cart.itemsPrice)).toFixed(2)
    
    const orderCreate = useSelector(state => state.orderCreate)
    const {order,success, error } = orderCreate
    
    function totalDiscount(price){
      let priceInString = String(price);

      let length = priceInString.length - 1;
      console.log(length)
      let startNumber = priceInString.substring(0,1);

      let discountNumber = startNumber;
      for( let i=0; i<length-4; i++){
        discountNumber += 0 ;
      }
      return Number(discountNumber).toFixed(2)

    }
    let discount = (cart.totalPrice >= 500 ) && totalDiscount(cart.totalPrice)  ;

    useEffect(() => {
      if(success) {
        history.push(`/order/${order._id}`)
        dispatch({ type: CART_RESET_ITEM });
        dispatch({ type: USER_DETAILS_RESET });
        dispatch({ type: ORDER_CREATE_RESET });
        dispatch(mailTo(order._id))
      }
      //eslint-disable-next-line
    },[history,success])


    const placeOrderHandler = () => {
        dispatch(
          createOrder({
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod,
          itemsPrice: cart.itemPrice,
          shippingPrice: cart.shippingPrice,
          taxPrice: cart.taxPrice,
          totalPrice: cart.totalPrice,
        }))
    }

    return (
      <>
        <br />
        <br />
        <CheckoutSteps step1 step2 step3 step4 />
        <Row>
          <Col md={8}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Shipping</h2>
                <p>
                  <strong>Address : </strong>
                  {cart.shippingAddress.address},{cart.shippingAddress.city},
                  {cart.shippingAddress.postalCode},
                  {cart.shippingAddress.country}
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h2>Payment Method</h2>
                <strong>Method: </strong>
                {cart.paymentMethod}
              </ListGroup.Item>

              <ListGroup.Item>
                <h2>Order Items</h2>
                {cart.cartItems.length == 0 ? (
                  <Message>our cart is empty</Message>
                ) : (
                  <ListGroup variant="flush">
                    {cart.cartItems.map((item, index) => (
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
                          <br />
                          <br />
                          <br />
                          <br />
                          <Col md={4}>
                            {item.qty} x ₹{item.price} = ₹
                            {item.qty * item.price}
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
                    <Col>CartTotal</Col>
                    <Col>₹{cart.itemsPrice}</Col>
                  </Row>
                </ListGroup.Item>
               
                <ListGroup.Item>
                  <Row>
                    <Col>Packing Charge</Col>
                    

                    <Col>2%</Col>
                  </Row>
                </ListGroup.Item>
               
               
                <ListGroup.Item>
                  <Row>
                    <Col>Cart Total</Col>
                    
                    <Col>₹{(cart.totalPrice - discount) +((cart.totalPrice - discount) * 0.02)}</Col>
                  </Row>
                </ListGroup.Item>
               
                <ListGroup.Item>
                  {error && <Message variant='danger'>{error}</Message>}
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button 
                    type='button' 
                    className='btn-block'
                    disabled={cart.cartItem == 0} 
                    onClick={placeOrderHandler}
                    >
                        PlaceOrder
                    </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </>
    );
}

export default PlaceOrderScreen
