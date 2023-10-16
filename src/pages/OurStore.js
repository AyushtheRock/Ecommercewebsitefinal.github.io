import React from "react";

function OurStore() {
  return (
    <>
     <div className='store-wrapper home-wrapper-2 py-5'>
     <div className="container-xxl">
      <div className="row">
        <div className="col-3">
            <div className="filter-card mb-3">
              <h3 id="small-filter-title" className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0 text-dark" id="newscreen">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 id="small-filter-title" className="filter-title">Filter by</h3>
            <div>
              <h5 id="small-filter-title" className="sub-title">Avaibility</h5>
            <div>
            <div className="form-check">
                <input
                 className="form-check-input"
                 type="checkbox"
                 value=""
                 id="" 
                 />
                 <label className="form-check-label" id="newscreen" for="" >
                  In Stock (1)
                 </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                 type="checkbox"
                 value=""
                 id="" 
                 />
                 <label className="form-check-label" id="newscreen" for="" >
                  Out of Stock (0)
                 </label>
                 </div>
            </div>
            <h5 id="small-filter-title" className="sub-title">Price</h5>
            <div className="d-flex align-items-center gap-10">
              <div className="form-floting mb-3">
              <input
                 className="form-control"
                 type="email"
                 placeholder="From"
                 id="flotingInput" 
                 />
                 <label  id="newscreen" htmlFor="flotingInput">
                  From
                 </label>
              </div>
              <div className="form-floting mb-3">
              <input
                 className="form-control"
                 type="email"
                 placeholder="To"
                 id="flotingInput" 
                 />
                 <label  id="newscreen" htmlFor="flotingInput">
                  To
                 </label>
              </div>
            </div>
            <h5 id="small-filter-title" className="sub-title">Color</h5>
            <div>
              <div>
                <ul className="colors ps-0">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <h5 id="small-filter-title" className="sub-title">Size</h5>
            <div>
            <div className="form-check">
                <input
                 className="form-check-input"
                 type="checkbox"
                 value=""
                 id="" 
                 />
                 <label className="form-check-label" id="newscreen" for="" >
                  S (2)
                 </label>
            </div>
            <div className="form-check">
                <input
                 className="form-check-input"
                 type="checkbox"
                 value=""
                 id="" 
                 />
                 <label className="form-check-label" id="newscreen" for="" >
                  M (1)
                 </label>
            </div>
            <div className="form-check">
                <input
                 className="form-check-input"
                 type="checkbox"
                 value=""
                 id="" 
                 />
                 <label className="form-check-label" id="newscreen" for="" >
                  L (1)
                 </label>
            </div>
            <div className="form-check">
                <input
                 className="form-check-input"
                 type="checkbox"
                 value=""
                 id="" 
                 />
                 <label className="form-check-label" id="newscreen" for="" >
                  XL (1)
                 </label>
            </div>
            <div className="form-check">
                <input
                 className="form-check-input"
                 type="checkbox"
                 value=""
                 id="" 
                 />
                 <label className="form-check-label" id="newscreen" for="" >
                  XXL (1)
                 </label>
            </div>
            </div>
            </div>
          </div>
            <div className="filter-card mb-3">
              <h3 id="small-filter-title" className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphone
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Mobile
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Watch
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Gaming
                  </span>
                  </div>
              </div>
            </div>
      </div>
      <div className="col-9">
        <div className="filter-sort-grid">
         <div className="d-flex align-items-center gap-10">
          <p className="mb-0 text-dark">Sort By:</p>
          <select name="" className="form-control form-select " id="">
            <option value="manual">Featured</option>
            <option value="best-selling">Best Selling</option>
            <option value="title-ascending">Alphabetically, A-Z</option>
            <option value="titel-desending">Alphabetically, Z-A</option>
            <option value="price-ascending">Price, low to high</option>
            <option value="price-descending">Price, high to low</option>
            <option value="created-ascending">Date,old to new</option>
            <option value="created-descending">Date,new to old</option>
          </select>
         </div>
        </div>
      </div>
      </div>
      </div>
     </div>

    </>
  )
}

export default OurStore;