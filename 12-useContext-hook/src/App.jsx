import { createContext, useState } from "react";
import ChildA from "./ChildA";

// create 2 varibles to keep value using context api

//createContext: The createContext function is used to create a context. This function returns an object with Provider and Consumer components.
const data = createContext();
const data1 = createContext();

function App() {
   const newName = "justdukethings";
   const gender = "male";

   return (
      <>
         {/* we have to create two data.Provider for name and gender. We wrap the components that need the value
         inside data.Provider */}
         <data.Provider value={newName}>
            <data1.Provider value={gender}>
               <ChildA />
            </data1.Provider>
         </data.Provider>
      </>
   );
}

//<MyContext.Provider>: The Provider component is used to wrap the part of your component tree where you want to make the context available. It takes a value prop, which is the data you want to share.

export default App;
export { data, data1 };
