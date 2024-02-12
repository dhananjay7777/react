import { useEffect, useState } from "react";
import "./App.css";

function App() {
   const [items, setItems] = useState([]); //intialize and empty array

   // Basically creating an array of objects
   // Syntax Important: setItem([])
   function addItems() {
      setItems([
         ...items,
         { id: items.length, value: Math.ceil(Math.random() * 100) },
         // id is length of array i.e 1 + highest index and value is any random no. between 1 to 100
      ]);
   }

   // just to seek how items gets added to the array
   useEffect(() => {
      console.log(items);
   }, [items]);

   //we diplay the random nos genertaed in an ordered  list
   return (
      <>
         <div>
            <ol>
               {items.map((x) => (
                  <li key={x.id}>{x.value}</li>
               ))}
            </ol>
            <button
               style={{
                  border: "rgb(97, 200, 255) 2px solid",
                  color: "rgb(0, 37, 56)",
               }}
               onClick={addItems}
            >
               Add Item
            </button>
         </div>
      </>
   );
}

export default App;
