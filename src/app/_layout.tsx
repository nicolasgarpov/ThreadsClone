import "../../global.css";

import { Slot } from "expo-router";

import { DarkTheme, ThemeProvider } from "@react-navigation/native";

const myTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "white",
    card: "#101010",
  },
};

export default function RootLayout() {
  console.log("RootLayout rendered");

  return (
    <ThemeProvider value={DarkTheme}>
      <Slot />
    </ThemeProvider>
  );
}
