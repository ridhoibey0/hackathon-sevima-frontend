import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Image,
  Select,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

import Main from "@/assets/img/login.png";

import { authLogin } from "@/services";
import { redirect, useNavigate } from "react-router-dom";
import useUserStore from "@/store/userStore";

const Login = () => {
  const setUser = useUserStore((state) => state.setUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await authLogin(email, password);
      localStorage.setItem("token", response.data.token);
      setUser(response.data.data);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
      setMessage(error.response.data.message);
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
        <Flex
          p="3rem 0"
          backgroundColor="background"
          display="flex"
          alignItems="center"
          justify="center"
        >
          <Flex
            display="flex"
            alignItems="center"
            justifyContent="center"
            paddingBottom="2px"
          >
            <Image src={Main} alt="" width="200px" srcSet="" />
          </Flex>
        </Flex>
        <Flex
          backgroundColor="background"
          fontSize="1rem"
          fontWeight="700"
          pb="3rem"
        >
          <form onSubmit={handleLogin} style={{ width: "90%" }}>
            <FormControl
              display="grid"
              rowGap="24px"
              margin="0px 24px"
              isRequired
            >
              {error ? (
                <Alert status="error">
                  <AlertIcon />
                  {message}
                </Alert>
              ) : (
                ""
              )}
              <Box>
                <FormLabel>Email</FormLabel>
                <Input
                  className="Input"
                  type="email"
                  placeholder="Masukan Email"
                  width="100%"
                  background="#FFFFFF"
                  border="1px solid #CCCCCC"
                  borderRadius="8px"
                  height="3rem"
                  w="100%"
                  focusBorderColor="black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Password</FormLabel>
                <Input
                  className="Input"
                  placeholder="Masukkan Password"
                  type="password"
                  width="100%"
                  background="#FFFFFF"
                  border="1px solid #CCCCCC"
                  borderRadius="8px"
                  height="3rem"
                  focusBorderColor="black"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
              <Box>
                {loading ? (
                  <Button isLoading variant="primary">
                    Login
                  </Button>
                ) : (
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                )}
              </Box>
            </FormControl>
          </form>
        </Flex>
      </Box>
    </Box>
  );
};

export default Login;
