import React, { useEffect, useState, useContext } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import AuthContext from "../context/AuthContext";

const containerStyle = {
  width: "100%",
  height: "80vh",
};

const options = {
  mapTypeControl: false,
  streetViewControl: false,
};


function MapView({ setLocation, handleClose }) {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [zoom, setZoom] = useState(12);
  const [address, setAddress] = useState("");

  const [selectedMarker, setSelectedMarker] = useState(null);

  const center = {
    lat: lat || -1.2908896657605886,
    lng: lng || 36.8222394389844,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  const HandleLocationSelection = (e) => {
    e.preventDefault();

    setLocation({ lat, lng, address });
    handleClose();
  };

  let [markers, setMarkers] = useState([]);
  let { AuthTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    let getNotes = async () => {
      let response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/locations/all`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + String(AuthTokens.access),
          },
        }
      );
      let data = await response.json();

      if (response.status === 200) {
        setMarkers(data.persons);
      } else if (response.statusText === "Unauthorized") {
        logoutUser();
      }
    };

    getNotes();
  }, [AuthTokens.access, logoutUser]);
  return (
    <div className="w-full h-full mx-auto  ">
      <h1 className="font-semibold text-xl text-center text-gray-600">
        Missing And found person distributon
      </h1>
      {isLoaded ? (
        <div className="relative">
          {" "}
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={zoom}
            options={options}
          >
            <>
              {" "}
              {markers.map((marker, index) => {
                return (
                  <div key={index} >
                    <MarkerF
                      position={marker.location}
                      onClick={() => {
                        setSelectedMarker(marker);
                        setLat(marker.location.lat);
                        setLng(marker.location.lng);
                      }}
                    />
                  </div>
                );
              })}
            </>

            {selectedMarker && (
              <InfoWindowF
                position={selectedMarker.location}
                onCloseClick={() => {
                  setSelectedMarker(null);
                }}
              >
                <div className="bg-white">
                  <h1>
                    Name <span></span>
                    <span className="font-semi-bold">
                      {selectedMarker.name}
                    </span>
                  </h1>
                  <p>
                    {" "}
                    <span className="text-sm font-semibold">Status</span> :
                    {selectedMarker.status}
                  </p>

                  <button
                    onClick={(e) => HandleLocationSelection(e)}
                    className="bg-green-300 p-1 rounded-sm font-semibold shadow-md mt-3 hover:bg-green-200"
                  >
                    View Person details
                  </button>
                </div>
              </InfoWindowF>
            )}
          </GoogleMap>
        </div>
      ) : (
        <div class="text-center">
          <div role="status">
            <svg
              aria-hidden="true"
              class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default React.memo(MapView);
