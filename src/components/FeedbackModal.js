import * as React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  p: 4,
};

export default function FeedbackModal({
  HandleNotifications,
  setRemarks,
  setMessage,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <button
        onClick={handleOpen}
        type="submit"
        className="rounded-md py-1 px-2 bg-gray-600 text-white lg:w-max w-full hover:bg-gray-700"
      >
        Notify Search Results
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="lg:w-2/5 w-4/5 h-max rounded-lg">
          <div class="relative  w-full h-full">
            <div class="relative  rounded-lg dark:bg-gray-700">
              <div class="flex items-center justify-between  md:px-2 rounded-t dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Results Notification
                </h3>
                <button
                  type="button"
                  onClick={handleClose}
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="crud-modal"
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
              <form class="p-2 md:p-2" onSubmit={HandleNotifications}>
                <div class="grid lg:gap-4 gap-0 mb-4 grid-cols-2">
                  <div class="col-span-2">
                    <textarea
                      onChange={(e) => setMessage(e.target.value)}
                      id="description"
                      rows="3"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write the notifications nessage here"
                      required
                    ></textarea>
                  </div>
                  <div class="col-span-2">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Remarks
                    </label>
                    <textarea
                      onChange={(e) => setRemarks(e.target.value)}
                      rows="3"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write Search remarks here"
                      required
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Send Notification
                </button>
              </form>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
