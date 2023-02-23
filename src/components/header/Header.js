import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { Avatar } from "@chakra-ui/react";
import Search from "../Search";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">ChakraLogO</Link>
      </div>
      <div className="searchbar">
        <Search />
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link to="/user">
              <Avatar
                name="Sameer kayastha"
                src="https://bit.ly/broken-link"
                fontSize="1rem"
              />
            </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
