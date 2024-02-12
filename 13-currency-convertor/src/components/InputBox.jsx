import React from "react";
import { useId } from "react";

function InputBox({
   label,
   amount,
   onAmountChange,
   onCurrencyChange,
   currencyOptions = [],
   selectCurrency = "usd",
   amountDisabled = false,
   currencyDisabled = false,
   className = "",
}) {
   const amountInputId = useId();
   return (
      <div className={`bg-white p-3 rounded-lg text-sm flex `}>
         <div className="w-1/2">
            <label htmlFor={amountInputId}></label>
            <label className="text-black/40 mb-2 inline-block">{label}</label>
            <input
               id={amountInputId}
               className="outline-none w-full bg-transparent py-1.5"
               type="number"
               placeholder="Amount"
               // disabled={amountDisabled}
               value={amount}
               onChange={
                  (e) =>
                     onAmountChange && onAmountChange(Number(e.target.value)) //
               } //onAmountChange is a callback function, and it appears to be a prop passed to the
               //component. The && (logical AND) operator is used to check if onAmountChange is
               //truthy before attempting to call it.
               //Number(e.target.value) converts the input value to a number. It extracts the value
               //from the input element using e.target.value and converts it to a numeric type.
            />
         </div>
         <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">Currency Type</p>
            <select
               className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
               value={selectCurrency}
               onChange={(e) =>
                  onCurrencyChange && onCurrencyChange(Number(e.target.value))
               }
               disabled={currencyDisabled}
            >
               {currencyOptions.map((currency) => (
                  <option value={currency} key={currency}>
                     {currency}
                  </option> //key is used always when we loop through array in jsx to imporve performance
               ))}
            </select>
         </div>
      </div>
   );
}

export default InputBox;
