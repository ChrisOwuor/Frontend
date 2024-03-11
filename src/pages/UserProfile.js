import { PaperClipIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";

import { useContext } from "react";
import AuthContext from "../context/AuthContext";
export default function UserProfile() {
  const [details, setdetails] = useState(null);
  let { AuthTokens } = useContext(AuthContext);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/auth/profile/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(AuthTokens.access),
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Could not fetch");
        }
      })
      .then((data) => {
        setdetails(data);
      });
  }, [AuthTokens.access]);
  const [user_name, setUser_name] = useState("");
  const [email, setEmail] = useState("");
  const [user_loading, setUser_loading] = useState(false);
  const [email_loading, setEmail_loading] = useState(false);

  const updateUserName = (e) => {
    e.preventDefault();
    const body = {
      user_name: user_name,
    };
    setUser_loading(true);

    fetch(`${process.env.REACT_APP_API_URL}/auth/profile/user/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(AuthTokens.access),
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          setUser_loading(false);
          throw new Error("Could not fetch");
        }
      })
      .then((data) => {
        setUser_loading(false);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  const updateUserEmail = (e) => {
    e.preventDefault();
    const body = {
      email: email,
    };
    setEmail_loading(true);

    fetch(`${process.env.REACT_APP_API_URL}/auth/profile/user/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(AuthTokens.access),
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          setEmail_loading(false);
          throw new Error("Could not fetch");
        }
      })
      .then((data) => {
        setEmail_loading(false);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  const [password, setPassword] = useState("");
  const [old_password, setOldPassword] = useState("");
  const updateUserPassword = (e) => {
    e.preventDefault();
    const body = {
      password: password,
      old_password: old_password,
    };
    setEmail_loading(true);

    fetch(
      `${process.env.REACT_APP_API_URL}/auth/profile/user/update/password/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(AuthTokens.access),
        },
        body: JSON.stringify(body),
      }
    )
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          setEmail_loading(false);
          throw new Error("Could not fetch");
        }
      })
      .then((data) => {
        setEmail_loading(false);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full px-6 py-6 mx-auto drop-zone loopple-min-height-78vh text-slate-500">
      {/* header */}
      <div
        className="relative flex flex-col flex-auto min-w-0 p-4 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-slate-100 bg-clip-border mb-4 draggable"
        draggable="true"
      >
        <div className="flex flex-wrap -mx-3">
          <div className="flex-none w-auto max-w-full px-3">
            <div className="text-base ease-soft-in-out h-16 w-16 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
              <img
                src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/bruce-mars.jpg"
                alt="profile_image"
                className="w-full shadow-soft-sm rounded-xl"
              />
            </div>
          </div>
          <div className="flex-none w-auto max-w-full px-3 my-auto">
            <div className="h-full">
              <h5 className="mb-1">
                {" "}
                {details && details.person[0].user_name}
              </h5>
            </div>
          </div>
          <div className="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12"></div>
        </div>
      </div>

      <div className="w-full pb-6 mx-auto removable">
        <div className="flex flex-wrap -mx-3 drop-zone">
          {/* profile information */}
          <div
            className="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12 mb-4 draggable"
            draggable="true"
          >
            <div className="relative flex flex-col h-max min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
              <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                <div className="flex flex-wrap -mx-3">
                  <div className="flex items-center w-full max-w-full shrink-0 md:w-8/12 md:flex-none">
                    <h6 className="mb-0"> Profile Information</h6>
                  </div>
                </div>
              </div>
              <div className="flex-auto ">
                <hr className="h-px my-4 bg-transparent bbg-gradient-to-r from-transparent via-black/40 to-transparent" />
                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                  <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit">
                    <strong className="text-slate-700">User Name:</strong>{" "}
                    &nbsp; {details && details.person[0].user_name}
                  </li>

                  <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                    <strong className="text-slate-700">Email:</strong> &nbsp;
                    {details && details.person[0].email}{" "}
                  </li>
                </ul>
              </div>
            </div>
            {/* update profile info */}
            <div className="relative flex flex-col h-max min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
              <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                <div className="flex flex-wrap -mx-3">
                  <div className="flex items-center w-full max-w-full shrink-0 md:w-8/12 md:flex-none">
                    <h6 className="mb-0"> Update Profile Information</h6>
                  </div>
                </div>
              </div>
              <div className="flex-auto ">
                <hr className="h-px my-4 bg-transparent bbg-gradient-to-r from-transparent via-black/40 to-transparent" />
                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                  <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit">
                    <strong className="text-slate-700">User Name:</strong>{" "}
                    &nbsp;
                    <form onSubmit={updateUserName}>
                      <label
                        for="search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only "
                      >
                        User Name
                      </label>
                      <div class="relative">
                        <input
                          onChange={(e) => setUser_name(e.target.value)}
                          type="search"
                          id="search"
                          class="block w-full py-4 ps-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none "
                          placeholder="user_name"
                          required
                        />
                        <button
                          type="submit"
                          class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          {user_loading ? "updating ..." : "update"}
                        </button>
                      </div>
                    </form>
                  </li>

                  <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                    <strong className="text-slate-700">Email:</strong> &nbsp;
                    <form onSubmit={updateUserEmail}>
                      <label
                        for="email"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only "
                      >
                        Email
                      </label>
                      <div class="relative">
                        <input
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          id="email"
                          class="block w-full p-4 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
                          placeholder="email"
                          required
                        />
                        <button
                          type="submit"
                          class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          {email_loading ? "updating ..." : "update"}
                        </button>
                      </div>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* security */}
          <div className="w-full max-w-full lg:px-3 xl:w-4/12">
            <div className="relative flex flex-col h-max min-w-0   rounded-2xl ">
              <section class="">
                <div class="flex flex-col items-center justify-center lg:px-6 px-3 mx-auto  lg:py-0">
                  <div class="w-full  bg-white rounded-lg  dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                    <h6 class="mb-1  leading-tight tracking-tight text-slate-700 ">
                      Change Password
                    </h6>
                    <form
                      class="mt-4 space-y-4 lg:mt-5 md:space-y-5"
                      onSubmit={updateUserPassword}
                    >
                      <div>
                        <label
                          for="password"
                          class="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          Old Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          onChange={(e) => setOldPassword(e.target.value)}
                          id="password"
                          placeholder="••••••••"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          for="new-password"
                          class="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          New password
                        </label>
                        <input
                          type="new-password"
                          onChange={(e) => setPassword(e.target.value)}
                          name="new-password"
                          id="new-password"
                          placeholder="••••••••"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required=""
                        />
                      </div>

                      <button
                        type="submit"
                        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Reset password
                      </button>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* profile info */}

          {/* tracking codes */}
          <div
            className="w-full max-w-full lg-max:mt-6 xl:w-4/12 mb-4 draggable  mt-3 lg:mt-0 h-max"
            draggable="true"
          >
            <div className="relative flex flex-col h-max min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-slate-200 rounded-lg  ">
                    <tr>
                      <th class=" px-3 py-3 ">Tracking Codes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <hr />
                      {details && details.codes.length > 0 ? (
                        <td class="px-3 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <div className="flex w-0 flex-1 items-center">
                            <PaperClipIcon
                              className="h-5 w-5 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                              <span className="truncate font-medium">
                                {details.codes[0].first_name}
                              </span>
                              <span className="flex-shrink-0 text-gray-400 ">
                                {details.codes[0].trackCode}
                              </span>
                            </div>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <a
                              href="/"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              View Progress
                            </a>
                          </div>
                        </td>
                      ) : (
                        <td className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                          <p className="truncate font-medium">
                            You have not added a missing person yet
                          </p>
                        </td>
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
