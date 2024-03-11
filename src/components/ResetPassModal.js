import { useState } from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import Otp from "./Otp";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",
  p: 4,
};

export default function ResetPassModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = useState("");
  const [emailData, setEmailData] = useState();
  const [emailError, setEmailError] = useState();

  const [user_loading, setUser_loading] = useState(false);
  const [email_loading, setEmail_loading] = useState(false);

  const checkEmail = (e) => {
    e.preventDefault();
    const body = {
      email: email,
    };
    fetch(`${process.env.REACT_APP_API_URL}/auth/profile/forgot/passkey/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(data.msg);
          });
        }
      })
      .then((data) => {
        setEmailData(data);
      })
      .catch((err) => setEmailError(err.message));
  };

  return (
    <div>
      <p
        onClick={handleOpen}
        class="p-2 ms-2 text-sm font-medium text-blue-700 cursor-pointer "
      >
        Forgot password
      </p>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="lg:w-2/5 w-full h-full lg:h-4/5 rounded-lg outline-none"
        >
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            This is a success Alert with an encouraging title.
          </Alert>
          <div
            onClick={handleClose}
            className=" flex justify-end rounded-lg   "
          >
            <p className="hover:bg-blue-700 hover:text-white rounded-sm">
              {" "}
              <CloseIcon />
            </p>
          </div>
          <h1 className="text-3xl text-center font-semibold mb-4">
            Password Reset
          </h1>
          {!emailData && (
            <>
              <p class="text-gray-600 text-center">
                Just type in your email and we will send you a code to reset
                your password!
              </p>
              <div className="mt-6 flex flex-col items-center">
                <form
                  onSubmit={checkEmail}
                  className="items-center justify-center sm:flex"
                >
                  <input
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="text-gray-500 w-max p-3 rounded-md border outline-none "
                  />
                  <button className="w-max mt-3 px-5 py-3 rounded-md text-white bg-indigo-600  outline-none hover:bg-indigo-500   sm:mt-0 sm:ml-3 sm:w-auto">
                    Get code
                  </button>
                </form>
              </div>
            </>
          )}
          {emailData && <Otp />}
          <div className="mt-6 flex flex-col items-center">
            <p className="text-gray-600 text-center ">
              Enter your new password
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="items-center justify-center sm:flex"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="text-gray-500 w-max p-3 rounded-md border outline-none "
              />
              <button className="w-max mt-3 px-5 py-3 rounded-md text-white bg-indigo-600  outline-none hover:bg-indigo-500   sm:mt-0 sm:ml-3 sm:w-auto">
                Reset Password
              </button>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
