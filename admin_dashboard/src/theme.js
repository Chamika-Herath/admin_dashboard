// src/theme.js
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("blue.50", "gray.900")(props),
        color: mode("gray.800", "whiteAlpha.900")(props),
        transition: "background 0.3s ease",
      },
      html: {
        bg: mode("blue.50", "gray.900")(props),
      },
      "#root": {
        minHeight: "100vh",
        bg: mode("blue.50", "gray.900")(props),
      },
    }),
  },
});

export default theme;
