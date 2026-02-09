import { useEffect, useState } from 'react'
import './SearchBar.css'

function SearchBar({ value, onSearch }) {
  const [localValue, setLocalValue] = useState(value)
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    setLocalValue(value)
  }, [value])

  const handleSubmit = event => {
    event.preventDefault()
    onSearch(localValue)
  }

  const handleChange = event => {
    const newValue = event.target.value
    setLocalValue(newValue)
    onSearch(newValue)
  }

  const handleClear = () => {
    setLocalValue('')
    onSearch('')
  }

  return (
      <form className={`search-bar ${focused ? 'search-bar--focused' : ''}`} onSubmit={handleSubmit}>
        <div className="search-input-wrapper">
          <span className="search-icon">&#128269;</span>
          <input
              type="text"
              className="search-input"
              placeholder="Search products in this category..."
              value={localValue}
              onChange={handleChange}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
          />
          {localValue && (
              <button type="button" className="search-clear" onClick={handleClear} aria-label="Clear search">
                &times;
              </button>
          )}
        </div>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
  )
}

export default SearchBar