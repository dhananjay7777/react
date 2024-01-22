import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// JSX expression: creating an element using jsx
// anotherElement is a JSX expression representing a React element. In this case, it represents an anchor(<a>) element
const anotherElement = (
   <a href="https://google.co.in" target="_blank">
      Visit Google
   </a>
);
// /ReactDOM.createRoot(document.getElementById("root")).render(anotherElement);

// In summary, this code uses React's JSX syntax to create a React element (anotherElement) and renders it
// into the DOM using the createRoot method in conjunction with the render method. This is part of the new
// concurrent mode introduced in React 18 to enable better handling of updates and improved performance.
//==========================================================================================================='

//creating an element using react

const justText = " pnxLLLLLLLLLLLLLLLLLLLLLLLLLLL."; // this text is added as link in line 29. Alse a evaluated expression

const reactElement = React.createElement(
   "a",
   {
      target: "_blank",
      href: "https://google.co.in",
   },
   "click me to visit google",
   justText
);
//ReactDOM.createRoot(document.getElementById("root")).render(reactElement);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
