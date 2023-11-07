import React, { useEffect } from "react";

import { useContext } from "react";
import AuthContext from "../context/AuthContext";
export default function Single() {
  let { AuthTokens } = useContext(AuthContext);

  const ids = new URLSearchParams(document.location.search).get("key");
  // const [details, setdetails] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/details/${ids}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(AuthTokens.access),
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [AuthTokens.access, ids]);

  return <div>displaying profile for {ids}</div>;
}
