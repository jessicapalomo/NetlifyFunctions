import React, { useEffect } from "react";

function Fetch() {
  useEffect(() => {
    fetch("https://date.nager.at/api/v2/publicholidays/2020/US", {
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
