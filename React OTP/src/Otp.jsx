import React, { useEffect, useRef, useState } from "react";

const Otp = ({ optLength = 6 }) => {
  const [optFields, setOtpField] = useState(new Array(optLength).fill(""));
  const ref = useRef([]);

  const handleKeyDown = (e, index) => {
    const copyOtpFields = [...optFields];

    if (key === "Backspace") {
      copyOtpFields[index] = "";
      setOtpField(copyOtpFields);
      if (index > 0) ref.current[index - 1].focus();
      return;
    }
    if (isNaN(key)) {
      return;
    }

    copyOtpFields[index] = key;
    if (index + 1 < optFields.length) ref.current[index + 1].focus();
    setOtpField(copyOtpFields);
  };

  useEffect(()=> {
    ref.current["0"].focus();
  },[]);



  return (
    <div className="container">
      {optFields.map((value, index) => {
        return (
          <input
            key={index}
            ref={(currentInput) => (ref.current[index] = currentInput)}
            value={value}
            type="text"
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
};

export default Otp;
