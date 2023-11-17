import React from 'react'
import classes from "./CouponByCategoeries.module.css"
import { Button } from 'react-bootstrap'
import logo1 from "../assests/fashion (1).png"
import logo2 from "../assests/food.png"
import logo3 from "../assests/beauty care.png"
import logo4 from "../assests/toys.png"
import logo5 from "../assests/hosting.png"
import logo6 from "../assests/gaming.png"
import logo7 from "../assests/mobile.png"
import logo8 from "../assests/travel.png"
import logo9 from "../assests/movies.png"

function CouponByCategories() {
  return (
    <>
    <div className={classes.container}>
   <div className={classes.text}>
            <h3>Coupon By Categories</h3>
           <div className={classes.red}></div>
        </div>

     <div className={classes.logo}>
     <div className={classes.logo1}>
        <img src={logo1} alt='logo1' className={classes.logoF}></img>
        <p style={{textAlign:"center",marginTop:"2px",fontSize:"12px"}}>Fashion</p>
        
     </div>
     <div className={classes.logo1}>
        <img src={logo2} alt='logo2' className={classes.logoF}></img>
        <p style={{textAlign:"center",marginTop:"2px",fontSize:"12px"}}>Food</p>
        
     </div>
     <div className={classes.logo1}>
        <img src={logo3} alt='logo3' className={classes.logoF}></img>
        <p style={{textAlign:"center",marginTop:"2px",fontSize:"12px"}}>Beauty</p>
        
     </div>
     <div className={classes.logo1}>
        <img src={logo4} alt='logo4' className={classes.logoF}></img>
        <p style={{textAlign:"center",marginTop:"2px",fontSize:"12px"}}>Toys</p>
        
     </div>
     <div className={classes.logo1}>
        <img src={logo5} alt='logo5' className={classes.logoF}></img>
        <p style={{textAlign:"center",marginTop:"2px",fontSize:"12px"}}>Cloud</p>
        
     </div>
     <div className={classes.logo1}>
        <img src={logo6} alt='logo6' className={classes.logoF}></img>
        <p style={{textAlign:"center",marginTop:"2px",fontSize:"12px"}}>Gaming</p>
        
     </div>
     <div className={classes.logo1}>
        <img src={logo7} alt='logo7' className={classes.logoF}></img>
        <p style={{textAlign:"center",marginTop:"2px",fontSize:"12px"}}>Phones</p>
        
     </div>
     <div className={classes.logo1}>
        <img src={logo8} alt='logo8' className={classes.logoF}></img>
        <p style={{textAlign:"center",marginTop:"2px",fontSize:"12px"}}>Travel</p>
        
     </div>
     <div className={classes.logo1}>
        <img src={logo9} alt='logo9' className={classes.logoF}></img>
        <p style={{textAlign:"center",marginTop:"2px",fontSize:"12px"}}>Movies</p>
        
     </div>
     </div>



{/* ..... */}


     </div>
     <div className={classes.main}>
     <div className={classes.container2}>
     <div className={classes.product1}> 
         <div className={classes.logou}>
         <img
                src="https://w7.pngwing.com/pngs/911/623/png-transparent-amazon-com-amazon-alexa-retail-amazon-prime-order-fulfillment-amazon-miscellaneous-company-text-thumbnail.png"
                className={classes.amazon}
                alt="amazon"
              ></img>
              <span className={classes.az}>Amazon</span>
         </div>

         <div className={classes.next}>
            <span className={classes.para}>Flat 30% Off</span>
            <Button className={classes.btn1}>GRAB NOW</Button>{" "}
         </div>
         
          </div> 

          <div className={classes.product1}> 
         <div className={classes.logou}>
         <img
                src="https://w7.pngwing.com/pngs/911/623/png-transparent-amazon-com-amazon-alexa-retail-amazon-prime-order-fulfillment-amazon-miscellaneous-company-text-thumbnail.png"
                className={classes.amazon}
                alt="amazon"
              ></img>
              <span className={classes.az}>Amazon</span>
         </div>

         <div className={classes.next}>
            <span className={classes.para}>Flat 30% Off</span>
            <Button className={classes.btn1}>GRAB NOW</Button>{" "}
         </div>
         
          </div> 
          <div className={classes.product1}> 
         <div className={classes.logou}>
         <img
                src="https://w7.pngwing.com/pngs/911/623/png-transparent-amazon-com-amazon-alexa-retail-amazon-prime-order-fulfillment-amazon-miscellaneous-company-text-thumbnail.png"
                className={classes.amazon}
                alt="amazon"
              ></img>
              <span className={classes.az}>Amazon</span>
         </div>

         <div className={classes.next}>
            <span className={classes.para}>Flat 30% Off</span>
            <Button className={classes.btn1}>GRAB NOW</Button>{" "}
         </div>
         
          </div> 
          <div className={classes.product1}> 
         <div className={classes.logou}>
         <img
                src="https://w7.pngwing.com/pngs/911/623/png-transparent-amazon-com-amazon-alexa-retail-amazon-prime-order-fulfillment-amazon-miscellaneous-company-text-thumbnail.png"
                className={classes.amazon}
                alt="amazon"
              ></img>
              <span className={classes.az}>Amazon</span>
         </div>

         <div className={classes.next}>
            <span className={classes.para}>Flat 30% Off</span>
            <Button className={classes.btn1}>GRAB NOW</Button>{" "}
         </div>
         
          </div> 
          

     </div>
     <div className={classes.wrapper}>
        <div className={classes.first}></div>
        <div className={classes.second}></div>
        <div className={classes.third}></div>
      </div>
     
     </div>

    </>
  )
}

export default CouponByCategories
