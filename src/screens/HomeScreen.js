import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Pagination, Card, Image } from "react-bootstrap";
import Product from "../components/Product";
import Slide from "../components/Slide"
import Slide2 from "../components/Slide2"
import banner1 from "../components/banner1.gif"
import banner2 from "../components/banner2.png"
import banner3 from "../components/banner3.png"
import banner4 from "../components/banner4.gif"
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import { listProducts } from "../actions/productActions.js";
import dotenv from "dotenv";
import ImgCat from "../components/ImgCat";
import Offer from "../components/Offer";
import Offer2 from "../components/Offer2";
import Offer3 from "../components/Offer3";
// import Card from "../components/Card";
import datas from "../data/data"
import data1 from "../data/data1"
import AllCategory from "./AllCategory";
import Button from "../components/Button";
import Footer from "../components/Footer";
import NewCards from "../components/NewCards";

dotenv.config();

const HomeScreen = ({match}) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  console.log(loading)
  console.log(products)

  useEffect(() => {
    dispatch(listProducts(keyword,pageNumber));
  }, [dispatch, keyword, pageNumber]);
 
  return (
    <>
 
        <ImgCat />
        
        <Slide />              
        <br />
        <Slide2 />
        <br />
        <Offer />
        <p id="demo" className="demo"></p>
        
        
      <h1>Latest Products</h1>
      <Button />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
        <Row>
          {products.map((product) => (
            <Col key={product._id} xs={6} sm={6} md={6} lg={4} xl={4}>
              <Product product={product} />
            </Col>
          ))}
         
           {/* <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} /> */}
        </Row>

        <Image src={banner1}  style={{marginBottom:"10vh"}} />
        <Offer2 />


        <Row>
          {datas.map((data) => (
            <Col key={data._id} xs={6} sm={6} md={6} lg={4} xl={4}>
              <Product product={data} />
            </Col>
          ))}
         
           {/* <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} /> */}
        </Row>

        <Slide />

        <Row>
          {data1.map((data2) => (
            <Col key={data2._id} xs={6} sm={6} md={6} lg={4} xl={4}>
              <Product product={data2} />
            </Col>
          ))}
         
           {/* <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} /> */}
        </Row>
        <br />
        <Image src={banner3}  style={{marginBottom:"10vh"}} />
        <br />
        <Offer3 />

        <Row>
          {products.map((product) => (
            <Col key={product._id} xs={6} sm={6} md={6} lg={4} xl={4}>
              <Product product={product} />
            </Col>
          ))}
         
           {/* <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} /> */}
        </Row>

        


        <Image src={banner2}  style={{marginBottom:"10vh"}} />
        <NewCards />
        <br />
        
        
        
        
        <Image src={banner4}  style={{marginBottom:"10vh"}} />


       
        </>
        
      )}

    <Footer />
    </>
  );
  

};

export default HomeScreen;
