import React, { useContext, useRef } from 'react'
import Search from './Search'
import submitIcon from "../assets/submit-icon.svg";
import selectIcon from "../assets/select-icon.svg";
import { CryptoContext } from '../context/CryptoContext';

const Filter = () => {
  let {setCurrency, setSortBy} = useContext(CryptoContext);
  const currencyRef = useRef(null)

  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    let val = currencyRef.current.value
    setCurrency(val)
    currencyRef.current.value = '';
  }

  const handleSort = (e) => {
    e.preventDefault()
    let val = e.target.value
    setSortBy(val)
  }

  return (
    <div className='w-full h-12 border-2 border-gray-100 rounded-lg flex items-center justify-between relative'>
        <div><Search/></div>
        <div className='flex mr-7'>
          <form className='relative flex items-center font-nunito mr-12' onSubmit={handleCurrencySubmit}>
            <label htmlFor="currency" className='relative flex justify-center items-center mr-2 font-bold '>currency:</label>
            <input type='text' name='currency' placeholder='usd' className='w-16 rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan leading-4'
            ref={currencyRef}/>
            <button type='submit' className='ml-1 cursor-pointer'>
              <img src={submitIcon} alt='submit' className='w-full h-auto'/>
            </button>
          </form>
        </div>
        <label className='relative flex justify-center items-center mr-6
        '>
          <span className='font-bold mr-2'>sort by: </span>
          <select name='sortby' className='rounded bg-gray-200 text-base pl-2 pr-6 py-0.5 leading-4 capitalize outline-0 focus:outline-0' onClick={handleSort}>
            <option value="market_cap_desc">market cap descending</option>
            <option value="market_cap_asc">market cap ascending</option>
            <option value="volume_desc">volume descending</option>
            <option value="volume_asc">volume ascending</option>
            <option value="id_asc">market rank ascending</option>
            <option value="id_desc">market rank descending</option>
            <option value="gecko_desc">gecko descending</option>
            <option value="gecko_asc">gecko ascending</option>
          </select>
          {/* <img src={selectIcon} alt='submit' className='w-[1rem] absolute right-1 top-2 pointer-events-none h-auto'/> */}
        </label>
    </div>
  )
}

export default Filter