import React from "react";
import OtpInput from "react-otp-input";

export default function Otp({ verifyOtp, otpRes, otp, setOtp }) {
  if (otp && otp.length === 4) {
    verifyOtp(otp);
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
