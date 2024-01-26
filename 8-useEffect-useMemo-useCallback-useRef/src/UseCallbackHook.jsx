import { useCallback, useState } from "react";
import Child from "./Child";

function UseCallBackHook() {
   const [add, setAdd] = useState(0);
   const [add2, setAdd2] = useState(0);

   // 2nd Problem
   /* 2nd Problem: we are passing prop in parent component here. Now again if we click button this component is re-redrered which it should'nt.
   This happens because of Refrential equality: when state of add changes, the page is re-rendered, the functions are re-created. Therefore problem2 function is recreated as react thinks that function is new or some change has happened in function */

   // const problem2 = () => {
   //    //some operation
   // };

   // Solution
   //Syntax useCall(<function>, <dependency array>)
   const problem2 = useCallback(() => {}, [add2]);
   // when add2 changes, then only child will be re-rendered

   return (
      <>
         <h1>Current Count is: {add}</h1>
         <h3>Add 1</h3>
         <button onClick={() => setAdd(add + 1)}>Add 1</button>

         <h1>
            ------------------------------------------------------------------------------------
         </h1>

         <h1>Count of Adding 10 is: {add2}</h1>

         <h3>Adding 10</h3>
         <button onClick={() => setAdd2(add2 + 10)}>Add 10</button>

         {/* 1st Probelm: On pressing above button child component is called which is an error as button doesn't have any relation with child
         fix/Solution:- export default memo(Child); */}
         <Child problem2={problem2} add10={add2} />
      </>
   );
}

export default UseCallBackHook;
