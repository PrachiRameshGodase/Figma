import React from 'react'
import logo from "../assests/footer.png"
import classes from "./Footer.module.css"
import logo1 from "../assests/logo (1).png"
function Footer() {
  return (
    <div className={classes.container}>
      <img src={logo} alt='' style={{marginLeft:"4%"}}></img>
     
    </div>
  )
}

export default Footer
