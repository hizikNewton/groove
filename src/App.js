import { Route, Routes, Navigate } from "react-router-dom";
import { NavigationProvider } from "./context";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { GlobalStyle } from "styles/global-style";
import Layout from "components/layout/Layout";
import { Home } from "pages/home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationProvider>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate replace to="/liked-songs" />} />
            <Route path="/liked-songs" element={<Home />} />
          </Routes>
        </Layout>
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default App;
