import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import "./Home.css";
import Product from "./ProductCard";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { useEffect,Fragment } from "react";
import Loader from "../layout/Loader/Loader";
import Footer from "../../component/layout/Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {

    const alert = useAlert()
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch,error ,alert ]);

  return (
    <>
      <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
           <MetaData title="SHIRRTUP" />

<Carousel
  autoPlay
  infiniteLoop
  showStatus={false}
  //   showIndicators={false}
  showThumbs={false}
  interval={3000}
>
  <div>
    <img src="https://shirrtup.com/wp-content/uploads/2021/08/banner-men-blue-new.jpg" />

    <p
      style={{
        cursor: "pointer",
        paddingLeft: "42px",
        color: "white",
        fontSize: "34px",
        alignItems: "center",
      }}
      className="legend"
    >
      NEW COLLECTION JUST LAUCHED SHOP NOW
    </p>

    {/* <p className='legend' style="
cursor: pointer;" >Brand new Designs Out Now </p> */}
  </div>
  <div>
    <img src="https://shirrtup.com/wp-content/uploads/2021/08/Untitled-3-4.jpg" />
    <p
      style={{
        cursor: "pointer",
        paddingLeft: "42px",
        color: "white",
        fontSize: "34px",
        alignItems: "center",
      }}
      className="legend"
    >
      PRINTED TSHIRT JUST LAUCHED. SHOP NOW{" "}
    </p>
  </div>
  <div>
    <img src="https://shirrtup.com/wp-content/uploads/2021/08/banner-yellow-new-.jpg" />
    <p
      style={{
        cursor: "pointer",
        paddingLeft: "42px",
        color: "white",
        fontSize: "34px",
        alignItems: "center",
      }}
      className="legend"
    >
      ALL UNISEX TSHIRT JUST LAUCHED.CHECH NOW
    </p>
  </div>
  <div>
    <img src=" https://shirrtup.com/wp-content/uploads/2021/08/women-pink-1.jpg" />
    <p
      style={{
        cursor: "pointer",
        paddingLeft: "42px",
        color: "white",
        fontSize: "34px",
        alignItems: "center",
      }}
      className="legend"
    >
      ALL NEW WOMAN'S TEES JUST LAUCHED. CHECH NOW
    </p>
  </div>
  <div>
    <img src="https://shirrtup.com/wp-content/uploads/2021/08/1350-1.jpg" />
    <p
      style={{
        cursor: "pointer",
        paddingLeft: "42px",
        color: "white",
        fontSize: "34px",
        alignItems: "center",
      }}
      className="legend"
    >
      BRAND NEW DESIGN OUT NOW SHOP.SHOP NOW{" "}
    </p>
  </div>
</Carousel>

<div className="tshirt1">
  <p
    style={{ paddingLeft: "40%", fontSize: "34px", alignItems: "center" }}
  >
    COLLECTION
  </p>
</div>



{/* <Link className="nav-link" to="/About">
                About
              </Link> */}


<div className="jobs-list">
  <div className="jobs-container">
    <div className="job-tile">
      <div className="top">
    <Link className="nav-link" to="/products">< img src=" https://shirrtup.com/wp-content/uploads/2021/08/Untitled-5-4-600x600.jpg" /></Link>    
      </div>
      <div className="rolename">
        <span>MEN T-SHIRT</span>
      </div>
    </div>

    <div className="job-tile">
      <div className="top">
        <img src=" https://shirrtup.com/wp-content/uploads/2021/08/Untitled-6-4-600x600.jpg" />
      </div>
      <div className="rolename">
        <span>WOMEN T-SHIRT</span>
      </div>
    </div>

    <div className="job-tile">
      <div className="top">
        <img src="   https://shirrtup.com/wp-content/uploads/2021/08/manuu-600x600.jpg" />
      </div>
      <div className="rolename">
        <span>UNISEX T-SHIRT</span>
      </div>
    </div>

    <div className="job-tile">
      <div className="top">
        <img src=" https://shirrtup.com/wp-content/uploads/2021/08/unnamed-1-1-600x600.jpg" />
      </div>
      <div className="rolename">
        <span>WOMAN PLAIN T-SHIRT</span>
      </div>
    </div>

    <div className="job-tile">
      <div className="top">
        <img src=" https://shirrtup.com/wp-content/uploads/2021/08/Untitled-4-4-600x600.jpg" />
      </div>
      <div className="rolename">
        <span>TANK TOP</span>
      </div>
    </div>

    <div className="job-tile">
      <div className="top">
        <img src="https://shirrtup.com/wp-content/uploads/2021/08/Untitled-1-6-600x600.jpg" />
      </div>
      <div className="rolename">
        <span>CROP TOP</span>
      </div>
    </div>
  </div>

  {/* product */}

  <div className="tshirt1">
    <p
      style={{
        paddingLeft: "34%",
        fontSize: "34px",
        alignItems: "center",
      }}
    >
      FEATURED COLLECTION
    </p>
  </div>
  <div className="container" id="container">
    {products && products.map((product) => <Product product={product} />)}
  </div>
</div>

        </Fragment>
      )}
    </Fragment>
    
    {/* <Footer /> */}

    
    </>
  );
};

export default Home;
