import React from 'react'
import  newcard from "../components/newcard.css"



export default function NewCards() {
    return (
        <div>
            <div>
        <section class="row">
            <div class="col-md-12">
                <div class="title-wrap">
                    <h2 class="title">Our Top Brands</h2>
                </div>
                <div class="wrap">
                    <div class="elements">
                        <div class="pic" >
                            <a href="">
                                <img alt="" src="../images/card1.png" className="cardimg" />
                            </a>
                        </div>
                        <p class="element-info">
                            <br />
                            <strong>Top Brand Products</strong>
                        </p>
                        {/* <p class="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p> */}
                    </div>
                    <div class="elements">
                        <div class="pic" >
                            <a href="">
                                <img alt="" src="../images/card2.png" className="cardimg" />
                            </a>
                        </div>
                        <p class="element-info">
                            <br />
                            <strong>Amazing Offers</strong>
                        </p>
                        {/* <p class="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p> */}
                    </div>
                    <div class="elements">
                        <div class="pic" >
                            <a href="">
                                <img alt="" src="../images/card3.png" className="cardimg" />
                            </a>
                        </div>
                        <p class="element-info">
                            <br />
                            <strong>Good Quality Products</strong>
                        </p>
                        {/* <p class="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p> */}
                    </div>
                    <div class="elements">
                        <div class="pic" >
                            <a href="">
                                <img alt="" src="../images/card4.png" className="cardimg" />
                            </a>
                        </div>
                        <p class="element-info">
                            <br />
                            <strong>Brand New Deals</strong>
                        </p>
                        {/* <p class="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p> */}
                    </div>
                </div>
            </div>
        </section>
    </div>


        </div>
    )
}
