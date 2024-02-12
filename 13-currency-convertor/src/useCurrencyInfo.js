import { useState, useEffect } from "react";

//currency is the currency we want to covert. Ex. dollar to inr, here currency is: dollar
function useCurrencyInfo(currency) {
   const [data, setData] = useState({});
   useEffect(() => {
      fetch(
         "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/" +
            currency +
            ".json"
      ) //api for getting live values of all currencies
         .then((res) => res.json()) //covert the data of api in json format
         .then((res) => setData(res[currency])); //set the value of data variable to currency we want to covert
      console.log(data);
   }, [currency]);
   console.log(data);
   return data;
}

export default useCurrencyInfo;
