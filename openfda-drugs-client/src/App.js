import React, { useState, useEffect } from 'react';
import './App.css';
import ProductTable from './ProductTable/ProductTable'
import SearchBar from './SearchBar/SearchBar'

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("")
  const [selectedProductNumber, setSelectedProductNumber] = useState("")

  const handleChange = (event) => {
    console.log(event.target.value)
    setSearchTerm(event.target.value)
  }

  const handleClick = (selectedProduct) => {
    setSelectedBrand(selectedProduct.brand_name)
    setSelectedProductNumber(selectedProduct.product_number)
  }

  useEffect(() => {
    fetch('http://localhost:3001/search_conversions/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        brand_name: selectedBrand,
        product_number: selectedProductNumber
      })
    })
  }, [selectedBrand, selectedProductNumber])

  useEffect(() => {
    fetch(`http://localhost:3001/products?q=${searchTerm}`)
      .then(res => res.json())
      .then(
        (result) => {
          setSearchResults(result);
        }
      )
  }, [searchTerm, selectedBrand, selectedProductNumber])

  return (
    <div className="App">
      <SearchBar
        searchTerm={searchTerm}
        handleChange={handleChange}
      />
      <ProductTable
        products={searchResults}
        handleClick={handleClick}
      />
    </div>
  )
}

export default App;
