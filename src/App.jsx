import { useEffect, useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import {
  Feed,
  ChannelDetail,
  Navbar,
  SearchFeed,
  VideoDetail,
} from "./components";
import ThemeContext from "./utils/ThemeContext";
import useLocal from "./utils/useLocal";

function App() {
  const localStorageValue = useLocal("Theme");
  const [themeState, setThemeState] = useState(localStorageValue || false);
  useEffect(() => {
    useLocal("Theme", themeState, true);
  }, [themeState]);
  return (
    <BrowserRouter>
      <ThemeContext.Provider
        value={{ backgroundColor: themeState, setThemeState }}
      >
        <Box sx={{ backgroundColor: `${themeState ? "black" : "white"}` }}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </Box>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
