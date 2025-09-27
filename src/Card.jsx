import React, { useState, useEffect } from 'react'
import { countryList } from './Code'
import './Card.css'
import { getExchangeCurrency } from './helper'

export const Card = () => {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');
  const [result, setResult] = useState('');


  //    useEffect(() => {
  //   if (!amount || isNaN(amount)) return;

  //   async function fetchData() {
  //     try {
  //       const rates = await getExchangeCurrency({ from });
  //       if (rates && rates[to]) {
  //         const converted = (amount * rates[to]).toFixed(2);
  //         setResult(converted);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching exchange data:', error);
  //     }
  //   }

  //   fetchData();
  // }, [amount, from, to]);


  const handleConvert = async () => {
    if (!amount || isNaN(amount)) return;

    try {
      const rates = await getExchangeCurrency({ from });
      if (rates && rates[to]) {
        const converted = (amount * rates[to]).toFixed(2);
        setResult(converted);
      }
    } catch (error) {
      console.error("Error fetching exchange data:", error);
    }
  };



  return (
    <div className='container'>
      <div className='holder'>
        <h1>CURRENCY CONVERTER</h1>
        <label htmlFor="amount"><strong>Amount</strong></label>
        <input type="text" placeholder='Enter the amount' value={amount} onChange={(e) => setAmount(e.target.value)}
        />
        <div className='card'>
          <label htmlFor="from">FROM  &nbsp;
            <select name="" id="" value={from} onChange={(e) => setFrom(e.target.value)}>
              {Object.entries(countryList).map(([CurrencyCode, countryCode]) =>
                <option key={CurrencyCode} value={CurrencyCode}>{CurrencyCode}</option>
              )}
            </select>

          </label>


          &nbsp;  &nbsp;
          <label htmlFor="to">TO
            <select name="" id="" value={to} onChange={(e) => setTo(e.target.value)} >
              {Object.entries(countryList).map(([CurrencyCode, countryCode]) =>
                //    Object.entries() takes an object and turns it into an array of key-value pair
                //    Object.entries(countryList) → gives [ "USD", "US" ], [ "INR", "IN" ]
                <option key={CurrencyCode} value={CurrencyCode}>{CurrencyCode}</option>

              )}
            </select>
          </label>

        </div>
        <div className="flags">
          <img
            src={`https://flagsapi.com/${countryList[from]}/shiny/64.png`}
            alt="From Flag"
          />
          <img
            src={`https://flagsapi.com/${countryList[to]}/shiny/64.png`}
            alt="To Flag"
          />
        </div>
        <button onClick={handleConvert}>Convert</button>
        {/* <p><strong> {amount} {from} = {result}{to}</strong></p> */}
        {result && (
          <p>
            <strong>
              {amount} {from} = {result} {to}
            </strong>
          </p>
        )}

      </div>
    </div>
  )
}