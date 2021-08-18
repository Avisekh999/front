import React from "react";
import { Carousel } from "react-bootstrap";

const Slide2 = () => {
  return (
    <>
     <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="ratio: 11:3; animation: push; autoplay: true" >

    <ul class="uk-slideshow-items">
        <li>
            <img src="./images/add1.png" alt="" uk-cover />
        </li>
        <li>
            <img src="./images/add2.png" alt="" uk-cover />
        </li>
        <li>
            <img src="./images/add1.png" alt="" uk-cover />
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

</div>
    </>
  );
};

export default Slide2;
