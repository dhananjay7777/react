// function renderElement(reactElement, position) {
//    const ele = document.createElement(reactElement.type);
//    // ele.innerHTML = reactElement.children;
//    ele.appendChild(document.createTextNode(reactElement.children));
//    ele.setAttribute("href", reactElement.props.href);
//    ele.setAttribute("target", reactElement.props.target);
//    position.appendChild(ele);
// }

// above function in a better way

// This code defines a function renderElementEfficiently that takes a React-like element (reactElement) and
//  efficiently renders it into the DOM within a specified container (mainContainer).
//   The function essentially creates a DOM element based on the properties of the provided
//   reactElement and appends it to the mainContainer.

function renderElementEfficiently(reactElement, mainContainer) {
   const ele = document.createElement(reactElement.type);
   ele.innerHTML = reactElement.children;

   for (const x in reactElement.props) {
      if (x === "children") continue;
      ele.setAttribute(x, reactElement.props[x]);
   }
   mainContainer.appendChild(ele);
}

// The function takes two parameters: reactElement (the React-like element to be rendered) and mainContainer (the container in the DOM where the element should be appended).

// It creates a new DOM element (ele) using document.createElement(reactElement.type), where reactElement.type specifies the type of the HTML element (e.g., "a" for an anchor element).

// It sets the inner HTML of the created element to the reactElement.children content. Note that this assumes the children property of reactElement contains a string. If it contained other React elements, a more complex rendering process would be needed.

// It iterates over the properties of reactElement.props (excluding the "children" property) and sets corresponding attributes on the created DOM element using ele.setAttribute(x, reactElement.props[x]).

// Finally, it appends the created DOM element to the specified mainContainer
//

// A sample React-like element is created, representing an anchor (<a>) element with attributes (href and
// target) and content ("Click me to visit google").

const reactElement = {
   type: "a",
   props: {
      href: "https://google.com",
      target: "_blank",
   },
   children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

// renderElement(reactElement, mainContainer);
renderElementEfficiently(reactElement, mainContainer);
