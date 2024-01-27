import React from "react";

// here we access and use the name component
// As the data gets passed down, each intermediary component may not use the data itself but merely passes it along to the next level until it reaches the component where it is needed.
function ChildC({ name }) {
   return (
      <>
         <h1>Inside Child C</h1>
         <h1>Name Is : {name}</h1>
      </>
   );
}

export default ChildC;
