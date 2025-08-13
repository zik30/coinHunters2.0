import { Navigate } from "react-router-dom";
import useUserStore from "../../../store/userStore";

export const GuestGuard = ({ children }) => {
  const { isAuth } = useUserStore();

  return !isAuth ? children : <Navigate to={"/"} replace />;
};
