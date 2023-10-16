import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    
        <div className="product-card position-relative">
            <div className="product-image ">
                <img src={props.url} className="img-fluid" alt="blog" />
            </div>
            <div className="product-details">
             <h6>{props.company}</h6>
             <h5>{props.title} </h5>
             <p>{props.rating}</p>
             <p className="price">{props.price}</p>
            </div>
            <div className='p-3'>
             <Link className='button1 p-2 f-2  align-items-center'>Add to Cart</Link>
             </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
              <Link>
                  <img src="images/images/prodcompare.svg" alt=""></img>                
                </Link>
              <Link>
                  <img src="images/images/view.svg" alt=""></img>                
                </Link>
                <Link>
                  <img src="images/images/add-cart.svg" alt=""></img>                
                </Link>
              </div>
            </div>

        </div>
    
    
  );
};

export default ProductCard;