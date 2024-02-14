import { useState } from "react";
import { Link } from "react-router-dom";

import { Alert } from "@mui/material";

export default function Signup() {
  const [user_name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const CreateAccount = async () => {
    setIsLoading(true); // Set loading state when the button is clicked

    const body = {
      user_name: user_name,
      password: pass,
      email: email,
    };
    fetch("http://127.0.0.1:8000/auth/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.status === 201) {
          // User created successfully
          setAlertMessage("Your account has been successfully created.");
          setShowAlert(true);
          setIsLoading(false); // Set loading state to false when the process is finished

          // Hide the alert after 5 seconds
          setTimeout(() => {
            setShowAlert(false);
          }, 5000);
        } else {
          // Something went wrong
          setAlertMessage("Oops! Something went wrong. Please try again.");
          setShowAlert(true);
          setIsLoading(false); // Set loading state to false when the process is finished
        }
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false); // Set loading state to false in case of an error
      });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gradient-to-b from-cyan-100 via-indigo-200 to-zinc-800)">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="success">
              {showAlert && (
                <Alert onClose={() => setShowAlert(false)}>
                  {alertMessage}{" "}
                  {alertMessage ===
                    "Your account has been successfully created." && (
                    <span className="underline text-sky-500">
                      <Link to="/login">Login now</Link>
                    </span>
                  )}
                </Alert>
              )}
            </div>
            <h2 className="my-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign up to create your account
            </h2>
          </div>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="user_name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                User Name
              </label>
              <div className="mt-2">
                <input
                  id="user_name"
                  name="user_name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => setPass(e.target.value)}
                  required
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </form>
          <div className="mt-10">
            <button
              disabled={isLoading}
              onClick={CreateAccount}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
          </div>
          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
