import { useRef, useState } from "react";

import "./App.css";

function App() {
   const [lastNameX, setlastNameX] = useState("zzZZZzz");
   const [skill, setSkills] = useState("");
   const [about, setAbout] = useState("");
   const refObj = useRef();

   function settingEvery(e) {
      //if input field is skills
      if (e.target.name == "skills") {
         let y = e.target.value.toUpperCase();
         setSkills(y);
      }
      // if input field is about
      else setAbout(e.target.value);
   }

   function onCopy(e) {
      e.preventDefault(); //if we don't write this, page will reload on its own as its controlled by DOM
      refObj.current.select(); //to highlight the selected text
      window.navigator.clipboard.writeText(refObj.current.value); //copying value of Uncontrolled Component textField
   }
   return (
      <>
         <form className="form1">
            <label>FirstName: </label>
            <input type="text" defaultValue={"John"} /> <br />
            {/* A:- Controlled Components: Components controlled by React */}
            {/* 1) instead of default value, if we only write value it will give error:
            Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which hould not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components*/}
            {/* --------------------------------------------------------------------------------------------------------- */}
            {/* 2) To store or handle value, we will have to use state, specifically useState. */}
            <label>LastName: </label>
            <input
               type="text"
               value={lastNameX}
               onChange={(x) => setlastNameX(x.target.value)}
               //  set the value of setlastNameX to the current value in inputBox. If we don't use useState the value we write in inputbox will not be displayed.
            />
            <br />
            {/* -------------------------------------------------------------------------------------------------------- */}
            {/* 3) Handling Multiple Input Fields 
            for both input fields we have onChange set to same function settingEvery*/}
            <label>Skills: </label>
            <input
               type="text"
               value={skill}
               onChange={settingEvery}
               name="skills"
            />
            <br />
            <label>About: </label>
            <input
               type="text"
               value={about}
               onChange={settingEvery}
               name="about"
            />
         </form>

         {/* ============================================================================================ */}
         {/*  */}
         {/* B:- Uncontrolled Components: Controlled by DOM */}
         {/* We dont write eventHandler here. Instead we use useRef hook */}

         <br />
         <br />
         <br />
         <form>
            <label>Uncontrolled Component: </label>
            <input type="text" ref={refObj} />
            <button onClick={onCopy}>Copy</button>
         </form>
      </>
   );
}

export default App;
