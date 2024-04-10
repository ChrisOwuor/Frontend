import React, { useEffect, useState, useContext } from "react";

import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
export default function Case() {
  let [notes, setNotes] = useState([]);
  let { AuthTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    let getNotes = async () => {
      let response = await fetch(
        `${process.env.REACT_APP_API_URL}/app/stats/reports/cases/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + String(AuthTokens.access),
          },
        }
      );
      let data = await response.json();

      if (response.status === 200) {
        setNotes(data);
      } else if (response.statusText === "Unauthorized") {
        logoutUser();
      }
    };
    getNotes();
  }, [AuthTokens.access, logoutUser]);
  return (
    <div class=" overflow-x-auto ">
      <table class="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs  text-gray-700 uppercase  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="">
            <th scope="col" class="px-6 py-3">
              Case Number
            </th>
            <th scope="col" class="px-6 py-3">
              Date
            </th>
            <th scope="col" class="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {notes &&
            notes.map((cs, index) => (
              <tr
                key={index}
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td class="px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <Link to={`/dashboard/cases/${cs.case_number}`}>
                    {cs.case_number}
                  </Link>
                </td>
                <td class="px-6 py-2">{cs.type}</td>
                <td class="px-6 py-2">
                  {" "}
                  <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    {cs.status}
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
