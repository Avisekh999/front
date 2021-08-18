import React from "react";

import { Navbar, Nav, Container} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Category = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container style={{background:"linear-gradient(to bottom, #ffc64b -10%, #ffcccc 100%)"}}>

{/* 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
         */}
            <LinkContainer to="/category/dairyproducts/60d1826492207a1a70f84484">
            <Nav.Link>Dairy Products</Nav.Link>
            </LinkContainer>
          
          
            <LinkContainer to="/category/snacks/60d1836f92207a1a70f84485">
            <Nav.Link>Snacks</Nav.Link>
            </LinkContainer>
          
          
            <LinkContainer to="/category/masala/60d1838892207a1a70f84486">
            <Nav.Link> Masala</Nav.Link>
            </LinkContainer>
          
          
            <LinkContainer to="/category/womens/60d1844d92207a1a70f84487">
            <Nav.Link>Women's Beauty Care & Hygiene </Nav.Link>
            </LinkContainer>
         
          
            <LinkContainer to="/category/mens/60d1849192207a1a70f84488">
            <Nav.Link>Men's Grooming & Hygiene</Nav.Link>
            </LinkContainer>
          
          
            <LinkContainer to="/category/food/60d184e192207a1a70f84489">
            <Nav.Link> Food & Food Grains</Nav.Link>
            </LinkContainer>
          
       
            <LinkContainer to="/category/drinks/60d1851792207a1a70f8448a">
            <Nav.Link>Drinks</Nav.Link>
            </LinkContainer>
          
         
            <LinkContainer to="/category/cleaning/60d1853d92207a1a70f8448b">
            <Nav.Link>Cleaning & Household</Nav.Link>
            </LinkContainer>
          
          {/* <LinkContainer to="/">
                  <NavDropdown.Item>Baby Care</NavDropdown.Item>
                  </LinkContainer> */}
         
            <LinkContainer to="/category/homeaccessories/60d1a75fc4d1483544474e79">
            <Nav.Link> Home Accessories   </Nav.Link>
            </LinkContainer>
            {/* </Navbar.Collapse>
        */}
        </Container>
      </Navbar>
    </>
  );
};

export default Category;
