import React, { useState, useEffect } from "react";
import CardDataMd from "./card-data-produk-md";
import PaginationProduk from "./Pagination";
import { Link } from "react-router-dom";

const Latihan = ({ selectedCategories, selectedGender }) => {
  // State variables
  const [filteredData, setFilteredData] = useState(CardDataMd);
  const [isFiltered, setIsFiltered] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastCurrentPage, setLastCurrentPage] = useState(1);

  // Filter data based on categories and gender (if selected)
  useEffect(() => {
    // Save current page before filtering
    setLastCurrentPage(currentPage);

    const filterData = CardDataMd.filter((item) => {
      let isIncluded = true;

      // Filter by categories (always applied)
      if (selectedCategories.length > 0) {
        isIncluded = selectedCategories.includes(item.kategori);
      }


      // Filter by gender (if selected)
      if (selectedGender.length > 0) {
        isIncluded = isIncluded && selectedGender.includes(item.gender);
      }
      
      return isIncluded;
    });

    setFilteredData(filterData);
    setCurrentPage(1); // Reset page to 1 after filtering
  }, [selectedCategories, selectedGender]);

  // Combine data based on filtering
  const dataGabungan = selectedCategories.length === 0 ? CardDataMd : filteredData;

  // Pagination logic
  const postPerPage = 9;
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = dataGabungan.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {/* Display product cards */}
        {currentPost.map((value, i) => (
          <div className="inline" key={i}>
            <Link to="/detailProudct">
              <img
                src={value.image}
                alt=""
                className="w-full object-cover h-[185px] md:h-[390px] lg:h-[300px]"
              />
              <h1 className="text-[12px] pl-2">{value.title}</h1>
              <p className="text-[14px] font-bold pl-2">{value.deskripsi}</p>
              <div className="flex gap-2">
                <p className="text-[14px] pl-2">{value.hargaDiskon}</p>
                <p className="text-[14px] line-through">{value.hargaAsli}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination component */}
      <PaginationProduk
        totalPost={isFiltered ? filteredData.length : dataGabungan.length}
        halamanPerPage={postPerPage}
        setCurrentHalaman={setCurrentPage}
        currentPage={currentPage}
        // Set initial page to lastCurrentPage when filter is activated
        initialPage={lastCurrentPage}
      />
    </>
  );
};

export default Latihan;
