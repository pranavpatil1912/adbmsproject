import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="container">
    <div className="navbar">
        <div className="logo">
            <h1>Dot<span>$</span>hop.</h1>
        </div>
        <nav>
            <ul id="MenuItems">
                <li> <a href="#home">Home</a></li>
                <li> <a href="#product">Product</a></li>
                <li> <a href="#review">Review</a></li>
                <li> <a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <img src="images1/cart.png" width="30px" height="30px"/>
        <img src="images1/menu.png" className="menu-icon" onclick="menutogggle()"/>
     </div>
 
  </div>
    
    </>
  )
}

export default Navbar