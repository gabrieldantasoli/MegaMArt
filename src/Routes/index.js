import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectEmail } from "../Redux/user/slice";

export const PrivateRoutes = () => {
  
  const signed = useSelector(selectEmail);
  
  return signed === "admin@admin.com" ? <Outlet /> : <Navigate to="/login" />
}