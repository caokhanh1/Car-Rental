import { Link, useLocation } from "react-router-dom";
import { FaCarCrash } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { Button, Navbar, TextInput } from "flowbite-react";
import { useSelector } from "react-redux";
export default function Header() {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Navbar className="border-b-2 bg-slate-200 shadow-md p-3">
      <Link
        to="/"
        className="self-center text-sm sm:text-xl font-semibold dark:text-white"
      >
        <div className="text-2xl flex items-center gap-2 font-bold font-averia uppercase">
          <span className="text-slate-500">Car</span>
          <span className="text-slate-700">Rental</span>
          <FaCarCrash className="text-yellow-500" />
        </div>
      </Link>

      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      <div className="flex gap-2 md:order-2">
        <Link to="/profile">
          {currentUser ? (
            <img
              className="rounded-full h-7 w-7 object-cover"
              src={currentUser.avatar || "https://github.com/shadcn.png"}
              alt="profile"
            />
          ) : (
            <Button gradientDuoTone="pinkToOrange">Sign In</Button>
          )}
        </Link>
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/cars"} as={"div"}>
          <Link to="/cars">Car</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
