import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";
import { PersonOutlined } from "@mui/icons-material";
import { setOpen } from "src/redux/global/global.action";
import { useAppDispatch } from "src/utils/reducer/reducerHook.utils";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "Order", "Track Order"];

const Navbar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLoginOnClick = async () => {
    await dispatch(setOpen(true));
  };
  const drawer = (
    <>
      <img src="/public/logo.svg" alt="" />
      <Divider />
      <List sx={{ height: "100%" }}>
        {navItems.map((item) => (
          <ListItem disablePadding>
            <ListItemButton key={item} sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem
          disablePadding
          sx={{
            position: "absolute",
            bottom: 0,
          }}
        >
          <ListItemButton onClick={handleLoginOnClick}>
            <ListItemText
              primary={"Login/Signin"}
              sx={{
                color: theme.palette.primary.light,
                pt: 1,
                pb: 1,
                textAlign: "center",
                textTransform: "none",
                backgroundColor: "#000",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                  borderColor: "#0062cc",
                  boxShadow: "none",
                  color: theme.palette.primary.light,
                },
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: theme.palette.primary.light,
          boxShadow: "none",
          p: 4,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "red" }} />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            <img src="/public/logo.svg" alt="asd" />
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "block", md: "flex" },
              flexWrap: "wrap",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  textTransform: "none",

                  color: "#000",
                  pr: { lg: 5 },
                  pl: { lg: 5 },
                  mr: { lg: 5 },
                  borderRadius: "20px",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.light,
                  },
                }}
              >
                {item}
              </Button>
            ))}
            <Button
              startIcon={
                <PersonOutlined
                  sx={{
                    color: theme.palette.primary.light,
                  }}
                />
              }
              onClick={handleLoginOnClick}
              sx={{
                color: theme.palette.primary.light,
                pr: { lg: 3 },
                pl: { lg: 3 },
                mr: { lg: 5 },
                textTransform: "none",
                backgroundColor: "#000",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                  borderColor: "#0062cc",
                  boxShadow: "none",
                  color: theme.palette.primary.light,
                },
              }}
            >
              Login/Signin
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
