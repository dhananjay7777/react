import Child from "./Child";

import "./App.css";

// Passing data from child to parent
//"Lifting state up" is a common pattern in React used to share state between components.
// It involves moving the state from child components to their closest common ancestor in the component tree.
//  By doing so, you create a single source of truth for the shared state, making it easier to manage and synchronize state across multiple components.

function App() {
   // create a function in parent and then pass that function as a prop.
   //  Providing callback functions to update the state as needed.
   function getName(data) {
      console.log(data);
   }
   return <Child getName={getName} />;
}

export default App;
