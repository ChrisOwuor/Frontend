import React, { useEffect, useState } from "react";

import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { formatDate, formatTime } from "../utils/FuncStore";
export default function FoundDetails() {
  let { AuthTokens } = useContext(AuthContext);

  const ids = new URLSearchParams(document.location.search).get("key");
  const [details, setdetails] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/seen/details/${ids}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(AuthTokens.access),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setdetails(data[0]);
      });
  }, [AuthTokens.access, ids]);

  return (
    <div className="w-full px-6 py-6 mx-auto drop-zone loopple-min-height-78vh text-slate-500">
      {/* header */}

      <div
        className="relative flex flex-col flex-auto min-w-0 p-4 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-slate-100 bg-clip-border mb-4 draggable"
        draggable="true"
      >
        <div className="flex flex-wrap -mx-3">
          <div className="flex-none w-auto max-w-full px-3">
            <div className="text-base ease-soft-in-out h-32 w-32 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
              <img
                src={`${
                  details && process.env.REACT_APP_API_URL + details.image
                }`}
                alt="profile_image"
                className="w-full h-full shadow-soft-sm rounded-xl"
              />
            </div>
          </div>
          <div className="flex-none w-auto max-w-full px-3 my-auto">
            <div className="h-full space-y-2">
              <h1>
                <strong className="text-slate-700 text-xl ">Status :</strong>{" "}
                <span className=" py-[3px] px-2 rounded-lg text-xs font-semibold bg-green-600 text-white">
                  Found
                </span>
              </h1>
              <h5 className="mb-1">
                <strong className="text-slate-700"> Full name :</strong>{" "}
                {details &&
                  details.first_name +
                    " " +
                    details.middle_name +
                    " " +
                    details.last_name}
              </h5>
              <h1>
                <strong className="text-slate-700">Gender :</strong>{" "}
                {details && details.gender}{" "}
              </h1>
              <h1>
                <strong className="text-slate-700">Age :</strong>{" "}
                {details && details.age}{" "}
              </h1>
            </div>
          </div>
          <div className="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12"></div>
        </div>
      </div>
      <div className="w-full pb-6 mx-auto removable">
        <div className="flex flex-wrap -mx-3 drop-zone">
          {/* profile information */}
          <div
            className="w-full max-w-full px-3 lg-max:mt-6  mb-4 grid lg:grid-cols-2 gap-2"
            draggable="true"
          >
            <div className="col-span-1 bg-slate-100 p-4">
              <div className="relative flex flex-col h-max min-w-0 break-words  border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="p-4 pb-0 mb-0  border-b-0 rounded-t-2xl">
                  <div className="flex flex-wrap -mx-3">
                    <div className="flex items-center w-full max-w-full shrink-0 md:w-8/12 md:flex-none">
                      <h6 className="mb-0"> Profile Information</h6>
                    </div>
                  </div>
                </div>
                <hr className="h-px my-4 bg-transparent bbg-gradient-to-r from-transparent via-black/40 to-transparent" />

                <div className="flex-auto ">
                  <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                    <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal  border-0 rounded-t-lg text-sm text-inherit">
                      <strong className="text-slate-700">Hair Color</strong>{" "}
                      &nbsp; {details && details.hair_color}
                    </li>

                    <li className="relative block px-4 py-2 pl-0 leading-normal  border-0 border-t-0 text-sm text-inherit">
                      <strong className="text-slate-700">Eye Color</strong>{" "}
                      &nbsp;
                      {details && details.eye_color}{" "}
                    </li>
                    <li className="relative block px-4 py-2 pl-0 leading-normal  border-0 border-t-0 text-sm text-inherit">
                      <strong className="text-slate-700">Description</strong>{" "}
                      &nbsp;
                      {details && details.description}{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*location info */}
            <div className="col-span-1 rounded-lg bg-slate-100 p-4">
              <div className="relative flex flex-col h-max min-w-0 break-words border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="p-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
                  <div className="flex flex-wrap -mx-3">
                    <div className="flex items-center w-full max-w-full shrink-0 md:w-8/12 md:flex-none">
                      <h6 className="mb-0"> Location and Time Information</h6>
                    </div>
                  </div>
                </div>
                <hr className="h-px my-4 bg-transparent bbg-gradient-to-r from-transparent via-black/40 to-transparent" />

                <div className="flex-auto ">
                  <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                    <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal border-0 rounded-t-lg text-sm text-inherit">
                      <strong className="text-slate-700">
                        Location Last seen
                      </strong>{" "}
                      &nbsp; {details && details.name_}
                    </li>
                    <li className="relative block px-4 py-2 pl-0 leading-normal border-0 border-t-0 text-sm text-inherit">
                      <strong className="text-slate-700">
                        County Last seen
                      </strong>{" "}
                      &nbsp;
                      {details && details.county_}{" "}
                    </li>
                    <li className="relative block px-4 py-2 pl-0 leading-normal border-0 border-t-0 text-sm text-inherit">
                      <strong className="text-slate-700">Time Last Seen</strong>
                      &nbsp;
                      {details && formatTime(details.created_at)}
                    </li>{" "}
                    <li className="relative block px-4 py-2 pl-0 leading-normal border-0 border-t-0 text-sm text-inherit">
                      <strong className="text-slate-700">Reported At </strong>
                      &nbsp;
                      {details && formatDate(details.created_at)}{" "}
                    </li>
                    <li className="relative block px-4 py-2 pl-0 leading-normal border-0 border-t-0 text-sm text-inherit">
                      <strong className="text-slate-700">Reported By </strong>
                      &nbsp;
                      {details && details.created_by}{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
