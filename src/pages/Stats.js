import React, { useEffect, useState } from "react";

import { useContext } from "react";
import AuthContext from "../context/AuthContext";
export default function Stats() {
  let { AuthTokens } = useContext(AuthContext);

  const ids = new URLSearchParams(document.location.search).get("key");
  const [details, setdetails] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/seen/details/${ids}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(AuthTokens.access),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setdetails(data);
      });
  }, [AuthTokens.access, ids]);
  details && console.log(details);
  const dateString = details && details[0].last_seen;
  const created = details && details[0].created_at;

  const isoDate = new Date(dateString);
  const Created_at = new Date(created);

  const formattedDate = isoDate.toLocaleDateString();
  const formattedTime = isoDate.toLocaleTimeString();

  const formattedCDate = Created_at.toLocaleDateString();
  const formattedCTime = Created_at.toLocaleTimeString();

  return (
    <>
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex  no-wrap md:-mx-2 ">
          <div className="w-full md:w-3/12 md:mx-2">
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className="image overflow-hidden rounded-md">
                <img
                  className="h-auto w-full mx-auto"
                  src={`http://127.0.0.1:8000${details && details[0].image}`}
                  alt=""
                />
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                {details &&
                  details[0].first_name +
                    " " +
                    details[0].middle_name +
                    " " +
                    details[0].last_name}
              </h1>

              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                      Found
                    </span>
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <span> Date Last Seen</span>
                  <span className="ml-auto">{formattedDate}</span>
                </li>
                <li className="flex items-center py-3">
                  <span> Time Last Seen</span>
                  <span className="ml-auto">{formattedTime}</span>
                </li>
                <li className="flex items-center py-3">
                  <span>Last Location</span>
                  <span className="ml-auto">
                    {details && details[0].location}
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <span>Posted By</span>
                  <span className="ml-auto">
                    {details && details[0].created_by}
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <span>Posted On</span>
                  <span className="ml-auto">{formattedCDate}</span>
                </li>
                <li className="flex items-center py-3">
                  <span>Posted At</span>
                  <span className="ml-auto">{formattedCTime}</span>
                </li>
              </ul>
            </div>
            <div className="my-4"></div>
          </div>
          <div className="w-full md:w-9/12 mx-2 h-64 ">
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide">Demographics</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-1 text-sm ">
                  <div className="grid grid-cols-2 my-2">
                    <div className="px-1 py-2 font-semibold">Gender</div>
                    <div className="px-1 py-2 bg-gray-100 rounded-md w-1/4 text-center">
                      {details && details[0].gender}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 my-2">
                    <div className="px-1 py-2 font-semibold ">Age</div>
                    <div className="px-1 py-2 bg-gray-100 rounded-md w-1/4 text-center">
                      {details && details[0].age}{" "}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 my-2">
                    <div className="px-1 py-2 font-semibold  ">
                      County Of Origin
                    </div>
                    <div className="px-1 py-2 bg-gray-100 rounded-md w-1/4 text-center">
                      {details && details[0].county}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="grid grid-cols-2">
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span clas="text-green-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">Other Information</span>
                  </div>
                  <ul className="list-inside space-y-2">
                    <li>
                      <div className="text-gray-700">Hair Color</div>
                      <div className="text-gray-500 text-xs">
                        {details && details[0].hair_color}
                      </div>
                    </li>

                    <li>
                      <div className="text-gray-700">Eye Color</div>
                      <div className="text-gray-500 text-xs">
                        {details && details[0].eye_color}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{" "}
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="grid grid-cols-2">
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span clas="text-green-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">Full Descriptoin</span>
                  </div>
                  <div className="list-inside space-y-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam quo consequuntur eos placeat animi adipisci
                    consequatur doloribus ex odio deleniti!
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
          </div>
          

          
    </>
  );
}
