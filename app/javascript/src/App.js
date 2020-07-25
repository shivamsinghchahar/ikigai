import React from "react";

import "stylesheets/application";
import RailsLogo from "images/rails";
import ReactLogo from "images/react";
import TailwindLogo from "images/tailwind";

const App = () => {
  return (
    <div className="min-h-screen text-gray-700 flex flex-col items-center">
      <h1 className="pt-6 text-5xl text-center tracking-widest">IKIGAI</h1>
      <p className="pb-1 border-b text-lg tracking-wider">Rails API 💎 + React ⚛️ + Tailwind 🌊</p>
      <img className="w-1/3 my-0 mx-auto" src={RailsLogo} />
      <div className="w-3/5 p-6 flex justify-around items-center">
        <img className="w-1/4" src={ReactLogo} />
        <span className="text-6xl self-start">+</span>
        <img className="w-1/4" src={TailwindLogo} />
      </div>
    </div>
  );
};

export default App;
