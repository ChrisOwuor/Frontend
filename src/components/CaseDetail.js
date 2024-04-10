import { useParams } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";

import AuthContext from "../context/AuthContext";
export default function CaseDetail() {
  let { id } = useParams();

  let [notes, setNotes] = useState({});
  let { AuthTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    let getNotes = async () => {
      let response = await fetch(
        `${process.env.REACT_APP_API_URL}/app/stats/reports/cases/${id}/`,
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
  }, [AuthTokens.access, id, logoutUser]);
  return (
    <>
      <div className="wrapper lg:mt-12">
        <div className="titles  bg-gray-100 shadow-md shadow-white rounded-lg px-6 py-2">
          <h1 className="text-lg font-semibold underline ">Case Details</h1>
          <ol className="pl-4  ">
            <li className="">
              <span className="font-semibold"> Case Number:</span>{" "}
              <span>{notes && notes.case_number}</span>
            </li>
            <li className="">
              <span className="font-semibold">Type:</span>
              {notes && notes.type}
            </li>
            <li>
              <span className="font-semibold">Status:</span>
              {notes && notes.status}{" "}
            </li>
            <li>
              <span className="font-semibold">Person:</span>
              {notes && notes.name}
            </li>
            <li>
              <span className="font-semibold">Created on</span>:
              {notes && notes.created_at}
            </li>
          </ol>
        </div>
        <div className="description px-6 py-2">
          <h1 className="text-lg font-semibold underline ">Case updates</h1>
          <div className="updates_wrapper">
            {notes && notes.remarks && notes.remarks.length === 0 ? (
              <div>
                <p>No remarks</p>
              </div>
            ) : (
              <ol className="pl-4 list-decimal">
                {" "}
                {notes &&
                  notes.remarks &&
                  notes.remarks.map((note, index) => (
                    <li key={note.id} className="updates pl-4 border-b-2 ">
                      <p>
                        <span className="font-semibold">Remarks:</span>
                        {note.remarks}
                      </p>
                      <p>
                        <span className="font-semibold">remarks by:</span>
                        {note.created_by_name}
                      </p>
                      <p>
                        <span className="font-semibold">remarks on:</span>
                        {note.created_at}
                      </p>
                    </li>
                  ))}
              </ol>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
