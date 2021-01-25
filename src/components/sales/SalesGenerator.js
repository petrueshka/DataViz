import React, { useEffect, useState } from "react";

const SalesGenerator = () => {
  const [number, setNumber] = useState(0);
  //   let salesArr = [];
  useEffect(() => {
    // create interval
    const interval = setInterval(
      // set number every 5s
      () => setNumber(Math.floor(Math.random() * 50 + 1)),
      1000,
    );

    // clean up interval on unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>{number}</p>
    </div>
  );
};

export default SalesGenerator;
