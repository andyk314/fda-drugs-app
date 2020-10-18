import React from 'react';
import PropTypes from 'prop-types'

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const ProductRow = ({ product, index, handleClick }) => {
  const {
    brand_name,
    conversions,
    dosage_form,
    product_number
  } = product;

  return (
    <TableRow
      key={index}
      hover
      onClick={() => handleClick(product)}
    >
      <TableCell component='th' scope='row'>
        {product_number}
      </TableCell>
      <TableCell component='th' scope='row'>
        {brand_name}
      </TableCell>
      <TableCell component='th' scope='row'>
        {dosage_form}
      </TableCell>
      <TableCell component='th' scope='row'>
        {conversions}
      </TableCell>
    </TableRow>
  )
}

ProductRow.propTypes = {
  active_ingredients: PropTypes.arrayOf(PropTypes.string),
  brand_name: PropTypes.string,
  conversions: PropTypes.number,
  dosage_form: PropTypes.string,
  handleClick: PropTypes.func,
  product_number: PropTypes.string,
}

export default ProductRow