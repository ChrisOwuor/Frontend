import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import AuthContext from "../context/AuthContext";

import Modal from "@mui/material/Modal";
import Spinnner from "./Spinnner";
import { Link } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNotes(null);
  };
  let [notes, setNotes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  let { AuthTokens, logoutUser } = useContext(AuthContext);
  const HandleOnChange = (e) => {
    setSearchVal(e.target.value);
  };
  const HandleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    let response = await fetch(
      `${process.env.REACT_APP_API_URL}/app/stats/search/case/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(AuthTokens.access),
        },
        body: JSON.stringify({ searchVal }),
      }
    );

    let data = await response.json();

    if (response.status === 200) {
      setNotes(data);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else if (response.statusText === "Unauthorized") {
      setLoading(false);
      logoutUser();
    }
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        type="submit"
        class="p-2 ms-2 text-sm font-medium text-white "
      >
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 fill-gray-900 hover:fill-gray-900"
        >
          <path d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"></path>
        </svg>
        <span class="sr-only">Search</span>
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="lg:w-2/5 w-4/5 h-4/5 rounded-lg">
          <form class="max-w-md mx-auto" onSubmit={HandleSearch}>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                onChange={HandleOnChange}
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
                placeholder="Search cases"
                required
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
          <div className="results max-w-md mx-auto p-2 bg-slate-200 mt-3 rounded-lg">
            {loading ? (
              <Spinnner />
            ) : (
              <>
                {notes ? (
                  <Link
                    to={`/dashboard/cases/${notes.case_number}`}
                    onClick={handleClose}
                  >
                    <div className="cursor-pointer">
                      <p>
                        <span className=" font-semibold">Case Number</span> :{" "}
                        {notes.case_number}
                      </p>
                      <p>
                        {" "}
                        <span className=" font-semibold">Type :</span>{" "}
                        {notes.type}
                      </p>
                      <p>
                        <span className=" font-semibold">Status :</span>{" "}
                        {notes.status}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <p>Results will show here</p>
                )}
              </>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
