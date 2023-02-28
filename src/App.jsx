import React, { useState } from "react";
import Navbar from "./components/Navbar";
function App() {
  const [updatedWord, setUpdatedWord] = useState("");
  const [word, setWord] = useState("");
  document.addEventListener("keydown", (event) => {
    event.key == "Enter" && setUpdatedWord(word);
  });
  return (
    <div className="grid w-full place-items-center">
      <div className="grid w-2/4 ">
        <Navbar />
        <input
          placeholder="Enter a word"
          className="mt-6 h-12 rounded-lg bg-[#f4f4f4] pl-2 outline-none"
          onChange={(e) => setWord(e.target.value)}
        />
        <h1 className="pt-6 text-4xl font-medium">{updatedWord}</h1>
      </div>
    </div>
  );
}

export default App;
