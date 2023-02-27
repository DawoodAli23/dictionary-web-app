import React, { useState } from "react";
import Navbar from "./components/Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid w-full place-items-center">
      <div className="grid w-2/4 ">
        <Navbar />
        <input
          placeholder="keyboard"
          className="h-12 rounded-lg bg-[#f4f4f4] outline-none"
        />
      </div>
    </div>
  );
}

export default App;
