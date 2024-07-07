//Build a search bar that filteritem list based on user input.
import React, { useState } from "react";

const SearchBar = ({items}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredItems = items.filter((item) =>item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
