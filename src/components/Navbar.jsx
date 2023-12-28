import { Stack } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import ToggleTheme from "./ToggleTheme";
import ThemeContext from "../utils/ThemeContext";

function Navbar() {
  const { backgroundColor } = useContext(ThemeContext);
  return (
    <Stack
      direction={`row`}
      alignItems={`center`}
      p={2}
      sx={{
        position: "sticky",
        background: `${backgroundColor ? "black" : "white"}`,
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="Logo" height={45} />
      </Link>
      <SearchBar />
      <ToggleTheme />
    </Stack>
  );
}

export default Navbar;
