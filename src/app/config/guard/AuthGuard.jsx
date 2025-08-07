import { Navigate } from "react-router-dom";
import useUserStore from "../../../store/userStore";

export const AuthGuard = ({ children }) => {
  const { name } = useUserStore();

  return name ? children : <Navigate to={"/registration"} replace />;
};
