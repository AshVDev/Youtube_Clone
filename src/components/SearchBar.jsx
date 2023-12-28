import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../utils/ThemeContext";

function SearchBar() {
  const { backgroundColor } = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState("");

  const Navigate = useNavigate();

  const SearchBar = (e) => {
    e.preventDefault();
    if (searchTerm) {
      Navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <Paper
      components="form"
      onSubmit={() => {}}
      sx={{
        display: "flex",
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className={`search-bar `}
        placeholder="search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <IconButton
        onClick={SearchBar}
        type="submit"
        sx={{ p: "10px", color: "red" }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
