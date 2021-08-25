import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Nav, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Dairy from "./DairyProducts.jpg";
import Snacks from "./snacks.jpg";
import Masala from "./masala.jpg";
import Women from "./women.jpg";
import Men from "./men.jpg";
import Food from "./food.jpg";
import Drink from "./drink.jpg";
import Home from "./home.jpg";
import Clean from "./clean.jpg";

const ImgCat = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };
  return (
    <div style={{ margin: 40, }}>
      <Container>
        {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
        <div style={{ position: "relative", textAlign: "center"}} className="carousel-container">
          <Carousel responsive={responsive} className="categories-carousel">
            <div className="categories-item">
              <LinkContainer  to="/category/dairyproducts/60d1826492207a1a70f84484">
              <Image
                src={Dairy}
                style={{ height: 170, marginTop: 10 }}
                thumbnail
              />
              </LinkContainer>
              
              <LinkContainer to="/category/dairyproducts/60d1826492207a1a70f84484">
                <Nav.Link>Dairy Products</Nav.Link>
              </LinkContainer>
            </div>

            <div className="categories-item">
              <LinkContainer   to="/category/snacks/60d1836f92207a1a70f84485">
              <Image
                src={Snacks}
                style={{ height: 170, marginTop: 10 }}
                thumbnail
              />
              </LinkContainer >
           
              <LinkContainer to="/category/snacks/60d1836f92207a1a70f84485">
                <Nav.Link>Snacks</Nav.Link>
              </LinkContainer>
            </div>
            <div className="categories-item">
              <LinkContainer to="/category/masala/60d1838892207a1a70f84486">
              <Image
                src={Masala}
                style={{ height: 170, marginTop: 10 }}
                thumbnail
              />
              </LinkContainer>
             
              <LinkContainer to="/category/masala/60d1838892207a1a70f84486">
                <Nav.Link> Masala</Nav.Link>
              </LinkContainer>
            </div>

            <div className="categories-item">
              <LinkContainer  to="/category/drinks/60d1851792207a1a70f8448a" >
              <Image
                src={Drink}
                style={{ height: 170, marginTop: 10 }}
                thumbnail
              />
              
              </LinkContainer>
             
              <LinkContainer to="/category/drinks/60d1851792207a1a70f8448a">
                <Nav.Link>Drinks</Nav.Link>
              </LinkContainer>
            </div>
            <div className="categories-item">
              <LinkContainer  to="/category/cleaning/60d1853d92207a1a70f8448b">
              <Image
                src={Clean}
                style={{ height: 170, marginTop: 10 }}
                thumbnail
              />
              </LinkContainer>
              
              <LinkContainer to="/category/cleaning/60d1853d92207a1a70f8448b">
                <Nav.Link>Household</Nav.Link>
              </LinkContainer>
            </div>
            <div className="categories-item">
              <LinkContainer  to="/category/homeaccessories/60d1a75fc4d1483544474e79">
              <Image
                src={Home}
                style={{ height: 170, marginTop: 10 }}
                thumbnail
              />

              </LinkContainer>
             
              <LinkContainer to="/category/homeaccessories/60d1a75fc4d1483544474e79">
                <Nav.Link> Appliances</Nav.Link>
              </LinkContainer>
            </div>

            <div className="categories-item">
              <LinkContainer to="/category/food/60d184e192207a1a70f84489">
              <Image
                src={Food}
                style={{ height: 170, marginTop: 10 }}
                thumbnail
              />
              </LinkContainer>
             
              <LinkContainer to="/category/food/60d184e192207a1a70f84489">
                <Nav.Link> Food</Nav.Link>
              </LinkContainer>
            </div>

            <div className="categories-item">
              <LinkContainer  to="/category/womens/60d1844d92207a1a70f84487">
              <Image
                src={Women}
                style={{ height: 170, marginTop: 10 }}
                thumbnail
              />
              
              </LinkContainer>
           
              <LinkContainer to="/category/womens/60d1844d92207a1a70f84487">
                <Nav.Link>Women's Product </Nav.Link>
              </LinkContainer>
            </div>

            <div className="categories-item">
              <LinkContainer to="/category/mens/60d1849192207a1a70f84488">
              <Image
                src={Men}
                style={{ height: 170, marginTop: 10 }}
                thumbnail
              />
              </LinkContainer>
             
              <LinkContainer to="/category/mens/60d1849192207a1a70f84488">
                <Nav.Link>Men's Product</Nav.Link>
              </LinkContainer>
            </div>
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default ImgCat;
