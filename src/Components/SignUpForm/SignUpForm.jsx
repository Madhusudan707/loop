import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSignUp } from "../../hooks";
export const SignUpForm = () => {
  
  const [showPassword, setShowPassword] = useState(false);

  const {handleChange,signUp,debounceValues,error,values} = useSignUp()
//   const dispatch = useDispatch();
//   useEffect(() => {
//     const debounce = setTimeout(() => {
//       setValues(debounceValues);
//     }, 1000);

//     return () => clearTimeout(debounce);
//   }, [debounceValues]);

//   const handleChange = (event) => {
//     setDebounceValues((values) => ({
//       ...values,
//       [event.target.name]: event.target.value,
//     }));
//   };

//   const signUp = (e) => {
//     e.preventDefault();
//     const { name, username, email, password, cpassword } = values;
//     if (name && username && email) {
//       if (password === cpassword) {
//         // dispatch(signUpUserAsync({ name, username, email, password }));
//       } else {
//         setError("Password and Confirm Password not matched");
//       }
//     } else {
//       setError("All fields are mandatory");
//     }
//   };

  return (
    <div className="flex   w-full items-center justify-center h-screen">
      <div className="flex flex-col border lg:shadow-md rounded-lg">
        <div className="flex w-full  justify-center lg:border-b-2 p-4">
          <h1 className="text-3xl ">Create an Account !</h1>
        </div>
        <form onSubmit={signUp} className="flex flex-col  p-4 w-full">
          <div className="flex  items-center justify-between ">
            <div className="flex flex-col w-48 p-4">
              <label>
                Name<sup className="text-red-500"> *</sup>
              </label>
              <input
                type="text"
                name="name"
                className="border  p-2"
                required
                onChange={handleChange}
                value={debounceValues.name || ""}
              />
            </div>
            <div className="flex flex-col w-48 p-4">
              <label>
                Username<sup className="text-red-500"> *</sup>
              </label>
              <input
                type="text"
                name="username"
                className="border  p-2"
                required
                onChange={handleChange}
                value={debounceValues.username || ""}
              />
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col w-full p-4">
              <label>
                Email<sup className="text-red-500"> *</sup>
              </label>
              <input
                type="email"
                name="email"
                className="border  p-2"
                required
                onChange={handleChange}
                value={debounceValues.email || ""}
              />
            </div>
          </div>

          <div className="flex  items-center justify-between">
            <div className="flex flex-col w-48 p-4  ">
              <label>
                Password<sup className="text-red-500"> *</sup>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="border  p-2"
                required
                onChange={handleChange}
                value={debounceValues.password || ""}
              />
            </div>
            <i
              className={`  ${
                showPassword ? "fa fa-eye-slash" : "fa fa-eye"
              } cursor-pointer mt-8`}
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            ></i>
            <div className="flex flex-col w-48 p-4">
              <label>
                Confirm Password<sup className="text-red-500"> *</sup>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="cpassword"
                className="border p-2"
                required
                onChange={handleChange}
                value={debounceValues.cpassword || ""}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex w-full items-center justify-center text-red-500 mt-4">
              <span>{error}</span>
            </div>
            <div className="flex flex-col items-center justify-center w-full mt-8">
              <input
                type="submit"
                value="Sign Up"
                className="text-2xl p-4 btn btn-primary lg:w-96 w-72 text-white"
              />
            </div>
          </div>
          <div className="flex items-center justify-center p-8">
            <span>
              Already have an account?
              <Link to="/signin" className="text-blue-500">
                Login!
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
