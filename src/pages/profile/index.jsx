import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Flex,
  Text,
  Button,
  Icon,
  Skeleton,
} from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";

import { AiFillQuestionCircle, AiFillExclamationCircle } from "react-icons/Ai";

import useUserStore from "@/store/userStore";
import { logout } from "@/services";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box bgColor="secondary" fontFamily="mukta">
      <Box
        maxW="540px"
        minH="100vh"
        margin="auto"
        backgroundColor="background"
        position="relative"
      >
        <Header />
        <Box>
          <Box m="0 24px" mt="40px" display="grid" gap="20px">
            <Flex
              display="flex"
              padding="10px 0"
              alignItems="center"
              borderBottom="1px solid black"
            >
              <Icon as={AiFillQuestionCircle} boxSize="20px" color="primary" />
              <Text ml="32px" fontWeight="700">
                Tentang Kami
              </Text>
            </Flex>
            <Flex
              display="flex"
              padding="10px 0"
              alignItems="center"
              borderBottom="1px solid black"
            >
              <Icon
                as={AiFillExclamationCircle}
                boxSize="20px"
                color="primary"
              />
              <Text ml="32px" fontWeight="700">
                Pusat bantuan
              </Text>
            </Flex>
          </Box>
          <Box margin="40px 24px">
            <Button variant="primary" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </Box>
        <Navbar />
      </Box>
    </Box>
  );
};

export default Profile;
