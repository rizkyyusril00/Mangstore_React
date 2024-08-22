
import CardProduk from './card-produk'
import CardData from './card-data-produk'
import Latihan from './latihan'
import Accordion from './accordion'
import { useState } from 'react'

export default function ProdukProduk(){
    // State untuk menyimpan kategori terpilih
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedGender, setSelectedGender] = useState([]);

    
    const perubahanGender = (gender) => {
        setSelectedGender((prevGender) => {
            if (prevGender.includes(gender)) {
                return prevGender.filter((prevGender) => prevGender !== gender);
            } else {
                return [...prevGender, gender];
            }
        });
    };
    
    
    // Fungsi untuk menambah atau menghapus kategori terpilih
    const handleCategoryChange = (category) => {
        setSelectedCategories((prevCategories) => {
            if (prevCategories.includes(category)) {
                return prevCategories.filter((prevCategory) => prevCategory !== category);
            } else {
                return [...prevCategories, category];
            }
        });
    };
    
    
    // filter item mobile
    const [selectedJenis, setSelectedJenis] = useState('Semua'); // Jenis default
    const [isResetPage, setIsResetPage] = useState(true);
    
    const onFilterByJenis = (jenis) => {
        setSelectedJenis(jenis); // Perbarui state selectedJenis
        setIsResetPage(true);
    };

    // fitur search mobile 
    const [searchQuery, setSearchQuery] = useState(""); // State baru

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

        

    return(
        <>
            <section>
                <div className="main-produk">
                    <div className="container mx-auto px-5">
                        <div className="main-produk-box mt-4">
                            {/* v1 mobile */}
                            <div className="inline lg:hidden">
                                {/* searchbar */}
                                <div className="relative">
                                    <input type="text" onChange={handleSearchChange} placeholder="Search" className="text-primary bg-white border border-black py-2 px-4 w-full pr-10" />
                                    <p><i className="bi bi-search text-primary absolute top-0 right-0 mt-2 mr-2"></i></p>
                                </div>
                                <div className="flex justify-between">
                                    <div className="mt-2 mb-2">
                                        <p><span className="font-bold text-[10px] md:text-[14px]">Popular :</span>
                                         {/*1  */}
                                        <span className={`px-1 mx-1 py-1 md:px-3 bg-lightGrey rounded-md text-[9px] md:text-[12px] cursor-pointer ${selectedJenis === 'hoodie' ? 'bg-secondary' : ''}`}><button onClick={() => onFilterByJenis('hoodie', )}>Hoodie</button></span> 
                                        {/* 2 */}
                                        <span className={`px-1 mx-1 py-1 md:px-3 bg-lightGrey rounded-md text-[9px] md:text-[12px] cursor-pointer ${selectedJenis === 'shoes' ? 'bg-secondary' : ''}`}><button onClick={() => onFilterByJenis('shoes', )}>Shoes</button></span>
                                         {/*3  */}
                                        <span className={`px-1 mx-1 py-1 md:px-3 bg-lightGrey rounded-md text-[9px] md:text-[12px] cursor-pointer ${selectedJenis === 'shirt' ? 'bg-secondary' : ''}`}><button onClick={() => onFilterByJenis('shirt', )}>Shirt</button></span> 
                                        {/* 4 */}
                                        <span className={`px-1 mx-1 py-1 md:px-3 bg-lightGrey rounded-md text-[9px] md:text-[12px] cursor-pointer ${
                                        selectedJenis === 'Semua' ? 'bg-secondary' : ''}`}><button onClick={() => onFilterByJenis('Semua', )}>Semua</button></span></p>
                                    </div>
                                    <div className="mt-[2px] flex items-center justify-center text-center">
                                        <p className="text-[8px] flex justify-self-center items-center font-bold px-1 py-1 md:px-3 md:text-[12px] bg-lightGrey rounded-md">Filter <i className="bi bi-funnel"></i></p>
                                    </div>
                                </div>
                                {/* grid card */}
                                <div className="box">
                                    <div className="">
                                        <CardProduk details={CardData} isResetPage={isResetPage} onFilterByJenis={onFilterByJenis} selectedJenis={selectedJenis} searchQuery={searchQuery}/>
                                    </div>                                    
                                </div>
                            </div>

                            {/* v2 md */}
                            <div className='hidden lg:flex'>
                                {/* sidebar */}
                                <div className='box w-1/4 xl:pr-5 lg:pr-3 '>
                                    {/* search bar */}
                                    <div className="relative">
                                        <input type="text" placeholder="Search" className="text-primary bg-white border border-black py-2 px-4 w-full pr-10" />
                                        <p><i className="bi bi-search text-primary absolute top-0 right-0 mt-2 mr-2"></i></p>
                                    </div>
                                    {/* popular tag */}
                                    <div className="flex mb-2">
                                        <div className="my-2">
                                            <p><span className="font-bold lg:text-[12px] xl:text-[14px] text-primary">Popular :</span> <span className="px-3 py-1 bg-lightGrey rounded-md text-[11px] xl:text-[14px] text-primary">Hoodie</span> <span className="px-3 py-1 bg-lightGrey rounded-md text-[11px] xl:text-[14px] text-primary">Shoes</span> <span className="px-3 py-1 bg-lightGrey rounded-md text-[11px] xl:text-[14px] text-primary">Shirt</span></p>
                                        </div>
                                    </div>
                                    {/* new arival */}
                                    <Accordion title='New Arrival' handleCategoryChange={handleCategoryChange} type="checkbox"/>
                                    {/* produk type */}
                                    <Accordion title='Produk Type' type="checkbox"/>
                                    
                                    {/* harga */}
                                    <Accordion title='Harga' type="checkbox"/>
                                    {/* gender */}
                                    <Accordion title='Gender' type='gender' perubahanGender={perubahanGender}/>
                                    {/* age group */}
                                    <Accordion title='Age Group' type="checkbox"/>
                                </div>
                                {/* main */}
                                <div className="box w-3/4">
                                    <div className=''>
                                        <Latihan selectedCategories={selectedCategories} selectedGender={selectedGender}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}