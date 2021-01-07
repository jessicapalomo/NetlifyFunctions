import React, { useEffect } from "react";

function Fetch() {
  useEffect(() => {
    fetch("/.netlify/functions/node-fetch", {
      headers: { accept: "Accept: application/json" },
    })
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>Fetch Component</div>;
}

export default Fetch;
