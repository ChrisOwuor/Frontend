import * as React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  p: 1,
};

export default function SuccessModal({ msg, setShowAlert, code }) {
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="lg:w-2/5 lg:h-max w-4/5 h-max rounded-lg relative p-4 text-center bg-white  shadow dark:bg-gray-800 sm:p-12"
        >
          <div>
            <p>{code}</p>
          </div>
          <div className="svgs">
            {code === "Success" ? (
              <div class="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                <svg
                  aria-hidden="true"
                  class="w-8 h-8 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Success</span>
              </div>
            ) : (
              <div class="w-12 h-12 rounded-full  bg-red-100  p-2 flex items-center justify-center mx-auto mb-3.5">
                <svg
                  class="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
                <span class="sr-only">Success</span>
              </div>
            )}
          </div>

          <p class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            {msg}
          </p>
          <button
            onClick={(e) => setShowAlert(false)}
            data-modal-toggle="successModal"
            type="button"
            class="py-2 px-3 text-sm font-medium text-center  rounded-lg bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Close
          </button>
        </Box>
      </Modal>
    </div>
  );
}
