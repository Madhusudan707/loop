import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getError,signUpUserAsync, signInUserAsync } from "../features/userSlice";

export const useUser = () => {
  const [values, setValues] = useState({});
  const [debounceValues, setDebounceValues] = useState({});
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { isError } = useSelector(getError);

  useEffect(() => {
    const debounce = setTimeout(() => {
       
      setValues(debounceValues);
      
    }, 1000);

    return () => clearTimeout(debounce);
  }, [debounceValues]);

  

  const handleChange = (event) => {
    setDebounceValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const signUp = (e) => {
    e.preventDefault();
    const { name, username, email, password, cpassword } = values;
    if (name && username && email) {
      if (password === cpassword) {
        dispatch(signUpUserAsync({ name, username, email, password }));
        setError("")
      } else {
        setError("Password and Confirm Password not matched");
      }
    } else {
      setError("All fields are mandatory");
    }
  };

  const signIn = (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (email && password) {
      dispatch(signInUserAsync({ email, password }));
    } else {
      setError("All fields are mandatory");
    }
  };

  return {
    handleChange,
    signUp,error,debounceValues,values,signIn,isError,setError
  };
};
