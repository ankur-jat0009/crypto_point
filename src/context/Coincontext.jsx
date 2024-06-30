import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const CoinContext=createContext();

const CoinContextProvider=(props)=>{
    const [allCoin,setAllcoin]=useState([]);
    const [currency,setCurrency]=useState({
        name:"INR",
        Symbol:"₹"
    });

    const fetchAllCoin=async ()=>{


      
          
        //   fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
        //     .then(response => response.json())
        //     .then(response => setAllcoin(response))
        //     .catch(err => console.error(err));
    


    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-6figZvkjSE5NzCqx86UyCfcp'
      }
    };
    
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
    .then(response => setAllcoin(response.data))
    .catch(err => console.error(err));
    
 }


    useEffect(()=>{
        fetchAllCoin();
    },[currency])

    const contextValue={
        allCoin,currency,setCurrency
    }

    return(
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;