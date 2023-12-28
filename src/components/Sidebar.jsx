import { Button, Stack } from "@mui/material";
import React, { useContext } from "react";
import { categories } from "../utils/constants";
import ThemeContext from "../utils/ThemeContext";

const selectedCategory = "New";

function Sidebar({ selectedCategory, setSelectedCategory }) {
  const { backgroundColor } = useContext(ThemeContext);
  return (
    <Stack
      direction={`row`}
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => {
        return (
          <button
            className="category-btn"
            onClick={() => setSelectedCategory(category.name)}
            style={{
              background: category.name === selectedCategory && "#FC1503",
              color: `${backgroundColor ? "white" : "black"}`,
            }}
            key={category.name}
          >
            <span
              style={{
                color: category.name === selectedCategory ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {category.icon}
            </span>
            <span
              style={{
                opacity: category.name === selectedCategory ? "1" : "0.8",
              }}
            >
              {category.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
}

export default Sidebar;
