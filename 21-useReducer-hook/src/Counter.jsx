import { useReducer } from "react";

// setting inital state to 0
const initialState = 0;

// reducer function
// action is what we want to do. To identify it, we give unique name to each action. Increment and Decrement are actions
// state is the variable we are updating.
const reducer = (state, action) => {
   switch (action) {
      case "Increment":
         return state + 1;
      case "Decrement":
         return state - 1;
      default:
         return state;
   }
};

function Counter() {
   // defining useReducer Hook
   // count: Variable we are updating
   // dispatch: function to update variable. It sends the action object to the dispatch function.
   // reducer: function that updates the state and returns a new state to the dispatch function.
   const [count, dispatch] = useReducer(reducer, initialState);
   return (
      <div>
         <h1>Count is: {count}</h1>
         <button onClick={() => dispatch("Increment")}>Increment</button>
         <button onClick={() => dispatch("Decrement")}>Decrement</button>
      </div>
   );
}

export default Counter;

// 1. useReducer()
// The useReducer(reducer, initialState) hook accepts 2 arguments: the reducer function and the initial state.
// The hook then returns an array of 2 items: the current state and the dispatch function.

// A. Initial state
// The initial state is the value the state is initialized with.

// B. Action object
// An action object is an object that describes how to update the state.
// Typically, the action object has a property type — a string describing what kind of state update the reducer
// must do.

//C. Dispatch function
// The dispatch is a special function that dispatches an action object.
// Whenever you want to update the state (usually from an event handler or after completing a fetch request),
// you simply call the dispatch function with the appropriate action object: dispatch(actionObject).
// In simpler terms, dispatching means a request to update the state.

//D. Reducer function
// The reducer is a pure function that accepts 2 parameters: the current state and an action object.
// Depending on the action object, the reducer function must update the state in an immutable manner, and
// return the new state.
//The reducer above doesn't modify directly the current state in the state variable, but rather creates a new
// state object stored in newState, then returns it.
