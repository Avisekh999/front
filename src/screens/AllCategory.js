import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Dairy from "../components/DairyProducts.png";
import Snacks from "../components/snacks.png";
import Masala from "../components/masala.png";
import Women from "../components/women.png";
import Men from "../components/men.png";
import newcat from "../components/newcat.png";
import Drink from "../components/drink.jpg";
import Home from "../components/home.png";
import Clean from "../components/clean.png";
import offer from "../components/offers.png"


export default function AllCategory() {
  return (
    <div>
      <div class="row">
        <div class="column4">
        
          <div class="card4">
          <Link to="/category/dairyproducts/60d1826492207a1a70f84484"> 
          <img src={Dairy} alt="Forest" className="img4" />
          <p>Dairy Products</p>
          </Link>
          </div>
        </div>

        <div class="column4">
          <div class="card4">
            <Link to="/category/snacks/60d1836f92207a1a70f84485">
            <img src={Snacks} alt="Forest" className="img4" />
            <p>Snacks</p>
            </Link>
          </div>
        </div>

        <div class="column4">
          <div class="card4">
            <Link to="/category/masala/60d1838892207a1a70f84486">
            <img src={Masala} alt="Forest" className="img4" />
            <p>Masala</p>
            </Link>
          </div>
        </div>
        <div class="column4">
          <div class="card4">
            <Link to="/category/drinks/60d1851792207a1a70f8448a">
            <img src={Drink} alt="Forest" className="img4" />
            <p>Drink</p>
            <p></p>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="column4">
          <div class="card4">
            <Link to="/category/cleaning/60d1853d92207a1a70f8448b">
            <img src={Clean} alt="Forest" className="img4" />
            <p>Clean</p>
            </Link>
          </div>
        </div>

        <div class="column4">
          <div class="card4">
            <Link to="/category/homeaccessories/60d1a75fc4d1483544474e79">
            <img src={Home} alt="Forest" className="img4" />
            <p>Home</p>
            </Link>
          </div>
        </div>

        <div class="column4">
          <div class="card4">
            <Link to="">
            <img src={newcat} alt="Forest" className="img4" />
            <p>Food & Food Grains</p>
            </Link>
          </div>
        </div>
        <div class="column4">
          <div class="card4">
            <Link to="">
            <img src={Women} alt="Forest" className="img4" />
            <p>Women's Beauty Care & Hygiene </p>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="column4">
          <div class="card4">
            <Link to="">
            <img src={Men} alt="Forest" className="img4" />
            <p>Men's Grooming & Hygiene</p>
            </Link>
          </div>
        </div>

        <div class="column4">
          <div class="card4">
            <Link to="">
            <img src={offer} alt="Forest" className="img4" />
            <p>More Offers</p>
            </Link>
          </div>
        </div>

        
      </div>
    </div>
  );
}
