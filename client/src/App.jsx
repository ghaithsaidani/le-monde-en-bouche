import { ThemeProvider } from "@emotion/react";
import { Header } from "./components/Home/header/Header"
import { DarkPalette, LightPalette } from "./theme/requirements/Palette";
import { useSelector } from "react-redux";
import { CssBaseline, responsiveFontSizes } from "@mui/material";
import { Theme } from "./theme/Theme";
import { isLightState } from "./features/ThemeSlice";
import {Home} from "./components/Home/Home.jsx";

const App = () => {
  const lightTheme=useSelector(isLightState)
  return (
    <ThemeProvider
    theme={
      lightTheme
        ? responsiveFontSizes(Theme(LightPalette))
        : responsiveFontSizes(Theme(DarkPalette))
    }
    >
      <CssBaseline />
      <Home/>
    </ThemeProvider>
  )
}
export default App;

