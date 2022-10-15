import React from 'react'
import BigOne from "../images1/image1.png"
const Section = () => {
  return (
    <>
    <div id="home" class="row">
    <div class="col-1">
        <h1>Give Your <span>Workout</span><br/>A New style!</h1>
        <p>Sucess isn't always about greateness. It's about consistency.Consistent<br/>hard work gains success.greateness will come.
        </p>

        <a href="" class="btn">Explore Now &#8594;</a>

    </div>
    <div class="col-1">
        <img src={BigOne}/>
    </div>
 </div>
    </>
  )
}

export default Section