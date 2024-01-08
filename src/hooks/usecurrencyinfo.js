import { useState,useEffect } from "react"

function usecurrencyinfo(currency) {
  return 
    useEffect(() =>{
    fetch( `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    ).then((res)=>res.json())
    .then
    },[])
}

export default usecurrencyinfo;
