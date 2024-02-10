import { useState } from "react";

// receive prop i.e the function
function Child({ getName }) {
   const [name, setName] = useState("");
   const submit = (e) => {
      e.preventDefault();
      getName(name); // call the function here and pass the in the parameter the data u want to send
   };
   //When a child component needs to update the shared state, it calls the callback function provided by the common ancestor.
   // This allows the common ancestor to update its state, which in turn triggers re-renders of the child components with the updated state values.
   return (
      <form>
         <label htmlFor="yourName">Name: </label>
         <input
            type="text"
            value={name}
            id="yourName"
            onChange={(e) => {
               setName(e.target.value);
            }}
         />
         <button
            style={{ border: "2px solid", margin: "8px" }}
            onClick={submit}
         >
            Submit
         </button>
      </form>
   );
}

export default Child;
