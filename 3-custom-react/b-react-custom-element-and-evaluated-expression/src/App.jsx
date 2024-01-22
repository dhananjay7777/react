const text = "Good Luck Have Fun!!!";

function App() {
   return <h1>GL HF: {text}</h1>; // evaluated expression: here we only write the final result and not if-else for etc.
}

export default App;

//
// An "evaluated expression" refers to the result of the evaluation of an expression in a programming language
//ex. const sum = 2+3;
// In this case, the expression 2 + 3 is evaluated, and the result (the sum of 2 and 3, which is 5) is assigned to the variable sum. The value of sum is the evaluated expression.
//In the context of React, expressions are often used within curly braces {} in JSX
