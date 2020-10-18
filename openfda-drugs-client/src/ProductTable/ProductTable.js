import React from 'react';
import PropTypes from 'prop-types'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ProductRow from '../ProductRow/ProductRow'

const ProductTable = ({ products, ...restProps }) => {
  return (
    <TableContainer>
      <Table stickyHeader aria-label='sticky table'>
        <TableHead>
          <TableRow>
            <TableCell>Product Number</TableCell>
            <TableCell>Brand Name</TableCell>
            <TableCell>Dosage Form</TableCell>
            <TableCell>Conversions</TableCell>
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
  products: PropTypes.arrayOf(PropTypes.object)
}

export default ProductTable
