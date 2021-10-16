import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import Grid from './Grid';

ProductSkeletonList.propTypes = {
  length: PropTypes.number,
};

function ProductSkeletonList({ length = 4 }) {
  return (
    <Grid col={3} mdCol={3} smCol={2}>
      {Array.from(new Array(length)).map((item, index) => (
        <div key={index}>
          <Box padding={1}>
            <Skeleton variant="rect" width="80%" height={330} />
            <Skeleton width="80%" />
          </Box>
        </div>
      ))}
    </Grid>
  );
}

export default ProductSkeletonList;
