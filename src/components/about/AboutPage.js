import React from "react";

const imgStyle = {
  width: "50%",
  borderRadius: "100px",
  display: "block",
  margin: "0 auto",
};
const AboutPage = () => (
  <div>
    <h1>Something about us</h1>
    <h2>We have come a long way... </h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>

    <img style={imgStyle} src="src/Fatso.jpg" alt="photo of a dog" />
  </div>
);

export default AboutPage;
