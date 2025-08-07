import { Navigate } from "react-router-dom";
import useUserStore from "../../../store/userStore";

export const GuestGuard = ({ children }) => {
  const { name } = useUserStore();

  return !name ? children : <Navigate to={"/"} replace />;
};
