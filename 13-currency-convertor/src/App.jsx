import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./useCurrencyInfo";

function App() {
   const [amount, setAmount] = useState(0); //amount we want to covert
   const [from, setFrom] = useState("usd"); //currency we want to convert
   const [to, setTo] = useState("inr"); //currency we want to see after conversion
   const [covertedAmount, setConvertedAmount] = useState(0); //amount after conversion

   const currencyInfo = useCurrencyInfo(from); //get the currency we want to convert

   const options = Object.keys(currencyInfo); //In api, we have key-value pairs of all currencies. Therefore,
   //here we get the keys (for ex. ind,usd) of the currency

   const swap = () => {
      setFrom(to);
      setTo(from);
      setConvertedAmount(amount);
      setAmount(covertedAmount);
   };

   const convert = () => {
      setConvertedAmount(amount * currencyInfo[to]);
   };

   return (
      <>
         <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
               backgroundImage: `url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            }}
         >
            <div className="w-full">
               <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                     onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                     }}
                  >
                     <div className="w-full mb-1">
                        <InputBox
                           label="From"
                           amount={amount}
                           currencyOptions={options}
                           onCurrencyChange={(currency) => setAmount(currency)}
                           selectCurrency={from}
                           onAmountChange={(amount) => setAmount(amount)}
                        />
                     </div>
                     <div className="relative w-full h-0.5">
                        <button
                           type="button"
                           className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                           onClick={swap}
                        >
                           swap
                        </button>
                     </div>
                     <div className="w-full mt-1 mb-4">
                        <InputBox
                           label="To"
                           amount={covertedAmount}
                           currencyOptions={options}
                           onCurrencyChange={(currency) => setTo(currency)}
                           selectCurrency={to}
                           amountDisabled
                        />
                     </div>
                     <button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                     >
                        Convert {from} to {to}
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </>
   );
}

export default App;
