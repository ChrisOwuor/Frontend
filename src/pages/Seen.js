import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function Seen() {
  let [notes, setNotes] = useState([]);
  let { AuthTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    let getNotes = async () => {
      let response = await fetch("http://localhost:8000/api/found-person/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(AuthTokens.access),
        },
      });
      let data = await response.json();

      if (response.status === 200) {
        setNotes(data);
      } else if (response.statusText === "Unauthorized") {
        logoutUser();
      }
    };
    getNotes();
  }, [AuthTokens.access, logoutUser, notes]);

  return (
    <ul className="divide-y divide-gray-100 w-full h-screen">
      {notes.map((person, index) => (
        <li
          key={index}
          className="flex justify-between gap-x-6 py-5 mb-3  rounded-md px-4 bg-gray-200"
        >
          <div className="flex min-w-0 gap-x-4 ">
            <div className="img h-24 w-24">
              {" "}
              <img
                className="h-24 w-24 object-cover flex-none rounded-md bg-gray-50"
                src={`http://127.0.0.1:8000${person.image}`}
                alt="images"
              />
            </div>
            <div className="min-w-0 flex-auto">
              <div className="flex gap-2">
                {" "}
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  Name :{person.first_name}
                </p>
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {person.middle_name}
                </p>
              </div>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                NickName :{person.last_name}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                Last Seen :{person.location}
              </p>

              <NavLink to={`/details/?key=${person.id}`}>
                <p className="hover:bg-slate-200 mt-1 truncate text-xs leading-5  bg-slate-300 w-max rounded px-1">
                  view more
                </p>
              </NavLink>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">
              {" "}
              Gender :{person.gender}
            </p>
            <p className="text-sm leading-6 text-gray-900">
              {" "}
              Posted By :{person.created_by}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
