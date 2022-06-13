import React from 'react'
import {useState} from 'react'
const Input = ({setSearchLocation}) => {
    

    const search = e=> {
    e.preventDefault() 
    setSearchLocation(e.target.firstChild.value)
    }


  return (
   <form className='search-container' onSubmit={search}>
    <input className='search-input' type="text"  placeholder="Planet" />
    <button className='search-btn'><i className='bx bx-search-alt-2'></i></button>
   </form>
  )
}

export default Input