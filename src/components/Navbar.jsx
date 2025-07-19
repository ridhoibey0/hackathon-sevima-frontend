import {
  RiFileAddLine,
  RiHome2Line,
  RiUser3Fill,
} from "react-icons/ri";
import React, { useRef, useState } from "react";
import { Box, Icon, Text, Flex, Image, Input } from "@chakra-ui/react";
import "@/assets/style.css";
import { NavLink, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const fileInputRef = useRef();
  const isActive = (path) => {
    const location = useLocation();
    return location.pathname === path;
  };


  return (
    <>
      <ToastContainer />
      <Flex
        className="nav"
        display="flex"
        justify="space-around"
        backgroundColor="background"
        fontWeight="700"
        fontSize="sm"
        fontFamily="mukta"
        color="secondary"
        position="fixed"
        width="540px"
        bottom="0"
        textAlign="center"
        boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        p="12px"
      >
        <Box>
          <NavLink
            exact
            to="/"
            padding="0.5rem 0"
            className={isActive("/") ? "active" : ""}
            style={{ fontWeight: "bold" }}
          >
            <Icon as={RiHome2Line} boxSize="20px" lineHeight="0" />
            <Text>Home</Text>
          </NavLink>
        </Box>
        <Box>
          <NavLink
            to="/keluhan"
            textDecoration="none"
            padding="0.5rem 0"
            className={isActive("/keluhan") ? "active" : ""}
          >
            <Icon as={RiFileAddLine} boxSize="20px" lineHeight="0" />
            <Text>Keluhan</Text>
          </NavLink>
        </Box>
        <Box>
          <NavLink
            to="/profile"
            textDecoration="none"
            className={isActive("/profile") ? "active" : ""}
            padding="0.5rem 0"
          >
            <Icon as={RiUser3Fill} boxSize="20px" lineHeight="0" />
            <Text>Profile</Text>
          </NavLink>
        </Box>
      </Flex>
    </>
  );
};
