import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

export default function PlaceSearchAutocomplete({ setLat, setLng ,setZoom }) {
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
      clearSuggestions();
      setZoom(8)
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
        setZoom(14)
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li className="cursor-pointer my-1 " key={place_id} onClick={handleSelect(suggestion)}>
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
