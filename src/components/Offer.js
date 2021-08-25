import React from 'react';
import { a } from "react-router-bootstrap";

const Offer = () => {
    return (
        <>
      <div id="offers" class="row">
  <div class="column1">
    <div class="card">
      <a href="/product/6113d034d8136141a02d9b46">
     <img src="../images/offer1.jpg" alt="img" className="img"/>
     <p>Gia Green Tea Lemon + honey</p>
     <p><b>₹189</b> <del>₹200</del> <ins>40%off</ins></p>
     </a>
    </div>
  </div>

  <div class="column1">
    <div class="card">
      <a href="/product/6113d034d8136141a02d9b58">
     <img src="../images/offer2.jpg" alt="img" className="img" />
     <p>Fortune Oil</p>
     <p><b>₹141</b> <del>₹175</del> <ins>20%off</ins></p>
     </a>

    </div>
  </div>
  
  <div class="column1">
    <div class="card">
      <a href="/product/6113d034d8136141a02d9b50">
    <img src="../images/offer3.jpg" alt="img" className="img" />
    <p>Fogg deo</p>
    <p><b>₹135</b> <del>₹185</del> <ins>25%off</ins></p>
    </a>
    </div>
  </div>
  
  <div class="column1">
    <div class="card">
    <a href="/product/6113d034d8136141a02d9b54">
    <img src="../images/Dhara-Lite-and-Fine-Soyabean-Oil-1L-Pouch.jpg" alt="img" className="img"/>
    <p>Dhara  Oil</p>
      <p><b>₹166</b> <del>₹235</del> <ins>24%off</ins></p>
      </a>
    </div>
  </div>
</div>
        </>
    );
}

export default Offer;

