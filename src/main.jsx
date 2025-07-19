import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import useUserStore from "@/store/userStore";
import themes from "./themes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={themes}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
