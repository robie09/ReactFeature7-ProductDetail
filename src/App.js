// Styling
import { GlobalStyle, ThemeButton } from "./styles";

import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import ProductDetail from "./components/ProductDetail";
//import product from "./products";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [product, setProduct] = useState(null);

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  const setView = product ? (
    <ProductDetail product={product} setProduct={setProduct} />
  ) : (
    <ProductList setProduct={setProduct} />
  );

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
      {setView}
      <Home />
    </ThemeProvider>
  );
}

export default App;
