//Build a context provider that allows user to switch between light and dark themes, and use the context in different parts of the app to apply the selected theme.
import React from "react";

const Darkmode = () => {
  return (
    <div>
      <label htmlFor="">
        <input type="checkbox" />
        Dark Mode
      </label>
    </div>
  );
};

export default Darkmode;
