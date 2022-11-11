import React from 'react'

function Search({setSearch}) {
    function handleChange(e){
        setSearch(e.target.value)
    }
  return (
    <input
        onChange={handleChange}
        id="input"
        type="text"
        placeholder="Search Meals"
      />
  )
}

export default Search