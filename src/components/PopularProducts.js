import React from "react";
import classes from "./PopularProducts.module.css";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TimerIcon from "@mui/icons-material/Timer";
import hoticon from "../assests/noun-hot-216052.svg";
import Button from "react-bootstrap/Button";
function PopularProducts() {
  return (
    <div className={classes.container}>
      <div className={classes.div1}>
        <div className={classes.div11}>
          <EmojiEventsIcon className={classes.icon1} />
          <span className={classes.coupons}>Popular Coupons</span>
        </div>
        <div className={classes.div12}>
          <TimerIcon className={classes.icon2} />
          <span>Ending Soon</span>
        </div>
        <div className={classes.div13}>
          <img src={hoticon} alt="icon" className={classes.icon3}></img>
          <span>Latest Coupons</span>
        </div>
      </div>

      <div className={classes.products}>
        <div className={classes.product1}>
          <div className={classes.product11}>
            <div className={classes.textmain}>
              <span className={classes.textu}>Upto 60% off on Appliances</span>
              <img
                src="https://w7.pngwing.com/pngs/911/623/png-transparent-amazon-com-amazon-alexa-retail-amazon-prime-order-fulfillment-amazon-miscellaneous-company-text-thumbnail.png"
                className={classes.amazon}
                alt="amazon"
              ></img>
              <p className={classes.texta}>Upto 60% off on summer Appliances</p>
              <Button className={classes.btn1}>GRAB NOW</Button>{" "}
            </div>
          </div>
          <div className={classes.product12}>
            <div className={classes.textmain}>
              <span className={classes.textu}>Upto 60% off on Appliances</span>
              <img
                src="https://w7.pngwing.com/pngs/911/623/png-transparent-amazon-com-amazon-alexa-retail-amazon-prime-order-fulfillment-amazon-miscellaneous-company-text-thumbnail.png"
                className={classes.amazon}
                alt="amazon"
              ></img>
              <p className={classes.texta}>Upto 60% off on summer Appliances</p>
              <Button className={classes.btn1}>GRAB NOW</Button>{" "}
            </div>
          </div>

          <div className={classes.product13}>
            <div className={classes.textmain}>
              <span className={classes.textu}>Upto 60% off on Appliances</span>
              <img
                src="https://w7.pngwing.com/pngs/911/623/png-transparent-amazon-com-amazon-alexa-retail-amazon-prime-order-fulfillment-amazon-miscellaneous-company-text-thumbnail.png"
                className={classes.amazon}
                alt="amazon"
              ></img>
              <p className={classes.texta}>Upto 60% off on summer Appliances</p>
              <Button className={classes.btn1}>GRAB NOW</Button>{" "}
            </div>
          </div>

          <div className={classes.product14}>
            <div className={classes.textmain}>
              <span className={classes.textu}>Upto 60% off on Appliances</span>
              <img
                src="https://w7.pngwing.com/pngs/911/623/png-transparent-amazon-com-amazon-alexa-retail-amazon-prime-order-fulfillment-amazon-miscellaneous-company-text-thumbnail.png"
                className={classes.amazon}
                alt="amazon"
              ></img>
              <p className={classes.texta}>Upto 60% off on summer Appliances</p>
              <Button className={classes.btn1}>GRAB NOW</Button>{" "}
            </div>
          </div>
        </div>
        

        <div className={classes.product2}>
          <div className={classes.product11}>
            <div className={classes.textmain}>
              <span className={classes.textu}>Upto 60% off on Appliances</span>
              <img
                src="https://w7.pngwing.com/pngs/911/623/png-transparent-amazon-com-amazon-alexa-retail-amazon-prime-order-fulfillment-amazon-miscellaneous-company-text-thumbnail.png"
                className={classes.amazon}
                alt="amazon"
              ></img>
              <p className={classes.texta}>Upto 60% off on summer Appliances</p>
              <Button className={classes.btn1}>GRAB NOW</Button>{" "}
            </div>
          </div>
          <div className={classes.product12}>
            <div className={classes.textmain}>
              <span className={classes.textu}>Upto 60% off on Appliances</span>
              <img
                src="https://w7.pngwing.com/pngs/911/623/png-transparent-amazon-com-amazon-alexa-retail-amazon-prime-order-fulfillment-amazon-miscellaneous-company-text-thumbnail.png"
                className={classes.amazon}
                alt="amazon"
              ></img>
              <p className={classes.texta}>Upto 60% off on summer Appliances</p>
              <Button className={classes.btn1}>GRAB NOW</Button>{" "}
            </div>
          </div>

          <div className={classes.product13}>
            <div className={classes.textmain}>
              <span className={classes.textu}>Upto 60% off on Appliances</span>
              <img
                src="https://w7.pngwing.com/pngs/911/623/png-transparent-amazon-com-amazon-alexa-retail-amazon-prime-order-fulfillment-amazon-miscellaneous-company-text-thumbnail.png"
                className={classes.amazon}
                alt="amazon"
              ></img>
              <p className={classes.texta}>Upto 60% off on summer Appliances</p>
              <Button className={classes.btn1}>GRAB NOW</Button>{" "}
            </div>
          </div>

          <div className={classes.product14}>
            <div className={classes.textmain}>
              <span className={classes.textu}>Upto 60% off on Appliances</span>
              <img
                src="https://w7.pngwing.com/pngs/911/623/png-transparent-amazon-com-amazon-alexa-retail-amazon-prime-order-fulfillment-amazon-miscellaneous-company-text-thumbnail.png"
                className={classes.amazon}
                alt="amazon"
              ></img>
              <p className={classes.texta}>Upto 60% off on summer Appliances</p>
              <Button className={classes.btn1}>GRAB NOW</Button>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.first}></div>
        <div className={classes.second}></div>
        <div className={classes.third}></div>
      </div>
    </div>
  );
}

export default PopularProducts;
