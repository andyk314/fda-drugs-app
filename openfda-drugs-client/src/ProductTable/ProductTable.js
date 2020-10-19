import React from 'react';
import PropTypes from 'prop-types'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ProductRow from '../ProductRow/ProductRow'

const ProductTable = ({ products, handleSort, ...restProps }) => {
  return (
    <TableContainer>
      <Table stickyHeader aria-label='sticky table'>
        <TableHead>
          <TableRow>
            <TableCell onClick={() => handleSort('product_number')}>Product Number</TableCell>
            <TableCell onClick={() => handleSort('brand_name')}>Brand Name</TableCell>
            <TableCell onClick={() => handleSort('dosage_form')}>Dosage Form</TableCell>
            <TableCell onClick={() => handleSort('conversions')}>Conversions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { products.map((product, index) => (
            <ProductRow {...restProps} product={product} key={index} index={index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

ProductTable.propTypes = {
  handleSort: PropTypes.func,
  products: PropTypes.arrayOf(PropTypes.object)
}

export default ProductTable
