import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";
import SearchBox from "./SearchBox";
import Sidebar from "../components/Sidebar";
import kundu from "./logo.png";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar style={{ background:
            "linear-gradient(90deg, rgba(236,200,121,1) 0%, rgba(236,167,37,1) 35%, rgba(208,114,26,0.9724264705882353) 100%)"}} bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container 
          style={{
            zIndex: 20,
            
            background:
            "linear-gradient(90deg, rgba(236,200,121,1) 0%, rgba(236,167,37,1) 35%, rgba(208,114,26,0.9724264705882353) 100%)",
          }}
        >
          <Row>
            <Col>
          
              <LinkContainer to="/">
                <Navbar.Brand>
                  <img
                    className = "kundu_logo"
                    src={kundu}
                    style={{ width: 85, marginTop: 2  }}
                  />
                </Navbar.Brand>
              </LinkContainer>
            </Col>
            <Col>
              <Route
                render={({ history }) => <SearchBox history={history} />}
              />
            </Col>

            <Col style={{ marginTop: 20, marginRight: 9 }}>
              <Nav >
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <i className="fas fa-shopping-cart"></i>  
                   
                  </Nav.Link>
                </LinkContainer>
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="username">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>MyOrders</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      LogOut
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <i className="fas fa-user"></i> Sign In
                    </Nav.Link>
                  </LinkContainer>
                )}
                {userInfo && userInfo.isAdmin && (
                  <NavDropdown title="Admin" id="adminmenu" >
                    <LinkContainer to="/admin/userlist">
                      <NavDropdown.Item>Users </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/productlist">
                      <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/orderlist">
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                )}
              </Nav>
              <Sidebar />
            </Col>
          </Row>          
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
