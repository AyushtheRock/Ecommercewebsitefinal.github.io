import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Laptops from './../pages/Laptops';
import Camera from './../pages/Camera';
import Accesories from './../pages/Accesories';

function Header() {
  return (<>
  <header className="header-top-strip py-3">
   
     <div className="row" >
     <div className="col-lg-6 col-sm-6 col-6">
     <a href="#" className="logo"><box-icon type="solid" name="shopping-bags" color="white"></box-icon></a>
      <p className="mb-0">
      
      Free Shipping Over $100 & Free Returns</p>
     </div>
     <div className="col-lg-6">
      <p className="text-end">
      Hotline:<a href="tel:+91 6306952293">+91 6306952293</a></p>
     </div>

     </div>

  </header>
  <header className="header-upper-strip py-3">

     <div className="row" >
     <div className="col-lg-2 col-md-3 col-3 p-3">
      <h1 className="p-2">
        <Link className="text-white">Ayush. </Link>
      </h1>
     </div>
     <div className="col-lg-5 col-md-7 col-9 p-3 ">
        <div className="input-group">
        <input type="text" className="form-control" placeholder="Product's name" aria-label="Product's name" aria-describedby="basic-addon2" />
         <span className="input-group-text p-3" id="basic-addon2">
          <BsSearch className="fs-6" />
         </span>
        </div>
       </div>
     <div className="col-lg-2 col-md-10 col-2 p-3 gap-10">
     <div className="header-upper-links  d-flex  ">
      <div>
        <Link className="d-flex">
           <box-icon name='git-compare' color='white' size='30px'></box-icon>
             <p className="text-white mb-0" >
              Compare <br /> Products
             </p>
        </Link>
      </div>
      <div>
        <Link className="d-flex">
            <box-icon name='heart' color='white' size='30px'></box-icon>
             <p className="text-white mb-0">
              Favourite <br /> Wishlist
             </p>
        </Link>
      </div>
      <div>
        <Link className="d-flex">
              <box-icon name='log-in' color='white' size='30px'></box-icon>
             <p className="text-white mb-0">
              Log in<br />Account
             </p>
        </Link>
      </div>
      <div>
        <Link className="d-flex align-item-centre text-white">
              <box-icon name='cart' color='white' size='30px' ></box-icon>
             <div className="d-flex flex-column">
               <span className="badge bg-white text-dark">0</span>
               <p className="mb-0">$500</p>
             </div>
        </Link>
      </div>
      </div>
     </div>
     </div>
     </header>
   <header className="header-bottom py-3">
    <div className="menu-bottom d-flex align-items-center gap-30">
    <div className="row">
      <div className="col-lg-6 col-md-6 col-6">
        <div className="dropdown">
  <button type="button" className="btn btn-transparent dropdown-toggle gap-15 d-flex align-items-center" data-bs-toggle="dropdown">
    <img src="images/images/menu.svg"></img><span>Shop Categories</span>
  </button>
  <ul className="dropdown-menu text-white">
    <li><Link className="dropdown-item" to="/laptop">Laptops</Link></li>
    <li><Link className="dropdown-item" to="/camera">Camera</Link></li>
    <li><Link className="dropdown-item" to="/acce">Accesories</Link></li>
  </ul>
</div>
        </div>
        <div className="col-lg-6 col-md-6 col-6">
         <div className="menu-links">
          <div className="d-flex align-items-center gap-15">
          <NavLink to="/" className="text-white">Home</NavLink>
          <NavLink to="/store" className="text-white">Store</NavLink>
          <NavLink to="/blog" className="text-white">Blog</NavLink>
          <NavLink to="/contact" className="text-white">Contact</NavLink>
          </div>
          </div>
         </div>
        </div>
        </div>
    
    
   </header>
  </>
  );
  
};

export default Header;