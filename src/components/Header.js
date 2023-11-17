import React from 'react'
import classes from "./Header.module.css"
import todLogo from "../assests/logo.png"
import SearchIcon from '@mui/icons-material/Search';
function Header() {
  return (
    <div className={classes.Header}>
      <div className={classes.subheader}>
        <div className={classes.logo}>
            <img src={todLogo} alt='logo'></img>
        </div>
        <div className={classes.search}>
            <div className={classes.searchlogo}>
                <SearchIcon/>
            </div>
            <div className={classes.searchtext}>
                <span className={classes.span1}>Search For brand, category, coupon</span>
            </div>
        </div>
        <div className={classes.btn}>
            <span className={classes.span2}>LOGIN/SIGN UP</span>
        </div>
        </div>
        <div className={classes.navbar}>
            <nav>
            <a href="/">Home</a>
            <a href="/">Deals</a>
    <a href="/">Coupon</a>
    <a href="/">Stores</a>
    <a href="/">Contact us</a>
            </nav>
        </div>
    </div>
  )
}

export default Header
