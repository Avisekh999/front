import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

import Message from "../components/Message";
import Loader from "../components/Loader";
import { listCategoryDetails } from "../actions/productActions.js";
import dotenv from "dotenv";
import ImgCat from '../components/ImgCat';



dotenv.config();

const CategoryProductScreen = ({match}) => {
    const id = match.params.id;
    const keyword = match.params.keyword
    const upper = keyword.toUpperCase();
    
    
    
    

    const dispatch = useDispatch();
  
    const productCategory = useSelector((state) => state.productCategory);
    const { loading, error, categoryProducts } = productCategory;
    console.log(productCategory)
    console.log(loading)
    console.log(categoryProducts)
  
    useEffect(() => {
      dispatch(listCategoryDetails(id));
    }, [dispatch, id]);
  
    return (
      <>
        <ImgCat />
       
          
          <h1>{upper}</h1>


      
        
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Row>
            {categoryProducts.map((product) => (
              <Col key={product._id} xs={6} sm={6} md={6} lg={4} xl={4}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          
        )}
      
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Row>
            {categoryProducts.map((product) => (
              <Col key={product._id}  xs={6} sm={6} md={6} lg={4} xl={4}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          
        )}
      </>
    );
  };
  


export default CategoryProductScreen
