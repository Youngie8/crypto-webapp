import React, { useState } from 'react'
import SearchIcon from '../assets/search-icon.svg'
const Search = () => {
    const [searchText, setSearchText] = useState("");
    let handleInput = (e) => {
        e.preventDefault();
        let query  =  e.target.value;
        setSearchText(query)
    }
  return (
    <>
        <form className='w-96 relative flex items-center ml-7 font-nunito'>
            <input type='text' name='search' placeholder='search...' onChange={handleInput} value={searchText}
            className='w-full rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border-transparent focus:border-cyan'/>
            <button type='submit' className='absolute right-1 cursor-pointer'>
                <img src={SearchIcon} alt='search' className='w-full h-auto'/>
            </button>
        </form>

        {
            searchText.length > 0 ?

            <ul className='absolute top-11 right-0 w-full h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md'>
                <li>Bitcoin</li>
                <li>Bitcoin</li>
            </ul>
            : ""
        }
    </>
  )
}

export default Search