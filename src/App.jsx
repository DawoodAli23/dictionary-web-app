import React, { useState } from "react";
import Navbar from "./components/Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid w-full place-items-center">
      <div className="grid w-2/4 ">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
