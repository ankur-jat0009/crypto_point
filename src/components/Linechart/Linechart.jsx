import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'


const Linechart = ({historyicalData}) => {
    const [data,setData]=useState([["Date","prices"]])

    useEffect(()=>{
        let dataCopy=[["Date","prices"]];
        if(historyicalData.prices){
            historyicalData.prices.map((item)=>{
                dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
            })
            setData(dataCopy);
        }//10/05/2024 
    },[historyicalData])
    
  return (
   <Chart
    chartType='AreaChart'
    data={data}
    height="100%"
    legendToggle
   
   />
  )
}

export default Linechart
