import React, { useState } from "react";
import "../styles/Form.css";

const Step1 = ({ data, handleChange }) => (
  <div className="step">
    <h2>Step 1: Personal Information</h2>
    <label>
      First Name:
      <input
        type="text"
        name="firstName"
        value={data.firstName}
        onChange={handleChange}
      />
    </label>
    <br />
    <label>
      Last Name:
      <input
        type="text"
        name="lastName"
        value={data.lastName}
        onChange={handleChange}
      />
    </label>
  </div>
);

const Step2 = ({ data, handleChange }) => (
  <div className="step">
    <h2>Step 2: Contact Information</h2>
    <label>
      Email:
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
    </label>
    <br />
    <label>
      Phone Number:
      <input
        type="tel"
        name="phone"
        value={data.phone}
        onChange={handleChange}
      />
    </label>
  </div>
);

const Step3 = ({ data }) => (
  <div className="step">
    <h2>Step 3: Review Information</h2>
    <p>
      <strong>First Name:</strong> {data.firstName}
    </p>
    <p>
      <strong>Last Name:</strong> {data.lastName}
    </p>
    <p>
      <strong>Email:</strong> {data.email}
    </p>
    <p>
      <strong>Phone Number:</strong> {data.phone}
    </p>
  </div>
);

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setStep((prev) => prev - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <form>
        {step === 1 && <Step1 data={formData} handleChange={handleChange} />}
        {step === 2 && <Step2 data={formData} handleChange={handleChange} />}
        {step === 3 && <Step3 data={formData} />}

        <div className="button-group">
          {step > 1 && (
            <button type="button" onClick={handlePrevious}>
              Previous
            </button>
          )}
          {step < 3 && (
            <button type="button" onClick={handleNext}>
              Next
            </button>
          )}
          {step === 3 && <button type="submit">Submit</button>}
        </div>
      </form>
    </div>
  );
};

export default Form;
