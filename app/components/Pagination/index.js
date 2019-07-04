import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = props => {
  const items = [];
  for (
    let number = 1;
    number <= Math.ceil(props.totalItems / props.perPage);
    number++
  ) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === props.page}
        onClick={() => props.handlePagination(number, props.perPage)}
      >
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <Pagination size="sm">
      <Pagination.Prev
        onClick={() => props.handlePagination(props.page - 1, props.perPage)}
        disabled={props.page === 1}
      />
      {items}
      <Pagination.Next
        onClick={() => props.handlePagination(props.page + 1, props.perPage)}
        disabled={props.page === Math.ceil(props.totalItems / props.perPage)}
      />
    </Pagination>
  );
};

export default PaginationComponent;
