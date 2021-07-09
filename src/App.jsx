import { Route, Routes } from "react-router";
import { Navbar,Sidenav,Feed,Post } from "./Components";
import { SignUp, SignIn, Home, UserProfile,PrivateRoute,PageNotFound } from "./pages";
import { useInitialize } from "./hooks";
import "./App.css";
const App = () => {
  const { initializeApp } = useInitialize();
  return (
    <div ref={initializeApp} className="App">
      <Navbar />
      <Sidenav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <PrivateRoute path="/profile" element={<UserProfile/>} />
        <PrivateRoute path="/post/:id" element={<Post />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
