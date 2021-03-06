import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import Rating from './Rating'

const Product = ({product}) => {
   // console.log(props);
    return (
        <Card className='my-3 p-3 rounder'>
            <Link to={`/product/${product._id}`}>
               <Card.Img className="images" src={product.image} variant='top' />
            </Link>
            
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'
                    ><h6>{product.name}</h6>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    <Rating 
                    value={product.rating} 
                    text={`${product.numReviews} reviews `}
                    color='#e40017'
                    /> 
                </Card.Text>
                <Card.Text as='h3'>₹{product.price}</Card.Text>

            </Card.Body>


          
        </Card>
        
    )
    
}

export default Product
