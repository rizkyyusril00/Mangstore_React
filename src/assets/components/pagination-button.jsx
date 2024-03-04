import ReactPaginate from "react-paginate";

export default function PaginatinButton(){
    return(
        <>
            <ReactPaginate
                nextLabel={
                    <a className="w-[50px] h-[50px] p-[10px] flex items-center justify-center border-black border-[1px]">
                        <i className="bi bi-arrow-right"></i>
                    </a>
                }
                // onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={3}
                previousLabel={
                    <a className="w-[50px] h-[50px] p-[10px] flex items-center justify-center border-black border-[1px]">
                        <i className="bi bi-arrow-left"></i>
                    </a>
                }
                containerClassName="flex gap-[16px]"
                pageClassName="w-[50px] h-[50px] p-[10px] flex items-center justify-center border-black border-[1px]"
                activeClassName="w-[50px] h-[50px] p-[10px] bg-secondary flex items-center justify-center border-t-[1px] border-l-[1px] border-r-[3px] border-b-[3px] border-black text-[16px]"
                renderOnZeroPageCount={null}
            />
        </>
    )
}