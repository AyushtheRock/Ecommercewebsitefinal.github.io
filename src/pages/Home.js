import React from "react";
import { Link, NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import Laptops from "./Laptops";
import Gaming from './Gaming';


const Home = () => {
  return (
    <>
    <section className="home-wrapper-1 py-5">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-5">
          <div className="main-banner position-relative p-3">
          <img src="images/images/main-banner.jpg" className="image-fluid rounded-3" alt="main-banner" />
          <div className="main-banner-content position-absolute m-2" >
              <h4 id="newchange1">HyperSpeed for Pros.</h4>
              <h5 id="newchange2">iPad S13+ pro</h5>
              <p id="newchange3">From $999.00 or $41.62/mo.</p>
              <Link className="button">BUY NOW</Link>
           </div>
          </div>
          </div>
        <div className="col-lg-6 col-md-6 col-5">
        <div className="d-flex flex-wrap p-3 gap-15 justify-content-between align-items-center">
        <div className="small-banner position-relative ">
          <img src="images/images/catbanner-01.jpg" 
          className="image-fluid rounded-3"
           alt="main-banner" />

           <div className="small-banner-content position-absolute">
              <h4 id="newchange4">HyperSpeed for Pros.</h4>
              <h5 id="newchange5">iPad S13+ pro</h5>
              <p id="newchange6">From $999.00 or $41.62/mo.</p>
              
           </div>
          </div>
          <div className="small-banner position-relative">
          <img src="images/images/catbanner-02.jpg" 
          className="image-fluid rounded-3"
           alt="main-banner" />

           <div className="small-banner-content position-absolute">
              <h4 id="newchange4">HyperSpeed for Pros.</h4>
              <h5 id="newchange5">iPad S13+ pro</h5>
              <p id="newchange6">From $999.00 or $41.62/mo.</p>
              
           </div>
          </div>
   
        </div>
        </div>
      </div>

    
    </section>

    <section className="home-wrapper-2 py-5">
        <div className="row">
            
               <div className="col-lg-3 col-md-6 col-6 p-3 text-dark d-flex  gap-10">
                <img className="p-3" src="images/images/service.png" alt="services" />
                <div className="responsive d-flex">
                  
                  <p className="mb-0">Free Shipping <br />From all orders over $100</p>
                </div>
               </div>
               <div className="col-lg-3 col-md-6 col-6 p-3 text-dark d-flex  gap-10 ">
                <img className="p-3" src="images/images/service-02.png" alt="services" />
                <div className="responsive d-flex">
                  
                  <p className="mb-0">Daily Surprice Offer <br />Save upto 25% off</p>
                </div>
               </div>
               <div className="col-lg-3 col-md-6 col-6 p-3 text-dark d-flex  gap-10">
                <img className="p-3" src="images/images/service-03.png" alt="services" />
                <div className="responsive d-flex">
                  
                  <p className="mb-0">Support 24/7 <br />Shop with an expert</p>
                </div>
               </div>
               <div className="col-lg-3 col-md-6 col-6 p-3 text-dark d-flex  gap-10 ">
                <img className="p-3" src="images/images/service-04.png" alt="services" />
                <div className="responsive d-flex">
                  
                  <p className="mb-0">Affordable Prices <br />Get Factory direct price</p>
                </div>
               </div>
               <div className="col-lg-3 col-md-6 col-6 p-3 text-dark d-flex  gap-10">
                <img className="p-3" src="images/images/service-05.png" alt="services" />
                <div className="responsive d-flex">
                  
                  <p className="mb-0">Secure Payments <br />100% Protected Payments</p>
                </div>
               </div>
               </div>
          
    </section>

    <section className="home-wrapper-3 py-5">
      <h2 className="text-dark">Categories</h2>
      <div className="row">
       <div className="categories gap-30 text-dark flex-wrap d-flex align-items-center justify-content-between">
       
        <div className="col-lg-4 col-md-4 col-6  align-items-center">
        <NavLink className="text-dark" to="/laptop"> 
        <div className="newchange">
           <h6>Computers & Laptops</h6>
           <p>10 items</p>
          </div></NavLink>
          <img src="images/images/laptop.jpg" alt="laptop" /> 
        </div>
        
        <div className="col-lg-4 col-md-4 col-6  align-items-center">
        <NavLink className="text-dark" to="/camera"> 
          <div className="newchange">
           <h6>Cameras & Videos</h6>
           <p>10 items</p>
          </div></NavLink>
          <img src="images/images/camera.jpg" alt="camera" />
        </div>
        
        <div className="col-lg-4 col-md-4 col-6  align-items-center">
        <NavLink className="text-dark" to="/tv"> 
          <div className="newchange">
           <h6>Smart Television</h6>
           <p>10 items</p>
          </div> </NavLink>
          <img src="images/images/tv.jpg" alt="television" />
        </div>
       
        
        <div className="col-lg-4 col-md-4 col-6  align-items-center">
        <NavLink className="text-dark" to="/homeitems"> 
          <div className="newchange">
           <h6>Home items</h6>
           <p>10 items</p>
          </div></NavLink>
          <img src="images/images/homeapp.jpg" alt="homeapp" />
        </div>
        
        <div className="col-lg-4 col-md-4 col-6  align-items-center">
        <NavLink className="text-dark" to="/sports"> 
          <div className="newchange">
           <h6>Sports</h6>
           <p>10 items</p>
          </div></NavLink>
          <img src="images/images/tv.jpg" alt="" />
        </div>
        
        <div className="col-lg-4 col-md-4 col-6  align-items-center">
        <NavLink className="text-dark" to="/gaming"> 
          <div className="newchange">
           <h6>Gaming</h6>
           <p>10 items</p>
          </div></NavLink>
          <img src="images/images/tv.jpg" alt="television" />
        </div>
        
        <div className="col-lg-4 col-md-4 col-6  align-items-center">
        <NavLink className="text-dark" to="/acce"> 
          <div className="newchange">
           <h6>Accesories</h6>
           <p>10 items</p>
          </div></NavLink>
          <img src="images/images/acc.jpg" alt="acc" />
        </div>
         
        <div className="col-lg-4 col-md-4 col-6  align-items-center">
        <NavLink className="text-dark" to="/laptop">
          <div className="newchange">
           <h6>Speakers</h6>
           <p>10 items</p>
          </div></NavLink>
          <img src="images/images/speaker.jpg" alt="speaker" />
        </div>
        
        <div className="col-lg-4 col-md-4 col-6  align-items-center">
        <NavLink className="text-dark" to="/headphones"> 
          <div className="newchange">
           <h6>Headphones</h6>
           <p>10 items</p>
          </div></NavLink>
          <img src="images/images/headphone.jpg" alt="headphone" />
        </div>
       </div>
       </div>
      
    </section>

    <section className="home-wrapper-4 py-5">
    <div><h2 className="text-dark">Featured Collection</h2></div>
    
    <div className="row">
      
    <div className="col-lg-3 col-sm-4 col-6"> 
          
      <ProductCard 
      url="images/images/game1.jpg"
      company="Sony"
      title="BTx-500m"
      rating=""
      price="$100"
      />
      </div> 
      <div className="col-lg-3 col-sm-4  col-6">
      <ProductCard 
      url="images/images/watch2.jpg"
      company="Sony"
      title="BTx-500m"
      rating=""
      price="$100"
      />
      </div>
      <div className="col-lg-3 col-sm-4 col-6">
       <ProductCard 
      url="images/images/laptop3.jpg"
      company="Sony"
      title="BTx-500m"
      rating=""
      price="$100"
      />
      </div>
      <div className="col-lg-3 col-sm-4 col-6">
      <ProductCard 
      url="images/images/mobile1.jpg"
      company="Sony"
      title="BTx-500m"
      rating=""
      price="$100"
      />
      </div>
      <div className="col-lg-3 col-sm-4 col-6">
      <ProductCard 
      url="images/images/game1.jpg"
      company="Sony"
      title="BTx-500m"
      rating=""
      price="$100"
      />
      </div>
      </div>
      
    
    </section>

   

    <section className="marquee-wrapper py-5">
     <div className="container-xxl">
      <div className="row">
       <div className="col-12">
        <div className="marquee-inner-wrapper card-wrapper">
          <Marquee className="d-flex">
            <div className="mx-4 w-25">
              <img src="images/images/brand-01.png" alt="brand"></img>
            </div>
            <div className="mx-4 w-25">
              <img src="images/images/brand-02.png" alt="brand"></img>
            </div>
            <div className="mx-4 w-25">
              <img src="images/images/brand-03.png" alt="brand"></img>
            </div>
            <div className="mx-4 w-25">
              <img src="images/images/brand-04.png" alt="brand"></img>
            </div>
            <div className="mx-4 w-25">
              <img src="images/images/brand-05.png" alt="brand"></img>
            </div>
            <div className="mx-4 w-25">
              <img src="images/images/brand-06.png" alt="brand"></img>
            </div>
            <div className="mx-4 w-25">
              <img src="images/images/brand-07.png" alt="brand"></img>
            </div>
            <div className="mx-4 w-25">
              <img src="images/images/brand-08.png" alt="brand"></img>
            </div>
          </Marquee>
        </div>
       </div>
      </div>
     </div>
    </section>

    <section className="blog-wrapper py-5 home-wrapper-2">
    <h3 className="section-heading text-dark">Our Latest Blog</h3>
      <div className="row">

     <div className="col-lg-3 col-md-4 col-6"> 
        
      <BlogCard 
      url="images/images/blog-1.jpg"
      date="25 September 2023"
      title="A beautiful sunday morning renaissance"
      description="hey i am hera to give a newly made website by me"
      />
      </div>
      <div className="col-lg-3 col-md-4 col-6">
      <BlogCard 
       url="images/images/blog-2.jpg"
       date="25 September 2023"
       title="A beautiful sunday morning renaissance"
       description="hey i am hera to give a newly made website by me" />
       </div>
       <div className="col-lg-3 col-md-4 col-6">
      <BlogCard 
       url="images/images/blog-2.jpg"
       date="25 September 2023"
       title="A beautiful sunday morning renaissance"
       description="hey i am hera to give a newly made website by me"
        /></div>
        <div className="col-lg-3 col-md-4 col-6">
      <BlogCard 
       url="images/images/blog-1.jpg"
       date="25 September 2023"
       title="A beautiful sunday morning renaissance"
       description="hey i am hera to give a newly made website by me"
      />
      </div>
      </div>
    </section>
    </>
  );
}

export default Home;