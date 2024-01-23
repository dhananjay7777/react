import { useState } from "react";
// here we can add multiple hooks we want to import by using comma i.e import {useState,useContext,...} from "react"

function App() {
   // let counter = 15;
   // const addValue = () => {
   //    counter = counter + 1;
   //    console.log(counter);
   // };

   // const subtractValue = () => {
   //    counter = counter - 1;
   //    console.log(counter);
   // };
   // both these function will not update the value of h1. There is a problem in UI updation.

   // Therefore we will use hooks. React controls the UI updation
   // useState React: useState declares a state variable that you can update directly.Allows functional components to manage state.
   // It propogates changes to the frontend ui (DOM)

   // 0 is the default value
   // counter and setCounter are just names, we can write any variables
   //counter: varible , setCounter: function to update variable
   let [counter, setCounter] = useState(0);

   const addValue = () => {
      setCounter(counter + 1);

      // code for maximum value of 20
      if (counter >= 20) {
         setCounter(counter + 0);
      }
   };

   const subtractValue = () => {
      setCounter(counter - 1);

      //code for minimum value of 0
      if (counter == 0) {
         setCounter(counter - 0);
      }
   };

   return (
      <>
         <h1>Counter Program!!</h1>
         <p>Value of counter is: {counter}</p>

         <button onClick={addValue}>Add Value</button>

         <button onClick={subtractValue}>Subtract Value</button>

         <br />
         <br />
         <h2>Also updating value here: {counter}</h2>
      </>
   );
}

export default App;
