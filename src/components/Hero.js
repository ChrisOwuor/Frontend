import { Link } from "react-router-dom";

export default function Hero() {

  return (
    <>
      <section className="py-28">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h1 className="text-sm text-indigo-600 font-medium">
              Over 200 people reunited with their lost ones
            </h1>
            <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
              We help reunite lost people to their loved ones
            </h2>
            <p>
              Help bring families back together with our Missing Persons App.
              Every person deserves to be found and reunited with their loved
              ones.
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <Link
                to="/"
                className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
              >
                Start Searching
              </Link>
              <Link
                to="/"
                className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
              >
                Report a Missing Person
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <img
              src="https://images.pexels.com/photos/935835/pexels-photo-935835.jpeg?auto=compress&cs=tinysrgb&w=600"
              className=" md:rounded-tl-[108px]"
              alt=""
            />
          </div>
        </div>
        <div className="mt-14 px-4 md:px-8">
          <p className="text-center text-sm text-gray-700 font-semibold">
            Trusted by the best companies
          </p>
          <div className="flex lg:justify-center lg:items-center items-center gap-x-12 gap-y-6 mt-6  flex-wrap flex-col lg:flex-row  ">
            <div className="flex items-center lg:w-max  w-3/5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcnlLpYNfhh02AeP7q0p9QsDKNLAvDomyPog&usqp=CAU"
                alt="gok"
                className="w-12"
              />
              <p className=" text-sm text-gray-700 font-semibold">
                Government Of Kenya
              </p>
            </div>
            <div className="flex items-center lg:w-max w-3/5">
              <img
                src="https://pbs.twimg.com/profile_images/1149629691512287232/W7hMa8OE_400x400.jpg"
                alt="kp"
                className="w-12"
              />
              <p className=" text-sm text-gray-700 font-semibold">
                National Police Service
              </p>
            </div>
            <div className="flex items-center  lg:w-max w-3/5 ">
              <img
                src="https://www.opportunitiesforafricans.com/wp-content/uploads/2015/08/unicef-neti-2015.png"
                alt="kp"
                className="w-12"
              />
              <p className=" text-sm text-gray-700 font-semibold">
                UNICEF Kenya
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
