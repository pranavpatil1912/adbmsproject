import React from 'react'
import p1 from "../images1/product-1.jpg"
import p2 from "../images1/product-2.jpg"
import p3 from "../images1/product-3.jpg"
import p4 from "../images1/product-4.jpg"
import p5 from "../images1/product-5.jpg"
import p6 from "../images1/product-6.jpg"
import p7 from "../images1/product-7.jpg"
import p8 from "../images1/product-8.jpg"
import p9 from "../images1/product-9.jpg"
import p10 from "../images1/product-10.jpg"
import p11 from "../images1/product-11.jpg"
import p12 from "../images1/product-12.jpg"
import c1 from "../images1/category-1.jpg"
import c2 from "../images1/category-2-.jpg"
import c3 from "../images1/category-3-.jpg"
const Products = () => {
  return (
    <>
    <div className="categaories">
    <div className="small-container">
        <div className="row">
            <div className="col-2">
               <img src={c1}/>
            </div>
            <div className="col-2">
               <img src={c2}/>
            </div>
            <div className="col-2">
               <img src={c3}/>
            </div>
        </div>
    </div>
  </div>
<div id="product" className="small-container">
    <h2> Featured Products </h2>
    <div className="row">
         <div className="col-3">
           <img src={p1}/>
           <h4>Red Printed t-shirt</h4>
             <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
             </div>
           <p>RS.400.00</p>
             <div className="button">
                 <button>Order Now</button>
             </div>
         </div>
         <div className="col-3">
            <img src={p2}/>
            <h4>Road Runner Mens Shoes</h4>
              <div className="rating">
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star-half-o"></i>
              </div>
            <p>RS.600.00</p>
              <button>Order Now</button>
          </div>
          <div className="col-3">
            <img src={p3}/>
            <h4>Trouser Pants</h4>
              <div className="rating">
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star-half-o"></i>
                 <i className="fa fa-star-o"></i>
              </div>
            <p><RS className="350"></RS>350.00</p>
            <button>Order Now</button>
          </div>
          <div className="col-3">
            <img src={p4}/>
            <h4>Puma <T-shirt></T-shirt></h4>
              <div className="rating">
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star-o"></i>
              </div>
            <p>RS.700.00</p>
           <button>Order Now</button>
          </div>
    </div>
    <h2> Latest Products </h2>
    <div className="row">
        <div className="col-3">
          <img src={p5}/>
          <h4>Loafer</h4>
            <div className="rating">
               <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
               <i className="fa fa-star-o"></i>
            </div>
          <p>RS.400.00</p>
          <button>Order Now</button>
        </div>
        <div className="col-3">
           <img src={{p12}}/>
           <h4>Men's jockey Trouser</h4>
             <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
             </div>
           <p>RS.600.00</p>
           <button>Order Now</button>
         </div>
         <div className="col-3">
           <img src={p5}/>
           <h4>clothern Shoes</h4>
             <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
                <i className="fa fa-star-o"></i>
             </div>
           <p><RS className="350"></RS>850.00</p>
           <button>Order Now</button>
         </div>
         <div className="col-3">
           <img src={p6}/>
           <h4>Puma <T-shirt></T-shirt></h4>
             <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
             </div>
           <p>RS.700.00</p>
           <button>Order Now</button>
         </div>
         <div className="col-3">
            <img src={p7}/>
            <h4>set of socks</h4>
              <div className="rating">
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star-o"></i>
              </div>
            <p>RS.400.00</p>
            <button>Order Now</button>
          </div>
          <div className="col-3">
             <img src={p8}/>
             <h4>Fossil Watch</h4>
               <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
               </div>
             <p><RS className="1"></RS>600.00</p>
             <button>Order Now</button>
           </div>
           <div className="col-3">
             <img src={p9}/>
             <h4>Roaster Watch</h4>
               <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                  <i className="fa fa-star-o"></i>
               </div>
             <p><RS className="350"></RS>1350.00</p>
             <button>Order Now</button>
           </div>
           <div className="col-3">
             <img src={p10}/>
             <h4>Athelete Shoes</h4><T-shirt></T-shirt><h4/>
               <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-o"></i>
               </div>
             <p>RS.1700.00</p>
             <button>Order Now</button>
           </div>
    </div>
</div>
    </>
  )
}

export default Products