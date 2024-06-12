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
import { FC, useState } from "react";
import GenericModal from "src/components/GenericModal";
import RegisterForm from "./RegisterForm";
import { useAppDispatch } from "src/utils/reducer/reducerHook.utils";
import { setUser } from "src/redux/user/user.action";
import { setOpen, setToken } from "src/redux/global/global.action";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

export interface Login {
  email: string;
  password: string;
  customError?: string;
}
type LoginFormProps = {
  setDisabledBackdropClick: React.Dispatch<React.SetStateAction<boolean>>;
};
const initialValues: Login = {
  email: "",
  password: "",
};

const LoginForm: FC<LoginFormProps> = ({ setDisabledBackdropClick }) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [disabledBackdrop, setDisabledBackdrop] = useState(false);

  const handleSubmit = async (
    values: Login,
    action: FormikHelpers<typeof initialValues>
  ) => {
    try {
      setDisabledBackdropClick(true);
      setLoading(true);
      const response = await login(values);
      console.log(response);
      const data = {
        user: response.user,
      };
      await dispatch(setUser(data));
      await dispatch(setToken(response.access_token));
      await dispatch(setOpen(false));
      toast(`Hello ${response.user.name}, welcome back!`);
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError) {
        if (axiosError.response?.status === 401) {
          await dispatch(setToken(""));
        }
      }
      action.setFieldError("customError", "Invalid email or password");
    } finally {
      setLoading(false);
      setDisabledBackdropClick(false);
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
            Login with Password
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
                disabled={loading}
                onClick={() => setVisible(true)}
              >
                Signup now
              </Typography>
            </Typography>
          </Box>
        </Box>
      </form>

      <GenericModal
        visible={visible}
        setVisible={setVisible}
        disabledBackdropClick={disabledBackdrop}
      >
        <RegisterForm
          setVisible={setVisible}
          setDisabledBackdropClick={setDisabledBackdrop}
        />
      </GenericModal>
    </Box>
  );
};

export default LoginForm;
