import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
function App() {
  const [updatedWord, setUpdatedWord] = useState("");
  const [word, setWord] = useState("");
  const [resposne, setResposne] = useState(null);
  document.addEventListener("keydown", async (event) => {
    if (event.key == "Enter") {
      setUpdatedWord(word);
      try {
        const result = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        setResposne(result);
      } catch (error) {
        console.log("=====<>", error);
      }
    }
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
