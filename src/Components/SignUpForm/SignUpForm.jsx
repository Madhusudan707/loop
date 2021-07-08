import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks";
export const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { handleChange, signUp, debounceValues, error,isError,setError } = useUser();

  useEffect(() => {
    if (isError) {
      setError("Sign up failed! Make sure your email & username are unique.");
    }
  }, [isError]);

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
              <Link to="/sign-in" className="text-blue-500">
                Login!
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
