
function Pagination({ totalPages, currentPage, handlePageChange }) {
  return (
    <div data-testid="page-container">
      {PageLengthArray(totalPages).map((p) => (
    <button
      key={p}
      disabled={p === currentPage}
      onClick={() => {handlePageChange(p)}}
      style = {currentPage == (p) ? {border:"1px solid red"} : null}>
      {p}
    </button>
  ))}
    </div>
  );
}
function PageLengthArray(totalPages) {
  return Array.from({ length: totalPages },  (_, i) => i + 1);
}
export default Pagination;