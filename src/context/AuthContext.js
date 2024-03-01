import { createContext, useState, useEffect, useCallback } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [loading, setLoading] = useState(true);

  let navigate = useNavigate();

  const [AuthTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("Authtokens")
      ? JSON.parse(localStorage.getItem("Authtokens"))
      : null
  );

  let [user, setUser] = useState(() =>
    localStorage.getItem("Authtokens")
      ? jwtDecode(localStorage.getItem("Authtokens"))
      : null
  );
  const [email, setEmail] = useState(null);
  const [password, setPass] = useState(null);
  const [load, setload] = useState(false);
  const body = {
    email: email,
    password: password,
  };
  let loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/auth/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    let data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setload(true);
      // store user info
      setUser(jwtDecode(data.access));
      // store tokens in localstorage
      localStorage.setItem("Authtokens", JSON.stringify(data));
      navigate("/");
    } else {
      alert("something went wrong");
    }
  };

  let logoutUser = useCallback(() => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("Authtokens");
    navigate("/login");
  }, [navigate]);
  useEffect(() => {
    if (loading) {
      let updateToken = async () => {
        let response = await fetch(
          "http://127.0.0.1:8000/auth/token/refresh/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ refresh: AuthTokens?.refresh }),
          }
        );

        let data = await response.json();

        if (response.status === 200) {
          setAuthTokens(data);
          setUser(jwtDecode(data.access));
          localStorage.setItem("Authtokens", JSON.stringify(data));
        } else {
          logoutUser();
        }

        if (loading) {
          setLoading(false);
        }
      };
      updateToken();
    }

    let four = 1000 * 60 * 4;

    let interval = setInterval(() => {
      if (AuthTokens) {
        let updateToken = async () => {
          let response = await fetch(
            "http://127.0.0.1:8000/auth/token/refresh/",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ refresh: AuthTokens?.refresh }),
            }
          );

          let data = await response.json();

          if (response.status === 200) {
            setAuthTokens(data);
            setUser(jwtDecode(data.access));
            localStorage.setItem("Authtokens", JSON.stringify(data));
          } else {
            logoutUser();
          }

          if (loading) {
            setLoading(false);
          }
        };
        updateToken();
      }
    }, four);
    return () => clearInterval(interval);
  }, [AuthTokens, loading, logoutUser]);

  let contextData = {
    user: user,
    logoutUser: logoutUser,
    loginUser: loginUser,
    setEmail: setEmail,
    setPass: setPass,
    AuthTokens: AuthTokens,
    load: load,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {" "}
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
