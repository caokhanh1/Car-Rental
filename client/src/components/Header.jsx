import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCarCrash } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';

export default function Header() {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  
  // Lấy thông tin người dùng từ localStorage
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // Hàm xử lý đăng xuất
  const handleSignout = () => {
    localStorage.removeItem("currentUser");
    navigate("/sign-in");
  };

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
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>

            {/* Phân quyền Dashboard cho admin */}
            {currentUser.role === "admin" ? (
              <Link to={'/dashboard?tab=dash'}>
                <Dropdown.Item>DashBoard</Dropdown.Item>
              </Link>
            ) : (
              <Link to={'/profile'}>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
            )}

            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <Button gradientDuoTone="pinkToOrange">Sign In</Button>
          </Link>
        )}
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
