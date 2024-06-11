import { Search } from "@mui/icons-material";
import { IconButton, InputBase, Paper } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";

type SearchbarProps = {
  setSearchQuery: Dispatch<SetStateAction<string>>;
};
const Searchbar: FC<SearchbarProps> = ({ setSearchQuery }) => (
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
        setSearchQuery(e.target.value);
      }}
    />
  </Paper>
);

export default Searchbar;
