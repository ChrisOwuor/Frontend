import * as React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import Places from "./Map";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  p: 1,
};

export default function MapModal({ setLocation }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <p
        onClick={handleOpen}
        className="mt-1 text-sm font-semibold cursor-pointer leading-6 text-blue-700 bg-gray-400 w-max p-2 rounded-lg"
      >
        Pick Location Here
      </p>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="w-4/5 h-4/5 rounded-lg">
          <div class="flex items-center justify-between  rounded-t dark:border-gray-600">
            <button
              onClick={handleClose}
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="static-modal"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div>
            <Places handleClose={handleClose} setLocation={setLocation} />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
