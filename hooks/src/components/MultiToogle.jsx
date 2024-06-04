import React, { useState } from 'react';
import '../styles/MultiToggle.css'

const MultiToggle = () => {
  const [showSection1, setShowSection1] = useState(true);
  const [showSection2, setShowSection2] = useState(false);

  return (
    <div>
      <button className='Multitooglebtn' onClick={() => setShowSection1(!showSection1)}>
        Toggle Section 1
      </button>
      <button className='Multitooglebtn'  onClick={() => setShowSection2(!showSection2)}>
        Toggle Section 2
      </button>

      {showSection1 && <div>Section 1 is visible</div>}
      {showSection2 && <div>Section 2 is visible</div>}
    </div>
  );
};

export default MultiToggle;
