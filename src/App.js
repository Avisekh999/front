import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "./components/Header";

// import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import "./index.css";
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import CartScreen from "./screens/CartScreen"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import ProfileScreen from "./screens/ProfileScreen"
import ShippingScreen from "./screens/ShippingScreen"
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen"
import UserEditScreen from "./screens/UserEditScreen"
import ProductListScreen from "./screens/ProductListScreen"
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import CategoryProductScreen from "./screens/CategoryProductScreen";
import Category from "./components/Category";
import SearchScreen from "./screens/SearchScreen";
import AllCategory from "./screens/AllCategory";
import ContactUs from "./screens/ContactUs";
import OfferScreen from "./screens/OfferScreen";


const App = () => {
  return (
    <Router>
      <Header />
      {/* <Category />
     */}
      <main className="py-3">
        <Container>
          {/* <HomeScreen /> */}
          <Route path='/order/:id' component={OrderScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/placeorder" component ={PlaceOrderScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/category/:keyword/:id" component={CategoryProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/admin/productlist" component={ProductListScreen} exact/>
          <Route path="/admin/productlist/:pageNumber" component={ProductListScreen} exact/>
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
          <Route path="/admin/orderlist" component={OrderListScreen} />
          <Route path="/newsearch/:keyword" component={SearchScreen}  exact/>
          <Route path="/page/:pageNumber" component={SearchScreen} exact />
          <Route path="/newsearch/:keyword/page/:pageNumber" component={SearchScreen} exact />
          <Route path="/newsearch" component={SearchScreen} exact />
          <Route path="/allcategory" component={AllCategory} exact />
          <Route path="/contactus" component={ContactUs} exact />
          <Route path="/offerscreen" component={OfferScreen} />
          <Route path="/" component={HomeScreen} exact />
          
         
        


         
        </Container>
      </main>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
