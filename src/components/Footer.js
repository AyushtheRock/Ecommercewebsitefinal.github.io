import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
    <footer className="footer-top-strip py-3 align-item-center">
    <div className="container-xxl align-item-center mb-3">
     <div className="row my1" >
     <div className="col-5">
     <img src="images/images/newsletter.png"></img><span>Sign Up For NewsLetter</span>
     </div>
     <div className="col-7">
     <div className="input-group-md d-flex">
     <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
    <button className="btn btn-light btn-sm" type="button" id="button-addon2">Submit</button>
      </div>
        </div>
      </div>
   </div>
   </footer>
   <footer className="footer-upeer-strip py-4">
    <div className="container-xxl">
    <div className="row">
      <div className="col-4">
        <h4 className="mb-4 newchange2">Contact Us</h4>
        <div>
          <address className="text-white newchange2  ">
            K-279 , Keshavpuram,<br />
            Kanpur , Uttar Pradesh
          </address>
          <a href="tel:+6306952293" className="mt-4 d-block newchange2 mb-3 text-white">
            +91 6306952293
          </a>
          <a href="mailto:ayushchaurasia44@gmail.com" className="mt-4 newchange2 text-white d-block mb-3">
            ayushchaurasia44@gmail.com
          </a>
          <div className="my-icons  ">
           <a className="my1-icon" href="https://www.facebook.com/ayush.chaurasia.564"><box-icon type="logo" name="facebook-circle" color="white"></box-icon></a>
           <a className="my1-icon" href="https://www.instagram.com/_ineffable_ayush_/"><box-icon name="instagram" type="logo" color="white" ></box-icon></a>
           <a className="my1-icon" href="https://twitter.com/login?lang=en"><box-icon name="twitter" type="logo" color="white" ></box-icon></a>
           </div>
        </div>
      </div>
      <div className="col-3">
        <h4 className="mb-4  newchange2">Information</h4>
        <div>
        <div className="footer-links d-flex flex-column">
          <Link className="text-white newchange2 py-2 mb-1">Privacy Policy</Link>
          <Link className="text-white newchange2 py-2 mb-1">Refund Policy</Link>
          <Link className="text-white newchange2 py-2 mb-1">Shipping Policy</Link>
          <Link className="text-white newchange2 py-2 mb-1">Terms of Service</Link>
          <Link className="text-white newchange2 py-2 mb-1">Blogs</Link>
        </div>
        </div>
      </div>
      <div className="col-3">
        <h4 className="mb-4 newchange2">Account</h4>
        <div>
          <div className="footer-links d-flex flex-column">
          <Link className="text-white newchange2 py-2 mb-1">Search</Link>
          <Link className="text-white newchange2 py-2 mb-1">About us</Link>
          <Link className="text-white newchange2 py-2 mb-1">Faq</Link>
          <Link className="text-white newchange2 py-2 mb-1">Contact</Link>
          <Link className="text-white newchange2 py-2 mb-1">Size Chart</Link>
        </div>
        </div>
      </div>
      <div className="col-2">
        <h4 className="mb-4 newchange2">Quick Links</h4>
        <div className="footer-links d-flex flex-column">
        <Link className="text-white newchange2 py-2 mb-1">Accessories</Link>
          <Link className="text-white newchange2 py-2 mb-1">Laptop</Link>
          <Link className="text-white newchange2 py-2 mb-1">Headphones</Link>
          <Link className="text-white newchange2 py-2 mb-1">Tablet</Link>
          <Link className="text-white newchange2 py-2 mb-1">Watches</Link>
        </div>
      </div>
      </div>
    </div>
   </footer>
   <footer className="footer-bottom-strip py-3">
    <div className="container-xxl">
      <div className="row my2">
        <div className="col-12">
          <p className="text-center mb-0 text-white">
            &copy; {new Date().getFullYear()}; Powered by Developers Corners{" "}
          </p>
          </div>
      </div>
    </div>
   </footer>
    </>
  );
};

export default Footer;