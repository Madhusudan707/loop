import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <h1 className="text-5xl">404 Page Not Found</h1>
      <h3>
        Go to<Link to="/">Home</Link>
      </h3>
    </div>
  );
};
