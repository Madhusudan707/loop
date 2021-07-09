import { SignInForm} from "../Components"
import { useRef } from "react";
import { useSelector } from "react-redux";
import { getLoginStatus} from "../features/userSlice";
import { Navigate, useLocation } from "react-router";
import { Link } from "react-router-dom";

export const SignIn = () => {
    const isUserLoggedIn = useSelector(getLoginStatus);
    const location = useLocation();
    const pathRef = useRef(location.state);
    const getRoute = () => {
      if (pathRef.current?.from) {
        // if user logs out from profile, he won't
        // be redirected to profile on login
        if (pathRef.current.from !== "/profile") {
          return pathRef.current.from;
        }
        return "/";
      }
      return "/";
    };
    return (
        <>
         {isUserLoggedIn && <Navigate to={getRoute()} replace />}
           
            <SignInForm/>
        </>
    )
}
