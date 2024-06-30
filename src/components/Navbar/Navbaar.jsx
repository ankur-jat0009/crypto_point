import React, { useContext } from 'react'
import './Navbaar.css'
import arrow_icon from '../../assets/arrowsign.webp'
import { CoinContext } from '../../context/Coincontext'
import { Link } from 'react-router-dom'

function Navbaar() {

  const {setCurrency}=useContext(CoinContext)

  const currencyHandler=(event)=>{
    switch(event.target.value){
      case "INR":{
        setCurrency({name:"inr",Symbol:"₹"});
        break;
      }
      case "USD":{
        setCurrency({name:"usd",Symbol:"$"});
        break;
      }
      case "EUR":{
        setCurrency({name:"eur",Symbol:"€"});
        break;
      }
       default :{
        setCurrency({name:"inr",Symbol:"₹"});
        break;
      }
    }
  }
  return (
    <div className='navbaar'>
      <Link to={`/`}>
        <p>₵ⱤɎ₱₮Ø₱Øł₦₮</p>
        </Link>
        <ul>
        <Link to={`/`}>
            <li>Home</li> </Link>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
       <div className='rightnavbaar'>
       <select onChange={currencyHandler}>
            <option className="options" value="INR">INR</option>
            <option className="options" value="USD">USD</option>
            <option className="options" value="EUR">EUR</option>
        </select>
        <button>Sign up <img src={arrow_icon} alt=""  className='arrowicon'/></button>
       </div>
    </div>
  )
}

export default Navbaar