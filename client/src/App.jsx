import { ThemeProvider } from "@emotion/react";
import { DarkPalette, LightPalette } from "./theme/requirements/Palette";
import { useSelector } from "react-redux";
import { CssBaseline, responsiveFontSizes } from "@mui/material";
import { Theme } from "./theme/Theme";
import { isLightState } from "./features/ThemeSlice";
import {Home} from "./pages/Home/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/auth/login/Login.jsx";
import {Register} from "./pages/auth/register/Register.jsx";

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
          <Route path="/auth/login" element={<Login />}/>
          <Route path="/auth/register" element={<Register />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
export default App;

