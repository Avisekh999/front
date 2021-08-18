
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Pagination, Card } from "react-bootstrap";
import Product from "../components/Product";
// import Slide from "../components/Slide"
// import Slide2 from "../components/Slide2"

import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import { listProducts } from "../actions/productActions.js";
import dotenv from "dotenv";
// import ImgCat from "../components/ImgCat";
// import Offer from "../components/Offer";
// import Offer2 from "../components/Offer2";
// import Offer3 from "../components/Offer3";
// import Card from "../components/Card";
// import datas from "../data/data"
// import data1 from "../data/data1"



dotenv.config();

const SearchScreen = ({match}) => {
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
 
        {/* <ImgCat />
        <Slide />              
        <br />
        <Slide2 />
        <br />
        <Offer />
        <p id="demo" className="demo"></p> */}

      <br />  
      <h1>Searched Products</h1>
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
         
           <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
        </Row>


        {/* <Offer2 />


        <Row>
          {datas.map((data) => (
            <Col key={data._id} xs={6} sm={6} md={6} lg={4} xl={4}>
              <Product product={data} />
            </Col>
          ))}
         
           <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
        </Row>

        <Slide />

        <Row>
          {data1.map((data2) => (
            <Col key={data2._id} xs={6} sm={6} md={6} lg={4} xl={4}>
              <Product product={data2} />
            </Col>
          ))}
         
           <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
        </Row>
        <Offer3 />

        <Row>
          {products.map((product) => (
            <Col key={product._id} xs={6} sm={6} md={6} lg={4} xl={4}>
              <Product product={product} />
            </Col>
          ))}
         
           <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
        </Row> */}
       
        </>
        
      )}
    
     
    </>
  );
};

export default SearchScreen;
