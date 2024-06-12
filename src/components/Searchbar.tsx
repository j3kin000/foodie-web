import { Search } from "@mui/icons-material";
import { IconButton, InputBase, Paper } from "@mui/material";
import { FC } from "react";

type SearchbarProps = {
  handleSetSearchQuery: (query: string) => void;
};
const Searchbar: FC<SearchbarProps> = ({ handleSetSearchQuery }) => (
  <Paper
    component="form"
    sx={{
      p: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 300,
      borderRadius: 20,
    }}
  >
    <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
      <Search />
    </IconButton>
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Search from menu"
      onChange={(e) => {
        handleSetSearchQuery(e.target.value);
      }}
    />
  </Paper>
);

export default Searchbar;
