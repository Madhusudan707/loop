import { Route, Routes } from "react-router";
import { SignUp, SignIn, Home, UserProfile } from "./pages";

import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Home />
      <Routes>
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </div>
  );
};

export default App;
