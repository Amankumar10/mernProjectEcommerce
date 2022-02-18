import React from "react";
import "./App.css";
import axios from "axios";
import Header from "./component/layout/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewProduct from "./component/Admin/NewProduct";
import Dashboard from "./component/Admin/Dashboard.js";
// import Login from './component/Login/Login';

import Home from "./component/Home/Home";
import { useEffect, useState } from "react";
import Footer from "./component/layout/Footer/Footer";
import WebFont from "webfontloader";
import UpdateUser from "./component/Admin/UpdateUser";
import UsersList from "./component/Admin/UsersList";
import UpdatePassword from "./component/User/UpdatePassword";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import ForgotPassword from "./component/User/ForgotPassword";
import Shipping from "./component/Cart/Shipping";
import Payment from "./component/Cart/Payment";
import ResetPassword from "./component/User/ResetPassword";
import ProductReviews from "./component/Admin/ProductReviews";
import LoginSignUp from "./component/User/LoginSignUp";
// import Search from './component/Product/Search'
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
import store from "./store";
import ProcessOrder from "./component/Admin/ProcessOrder";
import OrderDetails from "./component/Order/OrderDetails";
import Profile from "./component/User/Profile";
import ProductList from "./component/Admin/ProductList.js";
// import UserOptions from "./component/layout/Header/UserOptions"
import OrderSuccess from "./component/Cart/OrderSuccess.js"; 
import { loadUser } from "./actions/userAction";
import OrderList from "./component/Admin/OrderList";
import { useSelector } from "react-redux";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdateProduct from "./component/Admin/UpdateProduct";
import Cart from "./component/Cart/Cart";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import { Elements } from "@stripe/react-stripe-js";
import MyOrders from "./component/Order/MyOrders";
import { loadStripe } from "@stripe/stripe-js";
import NotFound from "./component/layout/Not Found/NotFound";

function App() {
  // const {  isAuthenticated, user } = useSelector((state) => state.user);


  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());
  return (
    <>
      <Router>
        <Header />


        {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute exact path="/process/payment" component={Payment} ></ProtectedRoute>
        </Elements>
      )}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/product/:id" component={ProductDetails}></Route>
          <Route exact path="/products" component={Products}></Route>
          {/* <Route exact path='/search' component={Search}></Route> */}
          <Route path="/products/:keyword" component={Products}></Route>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />

          <Route exact path="/login" component={LoginSignUp}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <ProtectedRoute
            exact
            path="/account"
            component={Profile}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/me/update"
            component={UpdateProfile}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/password/update"
            component={UpdatePassword}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/order/confirm"
            component={ConfirmOrder}
          ></ProtectedRoute>
          <ProtectedRoute exact path="/success" component={OrderSuccess} ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/shipping"
            component={Shipping}
          ></ProtectedRoute>
          <ProtectedRoute exact path="/orders" component={MyOrders} ></ProtectedRoute>
          <ProtectedRoute exact path="/order/:id" component={OrderDetails} />
          <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Dashboard}
        />
         <ProtectedRoute
          exact
          path="/admin/products"
          isAdmin={true}
          component={ProductList}
        />

<ProtectedRoute
          exact
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
        />
            <ProtectedRoute
          exact
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
        />


<ProtectedRoute
          exact
          path="/admin/orders"
          isAdmin={true}
          component={OrderList}
        />
            <ProtectedRoute
          exact
          path="/admin/order/:id"
          isAdmin={true}
          component={ProcessOrder}
        />
         <ProtectedRoute
          exact
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
        />
           <ProtectedRoute
          exact
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
        />
           <ProtectedRoute
          exact
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
        />
             <ProtectedRoute
          exact
          path="/admin/reviews"
          isAdmin={true}
          component={ProductReviews}
        />
          <Route
            exact
            path="/password/forgot"
            component={ForgotPassword}
          ></Route>
          <Route
            exact
            path="/password/reset/:token"
            component={ResetPassword}
          ></Route>
           <Route
          component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        />
          
          {/* <Route exact path="/about">
            <About /> </Route>
            <Route exact path="/login">
            <Login  /> </Route> */}
          {/* <Route exact path="/signup">
            <Signup showAlert={showAlert} /> */}
          {/* </Route> */}
        </Switch>
        <Footer />

      </Router>
    </>
  );
}

export default App;
