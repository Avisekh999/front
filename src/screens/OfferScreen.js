import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slide from "../components/Slide"
import Slide2 from "../components/Slide2"
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProducts } from "../actions/productActions.js";
import dotenv from "dotenv";
import Offer from "../components/Offer";
import Offer2 from "../components/Offer2";
import Offer3 from "../components/Offer3";
import Button from "../components/Button";
import Footer from "../components/Footer";

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
 
        <Slide />              
        <br />
        <Offer />
        <Slide2 />
        <br />
       
        <p id="demo" className="demo"></p>
        
        
      <h1>Offer Products</h1>
      <Button />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
       

        <Offer2 />
<br />

        

        <Slide />
<br />
       
        <Offer3 />

       
       
        </>
        
      )}
    <br />
     <Footer />
    </>
  );
};

export default HomeScreen;
