import { Link } from 'react-router-dom'
import Logo from '../../img/Logo.png'

export default function Footer() {

    return(
        <>
            <section className="bg-primary pb-[17px]">
                <div className="footer">
                    <div className="container mx-auto px-5">
                        <div className="box">
                            {/* mobile */}
                            <div className="inline lg:hidden">
                                {/* img */}
                                <div className="flex justify-center items-center gap-2">
                                    <img src={Logo} alt="" className="w-[28.37px] mt-12" />
                                    <h1 className="text-[20px] font-bold  text-white hover:text-secondary mt-12">MangStore</h1>
                                </div>
                                {/* paragraf */}
                                <div className="flex justify-center items-center px-10 text-center">
                                    <p className="text-[16px] text-white mt-4">Mangstore is the solution for high quality goods you need</p>
                                </div>
                                {/* button */}
                                <div className="flex justify-center items-center text-center gap-[8px] my-4">
                                    <a href="https://www.tokopedia.com/" target='blank' className="py-[8px] px-[16px] md:text-[16px] text-[14px] bg-secondary text-primary  mt-4">Tokopedia <i className="bi bi-arrow-right"></i></a>
                                    <a href="https://shopee.co.id/" target='blank' className="py-[8px] px-[16px] md:text-[16px] text-[14px] bg-secondary text-primary mt-4">Shopee <i className="bi bi-arrow-right"></i></a>
                                </div>
                                {/* icon */}
                                <div className="flex justify-center text-center gap-[16px]">
                                    <a href="" className="text-[16px] text-secondary mt-8"><i className="bi bi-instagram"></i></a>
                                    <a href="" className="text-[16px] text-secondary mt-8"><i className="bi bi-whatsapp"></i></a>
                                    <a href="" className="text-[16px] text-secondary mt-8"><i className="bi bi-linkedin"></i></a>
                                    <a href="" className="text-[16px] text-secondary mt-8"><i className="bi bi-twitter-x"></i></a>
                                </div>
                                {/* copyright */}
                                <div className="flex justify-center text-center mt-2">
                                    <p className="text-[14px] text-secondary"><i className="bi bi-c-circle"></i> 2023 Mangcoding. All rights reserved.</p>
                                </div>
                            </div>

                            {/* md */}
                            <div className='hidden lg:flex'>
                                <div className='box w-full flex justify-between md:gap-1'>
                                    {/* img */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-4 mt-12">
                                            <img src={Logo} alt="" className="w-[28.37px]" />
                                            <h1 className="text-[20px] text-white font-bold hover:text-secondary">MangStore</h1>
                                        </div>
                                        <p className="text-[16px] mb-2 text-white" data-aos="fade-down">Mangstrore is the solution for high quality goods you need</p>
                                    </div>
                                    {/* menu 1 */}
                                    <div>
                                        <h1 className="text-secondary text-[16px] mb-4 mt-12">Mangstore</h1>
                                        <ul data-aos="fade-down">
                                            <li><Link to='/' className="text-white hover:text-secondary tex-[14px]">about mangstore</Link></li>
                                            <li><Link to='/' className="text-white hover:text-secondary tex-[14px]">Home</Link></li>
                                            <li><Link to='/product' className="text-white hover:text-secondary tex-[14px]">Product</Link></li>
                                            <li><Link to='/blog' className="text-white hover:text-secondary tex-[14px]">Blog</Link></li>
                                        </ul>
                                    </div>
                                    {/* menu 2 */}
                                    <div>
                                        <h1 className="text-secondary text-[16px] mb-4 mt-12">Buy</h1>
                                        <ul data-aos="fade-down">
                                            <li><a href="" className="text-white hover:text-secondary text-[14px]">Mens Wear</a></li>
                                            <li><a href="" className="text-white hover:text-secondary text-[14px]">Womans Wear</a></li>
                                            <li><a href="" className="text-white hover:text-secondary text-[14px]">Kids Wear</a></li>
                                            <li><a href="" className="text-white hover:text-secondary text-[14px]">Sprort Wear</a></li>
                                            <li><a href="" className="text-white hover:text-secondary text-[14px]">Shoes</a></li>
                                            <li><a href="" className="text-white hover:text-secondary text-[14px]">Head Wear</a></li>
                                        </ul>
                                    </div>
                                    {/* menu 3 */}
                                    <div>
                                        <h1 className="text-secondary mb-4 mt-12 text-[16px]">Find Us In</h1>
                                        <ul data-aos="fade-down">
                                            <li className="mb-7"><Link to="https://www.tokopedia.com/" target='blank' className="py-[5px] px-[1px] lg:p-[10px] md:text-[14px] text-[14px] bg-secondary text-primary">Tokopedia <i className="bi bi-arrow-right"></i></Link></li>
                                            <li><Link to="https://shopee.co.id/" target='blank' className="p-[5px] lg:py-[10px] lg:pl-[10px] lg:pr-[8px] md:text-[14px] text-[14px] bg-secondary text-primary">Shopee <i className="bi bi-arrow-right lg:ml-[20px]"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* icon */}
                            <div className='hidden md:flex justify-between mt-10'>
                                <div className="flex gap-[16px]">
                                    <Link to="https://www.instagram.com/mangcoding.official/" target='blank' className="text-[16px] text-secondary "><i className="bi bi-instagram"></i></Link>
                                    <Link to="https://web.whatsapp.com" target='blank' className="text-[16px] text-secondary "><i className="bi bi-whatsapp"></i></Link>
                                    <Link to="https://www.linkedin.com" target='blank' className="text-[16px] text-secondary "><i className="bi bi-linkedin"></i></Link>
                                    <Link to="https://twitter.com/" target='blank' className="text-[16px] text-secondary "><i className="bi bi-twitter-x"></i></Link>
                                </div>
                                <div>
                                    <h1 className="text-[16px] text-secondary"><i className="bi bi-c-circle"></i> 2023 <span> <Link to='https://mangcoding.com/' target='blank'>Mangcoding.</Link></span> All rights reserved.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}