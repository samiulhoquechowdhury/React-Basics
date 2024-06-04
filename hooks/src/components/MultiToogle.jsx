import React, { useState } from 'react';

const MultiToggle = () => {
  const [showSection1, setShowSection1] = useState(true);
  const [showSection2, setShowSection2] = useState(false);

  return (
    <div>
      <button onClick={() => setShowSection1(!showSection1)}>
        Toggle Section 1
      </button>
      <button onClick={() => setShowSection2(!showSection2)}>
        Toggle Section 2
      </button>

      {showSection1 && <div>Section 1 is visible</div>}
      {showSection2 && <div>Section 2 is visible</div>}
    </div>
  );
};

export default MultiToggle;
