import { Navigate, Route,useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getInitialLoading,
  getLoginStatus,
} from "../features/userSlice";

export const PrivateRoute = ({ path, ...props }) => {
  const isUserLoggedIn = useSelector(getLoginStatus);
  const initialLoading = useSelector(getInitialLoading);
  const location = useLocation();
  if (initialLoading) {
    // return <Loading />;
  }
  
  if (isUserLoggedIn) {
    return <Route {...props} />;
  }

  return <Navigate to="/sign-in" state={{ from: location.pathname }} replace />;
};
