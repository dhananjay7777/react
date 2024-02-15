import React from "react";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
import "./App.css";
// we use custom hook as They allow you to extract component logic into reusable functions.
// we use it to remove duplicate logic in components and we can extract that logic to the custom hook.

//In this program we have 2 Counters: Counter1 and Counter2. Both have same functionality, but one starts from
// 10 (Counter1) and one starts from 100 (Counter2)
function App() {
   return (
      <>
         <Counter1 />
         <br />
         <h1>--------------------------------------------------</h1>
         <Counter2 />
      </>
   );
}

export default App;
