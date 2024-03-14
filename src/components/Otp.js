import React, { useState } from "react";
import OtpInput from "react-otp-input";

export default function Otp({ getOtp, otpRes }) {
  const [otp, setOtp] = useState("");
  if (otp.length === 4) {
    getOtp(otp);
    setOtp("")
  }

  return (
    <>
      {" "}
      {!otpRes && (
        <div>
          <p className="text-center text-gray-600 ">
            Enter otp code you receved in your email.If not received check spam
            folder
          </p>
          <OtpInput
            placeholder="0000"
            skipDefaultStyles={true}
            containerStyle={"flex justify-center"}
            value={otp}
            inputStyle={
              "outline outline-1 rounded-sm mx-4 aspect-square h-12 text-4xl text-center "
            }
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
          />
        </div>
      )}
    </>
  );
}
