import { useState, useEffect } from "react";

function UseEffectExplain() {
   const [count, setCount] = useState(0);

   //working: useEffect will first log "The count is: 1", then it will destroy itself and log "I am being Cleaned"
   // and then it will be recreated with a new value i.e "The count is: 2" and so on.

   //Syntax: useEffect(<function>, <depenedency>)

   useEffect(
      () => {
         // code we want to run
         //this will run atleast  once on mount
         console.log("The count is: ", count);

         //optional return function
         // this will run when function unmounts. If there are no dependenices this function will also run;
         return () => {
            console.log("I am being Cleaned");
         };
      },
      //dependency array: What useEffect should listen to, to run the above code
      //if count changes by pressing buttons or by any other part of code above function will run
      [count]
   );

   return (
      <div>
         <h1>Counter: {count}</h1> <br />
         <div>
            <button
               onClick={() => setCount(count + 1)}
               style={{ margin: "5px" }}
            >
               {" "}
               Increment
            </button>
            <button onClick={() => setCount(count - 1)}> Decrement</button>
         </div>
      </div>
   );
}

export default UseEffectExplain;
