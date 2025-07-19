import { Box, Image, Flex, Icon } from "@chakra-ui/react";
import React from "react";

import Bg from "@/assets/img/main.png";

export const Header = () => {
  return (
    <Box
      backgroundImage={Bg}
      backgroundSize="cover"
      fontFamily="mukta"
      align="center"
    >
      <Flex
        margin="0 24px"
        padding="42px 0px 77px 0px"
        display="flex"
        justify="space-between"
      >
      </Flex>
    </Box>
  );
};
