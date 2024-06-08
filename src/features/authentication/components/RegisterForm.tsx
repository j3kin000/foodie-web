import {
  Box,
  Button,
  FormControl,
  FormLabel,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { FormikHelpers, useFormik } from "formik";
import { RegisterSchema } from "../schemas/login.schema";
import { AccountCircle, Lock, Person } from "@mui/icons-material";
import { register } from "@services/auth.service";
import React, { FC, useState } from "react";
import { toast } from "react-toastify";

export interface Register {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  customError?: string;
}
export interface RegisterFormProps {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setDisabledBackdropClick: React.Dispatch<React.SetStateAction<boolean>>;
}
const initialValues: Register = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm: FC<RegisterFormProps> = ({
  setVisible,
  setDisabledBackdropClick,
}) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (
    values: Register,
    action: FormikHelpers<typeof initialValues>
  ) => {
    try {
      setDisabledBackdropClick(true);
      setLoading(true);
      const data = {
        name: values.name,
        email: values.email,
        password: values.password,
      };
      const response = await register(data);
      console.log(response);
      toast("Account Successfully Created!");
    } catch (error) {
      action.setFieldError("customError", "Invalid email or password");
    } finally {
      setLoading(false);
      setDisabledBackdropClick(false);
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema: RegisterSchema,
    onSubmit: handleSubmit,
  });
  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Box>
          <Typography mb={5} variant="h5">
            Create an account
          </Typography>
          {formik.errors.customError && (
            <Typography color={"red"} mt={1}>
              {formik.errors.customError}
            </Typography>
          )}
          <FormControl
            sx={{
              display: "flex",
              mb: 2,
            }}
          >
            <FormLabel>Name</FormLabel>
            <TextField
              variant="standard"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiInputBase-root": {
                  borderRadius: 4,
                },
              }}
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name && (
              <Typography color={"red"} mt={1}>
                {formik.errors.name}
              </Typography>
            )}
          </FormControl>
          <FormControl
            sx={{
              display: "flex",
              mb: 2,
            }}
          >
            <FormLabel>Email</FormLabel>
            <TextField
              variant="standard"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiInputBase-root": {
                  borderRadius: 4,
                },
              }}
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email && (
              <Typography color={"red"} mt={1}>
                {formik.errors.email}
              </Typography>
            )}
          </FormControl>
          <FormControl
            variant="standard"
            sx={{
              display: "flex",
              mb: 2,
            }}
          >
            <FormLabel>Password</FormLabel>
            <TextField
              type="password"
              variant="standard"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiInputBase-root": {
                  borderRadius: 4,
                },
              }}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password && (
              <Typography color={"red"} mt={1}>
                {formik.errors.password}
              </Typography>
            )}
          </FormControl>
          <FormControl
            variant="standard"
            sx={{
              display: "flex",
            }}
          >
            <FormLabel>Confirm password</FormLabel>
            <TextField
              type="password"
              variant="standard"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiInputBase-root": {
                  borderRadius: 4,
                },
              }}
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <Typography color={"red"} mt={1}>
                  {formik.errors.confirmPassword}
                </Typography>
              )}
          </FormControl>

          <Box mb={4} mt={4}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              size="large"
              disabled={loading}
              sx={{
                pr: 5,
                pl: 5,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.light,
                },
              }}
            >
              {loading ? "Loading..." : "Register"}
            </Button>
          </Box>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Typography
              textAlign={"center"}
              display={"flex"}
              alignItems={"center"}
            >
              Already have an account?
              <Typography
                color={theme.palette.primary.main}
                component={Button}
                sx={{
                  textTransform: "none",
                }}
                disabled={loading}
                onClick={() => setVisible(false)}
              >
                Login now
              </Typography>
            </Typography>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default RegisterForm;
