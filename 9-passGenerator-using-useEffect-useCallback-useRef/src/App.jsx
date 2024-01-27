import { useState, useCallback, useEffect, useRef } from "react";

function App() {
   const [length, setLength] = useState(8);
   const [noAllowed, setNoAllowed] = useState(false);
   const [charAllowed, setCharAllowed] = useState(false);
   const [password, setPass] = useState();

   // explain in passwordGenetorExplanation.txt file
   const passwordGenerator = useCallback(() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (noAllowed) str += "0123456789";
      if (charAllowed) str += "`~!@#$%^&*(){}[]|/><";

      for (let i = 0; i < length; i++) {
         let charposi = Math.floor(Math.random() * str.length + 1);
         pass += str[charposi];
      }

      setPass(pass);
   }, [length, noAllowed, charAllowed, setPass]);

   const passwordRef = useRef(null);

   const copyPassToClipboard = useCallback(() => {
      passwordRef.current?.select();
      window.navigator.clipboard.writeText(password);
   }, [password]);

   useEffect(() => {
      passwordGenerator();
   }, [length, noAllowed, charAllowed, passwordGenerator]);

   return (
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-950 text-orange-500">
         <h1 className=" font-mono text-center text-white my-3">
            Password Generator
         </h1>

         <div className="flex shadow rounded-lg overflow-hidden mb-4 text-rose-700">
            <input
               type="text"
               value={password}
               className="outline-none w-full py-1 px-3"
               placeholder="Password"
               readOnly
               ref={passwordRef}
            />

            <button
               className="px-2 py-2 bg-yellow-300 text-amber-950 font-semibold"
               onClick={copyPassToClipboard}
            >
               Copy
            </button>
         </div>

         <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
               <label htmlFor="cursor">Length: {length}</label>
               <input
                  id="cursor"
                  type="range"
                  min={8}
                  max={100}
                  value={length}
                  className="cursor-pointer"
                  onChange={(e) => {
                     setLength(e.target.value);
                  }}
               />
            </div>
            <input
               type="checkbox"
               name="numberInput"
               id="numberInput"
               defaultChecked={noAllowed}
               onChange={() => setNoAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Number</label>

            <input
               type="checkbox"
               name="character"
               id="character"
               defaultChecked={charAllowed}
               onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="character">Character</label>
         </div>
      </div>
   );
}

export default App;
