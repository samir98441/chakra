import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { Avatar, Button } from "@chakra-ui/react";
import Search from "../Search";
import { useLoginContext } from "../../context/LoginContext";

const Header = () => {
  const { handleLogout } = useLoginContext();
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
          <li>
            <Button colorScheme="red" onClick={handleLogout}>
              Logout
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
