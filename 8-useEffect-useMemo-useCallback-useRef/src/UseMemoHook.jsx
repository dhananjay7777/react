import { useMemo, useState } from "react";
import { intialItems } from "./util";

function UseMemoHook() {
   const [count1, setCount1] = useState(0);
   const [items] = useState(intialItems);

   // this code is creating an array of 29,999,999 objects, each with an id and isSelected property. The isSelected
   //property is true only for the last item in the array. The const selectedItem is then used to find the
   //first item in the array where isSelected is true (i.e 29,999,998th item).

   //This is the expensive computation as every time count changes, the state changes, the page is re-rendered and this function is run.
   //As out item is at last position i.e , 29 Million posi, it loops through 29 million items in the array to find our item.
   // const selectedItem = items.find((item) => item.isSelected);

   //Therefore we use useMemo. useMemo will store the value in cache and recomputed it only when items chanegs

   const selectedItem = useMemo(() => {
      items.find((item) => item.isSelected);
   }, [items]);

   return (
      <div class="tutorial">
         <h1>No. of count: {count1}</h1>
         <h1>Selected Item: {selectedItem?.id}</h1>
         <button onClick={() => setCount1(count1 + 1)}>Increase</button>
      </div>
   );
}

export default UseMemoHook;
