// import React, { useEffect, useState } from "react";
import "../App.css";
import { useContext } from "react";
import ItemsContainer from "../components/ItemsContainer";
import * as React from "react";
import missing from "../assets/missing.jpeg";
import population from "../assets/population.jpeg";
import crime from "../assets/crime.jpg";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function Home() {
  let { user } = useContext(AuthContext);

  return (
    <div className="main">
      <div className="hero flex justify-center w-full  h-max py-14">
        <div className="w-3/5 ml-24 mt-11 max-[1200px]:w-full max-[1200px]:ml-0 max-[1200px]:p-3 ">
          {" "}
          <h1 className="lg:text-6xl  max-[1200px]:text-3xl font-semibold tracking-tight text-white mb-6 ">
            Free . Secure . Nationawide{" "}
          </h1>
          <p
            className={`text-xl text-white font-semibold ${
              user ? "pb-24" : "pb-4"
            } `}
          >
            "With AI by our side, we strive to bring families back together,
            light up communities, and celebrate the journey to healing.
          </p>
          <div
            className={` ${
              user
                ? "hidden"
                : "mt-10 flex items-center justify-center gap-x-6 align-middle text-center"
            }`}
          >
            <Link to="/login">
              {" "}
              <p className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700 mt-8">
                Get started
              </p>{" "}
            </Link>{" "}
            <p className="text-lg font-semibold leading-6 text-white px-8 py-3 inline-block mt-8 ">
              Learn more <span aria-hidden="true">→</span>
            </p>
          </div>
        </div>
      </div>
      <div className="about w-full mt-0 flex justify-center   rounded-md">
        <div className="w-3/5 ml-24 mt-11 max-[1200px]:w-full max-[1200px]:ml-0 max-[1200px]:p-3 ">
          {" "}
          <h1 className="lg:text-3xl text-center  text-3xl font-semibold tracking-tight text-gray-900 mb-6">
            What is FindMe
          </h1>
          <p className="text-lg text-gray-600 font-semibold pb-4">
            FindMe is an AI based recognition system that aims to resolve
            missing persons cases across the nation using AI. <br /> FindMe
            helps investigators match long-term missing persons with identified
            persons who have been reported seen by other individuals to resolve
            cases and bring resolution to families
          </p>
          <p className="text-lg text-gray-600 font-semibold pb-4">
            At any given time, up to 100,000 persons may be reported missing in
            Kenya with as many as 600,000 reported annually.[1] While many of
            these individuals are found alive and well, some become long-term
            missing persons. At the same time, federal, state and local
            medicolegal death investigators are constantly working to provide
            names to thousands of deceased persons nationwide. Over 11,000 sets
            of unidentified human remains were held in medical examiner and
            coroner offices throughout the U.S. according to the 2018 Census of
            Medical Examiners and Coroners.[2]
          </p>
        </div>{" "}
      </div>
      <div className="success w-full mt-4 flex justify-center ">
        <div className="lg:w-3/5  ml-24 mt-11 w-full max-[1200px]:ml-0 \p-3  ">
          {" "}
          <h1 className="lg:text-3xl text-center  text-3xl font-semibold tracking-tight text-gray-900 ">
            Trusted by creators worldwide
          </h1>
          <div className=" p-14   w-full ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8 lg:gap-y-24">
              <div className="found text-center rounded-md bg-gray-200 lg:p-8 px-4 py-2  ">
                <p className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  8,000+
                </p>{" "}
                <p className="text-base leading-7 text-gray-600">
                  {" "}
                  Reported Cases
                </p>
              </div>
              <div className="found text-center rounded-md bg-gray-200 lg:p-8  px-4 py-2 ">
                <p className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  3,000+
                </p>{" "}
                <p className="text-base leading-7 text-gray-600">
                  {" "}
                  Resolved Cases
                </p>
              </div>
              <div className="found text-center bg-gray-200 lg:p-8  px-4 py-2  rounded-md">
                <p className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  5,000
                </p>{" "}
                <p className="text-base leading-7 text-gray-600">
                  {" "}
                  Pending Cases
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="usecases w-full mt-4 mb-4 flex justify-center ">
        <div className="lg:w-4/5   mt-11 w-full  ">
          {" "}
          <div className="">
            <h2 className="lg:text-3xl text-center  text-3xl font-semibold tracking-tight text-gray-900 mb-12">
              Who Uses FindMe
            </h2>
            <p className="mt-2 mb-4 text-lg leading-8 text-gray-600 text-center">
              Learn how top governmental organizations use FindMe to solve
              Missing person cases
            </p>
          </div>
          <div className="w-full  grid place-items-center  grid-cols-1 lg:gap-x-8 gap-y-8  sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="w-4/5 bg-gray-100 rounded-md p-3 ">
              <img
                src={missing}
                className="w-full h-48 rounded-sm object-cover"
                alt="..."
              />
              <div className="p-4">
                <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
                  Missing Person Identification
                </h5>
                <p>
                  Users can upload an image of a missing person, and the face
                  recognition system will search a database to identify
                  potential matches with found persons.
                </p>
              </div>
            </div>
            <div className="w-4/5 bg-gray-100 rounded-md p-3  ">
              <img
                src={crime}
                className="w-full h-48 rounded-sm object-cover"
                alt="..."
              />
              <div className="p-4">
                <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
                  Found Person Matching
                </h5>
                <p className="pb-3">
                  Individuals who have found a lost person can upload their
                  images, and the system will attempt to match them with the
                  database of missing persons.
                </p>
              </div>
            </div>{" "}
            <div className="w-4/5 bg-gray-100 rounded-md p-3  ">
              <img
                src={population}
                className="w-full h-48 rounded-sm object-cover"
                alt="..."
              />
              <div className="p-4">
                <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
                  Cross-Referencing with Law Enforcement Databases
                </h5>
                <p>
                  The application integrates with law enforcement databases,
                  allowing users to cross-reference missing person reports with
                  official records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white">
        <ItemsContainer />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
        >
          <span>© 2023 Appy. All rights reserved.</span>
          <span>Terms · Privacy Policy</span>
        </div>
      </footer>
    </div>
  );
}
