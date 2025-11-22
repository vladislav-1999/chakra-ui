import { extendTheme } from "@chakra-ui/theme-utils";
import { theme as baseTheme } from "@chakra-ui/theme";

export const theme = extendTheme(baseTheme, {
  colors: {
    brand: {
      50: "#e3f2ff",
      500: "#3b82f6",
      700: "#1e40af",
    },
  },
  sizes: {
    card: "320px",
  },
  radii: {
    special: "1.5rem",
  },
});
