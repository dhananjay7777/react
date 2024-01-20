import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
   return (
      <h1>
         Hello World <br /> Package.json is the file which tells everything.
         <br />
         Run File: npm run dev in terminal. <br />
         Change Directory: cd in terminal. <br />
         Clear terminal: cntrl + c <br />
         React is a library.{" "}
         <p>
            Library is a collection of code that can be reused by other
            programs. It doesn't dictate overall structure and flow of program.
            It provides specfic functionality that can be called by an
            apllication. We can select components or functions from a library to
            enhance our application. Libraries are more flexible than
            frameworks.
         </p>
      </h1>
   );
}

export default App;
