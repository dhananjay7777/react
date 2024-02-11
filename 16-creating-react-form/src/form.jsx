import React, { useEffect, useState } from "react";

function Form() {
   const [inputData, setinputData] = useState({
      name: "",
      email: "",
      pass: "",
   });
   //y using this line of code, you've created a state variable inputData initialized with an empty string
   //for name, email, and pass. This state can be updated and accessed throughout your component, and React
   //will re-render your component whenever the state changes.

   const [flag, setFlag] = useState(false);

   function handleData(e) {
      setinputData({ ...inputData, [e.target.name]: e.target.value });
   }
   //
   // It looks like you're defining a function named handleData that takes an event object (e) as its parameter.
   // Inside this function, you are using setinputData to update the state of inputData.
   //{ ...inputData }: This part spreads the current state of inputData into a new object. This is done to ensure that you're not mutating the original state directly, as React relies on immutability for proper state updates.

   // e.target.name: This retrieves the name attribute of the target element that triggered the event.
   // e.target.value: This retrieves the value property of the target element that triggered the event.
   // [e.target.name]: e.target.value: This constructs a new object property using computed property names. It sets the property name to the value of e.target.name, and the property value to the value of e.target.value.
   // ...inputData: This spreads the existing properties of the inputData object into a new object.
   // { ...inputData, [e.target.name]: e.target.value }: This creates a new object by merging the existing properties of inputData with the new property defined by [e.target.name]: e.target.value.

   useEffect(() => {
      console.log("Registered");
   }, [flag]);

   function handleSubmit(e) {
      e.preventDefault();
      //if input field is empty
      if (!inputData.name || !inputData.pass || !inputData.email) {
         alert("All fields are mandaotory");
      } else {
         setFlag(true);
      }
   }

   //if flag is true we run the pre tag. flag is true when no input field is empty
   return (
      <>
         <pre>
            {flag ? (
               <h2 className="ui-define flex justify-center font-serif my-4 bg-black text-white py-3 w-1/3 mx-auto rounded-sm">
                  Hello {inputData.name}, you've registered
               </h2>
            ) : (
               ""
            )}
         </pre>
         <form className="container my-8" onSubmit={handleSubmit}>
            <div className="header bg-slate-950 p-3 flex justify-center w-1/2 mx-auto ">
               <h1 className="justify-center text-4xl text-center m-6 font-mono text-gray-100 font-bold">
                  Registration Form
               </h1>
            </div>

            <div className="bg-gray-800 w-1/2 mx-auto">
               <div className="mx-auto justify-center flex py-5 ">
                  <label
                     htmlFor="yourName"
                     className="text-l font-serif text-white"
                  >
                     Enter Name:{" "}
                  </label>
                  <input
                     type="text"
                     id="yourName"
                     className="border-solid rounded border-slate-900 border-2 mx-2 w-2/5 p-0.5"
                     value={inputData.name}
                     placeholder="Enter Your Name"
                     onChange={handleData}
                     name="name"
                  />
               </div>
               <div className="mx-8 justify-center flex my-3 py-3 ">
                  <label
                     htmlFor="yourPass"
                     className="text-l font-serif text-white"
                  >
                     Enter Password:{" "}
                  </label>
                  <input
                     type="text"
                     id="yourPass"
                     className="border-solid rounded border-slate-900 border-2 mx-2 w-2/5 p-0.5 "
                     value={inputData.pass}
                     placeholder="Enter Password"
                     onChange={handleData}
                     name="pass"
                  />
               </div>
               <div className="mx-auto justify-center flex py-5">
                  <label
                     htmlFor="yourName"
                     className="text-l font-serif text-white"
                  >
                     Enter Email:{" "}
                  </label>
                  <input
                     type="text"
                     id="yourEmail"
                     className=" rounded mx-2 w-2/5 p-1"
                     value={inputData.email}
                     placeholder="Enter Email "
                     onChange={handleData}
                     name="email"
                  />
               </div>

               <div className="py-3">
                  <button
                     type="submit"
                     className="text-slate-900 bg-sky-200 mx-auto flex justify-center py-3 w-1/3 my-5 rounded-lg font-semibold font-mono text-xl"
                  >
                     Submit
                  </button>
               </div>
            </div>
         </form>
      </>
   );
}

export default Form;
