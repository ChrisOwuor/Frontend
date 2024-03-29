import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

<<<<<<< HEAD
export default function PlaceSearchAutocomplete({
  setLat,
  setLng,
  setZoom,
  setAddress,
}) {
=======
export default function PlaceSearchAutocomplete({ setLat, setLng ,setZoom }) {
>>>>>>> a2cc8bd64b3e319406d53836dfb673a17c7a9cea
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
<<<<<<< HEAD
    clearSuggestions();
    setZoom(8);
=======
      clearSuggestions();
      setZoom(8)
>>>>>>> a2cc8bd64b3e319406d53836dfb673a17c7a9cea
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      setValue(description, false);
      clearSuggestions();
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        setLng(lng);
        setLat(lat);
<<<<<<< HEAD
        setZoom(14);
        setAddress(description);
=======
        setZoom(14)
>>>>>>> a2cc8bd64b3e319406d53836dfb673a17c7a9cea
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
<<<<<<< HEAD
        <li
          className="cursor-pointer my-1 "
          key={place_id}
          onClick={handleSelect(suggestion)}
        >
=======
        <li className="cursor-pointer my-1 " key={place_id} onClick={handleSelect(suggestion)}>
>>>>>>> a2cc8bd64b3e319406d53836dfb673a17c7a9cea
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
  return (
    <div ref={ref}>
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Select Las seen location?"
        className="h-12 w-full px-4"
      />
      {status === "OK" && <ul className="bg-white">{renderSuggestions()}</ul>}
    </div>
  );
}
