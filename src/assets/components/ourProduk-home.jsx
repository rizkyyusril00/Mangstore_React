import Produk4 from '../../img/produk4.jpg'
import Produk3 from '../../img/produk3.jpg'
import { Link } from 'react-router-dom'

export default function OurProdukHome(){
    return(
        <>
            <section>
                <div className="our-produk">
                    <div className="container mx-auto md:px-10 px-5">
                        <div className="our-produk-box">
                            <div className="box">
                                <h1 data-aos="fade-right" className="text-[32px] font-bold mt-2">Our Produk</h1>
                                <p data-aos="fade-right" className="mb-4 md:w-1/2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex a perferendis nesciunt facere eaque blanditiis repellat reprehenderit, possimus accusamus quae.</p>
                            </div>
                            <div className="box">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {/* card 1 */}
                                    <div className="bg-white rounded-md shadow-md">
                                        <img src={Produk4} alt="" className="w-full object-cover h-[165px] md:h-[287px]" />
                                        <h1 className="text-[12px] md:pl-2">Mens wear</h1>
                                        <p className="text-[14px] font-bold md:pl-2">Hoddie bahan dengan 100% katun</p>
                                        <div className="md:flex mt-1 mb-1">
                                            <p className="text-[12px] md:pl-2">Rp. 300.000,-</p>
                                            <p className="line-through text-[12px] md:pl-2">Rp. 500.000,-</p>
                                        </div>
                                    </div>
                                    {/* card 2 */}
                                    <div className="bg-white rounded-md shadow-md">
                                        <img src={Produk3} alt="" className="w-full object-cover h-[165px] md:h-[287px]" />
                                        <h1 className="text-[12px] md:pl-2">Mens wear</h1>
                                        <p className="text-[14px] font-bold md:pl-2">Hoddie bahan dengan 100% katun</p>
                                        <div className="md:flex mt-1 mb-1">
                                            <p className="text-[12px] md:pl-2">Rp. 300.000,-</p>
                                            <p className="line-through text-[12px] md:pl-2">Rp. 500.000,-</p>
                                        </div>
                                    </div>
                                    {/* card 3 */}
                                    <div className="bg-white rounded-md shadow-md">
                                        <img src={Produk3} alt="" className="w-full object-cover h-[165px] md:h-[287px]" />
                                        <h1 className="text-[12px] md:pl-2">Mens wear</h1>
                                        <p className="text-[14px] font-bold md:pl-2">Hoddie bahan dengan 100% katun</p>
                                        <div className="md:flex mt-1 mb-1">
                                            <p className="text-[12px] md:pl-2">Rp. 300.000,-</p>
                                            <p className="line-through text-[12px] md:pl-2">Rp. 500.000,-</p>
                                        </div>
                                    </div>
                                    {/* card 4 */}
                                    <div className="bg-white rounded-md shadow-md">
                                        <img src={Produk3} alt="" className="w-full object-cover h-[165px] md:h-[287px]" />
                                        <h1 className="text-[12px] md:pl-2">Mens wear</h1>
                                        <p className="text-[14px] font-bold md:pl-2">Hoddie bahan dengan 100% katun</p>
                                        <div className="md:flex mt-1 mb-1">
                                            <p className="text-[12px] md:pl-2">Rp. 300.000,-</p>
                                            <p className="line-through text-[12px] md:pl-2">Rp. 500.000,-</p>
                                        </div>
                                    </div>
                                    {/* card 5 */}
                                    <div className="bg-white rounded-md shadow-md">
                                        <img src={Produk3} alt="" className="w-full object-cover h-[165px] md:h-[287px]" />
                                        <h1 className="text-[12px] md:pl-2">Mens wear</h1>
                                        <p className="text-[14px] font-bold md:pl-2">Hoddie bahan dengan 100% katun</p>
                                        <div className="md:flex mt-1 mb-1">
                                            <p className="text-[12px] md:pl-2">Rp. 300.000,-</p>
                                            <p className="line-through text-[12px] md:pl-2">Rp. 500.000,-</p>
                                        </div>
                                    </div>
                                    {/* card 6 */}
                                    <div className="bg-white rounded-md shadow-md">
                                        <img src={Produk3} alt="" className="w-full object-cover h-[165px] md:h-[287px]" />
                                        <h1 className="text-[12px] md:pl-2">Mens wear</h1>
                                        <p className="text-[14px] font-bold md:pl-2">Hoddie bahan dengan 100% katun</p>
                                        <div className="md:flex mt-1 mb-1">
                                            <p className="text-[12px] md:pl-2">Rp. 300.000,-</p>
                                            <p className="line-through text-[12px] md:pl-2">Rp. 500.000,-</p>
                                        </div>
                                    </div>
                                    {/* card 7 only md */}
                                    <div className="bg-white rounded-md shadow-md hidden md:inline">
                                        <img src={Produk3} alt="" className="w-full object-cover h-[165px] md:h-[287px]" />
                                        <h1 className="text-[12px] md:pl-2">Mens wear</h1>
                                        <p className="text-[14px] font-bold md:pl-2">Hoddie bahan dengan 100% katun</p>
                                        <div className="md:flex mt-1 mb-1">
                                            <p className="text-[12px] md:pl-2">Rp. 300.000,-</p>
                                            <p className="line-through text-[12px] md:pl-2">Rp. 500.000,-</p>
                                        </div>
                                    </div>
                                    {/* card 8 only md */}
                                    <div className="bg-white rounded-md shadow-md hidden md:inline">
                                        <img src={Produk3} alt="" className="w-full object-cover h-[165px] md:h-[287px]" />
                                        <h1 className="text-[12px] md:pl-2">Mens wear</h1>
                                        <p className="text-[14px] font-bold md:pl-2">Hoddie bahan dengan 100% katun</p>
                                        <div className="md:flex mt-1 mb-1">
                                            <p className="text-[12px] md:pl-2">Rp. 300.000,-</p>
                                            <p className="line-through text-[12px] md:pl-2">Rp. 500.000,-</p>
                                        </div>
                                    </div>
                                    {/* card 9 only md */}
                                    <div className="bg-white rounded-md shadow-md hidden md:inline">
                                        <img src={Produk3} alt="" className="w-full object-cover h-[165px] md:h-[287px]" />
                                        <h1 className="text-[12px] md:pl-2">Mens wear</h1>
                                        <p className="text-[14px] font-bold md:pl-2">Hoddie bahan dengan 100% katun</p>
                                        <div className="md:flex mt-1 mb-1">
                                            <p className="text-[12px] md:pl-2">Rp. 300.000,-</p>
                                            <p className="line-through text-[12px] md:pl-2">Rp. 500.000,-</p>
                                        </div>
                                    </div>
                                    {/* card 10 only md */}
                                    <div className="bg-white rounded-md shadow-md hidden md:inline">
                                        <img src={Produk3} alt="" className="w-full object-cover h-[165px] md:h-[287px]" />
                                        <h1 className="text-[12px] md:pl-2">Mens wear</h1>
                                        <p className="text-[14px] font-bold md:pl-2">Hoddie bahan dengan 100% katun</p>
                                        <div className="md:flex mt-1 mb-1">
                                            <p className="text-[12px] md:pl-2">Rp. 300.000,-</p>
                                            <p className="line-through text-[12px] md:pl-2">Rp. 500.000,-</p>
                                        </div>
                                    </div>
                                    {/* card 11 only md */}
                                    <div className="bg-white rounded-md shadow-md hidden md:inline">
                                        <img src={Produk3} alt="" className="w-full object-cover h-[165px] md:h-[287px]" />
                                        <h1 className="text-[12px] md:pl-2">Mens wear</h1>
                                        <p className="text-[14px] font-bold md:pl-2">Hoddie bahan dengan 100% katun</p>
                                        <div className="md:flex mt-1 mb-1">
                                            <p className="text-[12px] md:pl-2">Rp. 300.000,-</p>
                                            <p className="line-through text-[12px] md:pl-2">Rp. 500.000,-</p>
                                        </div>
                                    </div>
                                    {/* card 12 only md */}
                                    <div className="bg-white rounded-md shadow-md hidden md:inline">
                                        <img src={Produk3} alt="" className="w-full object-cover h-[165px] md:h-[287px]" />
                                        <h1 className="text-[12px] md:pl-2">Mens wear</h1>
                                        <p className="text-[14px] font-bold md:pl-2">Hoddie bahan dengan 100% katun</p>
                                        <div className="md:flex mt-1 mb-1">
                                            <p className="text-[12px] md:pl-2">Rp. 300.000,-</p>
                                            <p className="line-through text-[12px] md:pl-2">Rp. 500.000,-</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* hp button */}
                            <div className="box text-center mt-10 md:hidden">
                                <p className="mb-10"><Link to="/product" className="px-[16px] py-[8px] border-t-[1px] border-l-[1px] border-r-[3px] border-b-[3px] border-black bg-secondary">View more <i className="bi bi-arrow-right"></i></Link></p>
                            </div>
                            {/* md button */}
                            <div className="box text-end mt-10 md:inline hidden">
                                <p className="my-10"><Link to="/product" className="px-[16px] py-[8px] border-t-[1px] border-l-[1px] border-r-[3px] border-b-[3px] border-black bg-secondary">All produk<i className="bi bi-arrow-right"></i></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}