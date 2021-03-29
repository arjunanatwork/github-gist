import React from "react";

const Paginate = (props) => {
  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <button className="button is-info pagination-previous" disabled={props.currentPage === 1} onClick={() => props.onClick(props.currentPage - 1 )}>Previous</button>
      <button className="button is-info pagination-next" disabled={(props.currentPage * 10) > props.totalGists} onClick={() => props.onClick(props.currentPage + 1 )} >Next page</button>
    </nav>
  );
};

export default Paginate;
