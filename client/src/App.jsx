import { ThemeProvider } from "@emotion/react";
import { DarkPalette, LightPalette } from "./theme/requirements/Palette";
import { useSelector } from "react-redux";
import { CssBaseline, responsiveFontSizes } from "@mui/material";
import { Theme } from "./theme/Theme";
import { isLightState } from "./features/ThemeSlice";
import {Home} from "./pages/Home/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Auth from "./pages/Auth/Auth.jsx";
import {Register} from "./pages/register/Register.jsx";

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
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />}/>
          <Route index path="/auth" element={<Auth />}/>
          <Route index path="/register" element={<Register />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
export default App;

