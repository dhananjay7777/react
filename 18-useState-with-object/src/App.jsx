import { useState } from "react";
import "./App.css";

//In React, the spread operator (...) is commonly used for object and array manipulation, including when
//working with state and props. It allows you to copy the properties of an existing object or array into a
//new object or array, which is useful for immutability and updating state or props without mutating the
//original data.

function App() {
   const [name, setName] = useState({
      firstName: "DuKE.",
      lastName: "helFFFFFFFFFFFFF",
   });

   function update() {
      // setName({ lastName: "heLLLLL" }); //if we do like this we will only get lastName and firstName property is lost as we didn't pass it
      setName({ ...name, lastName: "heLLLLLLLLLL" });
      // what the spread operator (...) does that it makes a copy of all values. After creating a copy overwrite the lastName and keep the firstName as it is.
   }

   return (
      <>
         <div>
            <h1>First Name: {name.firstName}</h1>
            <h1>Last Name: {name.lastName}</h1>
         </div>
         <button onClick={update} style={{ border: "2px solid black" }}>
            Submit
         </button>
      </>
   );
}

export default App;
//--------------------------------------------------------------------------------------------
// Use Cases of spread operator

// 1. Updating State

// const [state, setState] = useState({ count: 0 });

// const increment = () => {
//   setState(prevState => ({ ...prevState, count: prevState.count + 1 }));
// };
// Here, we're using the spread operator to copy the properties of the previous state (prevState) and then overriding the count property with an updated value.

// 2. Merging Props

// const MyComponent = ({ prop1, prop2, ...restProps }) => {
//   // prop1 and prop2 are accessed individually
//   // restProps contains any additional props passed to the component
// };
// Here, prop1 and prop2 are extracted individually, while the restProps object contains any other props that were passed to the component.

// 3. Copying Arrays

// const originalArray = [1, 2, 3];
// const copiedArray = [...originalArray];
// This creates a new array (copiedArray) with the same elements as originalArray, ensuring that any modifications to copiedArray won't affect originalArray.

// 4. Adding Items to an Array

// const newArray = [...oldArray, newItem];
// This creates a new array (newArray) by appending newItem to the end of oldArray, without modifying oldArray.

// 5. Copying Objects

// const originalObject = { key1: 'value1', key2: 'value2' };
// const copiedObject = { ...originalObject };
// This creates a new object (copiedObject) with the same properties and values as originalObject, allowing you to make changes to copiedObject without affecting originalObject.

// Using the spread operator helps maintain immutability, which is important in React for ensuring predictable behavior and facilitating performance optimizations like shallow comparison checks.
