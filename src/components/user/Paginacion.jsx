const Paginacion = ({ totalPages, currentPage, onPageChange }) => (
    <div className="flex justify-center mt-4">
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
        <button
          key={pageNumber}
          className={`mx-2 px-3 py-1 rounded-full font-poppins ${
            pageNumber === currentPage ? 'bg-fifthCol text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
);
  
export default Paginacion;