import React from 'react'
import banner from "../assests/image.png"
import classes from "./Banner.module.css"
function Banner() {
  return (
    <div className={classes.Container}>
      <div className={classes.banner}>
        <img src={banner} alt='banner'></img>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.first}></div>
        <div className={classes.second}></div>
        <div className={classes.third}></div>
      </div>
    </div>
  )
}

export default Banner
