import React from 'react'
import SearchIcon from '../assets/search-icon.svg'
const Search = () => {
  return (
    <form className='border border-gray-100'>
        <input type='text' name='search' 
        className='bg-inherit'/>
        <button type='submit'>
            <img src={SearchIcon} alt='search'/>
        </button>
    </form>
  )
}

export default Search