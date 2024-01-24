import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./newComponent";

function App() {
   let myObj = {
      userName: "dukeheLLLLLLLLLLLLLLL.",
      age: 22,
   };

   let myARR = [1, 2, 3];
   return (
      <>
         <h1 className="bg-green-200 text-black p-4 rounded-xl mb-4">
            Tailwind Test
         </h1>

         {/* userName and btnText are arguments passed by parent to child */}
         <Card
            userName="dukeheLLLLLLLLLLL."
            btnText="HAHAHHAHAHAHA." /*someObj={myObj} arr={myARR} this is passing value in components*/
         />
         <Card userName="m4rtiXXXXXXXXXXXXX" btnText="HEHHEHEHEHE." />
      </>
   );
}

export default App;
