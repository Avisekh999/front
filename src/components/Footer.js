import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import kundu from "./logo.png";
import { useDispatch, useSelector } from "react-redux";
import footer from '../components/footer.css';
import {Link} from "react-router-dom"
import { logout } from "../actions/userActions";


const Footer = () => {
	const dispatch = useDispatch();

	
	const logoutHandler = () => {
		dispatch(logout());
	  };
    return (
      <body>
  <footer class="footer">
  	 <div class="container1">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>Sitesoch</h4>
  	 			<ul>
  	 				<li><Link to="/">Home</Link></li>
  	 				<li><Link to="/allcategory">All Categories</Link></li>
  	 				<li><Link to="/contactus">Contact Us</Link></li>
  	 				<li><Link to="https://kundu-stores.flycricket.io/privacy.html">Privacy Policy</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Get Help</h4>
  	 			<ul>
  	 				<li><Link to="/profile">My Account</Link></li>
  	 				<li><Link to="/cart">My Cart</Link></li>
  	 				<li><Link to="/profile">My Orders</Link></li>
  	 				<li><Link onClick={logoutHandler}>Log Out</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Address</h4>
  	 			<ul>
  	 				<li><Link to="#">Shivmandir Bazaar Kadamtala Siliguri - 734011 WestBengal </Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<Link to="#"><i class="fab fa-google"></i></Link>
  	 				<Link to="www.facebook.com"><i class="fab fa-facebook-f"></i></Link>
  	 				{/* <Link to="#"><i class="fab fa-instagram"></i></Link>
  	 				<Link to="#"><i class="fab fa-twitter"></i></Link> */}
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

</body>
    );
}

export default Footer
