import { useContext } from "react";
import { data, data1 } from "./App";

// As compared to context api this is much easier to use. We simple declare a varible, put the value inside
//the variable and then use it using parenthesis {}
function ChildC() {
   const FirstName = useContext(data);
   const yourGender = useContext(data1);
   return (
      <>
         <h1>Inside CHild C</h1>
         <h1>
            Hi my name is {FirstName} and my gender is {yourGender}
         </h1>
      </>
   );
}

export default ChildC;
