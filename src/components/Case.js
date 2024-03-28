import React from "react";

export default function Case() {
  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Case Number
            </th>
            <th scope="col" class="px-6 py-3">
              Date
            </th>
            <th scope="col" class="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Case #1
            </td>
            <td class="px-6 py-2">2023-01-15</td>
            <td class="px-6 py-2">
              {" "}
              <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                Open
              </span>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Case #2
            </td>
            <td class="px-6 py-2">2023-02-20</td>
            <td class="px-6 py-2">
              {" "}
              <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                Closed
              </span>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Case #1
            </td>
            <td class="px-6 py-2">2023-01-15</td>
            <td class="px-6 py-2">
              {" "}
              <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                Open
              </span>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Case #2
            </td>
            <td class="px-6 py-2">2023-02-20</td>
            <td class="px-6 py-2">
              {" "}
              <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                Closed
              </span>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Case #3
            </td>
            <td class="px-6 py-2">2023-03-10</td>
            <td class="px-6 py-2">
              {" "}
              <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                Open
              </span>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Case #4
            </td>
            <td class="px-6 py-2">2023-04-05</td>
            <td class="px-6 py-2">
              {" "}
              <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                Open
              </span>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Case #5
            </td>
            <td class="px-6 py-2">2023-05-18</td>
            <td class="px-6 py-2">
              {" "}
              <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                Open
              </span>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Case #6
            </td>
            <td class="px-6 py-2">2023-06-22</td>
            <td class="px-6 py-2">
              {" "}
              <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                Closed
              </span>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Case #7
            </td>
            <td class="px-6 py-2">2023-07-08</td>
            <td class="px-6 py-2">
              {" "}
              <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                Closed
              </span>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Case #8
            </td>
            <td class="px-6 py-2">2023-08-30</td>
            <td class="px-6 py-2">
              {" "}
              <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                Open
              </span>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Case #9
            </td>
            <td class="px-6 py-2">2023-09-12</td>
            <td class="px-6 py-2">
              {" "}
              <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                Open
              </span>
            </td>
          </tr>
          <tr class="bg-white dark:bg-gray-800">
            <td class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Case #10
            </td>
            <td class="px-6 py-2">2023-10-25</td>
            <td class="px-6 py-2">
              <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                Closed
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
