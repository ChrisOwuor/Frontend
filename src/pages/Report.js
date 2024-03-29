import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Alert } from "@mui/material";
import MapModal from "../components/MapModal";

export default function Addperson() {
  const [first_name, setfName] = useState("");
  const [middle_name, setmName] = useState("");
  const [last_name, setlame] = useState("");
  const [nick_name, setnName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [hair_color, sethair_color] = useState("");
  const [county, setcounty] = useState("");
  const [last_seen, setlast_seen] = useState("");
  const [eye_color, seteye_color] = useState("");
  const [gender, setgender] = useState("");

  const handleImageChange = async (e) => {
    const selectedImage = await e.target.files[0];
    setImage(selectedImage);
  };
  const formData = new FormData();
  formData.append("first_name", first_name);
  formData.append("middle_name", middle_name);
  formData.append("last_name", last_name);
  formData.append("nick_name", nick_name);
  formData.append("county", county);
  formData.append("last_seen", last_seen);
  formData.append("eye_color", eye_color);
  formData.append("hair_color", hair_color);
  formData.append("age", age);
  formData.append("location", location);
  formData.append("description", description);
  formData.append("image", image);
  formData.append("gender", gender);

  let { AuthTokens } = useContext(AuthContext);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const HandleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    let res = await fetch(`${process.env.REACT_APP_API_URL}/api/add-missing/`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + String(AuthTokens.access),
      },
      body: formData,
    });

    if (res.status === 201) {
      setAlertMessage("Successfully added a person.");
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    } else {
      setAlertMessage("Oops! Something went wrong. Please try again.");
      setShowAlert(true);
    }

    setIsLoading(false);
  };

  return (
    <form className="px-6">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-xl font-semibold leading-7 text-gray-900 ">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Please Provide accurate information{" "}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Provide the legal name{" "}
              </p>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setfName(e.target.value);
                  }}
                  type="text"
                  name="first_name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block  px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="middle-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Middle Name
              </label>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Can be left blank (optional)
              </p>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setmName(e.target.value);
                  }}
                  type="text"
                  name="middle_name"
                  id="middle-name"
                  autoComplete="family-name"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="last_name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Provide the legal last name or family name
              </p>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setlame(e.target.value);
                  }}
                  id="last_name"
                  name="last_name"
                  type="text"
                  autoComplete="email"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="nick_name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nick Name
              </label>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Can be left blank (optional)
              </p>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setnName(e.target.value);
                  }}
                  type="text"
                  name="nick_name"
                  id="nick_name"
                  autoComplete="family-name"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3 sm:col-start-1">
              <label
                htmlFor="age"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Age
              </label>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Provide Age at the time you were last in contact
              </p>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  type="number"
                  name="age"
                  id="age"
                  autoComplete="age"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b-2  pb-12">
          <div className="mt-10 space-y-10">
            <fieldset>
              <h1 className="text-xl font-semibold leading-6 text-gray-900">
                Gender Information{" "}
              </h1>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Provide accurate infromation on the gender of the missing person
              </p>

              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    value="Male"
                    onChange={(e) => {
                      setgender(e.target.value);
                    }}
                    name="gender"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-everything"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Male
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    value="Female"
                    onChange={(e) => {
                      setgender(e.target.value);
                    }}
                    name="gender"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Female
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    value="Don't disclose"
                    onChange={(e) => {
                      setgender(e.target.value);
                    }}
                    name="gender"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-nothing"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Don't Disclose
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="physical border-b-2 pb-4 ">
          <h1 className="text-xl font-semibold"> Physical information</h1>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Provide accurate information about the physical appearance of the
            person
          </p>
          <div className="details mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="eye_color"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Eye Color
              </label>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Provide the eye color
              </p>
              <div className="mt-2">
                <select
                  className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 py-1.5 sm:max-w-md w-full"
                  value={eye_color}
                  onChange={(e) => {
                    seteye_color(e.target.value);
                  }}
                >
                  <option value="none">-- Choose eye color --</option>
                  <option value="red">Red</option>
                  <option value="gray">Gray</option>
                  <option value="brown">Brown</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="hair_color"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Hair Color{" "}
              </label>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Select the hair color{" "}
              </p>
              <div className="mt-2">
                <select
                  className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 py-1.5 sm:max-w-md w-full"
                  value={hair_color}
                  onChange={(e) => {
                    sethair_color(e.target.value);
                  }}
                >
                  <option value="none">-- Choose hair color --</option>
                  <option value="brown">Brown</option>
                  <option value="Black">Black</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-full">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Provide the full description of the person when you were last in
                contact with them
              </p>
              <div className="mt-2">
                <textarea
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  id="description"
                  name="description"
                  rows="3"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                <span>Photo</span>{" "}
                <UserCircleIcon
                  className="h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                {" "}
                <input
                  type="file"
                  id="photo"
                  name="image"
                  onChange={handleImageChange}
                  className=" cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="locations ">
          <h1 className="font-semibold text-xl">Location Information</h1>
          <div className="location_inputs mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                County
              </label>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Provide county of origin
              </p>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setcounty(e.target.value);
                  }}
                  type="text"
                  name="county"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="last_seen"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Date Last Seen
              </label>{" "}
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Provide the date you were last in contact
              </p>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setlast_seen(e.target.value);
                  }}
                  type="date"
                  name="last_seen"
                  id="last_seen"
                  autoComplete="address-level1"
                  className="block w-full px-2 rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>{" "}
            <div className="col-span-3">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Location Last Seen
              </label>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Provide the location last seen
              </p>

              <MapModal setLocation={setLocation} />
              {location && (
                <div>
                  <h1 className="font-semibold">Location Details</h1>
                  <div className="text-gray-500">
                    <p>Latitude: {location.lat}</p>
                    <p>Longitude: {location.lng}</p>
                    <p>Name: {location.address}</p>
                  </div>
                </div>
              )}
              <div className="mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          onClick={(e) => HandleSubmit(e)}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        {showAlert && (
          <Alert onClose={() => setShowAlert(false)}>{alertMessage}</Alert>
        )}
      </div>
    </form>
  );
}
