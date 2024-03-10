import {  useState } from "react";

import { NavLink, Outlet } from "react-router-dom";

import StickyNote2RoundedIcon from "@mui/icons-material/StickyNote2Rounded";
import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import PersonSearchRoundedIcon from "@mui/icons-material/PersonSearchRounded";

const subCategories = [
  { name: "Add Missing Person", href: "/services/add_person" ,icon :<PersonAddAlt1RoundedIcon/>},
  { name: "Find Missing Person", href: "/services/find_person",icon:<PersonSearchRoundedIcon/> },
  { name: "Report A found person", href: "/services/report_person",icon:<StickyNote2RoundedIcon/> },
];

export default function Example() {
  const [service, setService] = useState("Services");
  return (
    <div className="main_cont w-full flex justify-center  h-[calc(100vh-60px)]  ">
      <main className="lg:w-4/5 w-full h-full pt-3 ">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4  h-full ">
          <div className="hidden lg:block ">
            <div className=" top_div flex items-top  justify-between  mb-4 ">
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                {service}
              </h1>
            </div>
            <ul className="space-y-6  border-gray-200 pb-6 text-sm font-medium text-gray-900 ">
              {subCategories.map((category) => (
                <li key={category.name} className="flex ">
                  {category.icon}
                  <NavLink
                    to={category.href}
                    onClick={() => setService(category.name)}
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
