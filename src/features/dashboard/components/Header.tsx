import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const Header = () => {
  const theme = useTheme();
  const lgDown = useMediaQuery("(max-width:1200px)");
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        border: "1px solid #E0E0E0",
        borderRadius: 2,
        // backgroundColor: "#03081F",
        // color: "white",
        backgroundColor: "#FBFBFB",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: lgDown ? "center" : "space-between",
          overflow: "hidden",
          pl: lgDown ? 1 : 10,
          position: "relative", // Ensure relative positioning for the parent container
        }}
      >
        <Box
          display={"flex"}
          flexDirection="column"
          justifyContent="center"
          textAlign={lgDown ? "center" : "left"}
          sx={{
            pt: smDown ? 2 : 10,
            pb: smDown ? 2 : 10,
            zIndex: 1, // Lower z-index for background image
          }}
        >
          <Typography
            variant={smDown ? "inherit" : "subtitle1"}
            fontWeight={"600"}
            mb={smDown ? 2 : 5}
          >
            Order Restaurant food, takeaway and groceries.
          </Typography>
          <Typography variant={smDown ? "h3" : "h2"} fontWeight={"500"}>
            Feast Your Senses,
          </Typography>
          <Typography
            variant={smDown ? "h3" : "h2"}
            fontWeight={"500"}
            color={theme.palette.primary.main}
          >
            Fast and Fresh
          </Typography>
          <Box pt={5}>
            <Typography
              variant={smDown ? "inherit" : "subtitle1"}
              fontWeight={"600"}
            >
              Order Now to see what we deliver
            </Typography>
          </Box>
        </Box>
        <img
          src="/header-people.svg"
          alt=""
          height={"100%"}
          style={{
            position: "absolute",
            bottom: 0,
            left: "45%",
            transform: "translateX(-50%)",
            zIndex: 0, // Lower z-index for background image
          }}
        />
        <Box
          sx={{
            display: lgDown ? "none" : "flex",
            backgroundImage: 'url("/header-bg.svg")',
            backgroundSize: "cover", // or "contain" depending on your needs
            backgroundRepeat: "no-repeat",
            height: "auto", // Set the height to fill the viewport or any specific height
            width: "40%",
            pl: 20,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img src="/header-chat1.svg" alt="" />
            <img src="/header-chat2.svg" alt="" />
            <img src="/header-chat3.svg" alt="" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
