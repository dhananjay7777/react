import { useState } from "react";

// This is the custom hook. intialValue is different for both the counters. So we defined one hook and passed
// a variable as a paramter. Therefore, we can create any no. of counters with diff start values as we need
function CustomCounterHook(intialValue = 0) {
   const [count, setCount] = useState(intialValue);
   function increment() {
      setCount(count + 1);
   }

   function decrement() {
      setCount(count - 1);
   }
   return [count, increment, decrement];
}

export default CustomCounterHook;
