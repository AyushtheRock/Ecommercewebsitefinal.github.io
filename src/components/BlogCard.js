import React from "react";
import { Link } from "react-router-dom";

function BlogCard (props) {
  return (
        <div className="blog-card">
            <div className="card-image">
                <img src={props.url} className="img-fluid" alt="blog" />
            </div>
            <div className="blog-content">
             <p className="date">{props.date}</p>
             <h5 className="title">{props.title} </h5>
             <p className="description">{props.des}</p>
             <Link to="/" className="button1">
                Read More
             </Link>
            </div>
        </div>
    
  );
};

export default BlogCard;