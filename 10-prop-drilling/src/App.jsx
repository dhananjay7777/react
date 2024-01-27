import React from "react";
import ChildA from "./ChildA";

//Prop drilling in React refers to the process of passing data from a component at the top of the component tree down to a component deeper in the tree through a chain of intermediary components.

function App() {
   const name = "dukeheLLLLLLLLLLLLLLLLLL.";
   // We want to transfer data to ChildC. Therefore App -> ChildA -> ChildB -> ChildC
   // app is the parent component and we are passing data to 1st child ChildA

   return (
      <>
         <ChildA name={name} />{" "}
         {/* prop name is passed to childA which is defined in parent*/}
      </>
   );
}

export default App;
