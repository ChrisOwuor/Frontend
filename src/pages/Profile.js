import { PaperClipIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";

import { useContext } from "react";
import AuthContext from "../context/AuthContext";
export default function Profile() {
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
        console.log(data);
      });
  }, [AuthTokens.access]);

  return (
    <div className="main w-full h-full flex justify-center bg-gradient-to-b from-zinc-300 via-white to-white">
      <div className="lg:w-4/5 w-full h-full">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            User Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Personal details
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                User name
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {details && details.person[0].user_name}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Email address
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {details && details.person[0].email}{" "}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Missing Person Track Codes
              </dt>
              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul className="divide-y divide-gray-100 rounded-md border border-gray-200">
                  {details && details.codes.length > 0 ? (
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
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
                    </li>
                  ) : (
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <p className="truncate font-medium">
                        You have not added a missing person yet
                      </p>
                    </li>
                  )}
                </ul>
              </dd>
            </div>{" "}
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Repoted Person Track Codes
              </dt>
              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul className="divide-y divide-gray-100 rounded-md border border-gray-200">
                  {details && details.codes2.length > 0 ? (
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">
                            {details.codes2[0].first_name}
                          </span>
                          <span className="flex-shrink-0 text-gray-400 ">
                            {details.codes2[0].middle_name}
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
                    </li>
                  ) : (
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <p className="truncate font-medium">
                        You have not reported a lost person yet
                      </p>
                    </li>
                  )}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
