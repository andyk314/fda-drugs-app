import React from 'react';
import PropTypes from 'prop-types'

import TextField from '@material-ui/core/TextField';

const SearchBar = ({ searchTerm, handleChange }) => (
  <div>
    <TextField
      style={{padding: 12}}
      id='searchInput'
      placeholder='Search for your drugs...'
      margin='normal'
      onChange={handleChange}
      value={searchTerm}
    />
  </div>
)

SearchBar.propTypes = {
  handleChange: PropTypes.func,
  searchTerm: PropTypes.string,
}

export default SearchBar
