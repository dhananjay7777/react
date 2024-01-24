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

      //------------------------------------------------------------------------------------------------------
      // Q. if we write 4 setcounter function as above what will happen if we click?
      // Ans: If we click, it will give 1 only as the function calls will be sent in batches. So, react will
      // see them as the same operation and perform it only once. So, the counter will increase by only 1 count.
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      //output: 1

      //------------------------------------------------------------------------------------------------------

      // Q. How to increase it by 4?
      // Ans. To increase it by four counts, use the callback which the setCounter accepts and increase it one by one. So, the first function
      // will be called first, the callback will be executed and the next function call will be executed then third and so on.
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      //output: 4
      //--------------------------------------------------------------------------------------------------
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
