import React from "react";
import ChildB from "./ChildB";

// again name is passed to 2nd child down the tree ChildB
function ChildA({ name }) {
   return <ChildB name={name} />;
}

export default ChildA;
