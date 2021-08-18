import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'



const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }


  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0"); // get the date padStart => 01
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var fullDate = dd + "." + mm + "." + yyyy;

  var someDate = new Date();
  var numberOfDaysToAdd = 1;
  someDate.setDate(someDate.getDate() + numberOfDaysToAdd);

  var dd = String(someDate.getDate()).padStart(2, "0");
  var mm = String(someDate.getMonth() + 1).padStart(2, "0");
  var y = someDate.getFullYear();

  var someFormattedDate = dd + "." + mm + "." + y;

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>₹{item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as='select'
                      style={{marginTop:"30px"}}
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
      <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              ₹
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
              {(cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)) < 500 ? <Message variant="danger">Minimum Eligible price ₹1000</Message> : (
                  <ListGroup.Item>
                  <ListGroup.Item>
                  Estimate Delivery Date: <strong>{someFormattedDate}</strong>{" "}
                  </ListGroup.Item>
                  <ListGroup.Item>
                  Eligible Delivery Location:<strong> MATIGARA (734010)  , SHIVMANDIR (734011) , BAGDOGRA (734014),  MEDICAL (734013)</strong>
                  </ListGroup.Item>
                  <br/>
                  <Button
                    type="button"
                    className="btn-block"
                    disabled={cartItems.length === 0}
                    onClick={checkoutHandler}
                  >
                    Proceed To Checkout
                  </Button>
                </ListGroup.Item>
                )}
            </ListGroup.Item>
           
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen
