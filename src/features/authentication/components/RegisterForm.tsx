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
import { LoginSchema } from "../schemas/login.schema";
import { AccountCircle, Lock } from "@mui/icons-material";
import { login } from "@services/auth.service";
import { useState } from "react";

export interface Login {
  email: string;
  password: string;
  customError?: string;
}
const initialValues: Login = {
  email: "",
  password: "",
};

const RegisterForm = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (
    values: Login,
    action: FormikHelpers<typeof initialValues>
  ) => {
    try {
      setLoading(true);
      const response = await login(values.email, values.password);
      console.log(response);
    } catch (error) {
      action.setFieldError("customError", "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: handleSubmit,
  });
  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Box>
          <Typography mb={5} variant="h5">
            Register
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
            }}
          >
            <FormLabel>Password</FormLabel>
            <TextField
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
          <Box display={"flex"} justifyContent={"flex-end"} mb={2}>
            <Typography
              color={theme.palette.primary.main}
              mt={1}
              component={Button}
              sx={{
                textTransform: "none",
              }}
            >
              Forgot password?
            </Typography>
          </Box>
          <Box mb={4}>
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
              {loading ? "Loading..." : "Login"}
            </Button>
          </Box>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Typography
              textAlign={"center"}
              display={"flex"}
              alignItems={"center"}
            >
              Dont have an account?
              <Typography
                color={theme.palette.primary.main}
                component={Button}
                sx={{
                  textTransform: "none",
                }}
              >
                Signup now
              </Typography>
            </Typography>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default RegisterForm;
