import { useState } from "react";

export default function PaginationProduk({
    totalPost,
    halamanPerPage,
    setCurrentHalaman,
    currentPage = 1, // Tambahkan props currentPage (opsional)
}) {
    // State untuk menyimpan page saat ini
    const [currentPageState, setCurrentPageState] = useState(currentPage);

    // Hitung total halaman
    const totalPages = Math.ceil(totalPost / halamanPerPage);

    // Event handler untuk button backward
    const handleBackward = () => {
        if (currentPageState > 1) {
            setCurrentPageState(currentPageState - 1);
            setCurrentHalaman(currentPageState - 1);
        }
    };

    // Event handler untuk button forward
    const handleForward = () => {
        if (currentPageState < totalPages) {
            setCurrentPageState(currentPageState + 1);
            setCurrentHalaman(currentPageState + 1);
        }
    };

    // Generate halaman berdasarkan totalPost dan halamanPerPage
    let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }

        const handleChangePage = (page) => {
            setCurrentPageState(page);
            setCurrentHalaman(page);
        };

    return (
        <>
            <div className="my-9">
                {/* Pagination */}
                <div className="flex justify-end gap-[16px]">
                    {/* Button backward */}
                <button
                    className={`w-[50px] h-[50px] p-[10px] items-center justify-center border-black border-[1px] hover:scale-95 transition-all ease-in-out duration-300 ${currentPageState === 1 ? 'hidden' : ''}`}
                    onClick={handleBackward}
                    disabled={currentPageState === 1}
                >
                    <i className="bi bi-arrow-left"></i>
                </button>
                    {pages.map((page, i) => (
                    <button
                        key={i}
                        onClick={() => handleChangePage(page)}
                        className={`w-[50px] h-[50px] p-[10px] flex items-center justify-center border-black border-[1px] hover:scale-95 transition-all ease-in-out duration-300 ${
                        currentPageState === page
                            ? "w-[50px] h-[50px] p-[10px] bg-secondary flex items-center justify-center border-t-[1px] border-l-[1px] border-r-[3px] border-b-[3px] border-black text-[16px]"
                            : ""
                        }`}
                    >
                        {page}
                    </button>
                    ))}
                    {/* Button forward */}
                <button
                    className={`w-[50px] h-[50px] p-[10px] items-center justify-center border-black border-[1px] hover:scale-95 transition-all ease-in-out duration-300 ${currentPageState === totalPages ? 'hidden' : ''}`}
                    onClick={handleForward}
                    disabled={currentPageState === totalPages}
                >
                    <i className="bi bi-arrow-right"></i>
                </button>
                </div>
            </div>
        </>
    );
  }
  