
import CardProduk from './card-produk'
import CardData from './card-data-produk'
import CardDataMd from './card-data-produk-md'
import CardProdukMd from './card-produk-md'
// import PaginatinButton from './pagination-button'
// import { useState } from 'react'

export default function ProdukProduk(){
    return(
        <>
            <section>
                <div className="main-produk">
                    <div className="container mx-auto px-5">
                        <div className="main-produk-box mt-4">
                            {/* v1 mobile */}
                            <div className="inline lg:hidden">
                                {/* searchbar */}
                                <div className="search-bar flex justify-between bg-white border-[1px] border-black py-2 px-4 overflow-hidden">
                                    <input type="text" placeholder="Search" className="text-primary w-3/4" />
                                    <p><i className="bi bi-search"></i></p>
                                </div>
                                <div className="flex justify-between">
                                    <div className="mt-2 mb-2">
                                        <p><span className="font-bold text-[12px]">Popular :</span> <span className="px-3 py-1 bg-lightGrey rounded-md text-[10px]">Hoodie</span> <span className="px-3 py-1 bg-lightGrey rounded-md text-[10px]">Shoes</span> <span className="px-3 py-1 bg-lightGrey rounded-md text-[10px]">Shirt</span></p>
                                    </div>
                                    <div className="mt-[10px]">
                                        <p className="text-[10px] font-bold px-3 py-1 bg-lightGrey rounded-md">Filter <i className="bi bi-funnel"></i></p>
                                    </div>
                                </div>
                                {/* grid card */}
                                <div className="box">
                                    <div className="grid grid-cols-2 gap-4">
                                        <CardProduk details={CardData} />
                                    </div>
                                    <div className="page flex justify-center gap-[16px] my-10">
                                        <a href="#" className="w-[40px] h-[40px] p-[5px] bg-secondary flex items-center justify-center border-t-[1px] border-l-[1px] border-r-[3px] border-b-[3px] border-black text-[16px]">1</a>
                                        <a href="#" className="w-[40px] h-[40px] p-[5px] flex items-center justify-center border-black border-[1px]">2</a>
                                        <a href="#" className="w-[40px] h-[40px] p-[5px] flex items-center justify-center border-black border-[1px]">3</a>
                                        <a href="#" className="w-[40px] h-[40px] p-[5px] flex items-center justify-center border-black border-[1px]"><i className="bi bi-arrow-right"></i></a>
                                    </div>
                                    {/* pagination */}
                                    
                                </div>
                            </div>

                            {/* v2 md */}
                            <div className='hidden lg:flex'>
                                {/* sidebar */}
                                <div className='box w-1/4 xl:pr-5 lg:pr-3 '>
                                    {/* search bar */}
                                    <div className="search-bar flex justify-between bg-white border-[1px] border-black py-2 px-4 overflow-hidden">
                                        <input type="text" placeholder="Search" className="text-primary w-3/4" />
                                        <p><i className="bi bi-search text-primary"></i></p>
                                    </div>
                                    {/* popular tag */}
                                    <div className="flex">
                                        <div className="mt-2 mb-2">
                                            <p><span className="font-bold lg:text-[12px] xl:text-[14px] text-primary">Popular :</span> <span className="px-3 py-1 bg-lightGrey rounded-md text-[12px] text-primary">Hoodie</span> <span className="px-3 py-1 bg-lightGrey rounded-md text-[12px] text-primary">Shoes</span> <span className="px-3 py-1 bg-lightGrey rounded-md text-[12px] text-primary">Shirt</span></p>
                                        </div>
                                    </div>
                                    {/* new arival */}
                                    <div className="mt-5">
                                        <h1 className="font-bold text-primary">New Arrival</h1>
                                        <hr className="my-3 border-primary border-t-[1px]" />
                                    </div>
                                    {/* produk type */}
                                    <div className="mt-5">
                                        <h1 className="font-bold text-primary">Produk Type</h1>
                                        <hr className="my-3 border-primary border-t-[1px]" />
                                    </div>
                                    {/* check box */}
                                    <div className="flex-col items-center space-y-4">
                                        <div className="flex items-center">
                                            <input type="checkbox" id="checkbox1" name="checkbox1" />
                                            <label htmlFor="checkbox1" className="ml-2 text-primary">Shoes</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="checkbox" id="checkbox2" name="checkbox2" />
                                            <label htmlFor="checkbox2" className="ml-2 text-primary">Clothes</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="checkbox" id="checkbox3" name="checkbox3" />
                                            <label htmlFor="checkbox3" className="ml-2 text-primary">Trousers</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="checkbox" id="checkbox4" name="checkbox4" />
                                            <label htmlFor="checkbox4" className="ml-2 text-primary">Sport Wear</label>
                                        </div>
                                    </div>
                                    {/* harga */}
                                    <div className="mt-5">
                                        <h1 className="font-bold text-primary">Harga</h1>
                                        <hr className="my-3 border-primary border-t-[1px]" />
                                    </div>
                                    {/* gender */}
                                    <div className="mt-5">
                                        <h1 className="font-bold text-primary">Gender</h1>
                                        <hr className="my-3 border-primary border-t-[1px]" />
                                    </div>
                                    {/* age group */}
                                    <div className="mt-5">
                                        <h1 className="font-bold text-primary">Age Group</h1>
                                        <hr className="my-3 border-primary border-t-[1px]" />
                                    </div>
                                </div>
                                {/* main */}
                                <div className="box w-3/4">
                                    <div className='grid grid-cols-3 gap-4'>
                                        <CardProdukMd details={CardDataMd} />
                                    </div>
                                    {/* page */}
                                    <div className="page flex justify-end gap-[16px] my-5">
                                        <a href="#" className="w-[50px] h-[50px] p-[10px] bg-secondary flex items-center justify-center border-t-[1px] border-l-[1px] border-r-[3px] border-b-[3px] border-black text-[16px]">1</a>
                                        <a href="#" className="w-[50px] h-[50px] p-[10px] flex items-center justify-center border-black border-[1px]">2</a>
                                        <a href="#" className="w-[50px] h-[50px] p-[10px] flex items-center justify-center border-black border-[1px]">3</a>
                                        <a href="#" className="w-[50px] h-[50px] p-[10px] flex items-center justify-center border-black border-[1px]"><i className="bi bi-arrow-right"></i></a>
                                    </div>
                                    {/* <div className="page flex justify-end gap-[16px] my-5">
                                        <PaginatinButton />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}