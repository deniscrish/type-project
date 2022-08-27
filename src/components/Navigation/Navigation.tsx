import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
      <span className="font-bold">React TypeScript 2022</span>
      <span>
        <Link to="/" className="mr-2 navigation-focus">
          Products
        </Link>
        <Link to="/cart" className="mr-2 navigation-focus">
          Users
        </Link>
        <Link to="/about" className="mr-2 navigation-focus">About</Link>
      </span>
    </nav>
  );
};
