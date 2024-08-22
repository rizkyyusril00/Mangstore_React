import CardData from './card-data-produk'
import { useState } from 'react';
import PaginationButton from'../components/pagination-mobile'
import { useEffect } from 'react';
export default function CardProduk ({onFilterByJenis, selectedJenis, searchQuery }) {
  const [currentPage, setCurrentPage] = useState(1); // Menentukan halaman awal
  const [dataPerPage, setDataPerPage] = useState(6); // Menentukan jumlah data per halaman
  const [filteredData, setFilteredData] = useState(CardData); // Data awal
  const totalPages = Math.ceil(filteredData.length / dataPerPage);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleBackward = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleForward = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleFilterData = (jenis) => {
    const filteredItems = CardData.filter((item) => item.jenis === selectedJenis || selectedJenis === 'Semua');
    setFilteredData(filteredItems);
  };

  useEffect(() => {
    handleFilterData(); // Terapkan filter awal
    setCurrentPage(1)
  }, [selectedJenis]); // Filter ulang ketika selectedJenis berubah

  const value = (currentPage) => {
    const startIndex = (currentPage - 1) * dataPerPage;
    const endIndex = startIndex + dataPerPage;
    const filteredItems = filteredData.filter((item) => {
      // Filter berdasarkan searchQuery
      if (searchQuery) {
        return item.deskripsi.toLowerCase().includes(searchQuery.toLowerCase());
      } else {
        return true; // Tampilkan semua data jika searchQuery kosong
      }
    });

    return filteredItems.slice(startIndex, endIndex);
    };

    return(
        <>
            <div className="products grid grid-cols-2 gap-4">
                {value(currentPage).map((value) => (
                    <div className="product-card mt-2" key={value.id}>
                        <img src={value.image} alt={value.title} className="w-full h-[200px] md:h-[350px] object-cover"/>
                        <h3 className="text-[12px] md:text-[14px] pl-2">{value.title}</h3>
                        <p className="text-[14px] md:text-[16px] pl-2">{value.deskripsi}</p>
                        <div className="harga">
                            <span className="harga-diskon text-[12px] md:text-[14px] pl-2">{value.hargaDiskon}</span>
                            <span className="harga-asli text-[12px] md:text-[14px] pl-2">{value.hargaAsli}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination flex justify-center gap-[16px] my-10">
            <button className={`w-[40px] h-[40px] p-[5px] items-center justify-center border-black border-[1px] hover:scale-95 transition-all ease-in-out duration-300 ${currentPage === 1 ? 'hidden' : ''}`} onClick={handleBackward} disabled={currentPage === 1}>
            <i className="bi bi-arrow-left"></i>
        </button>
                {[...Array(totalPages)].map((_, index) => (
                <PaginationButton
                    key={index + 1}
                    page={index + 1}
                    currentPage={currentPage}
                    handleChangePage={handleChangePage}
                />
                ))}
                <button className={`w-[40px] h-[40px] p-[5px] items-center justify-center border-black border-[1px] hover:scale-95 transition-all ease-in-out duration-300 ${currentPage === totalPages ? 'hidden' : ''}`} onClick={handleForward} disabled={currentPage === totalPages}>
                <i className="bi bi-arrow-right"></i>
        </button>
            </div>
            
        </>
    )
}