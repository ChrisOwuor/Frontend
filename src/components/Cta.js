import { Link } from "react-router-dom";

export default function Cta(){
  return (
    <section className="py-16 relative bg-blue-600">
      <div className="relative z-10  max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
        <div className="max-w-xl md:mx-auto">
          <h1 className="text-white text-3xl font-semibold sm:text-4xl">
            Bringing Loved Ones Home
          </h1>
          <p className="text-white text-xl font-semibold sm:text-xl">
            Join Our Community in the Search for Missing Persons
          </p>
          <p className="text-blue-100 mt-3">
             Be a part of the
            solution today and become a crucial member of our
            community dedicated to finding missing individuals. With
            cutting-edge technology and a compassionate network, we're
            empowering users like you to make a real impact. Your help could be
            the key to reuniting families and bringing solace in times of
            uncertainty.
          </p>
        </div>
        <div className="mt-4">
          <Link
            to="/"
            className="inline-block py-2 px-4 text-gray-800 font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-full"
          >
            Join the Search
          </Link>
        </div>
      </div>
      <div
        className="absolute top-0 w-full  h-full"
        style={{
          background:
            "linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)",
        }}
      ></div>
    </section>
  );
};
