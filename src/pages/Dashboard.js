import { useState } from "react";

import { NavLink, Outlet } from "react-router-dom";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import CoPresentRoundedIcon from "@mui/icons-material/CoPresentRounded";
import PersonPinCircleRoundedIcon from "@mui/icons-material/PersonPinCircleRounded";
import TextSnippetRoundedIcon from "@mui/icons-material/TextSnippetRounded";
import { MapIcon } from "@heroicons/react/24/solid";

const subCategories = [
  {
    name: "Missing Persons",
    href: "/dashboard/missing",
    icon: <CoPresentRoundedIcon />,
  },
  {
    name: "Found Persons",
    href: "/dashboard/seen",
    icon: <PersonPinCircleRoundedIcon />,
  },
  {
    name: "Statistics",
    href: "/dashboard/statistics",
    icon: <AssessmentRoundedIcon />,
  },
  { name: "Cases", href: "/dashboard/cases/", icon: <TextSnippetRoundedIcon /> },
  {
    name: "View In Map",
    href: "/dashboard/map/view",
    icon: <MapIcon height={25} />,
  },
];

export default function Example() {
  const [dash, setDash] = useState("Dashboard");
  return (
    <div className="main_cont w-full flex justify-center  h-[calc(100vh-60px)]  ">
      <main className="lg:w-4/5 w-full h-full pt-3 ">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4  h-full ">
          <div className="hidden lg:block ">
            <div className=" top_div flex items-top  justify-between  mb-4 ">
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                {dash}
              </h1>
            </div>
            <ul className="space-y-6  border-gray-200 pb-6 text-sm font-medium text-gray-900 ">
              {subCategories.map((category) => (
                <li
                  key={category.name}
                  className="flex bg-gray-100 rounded-lg pl-2"
                >
                  {category.icon}
                  <NavLink
                    to={category.href}
                    onClick={() => setDash(category.name)}
                    className="flex-none   px-3.5 py-1 text-sm font-semibold text-gray-600 hover:text-gray-500  "
                  >
                    {category.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3  overflow-y-scroll mb-4 px-2 ">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
