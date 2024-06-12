import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const Cart = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box mr={smDown ? 0 : 5} ml={smDown ? 0 : 5}>
      <Typography>asdas</Typography>
    </Box>
  );
};

export default Cart;
