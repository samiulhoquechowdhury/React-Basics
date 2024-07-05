//create a component that fatches data from an API

import React, { useEffect, useState } from "react";

const Six = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return (
    <div>
      {json ? (
        <div>
          <h1>Title: {data.title}</h1>
          <h1>Body: {data.body}</h1>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default Six;
