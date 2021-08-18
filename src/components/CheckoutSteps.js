import React from 'react'
import {Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4}) => {
    return (


      <div className="row checkout-steps">
      <div className={step1 ? 'active' : ''}>Sign-In</div>
      <div className={step2 ? 'active' : ''}>Shipping</div>
      <div className={step3 ? 'active' : ''}>Payment</div>
      <div className={step4 ? 'active' : ''}>Place Order</div>
    </div>
      // <Nav className="justify-content-center mb-4">
      //   <Nav.Item>
      //     {step1 ? (
      //       <LinkContainer to="\login">
      //         <Nav.Link>Sign In</Nav.Link>
      //       </LinkContainer>
      //     ) : (
      //       <Nav.Link disabled>Sign In</Nav.Link>
      //     )}
      //   </Nav.Item>
      //   <Nav.Item>
      //     {step2 ? (
      //       <LinkContainer to="\shipping">
      //         <Nav.Link>Shipping</Nav.Link>
      //       </LinkContainer>
      //     ) : (
      //       <Nav.Link disabled>shipping</Nav.Link>
      //     )}
      //   </Nav.Item>
      //   <Nav.Item>
      //     {step3 ? (
      //       <LinkContainer to="\payment">
      //         <Nav.Link>Payment</Nav.Link>
      //       </LinkContainer>
      //     ) : (
      //       <Nav.Link disabled>Payment</Nav.Link>
      //     )}
      //   </Nav.Item>
      //   <Nav.Item>
      //     {step4 ? (
      //       <LinkContainer to="\placeorder">
      //         <Nav.Link>PLace Order</Nav.Link>
      //       </LinkContainer>
      //     ) : (
      //       <Nav.Link disabled>Place Order</Nav.Link>
      //     )}
      //   </Nav.Item>
      // </Nav>
    );
}

export default CheckoutSteps
