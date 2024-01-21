// we write all the functionality code here.

// import function from filename
import Coffee from "./Coffee";

function App() {
   // we can export only one element
   return (
      // therefore if there are multiple elements, we write code inside fragment (<>)
      <>
         {/* function Name Coffee  */}
         <Coffee />
         <input type="radio" name="coff" id="dav" />
         <label htmlFor="dav">DavidDoff</label> <br /> <br />
         <input type="radio" name="coff" id="nes" />
         <label htmlFor="dav">NesCafe</label> <br /> <br />
         <input type="radio" name="coff" id="con" />
         <label htmlFor="dav">Continental</label>
      </>

      //there are 4 elements Coffee and 3 radio buttons
   );
}

export default App;

// app.jsx:

// The app.jsx file commonly holds the main component or App component of your React application.
// This component is often the root component that encapsulates the entire application structure.
