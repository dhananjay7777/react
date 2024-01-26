import { useRef, useState } from "react";

// useRef returns a mutable reference object, which means you can change its .current property and the value will persist between renders.
// Updating the .current property of a useRef object does not trigger a re-render.
// Mutable references are useful for maintaining state that doesn’t cause a re-render when updated, such as timer IDs or DOM references.

function UseRefHook() {
   const refEle = useRef(null);
   const [name, setName] = useState("DuKE.");

   function reset() {
      setName("");
      refEle.current.focus(); //this will focus on input field even when we click the rest button.
   }

   function copy() {
      refEle.current?.select();
      // select highlights the text. Therefore when we hit copy button the text will be highlighted
      window.navigator.clipboard.writeText(name);
   }

   return (
      <>
         <label htmlFor="enterName">Enter your name: </label>
         <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="enterName"
            ref={refEle}
            // React JS Refs are used to access and modify the DOM elements in the React Application. It creates a reference to the elements and uses it to modify them.
         />

         <button onClick={reset} style={{ margin: "5px" }}>
            Reset
         </button>

         <button onClick={copy} style={{ margin: "5px" }}>
            Copy Name
         </button>
      </>
   );
}

export default UseRefHook;

//onChange: This is an event handler that is triggered when the value of the input field changes.

// (e) =>: This part defines an arrow function with a parameter e, which represents the event object.

// setName(e.target.value): Inside the arrow function, it's calling the setName function (presumably a state-setting function) and passing e.target.value as its argument. e.target refers to the element that triggered the event (in this case, the input field), and e.target.value gives you the current value of that input field.

// So, in summary, whenever the user types something into the input field, the setName function is called with the updated value of the input field, and it is assumed that this value is used to update the state variable name.
