import { useState } from "react";

function App() {
   const [color, setColor] = useState("#fca377");
   return (
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
         <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
            <div className="flex flex-wrap rounded-xl px-3 py-2 bg-stone-300">
               {/* () => setColor("#ff006a"): This is an arrow function that sets the setColor state to the value "#ff006a" when the element is clicked. 
              () =>: This syntax defines an arrow function in JavaScript. It's a concise way to create a function, and in this case, it's an anonymous function with no parameters.

              setColor("#ff006a"): Inside the arrow function, it calls a function (presumably a React useState hook) named setColor with the argument "#ff006a". This implies that there is a state variable named color (or similar) in the component, and calling setColor will update that state variable with the specified color value.*/}
               {/* onlclick expects a function. It doesn't expect a value returned by function i.e setColor("blue") will return a value*/}
               <button
                  onClick={() => setColor("#ff006a")} //or onClick={function() { setColor("#ff006a"); }}
                  className="px-2 py-3 rounded-md"
                  style={{
                     backgroundColor: "black",
                     color: "#ff006a",
                     padding: "8px",
                     margin: "5px",
                  }}
               >
                  Pink
               </button>

               <button
                  onClick={() => setColor("#00a2ff")}
                  className="px-2 py-3 rounded-md"
                  style={{
                     backgroundColor: "black",
                     color: "#00a2ff",
                     padding: "8px",
                     margin: "5px",
                  }}
               >
                  Blue
               </button>

               <button
                  onClick={() => setColor("#00ffa2")}
                  className="px-2 py-3 rounded-md"
                  style={{
                     backgroundColor: "black",
                     color: "#00ffa2",
                     padding: "8px",
                     margin: "5px",
                  }}
               >
                  Green
               </button>
            </div>
         </div>
      </div>
   );
}

export default App;
