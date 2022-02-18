import React, { useState, Fragment } from "react";
import MetaData from "../layout/MetaData";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    } else {
      history.push("/products");
    }
  };

  return (
    <Fragment>
      <MetaData title="Search A Product -- ECOMMERCE" />
      <form className="header__search" onSubmit={searchSubmitHandler}>
        <input
        className="header__searchInput"
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
      <input type="submit"  className="header__searchIcon" value="Search" /> 
        {/* <SearchIcon   type="submit"  value="Search" className="header__searchIcon" /> */}
      </form>
      {/* <div className="header__search">
                
              <input
                className="header__searchInput"
                placeholder="Search for products"
                type="text"
              />
              <SearchIcon  className="header__searchIcon" />
            </div> */}
    </Fragment>


  );
};

export default Search;
