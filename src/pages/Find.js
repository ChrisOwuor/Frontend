import React, { useState } from "react";

import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import Spinnner from "../components/Spinnner";
export default function Find() {
  const [code, setCode] = useState("");
  const [fpsn, setfPsn] = useState([]);
  const [mpsn, setmPsn] = useState([]);
  const [loading, setLoading] = useState(false);

  const [loaded, setLoaded] = useState(false);

  let { AuthTokens } = useContext(AuthContext);

  const HandleClick = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/find-person/${code}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(AuthTokens.access),
        },
      }
    );
    if (response.ok) {
      let data = await response.json();
      setfPsn(data.matches);
      setmPsn(data.mps);
      setLoaded(true);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  return (
    <div className="h-screen">
      <div className="full flex justify-start px-12">
        <form className="w-3/5 max-[1200px]:w-full ">
          <div className="border-b border-gray-900/10 pb-3">
            <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Enter Missing Track Code
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="name"
                      id="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="KXGD1432W4"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-start gap-x-6">
                <button
                  onClick={(e) => HandleClick(e)}
                  type="submit"
                  disabled={loading}
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {loading ? <Spinnner /> : "Search"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="  w-full">
        {!loaded ? (
          <div className="container p-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
            <p>Your Results Will be displayed here</p>
          </div>
        ) : (
          <div className="w-full">
            {fpsn.length > 0 ? (
              <div className="container p-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
                <div className="left  bg-gray-100 p-6 rounded">
                  <h1>Missing Person image</h1>
                  <div className="h-3/5 w-3/5 object-cover flex rounded-md bg-gray-50">
                    <img
                      src={`http://127.0.0.1:8000${mpsn[0].image}`}
                      alt="img"
                      className="h-full w-full object-cover object-center rounded-md  justify-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    Name : {mpsn[0].first_name}
                  </h3>
                  <p className="age">Age :{mpsn[0].age}</p>
                  {/* <p className="description">Description :{psn[0].description}</p> */}
                </div>
                {fpsn.map((fPsn, index) => (
                  <div key={index} className="left  bg-gray-100 p-6 rounded">
                    <h1>Found Person image</h1>
                    <div className="h-3/5 w-3/5 object-cover flex rounded-md bg-gray-50">
                      <img
                        src={`http://127.0.0.1:8000${fPsn.image}`}
                        alt="img"
                        className="h-full w-full object-cover object-center rounded-md  justify-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">
                      Name : {fPsn.name}
                    </h3>
                    <p className="age">Age :{fPsn.age}</p>
                    <Link to={`/stats/?key=${fPsn.id}`}>
                      {" "}
                      <p className="inline-block rounded-md border border-transparent bg-indigo-600 px-4 py-1 text-center font-medium text-white hover:bg-indigo-700 mt-2">
                        View stats
                      </p>{" "}
                    </Link>{" "}
                  </div>
                ))}
              </div>
            ) : (
              <div className="container">
                <p>No results found</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
