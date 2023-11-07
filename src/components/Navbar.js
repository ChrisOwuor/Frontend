import { useContext, useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import ClearIcon from "@mui/icons-material/Clear";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let { user, logoutUser } = useContext(AuthContext);

  return (
    <header className="bg-gray-800  sticky top-0 z-10 p-0">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            to="/"
            className="active:outline active:outline-1 active:bg-slate-300"
          >
            {" "}
            <div>
              <p className="ml-20 text-white font-bold text-3xl underline max-[1200px]:text-x max-[1200px]:ml-0">
                Find <span className=" text-indigo-700 ">Me</span>{" "}
              </p>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className=" inline-flex items-center justify-center rounded-md p-1.5 bg-white text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link to={"/"}>
            {" "}
            <div className="services">
              <p
                className="text-gray-300 hover:bg-gray-700 hover:text-white
                              rounded-md px-3 py-2 text-sm font-medium"
              >
                Home
              </p>
            </div>
          </Link>
          <Link to={"/dashboard/missing"}>
            {" "}
            <div className="dashboard">
              <p
                className="text-gray-300 hover:bg-gray-700 hover:text-white
                              rounded-md px-3 py-2 text-sm font-medium"
              >
                Dashboard
              </p>
            </div>
          </Link>

          <Link to={"/services/add_person"}>
            {" "}
            <div className="services">
              <p
                className="text-gray-300 hover:bg-gray-700 hover:text-white
                              rounded-md px-3 py-2 text-sm font-medium"
              >
                Services
              </p>
            </div>
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end">
          {user && (
            <p
              className="text-gray-300  
                              rounded-md px-3 py-2 text-sm font-medium"
            >
              Welcome {user.user_name}
            </p>
          )}
          {user && (
            <Link to="/user">
              {" "}
              <AccountCircleRoundedIcon fontSize="large" color="primary" />
            </Link>
          )}{" "}
          {user ? (
            <button onClick={logoutUser}>
              {" "}
              <p
                className="text-gray-300 hover:bg-gray-700 hover:text-white
                              rounded-md px-3 py-2 text-sm font-medium"
              >
                Logout{" "}
              </p>
            </button>
          ) : (
            <Link to="/login">
              {" "}
              <div className="report_person  cursor-pointer ">
                <p
                  className="text-gray-300 hover:bg-gray-700 hover:text-white
                              rounded-md px-3 py-2 text-sm font-medium"
                >
                  Login{" "}
                </p>{" "}
              </div>
            </Link>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden bg-gray-800  "
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10  " />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/">
              {" "}
              <div>
                <p className="ml-20 text-gray-800 font-bold text-3xl underline max-[1200px]:text-x max-[1200px]:ml-0">
                  Find <span className=" text-indigo-700 ">Me</span>{" "}
                </p>
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <ClearIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link to={"/"} onClick={() => setMobileMenuOpen(false)}>
                  {" "}
                  <div className="services">
                    <p
                      className="text-black hover:bg-gray-700 hover:text-white
                              rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Home
                    </p>
                  </div>
                </Link>
                <Link
                  to={"/dashboard/missing"}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {" "}
                  <div className="dashboard">
                    <p
                      className="text-black hover:bg-gray-700 hover:text-white
                              rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Dashboard
                    </p>
                  </div>
                </Link>

                <Link
                  to={"/services/add_person"}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {" "}
                  <div className="services">
                    <p
                      className="text-black hover:bg-gray-700 hover:text-white
                              rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Services
                    </p>
                  </div>
                </Link>
              </div>
              <div className="py-6">
                {user && (
                  <p
                    className="text-black  
                              rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Welcome {user.user_name}
                  </p>
                )}
                {user && (
                  <p
                    className="text-black 
                              rounded-md px-3 py-2 text-sm font-medium"
                  >
                    <Link to="/user" onClick={() => setMobileMenuOpen(false)}>
                      <AccountCircleRoundedIcon
                        fontSize="large"
                        color="primary"
                      />
                    </Link>{" "}
                  </p>
                )}{" "}
                {user ? (
                  <button onClick={logoutUser}>
                    {" "}
                    <p
                      className="text-black hover:bg-gray-700 
                              rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Logout{" "}
                    </p>
                  </button>
                ) : (
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                    {" "}
                    <div className="report_person  cursor-pointer  ">
                      <p
                        className="text-black hover:bg-gray-700 hover:text-white
                              rounded-md px-3 py-2 text-sm font-medium"
                      >
                        Login{" "}
                      </p>{" "}
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
