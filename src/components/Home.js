import React from "react";
import username from "/root/phase-2/react-hooks-import-export-lab/src/data/user.js";
import city from "/root/phase-2/react-hooks-import-export-lab/src/data/user.js"

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}
export default Home
