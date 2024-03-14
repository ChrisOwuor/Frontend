import { useState } from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import Otp from "./Otp";

import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import Alerts from "./Alert";
import AlerttError from "./AlerttError";
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
  const [emailOpen, setEmailOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [otpRes, setOtpRes] = useState("");
  const [otpUser, setOtpUser] = useState("");
  const [otpError, setOtpError] = useState("");
  const [newPass, setNewPass] = useState("");
  const [passRes, setPassRes] = useState("");
  const [passErr, setPassErr] = useState("");

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
      .then(async (res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          const data = await res.json();
          throw new Error(data.msg);
        }
      })
      .then((data) => {
        setEmailData(data);
        setEmailOpen(true);
        setTimeout(() => {
          setEmailOpen(false);
        }, 2000);
      })
      .catch((err) => {
        setEmailError(err.message);
        setErrorOpen(true);
        setTimeout(() => {
          setErrorOpen(false);
        }, 2000);
      });
  };
  const getOtp = async (data) => {
    const body = {
      code: data,
    };
    let res = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/profile/verify/passkey/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    if (res.status === 200) {
      let res_data = await res.json();
      setOtpRes(res_data.msg);
      setOtpUser(res_data.user);
      setOtpError("");
    } else {
      let res_data = await res.json();
      setOtpError(res_data.msg);
      setOtpRes("");
    }
  };
  const resetPass = async (e, user) => {
    e.preventDefault();
    const body = {
      password: newPass,
      code: emailData.code,
    };
    let res = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/profile/change/passkey/${user}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    if (res.status === 200) {
      let res_data = await res.json();
      setPassRes(res_data);
      setPassErr("");
    } else {
      let res_data = await res.json();
      setPassErr(res_data);
      setPassRes("");
    }
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
          <div
            onClick={handleClose}
            className=" flex justify-end rounded-lg   "
          >
            <p className="hover:bg-blue-700 hover:text-white rounded-sm">
              {" "}
              <CloseIcon />
            </p>
          </div>
          {emailOpen && (
            <Alerts msg="An email has been sent with the otp code " />
          )}{" "}
          {errorOpen && <AlerttError msg={emailError} />}
          {passRes && <Alerts msg={passRes.msg} />}
          {passErr && <AlerttError msg={passErr.msg} />}
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
          {emailData && <Otp getOtp={getOtp} otpRes={otpRes} />}
          {otpRes && (
            <div className="mt-6 flex flex-col items-center">
              <p className="text-gray-600 text-center ">{otpRes}</p>
              <form
                onSubmit={(e) => resetPass(e, otpUser)}
                className="items-center justify-center sm:flex"
              >
                <input
                  type="password"
                  onChange={(e) => setNewPass(e.target.value)}
                  placeholder="Enter your new password"
                  className="text-gray-500 w-max p-3 rounded-md border outline-none "
                />
                <button className="w-max mt-3 px-5 py-3 rounded-md text-white bg-indigo-600  outline-none hover:bg-indigo-500   sm:mt-0 sm:ml-3 sm:w-auto">
                  Reset Password
                </button>
              </form>
            </div>
          )}
          {otpError ? (
            <p className="text-gray-600 text-center ">{otpError}</p>
          ) : (
            <p></p>
          )}
        </Box>
      </Modal>
    </div>
  );
}
