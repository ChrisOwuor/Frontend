import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function Missing() {
  let [notes, setNotes] = useState([]);
  let { AuthTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch("http://localhost:8000/api/missing-person/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(AuthTokens.access),
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      setNotes(data);
      console.log(notes);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };
  return (
    <ul className="divide-y divide-gray-100 w-full">
      {notes.map((person, index) => (
        <li key={index} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src={`http://127.0.0.1:8000${person.image}`}
              alt="images"
            />
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

              <Link to={`/single/?key=${person.trackCode}`}>
                <p className="hover:bg-slate-700  bg-slate-500 w-max rounded px-1">
                  view more
                </p>
              </Link>
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
