import { extendTheme } from "@chakra-ui/react";
import { colors, fonts, fontSizes } from "./foundations";
import { buttonStyled as Button } from "./components";
import "@fontsource/mukta";

const overrides = {
  colors,
  fonts,
  fontSizes,
  components: {
    Button,
  },
};

export default extendTheme(overrides);
