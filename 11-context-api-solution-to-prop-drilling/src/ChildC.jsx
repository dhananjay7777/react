import { data, data1 } from "./App";

// data.consumer only accepts a function. We then access the values of parent inside data.Consumer
// So, if there are more than one parameters to accept, then we will have to write nested function.
// THEREFORE, CONTEXT API IS NOT PREFERED.
function ChildC() {
   return (
      <>
         <h1>Inside CHild C</h1>
         <data.Consumer>
            {(newName) => {
               return (
                  <data1.Consumer>
                     {(gender) => {
                        return (
                           <h1>
                              Name is: {newName} and gender is: {gender}
                           </h1>
                        );
                     }}
                  </data1.Consumer>
               );
            }}
         </data.Consumer>
      </>
   );
}

export default ChildC;
