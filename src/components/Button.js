import React from "react";
import { Link } from "react-router-dom";


const Button = () => {
    return (
        <div>
        <Link to="/dashboard">
          <button type="button" >Category</button>
        </Link>
            
        </div>
    )
}

export default Button;