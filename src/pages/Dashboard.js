import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { NavLink, Outlet } from "react-router-dom";

const subCategories = [
  { name: "Missing Persons", href: "/dashboard/missing" },
  { name: "Found Persons", href: "/dashboard/seen" },
];

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-zinc-300 via-white to-zinc-400">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Dashboard
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul className="px-2 py-3 font-medium text-gray-900">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <NavLink to={category.href} className="block px-2 py-3">
                            {category.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="main_cont w-full flex justify-center bg-gradient-to-b from-zinc-300 via-white to-zinc-100 ">
          <main className="lg:w-4/5 w-full px-4 sm:px-6 lg:px-8  h-full ">
            <div className=" top_div flex items-baseline justify-between border-b border-gray-200 pb-6 pt-8 lg:pt-12">
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                My Dashboard{" "}
              </h1>

              <div className="flex items-center">
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Mobile Menu</span>
                  <Bars3Icon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section
              aria-labelledby="products-heading"
              className="pb-24 pt-6  "
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 ">
                {/* Filters */}
                <form className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>
                  <ul className="space-y-6  border-gray-200 pb-6 text-sm font-medium text-gray-900">
                    {subCategories.map((category) => (
                      <li key={category.name}>
                        <NavLink
                          to={category.href}
                          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                        >
                          {category.name} <span aria-hidden="true">&rarr;</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </form>

                {/* Product grid */}
                <div className="lg:col-span-3  lg:border-l-2 p-4 ">
                  <Outlet />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
