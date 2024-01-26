import { memo } from "react";

function Child({ problem2 }) {
   console.log("Child Component rendered!");

   return;
}

export default memo(Child);
