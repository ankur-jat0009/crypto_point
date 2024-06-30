import React, { useContext, useEffect, useState } from 'react'
import './Coin.css'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../context/Coincontext';
import Linechart from '../../components/Linechart/Linechart';
import axios from 'axios';



const Coin=() => {
    const {coinId}=useParams();
    const [coinData,setCoinData]=useState();
    const [historyicalData,setHistorycalData]=useState();
    const {currency}=useContext(CoinContext);

    const  fetchCoinData=async()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-6figZvkjSE5NzCqx86UyCfcp'}
          };
          
          axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
          .then(response => setCoinData(response.data))
          .catch(err => console.error(err));
    }

    const fetchhistoryicalData=async()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-6figZvkjSE5NzCqx86UyCfcp'}
          };
          
        //   fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
        //     .then(response => response.json())
        //     .then(response => setHistorycalData(response))
        //     .catch(err => console.error(err));


        
        axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,options)
        .then(response => setHistorycalData(response.data))
        .catch(err => console.error(err));
        

    }
    
    useEffect(()=>{
        fetchCoinData();
        fetchhistoryicalData();
    },[currency]);


    if(coinData && historyicalData){
        return (
         <div className='coin'>
         <div className="coin-name">
            <img src={coinData.image.large} alt="" />
            <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p> 
          </div>
          <div className="coin-chart">
          <Linechart historyicalData={historyicalData}/>
          </div>
          
          <div className="coin-info">
            <ul>
                <li>Crypto Market Rank</li>
                <li>{coinData.market_cap_rank}</li>
            </ul>
            {/* <ul>
                <li>Current Price</li>
                <li>{coinData.market_data.current_price
                [currency.name].toLocaleString()}</li>
            </ul>
            <ul>
                <li>Market Cap</li>
                <li>{currency.Symbol} {coinData.market_data.market_cap
                    [currency.name].toLocaleString()}</li>
            </ul>
            <ul>
                <li>24 Hour high</li>
                <li>{currency.Symbol} {coinData.market_data.high_24h
                    [currency.name].toLocaleString()}</li>
            </ul> 
            <ul>
                <li>24 Hour low</li>
                <li>{currency.Symbol} {coinData.market_data.high_24h
                    [currency.name].toLocaleString()}</li>
            </ul>  */}
            <ul>
                <li>Watchlist Portfolio Users</li>
                <li>{coinData.watchlist_portfolio_users.toLocaleString()}</li>
            </ul>
          </div>


          </div>
  )
}
else{
   return(
   <div className='spinner'>
    <div className="spin"></div>
   </div>
   )
}
}

export default Coin