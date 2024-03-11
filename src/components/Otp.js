import { useRef, useState } from "react";

export default function Otp() {
  const fieldsRef = useRef();
  const [state, setState] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
  });

  const inputFocus = (e) => {
    const elements = fieldsRef.current.children;
    const dataIndex = +e.target.getAttribute("data-index");
    if (e.key === "Delete" || e.key === "Backspace") {
      const next = dataIndex - 1;
      if (next > -1) {
        elements[next].focus();
      }
    } else {
      const next = dataIndex + 1;
      if (
        next < elements.length &&
        e.target.value !== " " &&
        e.target.value !== "" &&
        e.key.length === 1
      ) {
        elements[next].focus();
      }
    }
  };

  const handleChange = (e, codeNumber) => {
    const value = e.target.value;
    setState({ ...state, [codeNumber]: value.slice(value.length - 1) });
  };

  return (
    <div className="mt-3">
      <p className="text-gray-600 text-center ">
        Enter the Verification code sent to your email
      </p>
      <div ref={fieldsRef} className="mt-2 flex items-center gap-x-2 justify-center">
        <input
          type="text"
          data-index="0"
          placeholder="0"
          value={state.code1}
          className="w-12 h-12 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
          onChange={(e) => handleChange(e, "code1")}
          onKeyUp={inputFocus}
        />
        <input
          type="text"
          data-index="1"
          placeholder="0"
          value={state.code2}
          className="w-12 h-12 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
          onChange={(e) => handleChange(e, "code2")}
          onKeyUp={inputFocus}
        />
        <input
          type="text"
          data-index="2"
          placeholder="0"
          value={state.code3}
          className="w-12 h-12 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
          onChange={(e) => handleChange(e, "code3")}
          onKeyUp={inputFocus}
        />
        <input
          type="text"
          data-index="3"
          placeholder="0"
          value={state.code4}
          className="w-12 h-12 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
          onChange={(e) => handleChange(e, "code4")}
          onKeyUp={inputFocus}
        />
      </div>
    </div>
  );
}