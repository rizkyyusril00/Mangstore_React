// import { Link } from 'react-router-dom'
import Produk13 from '../../img/produk13.jpg'
import Produk14 from '../../img/produk14.jpg'
import { Link } from 'react-router-dom'

export default function FashionBlog() {
    return (
        <>
            <section>
                <div className="fashion">
                    <div className="continer mx-auto md:px-10 px-5">
                        <div className="fashion-box">
                            {/* mobile */}
                            <div className="inline md:hidden">
                                <div className="flex justify-between mt-2">
                                    <h1 data-aos="fade-right" className="text-[14px] font-bold text-primary">Fashion</h1>
                                    <a href='/detail-blog'><i className="bi bi-arrow-right text-primary"></i></a>
                                </div>
                                {/* big img */}
                                <div className="w-full h-[210px] bg-red-50 mt-1 relative">
                                    <img src={Produk13} alt="" className="w-full h-full object-cover" />
                                    <div className="absolute bottom-2 left-2 border border-primary bg-lightGrey p-[10px] md:w-3/4 opacity-85 w-[217px]">
                                        <h1 className="font-bold text-[14px] text-primary mb-1">Fashion - <span className="font-normal text-[14px] text-slate-500">10 Mins Ago</span></h1>
                                        <h1 className="font-bold text-[14px] mb-1 text-primary">Nikes best line of shoes in 2023 for running</h1>
                                    </div>
                                </div>
                                {/* artikel */}
                                {/* 1 */}
                                <div className="box flex gap-2 mb-2 mt-2">
                                    <div className="w-[154px] h-full">
                                        <img src={Produk14} alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h1 className="font-bold text-[12px] text-primary">fasion - <span className="font-normal text-slate-500">10 Mins Ago</span></h1>
                                        <h1 className="font-bold text-[14px] text-primary">best nike air jordan colors you choose in 2023</h1>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                {/* 2 */}
                                <div className="box flex gap-2 mb-2 mt-2">
                                    <div className="w-[154px] h-full">
                                        <img src={Produk14} alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h1 className="font-bold text-[12px] text-primary">fasion - <span className="font-normal text-slate-500">10 Mins Ago</span></h1>
                                        <h1 className="font-bold text-[14px] text-primary">best nike air jordan colors you choose in 2023</h1>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>

                            {/* md */}
                            <div className="hidden md:inline">
                                {/* upper */}
                                <div className="flex justify-between mt-3">
                                    <h1 data-aos="fade-right" className="text-[24px] font-bold text-primary">Fashion</h1>
                                    {/* button */}
                                    <div className="box">
                                        <p><Link to="/detail-blog" className="px-[16px] py-[8px] border-t-[1px] border-l-[1px] border-r-[3px] border-b-[3px] border-black bg-secondary">View more <i className="bi bi-arrow-right"></i></Link></p>
                                    </div>
                                </div>
                                {/* konten */}
                                <div>
                                    <div className='h-[380px] flex gap-2'>
                                        <div className='box w-1/2 relative'>
                                            <img src={Produk13} alt="" className="h-full w-full object-cover" />
                                            <div className="absolute bottom-2 left-2 border border-primary bg-lightGrey p-[10px] md:w-3/4 opacity-85 w-1/2">
                                                <h1 className="font-bold text-[14px] text-primary mb-1">Fashion - <span className="font-normal text-[14px] text-slate-500">10 Mins Ago</span></h1>
                                                <h1 className="font-bold text-[14px] mb-1 text-primary">Nikes best line of shoes in 2023 for running</h1>
                                            </div>
                                        </div>
                                        <div className="box w-1/2">
                                            <div className='flex flex-col gap-2 overflow-hidden h-[380px]'>
                                                {/* 1 */}
                                                <div className="flex h-1/2 gap-2">
                                                    <img src={Produk13} alt="" className="h-full w-1/2 object-cover" />
                                                    <div className="inline md:overflow-y-scroll lg:overflow-hidden">
                                                        <h1 className="font-bold text-[14px] text-primary mb-1 ">Fashion - <span className="font-normal text-[14px] text-slate-500">10 Mins Ago</span></h1>
                                                        <h1 className="font-bold text-[18px] mb-1">Nikes best line of shoes in 2023</h1>
                                                        <p className="mb-1 text-[14px] text-slate-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam impedit alias provident beatae porro fuga quisquam praesentium delectus nobis eligendi?</p>
                                                    </div>
                                                </div>
                                                {/* 2 */}
                                                <div className="flex h-1/2 gap-2">
                                                    <img src={Produk13} alt="" className="h-full w-1/2 object-cover" />
                                                    <div className="inline md:overflow-y-scroll lg:overflow-hidden">
                                                        <h1 className="font-bold text-[14px] text-primary mb-1">Fashion - <span className="font-normal text-[14px] text-slate-500">10 Mins Ago</span></h1>
                                                        <h1 className="font-bold text-[18px] mb-1">Nikes best line of shoes in 2023</h1>
                                                        <p className="mb-1 text-[14px] text-slate-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam impedit alias provident beatae porro fuga quisquam praesentium delectus nobis eligendi?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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