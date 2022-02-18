import React from "react";
import "./Header.css";
import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
// import SearchIcon from "@material-ui/Search";
import { SearchOutlined } from "@mui/icons-material";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchIcon from "@mui/icons-material/Search";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import CallIcon from "@mui/icons-material/Call";
import Search from "../../Product/Search";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonIcon from "@mui/icons-material/Person";
import UserOptions from "../Header/UserOptions"
// import  ReactNavbar  from "overlay-navbar";
// import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginSignUp from "../../User/LoginSignUp"
import { useSelector } from 'react-redux';
// import { auth } from "./firebase";

// const options = {
 
//   profileIconUrl: "/login",
 

// };





function Header() {
  
  //   const [{ basket, user }, dispatch] = useStateValue();

  //   const handleAuthenticaton = () => {
  //     if (user) {
  //       auth.signOut();
  //     }
  //   }


  const { isAuthenticated, user } = useSelector((state) => state.user);



  return (
    <>
    {/* <ReactNavbar {...options} />; */}
      <div className="headers">
        <a href="https://www.facebook.com/shirrtupcom">
          <FacebookIcon
            style={{ cursor: "pointer", paddingLeft: "42px", color: "white" }}
          />
        </a>
        <a href="https://twitter.com/shirrtup">
          {" "}
          <TwitterIcon
            style={{ cursor: "pointer", padding: "12px", color: "white" }}
          />
        </a>
        <a href="https://www.instagram.com/shirrtup/">
          <InstagramIcon
            style={{
              cursor: "pointer",
              padding: "1px",
              color: "white",
              display: "flex",
              flex: 1,
            }}
          />
        </a>

        {/* <Badge
          style={{
            cursor: "pointer",
            color: "white",
            // padding: "0px",
            // margin: "0px",
            position: "fixed",
            right: "140px",

            // width: "160px",
          }}
        >
          {" "}
          <AirportShuttleIcon />
          Track Your Order

          
        </Badge> */}

        <Link to="/contact">
        <Badge
          style={{
            cursor: "pointer",
            display:"flex",
            padding:"4vmax",
            color: "white",
            // // padding: "0px",
            // // margin: "0px",
            // position: "fixed",
            // right: "32px",
          
            // width: "160px",
          }}
        >
           
          <CallIcon />
          Contact User
        </Badge>
        </Link>
        {/* <CallIcon style={{ cursor: "pointer", color: "white" }} /> */}
        {/* <a style={{ color: "white", cursor: "pointer" }}>Connect Us </a> */}
      </div>
      <div className="headeres"  >
        <Link to="/">
          <img
            className="header__logo"
            src="https://shirrtup.com/wp-content/uploads/2021/08/ShirrtUp-Logo-Final-01.png"
          />
        </Link>
          {/* <Search/> */}
          <Route path="/" component={Search}></Route>
          {/* <div className="header__search">
            
          <input
          className="header__searchInput"
          placeholder="Search for products"
          type="text"
          />
          <SearchIcon className="header__searchIcon" />
        </div> */}
     



     <Link  to="/cart"> <ShoppingBagOutlinedIcon 
          style={{
            cursor: "pointer", fontSize: "34px", color:"#5e5757", marginTop: "30px",paddingLeft:"2vmax", marginRight: "18px"
            


          }}
        /> </Link>
    

        
        <FavoriteBorderOutlinedIcon
          style={{
            cursor: "pointer",
            paddingLeft: "23px",
            fontSize: "34px",
            marginTop: "30px",
            color:"#5e5757",
            marginRight: "20px",
          }}
        />
            <Link  to="/login"> <PersonOutlineIcon
          style={{ 
        
        
          cursor: "pointer",
          paddingLeft: "23px",
          fontSize: "34px",
          marginTop: "30px",
          marginRight: "14px",
          color:"#5e5757"
        }}
        /></Link> 
   



  

       {isAuthenticated && <UserOptions user={user} />  }  


      </div>




      <div className="header">
        



           

        <div class="dropdown">
  <button class="dropbtn">MEN</button>
  <div class="dropdown-content">
    <a href="#">T-Shirts</a>
    <a href="#">Plain Tank Tops</a>
    <a href="#">Tank Tops</a>
  </div></div>
  &ensp;&ensp;&ensp;&ensp;&ensp;
  <div class="dropdown">
  <button class="dropbtn">WOMEN</button>
  <div class="dropdown-content">
    <a href="#">T-Shirts</a>
    <a href="#">Unisex T-Shirts</a>
    <a href="#">Plain T-Shirts</a>
    <a href="#">Crop Tops</a>
  </div></div>
  &ensp;&ensp;&ensp;&ensp;

  <div class="dropdown">
  <button class="dropbtn">RIGTH TO CHOOSE</button>
  <div class="dropdown-content">
    <a href="#">Biker</a>
    <a href="#">Gym</a>
    <a href="#">Foodie</a>
    <a href="#">Motivation</a>
    <a href="#">Gamer</a>
    <a href="#">Music</a>
  </div></div>

          {/* <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link> */}

          {/* <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div> */}

          <Link to="/checkout">
            <div className="header__optionBasket">
              {/* <ShoppingBasketIcon /> */}
              {/* <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span> */}
            </div>
          </Link>
        </div>
      
    </>
  );
}

export default Header;





