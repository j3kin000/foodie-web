import { Button, SxProps, Theme, useTheme } from "@mui/material";
import { FC } from "react";

type CustomButtonProps = {
  loading?: boolean;
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  butonStyle?: SxProps<Theme> | undefined;
  variant?: "text" | "outlined" | "contained";
  handleOnCLick?: () => void;
};
const CustomButton: FC<CustomButtonProps> = ({
  loading,
  text,
  butonStyle,
  type = "button",
  variant = "contained",
  handleOnCLick,
}) => {
  const theme = useTheme();
  // Merge default and custom styles
  const buttonStyles: SxProps<Theme> = {
    pr: 5,
    pl: 5,
    textTransform: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.light,
    },
    ...butonStyle, // Merge custom styles here
  };
  return (
    <Button
      fullWidth
      type={type}
      variant={variant}
      size="large"
      disabled={loading}
      sx={buttonStyles}
      onClick={handleOnCLick}
    >
      {loading ? "Loading..." : text}
    </Button>
  );
};

export default CustomButton;
