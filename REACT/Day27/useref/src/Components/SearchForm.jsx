import React, { useRef } from "react";

function SearchForm() {
  const searchRef = useRef();

  const handleSearch = () => {
    alert(searchRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={searchRef} placeholder="Search..." />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchForm;