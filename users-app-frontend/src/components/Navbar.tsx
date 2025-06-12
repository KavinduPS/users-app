import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-blue-600 flex justify-between items-center">
      <Link to={"/"}>
        <h1 className="ml-5 text-lg text-white">Users App</h1>
      </Link>
      <Link
        to={"/add-user"}
        className="border border-white mr-5 p-2 rounded-md text-white hover:cursor-pointer"
      >
        Add User
      </Link>
    </div>
  );
};

export default Navbar;
