import React from "react";
import "./Sidebar.css";
import {Link} from "react-router-dom"


const sidebar = () => {
  return (
    <div>
      <button
        class="uk-button uk-button-default open"
        type="button"
        uk-toggle="target: #offcanvas-flip"
      >
        <i class="fas fa-ellipsis-v"></i>
      </button>

      <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
        <div
          class="uk-offcanvas-bar"
          style={{ backgroundColor: "#faf3e0", color: "black" }}
        >
          <button
            class="uk-button uk-button-default"
            type="button"
            uk-toggle="target: #offcanvas-flip"
          >
            <i
              class="fas fa-times"
              style={{ color: "black", fontSize: "20px", border: "none" }}
            ></i>
          </button>
          <div className="slide123">
            <ul>
              <li>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/cart"
                >
                  <i class="fas fa-shopping-basket"></i> My Cart
                </Link>
              </li>

              <li>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/profile"
                >
                  <i class="fas fa-box"></i> My Orders
                </Link>
              </li>
            
              <li>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/profile"
                >
                  <i class="fas fa-user"></i> My Account
                </Link>
              </li>
              <li>
                <Link style={{ color: "black", textDecoration: "none" }} to="/offerscreen">
                  <i class="fas fa-tags"></i> Offer Zone
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/allcategory"
                >
                  <i class="fas fa-list-alt"></i> All Categories
                </Link>
              </li>
              <li>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="https://kundu-stores.flycricket.io/privacy.html"
                >
                  <i class="fas fa-key"></i> privacy policy
                </a>
              </li>
              <li>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/contactus"
                >
                  <i class="fas fa-address-book"></i> Contact Us
                </Link>
              </li>
              <li>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="https://www.gmail.com"
                >
                  <i class="fas fa-envelope"></i> Mail Us
                </a>
              </li>
              <li>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="https://www.facebook.com"
                >
                  <i class="fab fa-facebook"></i>Follow us
                </a>
              </li>
              <li>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to=""
                >
                  <i class="fas fa-sign-out-alt"></i>Log Out
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
