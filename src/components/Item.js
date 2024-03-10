import React from "react";

const Item = ({ Links, title }) => {
  return (
    <div className="w-full  ">
      <h1 className="mb-1 font-semibold text-center">{title}</h1>
      <ul className="flex flex-col items-center ">
        {Links.map((link) => (
          <li key={link.name}>
            <a
              className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6"
              href={link.link}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Item;
