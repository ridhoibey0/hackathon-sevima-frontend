import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Flex,
  Image,
  Text,
  VStack,
  Icon,
  Skeleton,
  AlertIcon,
} from "@chakra-ui/react";
import { IoMdLogIn, IoMdLogOut, IoIosRemove } from "react-icons/Io";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";

import { formatDate } from "@/utils/formatDate";
import useUserStore from "@/store/userStore";
import { formatTime } from "@/utils/formatTime";
import { getHistoryComplain } from "@/services";

const Home = () => {
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);
  const [history, setHistory] = useState([]);
  const [currentTime, setCurrentTime] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getHistoryComplain();
        console.log(response.data.data);
        setHistory(response.data.data);
      } catch (error) {}
    };
    fetchData();
  }, [getHistoryComplain]);
  return (
    <Box bgColor="secondary" fontFamily="mukta" overflow="hidden">
      <Box
        maxW="540px"
        minH="100vh"
        margin="auto"
        backgroundColor="background"
        position="relative"
      >
        <Header />
        <Box>
          <Flex
            margin="0px 24px"
            mt="-2.5rem"
            padding="1rem 0px"
            backgroundColor="background"
            borderRadius="0.5rem"
            justify="flex-start"
            alignItems="center"
            alignContent="center"
            display="flex"
            boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
          >
            <Flex display="inline" margin="0px 24px">
              {user ? (
                <Image src={user.foto} maxW="100px" alt="" />
              ) : (
                <Skeleton w="100px" h="100px" />
              )}
            </Flex>
            <Flex display="grid">
              <Text margin="0" fontSize="md" fontWeight="700">
                {user ? (
                  user.name
                ) : (
                  <Skeleton w="120px" h="20px" borderRadius="0.25rem" />
                )}
              </Text>
              <Text margin="0" fontSize="sm" color="textDark">
                {user ? (
                  `${user.email} ${user.phone}`
                ) : (
                  <Skeleton w="50px" mt="2px" h="16px" borderRadius="0.25rem" />
                )}
              </Text>
            </Flex>
          </Flex>
          <Flex
            margin="0px 64px"
            backgroundColor="background"
            justify="space-between"
            display="flex"
          ></Flex>
          <Box
            padding="0px 24px"
            mt="38px"
            pb="2rem"
            backgroundColor="background"
          >
            <Flex justify="space-between" display="flex" mb="24px">
              <Text fontSize="lg" fontWeight="700">
                Histori Keluhan
              </Text>
              <Link
                to="/history"
                color="primary"
                fontWeight="700"
                fontSize="lg"
              >
                Lihat semua
              </Link>
            </Flex>
            {history.length == 0 ? (
              <Skeleton height="115px" borderRadius="20px" />
            ) : (
              history.map((ul) => (
                <Box
                  key={ul.id}
                  borderRadius="20px"
                  mb="2rem"
                  display="grid"
                  height="115px"
                  borderLeft="24px solid #BF080A"
                  backgroundColor="background"
                  boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                  justify="space-between"
                >
                  <Flex margin="0px 24px" mb="0" padding="0" align="end">
                    <Text fontSize="md" color="textDark">
                      {formatDate(ul.created_at)}
                    </Text>
                  </Flex>
                  <Flex
                    backgroundColor="background"
                    padding="0"
                    margin="0px 24px"
                    justify="space-between"
                    display="flex"
                  >
                    <Box align="start">
                      <Text
                        color="primary"
                        margin="0"
                        fontSize="md"
                        fontWeight="700"
                      >
                        {ul.user.name}
                      </Text>
                    </Box>
                    <Box align="start">
                      <Text
                        color="primary"
                        margin="0"
                        fontSize="md"
                        fontWeight="700"
                      >
                        {ul.category.name}
                      </Text>
                    </Box>
                  </Flex>
                {ul.assignment ? (
                  <>
                  <Text  margin="0px 24px">Teknisi</Text>
                   <Flex
                    backgroundColor="background"
                    padding="0"
                    margin="0px 24px"
                    justify="space-between"
                    display="flex"
                  >
                    <Box align="start">
                      <Text
                        color="primary"
                        margin="0"
                        fontSize="md"
                        fontWeight="700"
                      >
                        {ul.assignment.workers.name}
                      </Text>
                    </Box>
                    <Box align="start">
                      <Text
                        color={ul.status === "PENDING" ? "primary" : "success"}
                        margin="0"
                        fontSize="md"
                        fontWeight="700"
                      >
                        {ul.status}
                      </Text>
                    </Box>
                  </Flex></>
                ) : ""}
                </Box>
              ))
            )}
          </Box>
        </Box>
        <Navbar />
      </Box>
    </Box>
  );
};

export default Home;
