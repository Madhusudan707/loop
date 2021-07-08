import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks";

export const SignInForm = () => {

    const {handleChange,signIn,debounceValues,error,isError,setError } = useUser()

    useEffect(() => {
        if (isError) {
          setError("Login failed! Please enter valid credentials.");
        }
      }, [isError]);
    return (
        <div className="flex   w-full items-center justify-center h-screen">
        <div className="flex flex-col border lg:shadow-md rounded-lg">
          <div className="flex w-full  justify-center lg:border-b-2 p-4">
            <h1 className="text-3xl ">Sign-In !</h1>
          </div>
          <form onSubmit={signIn} className="flex flex-col  p-4 w-full">
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
              <div className="flex flex-col w-full p-4  ">
                <label>
                  Password<sup className="text-red-500"> *</sup>
                </label>
                <input
                  type="password"
                  name="password"
                  className="border  p-2"
                  required
                  onChange={handleChange}
                  value={debounceValues.password || ""}
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
                  value="Sign In"
                  className="text-2xl p-4 btn btn-primary lg:w-96 w-72 text-white"
                />
              </div>
            </div>
            <div className="flex items-center justify-center p-8">
              <span>
                Not Registered?
                <Link to="/sign-up" className="text-blue-500">
                  SignUp!
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    )
}
