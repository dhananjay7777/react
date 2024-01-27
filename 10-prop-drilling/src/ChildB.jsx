import React from "react";
import ChildC from "./ChildC";

// again name is passed to 3rd child down the tree ChildC
function ChildB({ name }) {
   return <ChildC name={name} />;
}

export default ChildB;
