import { useDispatch } from "react-redux";
import { TypedDispatch } from "src/redux/store";
export const useAppDispatch: () => TypedDispatch = useDispatch;
