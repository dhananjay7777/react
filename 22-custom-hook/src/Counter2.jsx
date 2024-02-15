import React from "react";
import CustomCounterHook from "./assets/CustomCounterHook";

function Counter2() {
   // Destructuring in JavaScript allows you to extract multiple values from an array or object and assign them
   // to variables in a more concise way
   const [count, increment, decrement] = CustomCounterHook(100);

   //The array is immediately destructured into three variables: count, increment, and decrement. Each variable
   //  corresponds to the value at the respective index in the returned array.
   return (
      <div>
         <h1>count is: {count}</h1>
         <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>
      </div>
   );
}

export default Counter2;
