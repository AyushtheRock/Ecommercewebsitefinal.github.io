import React from 'react';
import ProductCard from '../components/ProductCard';

function Sports() {
  return (
    <>
     <section className="Sports-wrapper-1 py-5">
    
      <div className="row ">
       
      <div className='col-lg-3 col-md-4 col-6'> 
      <ProductCard 
      url="images/images/camera1.jpg"
      company="Sony"
      title="BTx-500m"
      rating=""
      price="$100"
      /> 
      </div>
      <div className='col-lg-3 col-md-4 col-6'>
      <ProductCard 
      url="images/images/camera1.jpg"
      company="Sony"
      title="BTx-500m"
      rating=""
      price="$100"
      /> 
      </div>
      <div className='col-lg-3 col-md-4 col-6'>
       <ProductCard 
      url="images/images/camera1.jpg"
      company="Sony"
      title="BTx-500m"
      rating=""
      price="$100"
      /> 
      </div>
      <div className='col-lg-3 col-md-4 col-6'>
      <ProductCard 
      url="images/images/camera1.jpg"
      company="Sony"
      title="BTx-500m"
      rating=""
      price="$100"
      /> 
      </div>
      </div>
    </section>
    
    </>
  )
}

export default Sports;