import React from 'react'
import classes from "./DealsDay.module.css"
import { Button } from "react-bootstrap";


function DealsOfDay() {
  return (
    <div className={classes.container}>
    
        <div className={classes.text}>
            <h3>Deals Of The Day</h3>
            <div className={classes.red}></div>
        </div>

        <div className={classes.products}>
        <div className={classes.product1}> 
         <div className={classes.logo}>
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
         <div className={classes.logo}>
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
         <div className={classes.logo}>
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
         <div className={classes.logo}>
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
  )
}

export default DealsOfDay
