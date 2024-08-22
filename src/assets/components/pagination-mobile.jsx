const PaginationButton = ({ page, currentPage, handleChangePage }) => {
    return (
      <button
        className={`pagination-item w-[40px] h-[40px] p-[5px] flex items-center justify-center hover:scale-95 transition-all ease-in-out duration-300 border-black border-[1px]${currentPage === page ? 'w-[40px] h-[40px] p-[5px] bg-secondary flex items-center justify-center border-t-[1px] border-l-[1px] border-r-[3px] border-b-[3px] border-black text-[16px]' : ''}`}
        onClick={() => handleChangePage(page)}
      >
        {page}
      </button>
    );
  };
  
  export default PaginationButton;