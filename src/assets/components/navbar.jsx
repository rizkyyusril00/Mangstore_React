import { Link } from 'react-router-dom';
import Logo from '../../img/Logo.png'


export default function Navbar(){
    const handleToggle = () => {
    
        const hamburger = document.querySelector("#burger");
        const menu = document.querySelector("#menu");

        hamburger.addEventListener('click', () =>{
            hamburger.classList.toggle("is-active");

            menu.classList.toggle("menu-active");
        })
    }
    return(
        <>
            <div className="navbar bg-primary md:px-10 px-5 py-3">
                <div className="container mx-auto">
                    <div className="navbar-box flex items-center justify-between">
                        <div className="logo flex items-center gap-2">
                            <img src={Logo} alt="" className="w-[28.37px]"/>
                            <h1 className="font-bold hover:text-secondary text-lightGrey mr-10 text-[11.31px] md:text-[15.94px]">MangStore</h1>
                            <div className="hidden md:flex gap-[10px]">
                                <h2 className="text-[14px] hover:text-secondary text-lightGrey"><Link to='/'>Home</Link></h2>
                                <h2 className="text-[14px] hover:text-secondary text-lightGrey"><Link to='/product'>Product</Link></h2>
                                <h2 className="text-[14px] hover:text-secondary text-lightGrey"><Link to='/blog'>Blog</Link></h2>
                            </div>
                            {/* searchbar */}
                            {/* <div className='border border-white p-2 flex justify-between w-[680px]'>
                                <input type="text" placeholder='Search Something' className='bg-transparent text-secondary placeholder-secondary w-[600px]' />
                                <a href="" className="p-2 border-[1px] text-[14px] border-lightGrey "><i className="bi bi-search hover:text-secondary text-blueGrey hover:border-secondary"></i></a>
                            </div> */}
                        </div>
                        <div className="md:flex gap-[8px] hidden">
                            <a href="" className="p-[10px] border-[1px] text-[14px] border-lightGrey "><i className="bi bi-search hover:text-secondary text-blueGrey hover:border-secondary"></i></a>
                            <a href="/checkout" className="p-[10px] border-[1px] text-[14px] border-lightGrey"><i className="bi bi-cart3 hover:text-secondary text-blueGrey hover:border-secondary"></i></a>
                            <Link to='/contact' className="px-[32px] py-[10px] bg-secondary text-[16px]">Contact Us</Link>
                        </div>
                        {/* menu pop up */}
                        <ul id="menu" className="menu flex  font-bold items-center absolute z-10 top-[58px] left-0 flex-col bg-primary w-full md:hidden">
                            <li className="py-3 w-full text-center"><a href="/" className="hover:bg-secondary text-secondary px-[117px] py-[10px] hover:text-primary text-[16px]">Home</a></li>
                            <li className="py-3 w-full text-center"><a href="/product" className="hover:bg-secondary text-secondary px-[117px] py-[10px] hover:text-primary text-[16px]">Produk</a></li>
                            <li className="py-3 w-full text-center"><a href="/blog" className="hover:bg-secondary text-secondary px-[117px] py-[10px] hover:text-primary text-[16px]">Blog</a></li>
                            <li className="py-3 w-full text-center"><a href="/contact" className="hover:bg-secondary text-secondary px-[117px] py-[10px] hover:text-primary text-[16px]">Kontak</a></li>
                        </ul>
                        {/* hamburger */}
                        <div className="md:hidden">
                            {/* icon */}
                            <a href="" className="mr-3"><i className="bi bi-search text-blueGrey hover:text-secondary"></i></a>
                            <a href="/checkout" className="mr-3"><i className="bi bi-cart3 text-blueGrey hover:text-secondary"></i></a>
                            <button id="burger" onClick={handleToggle} className="hamburger hamburger--spin" type="button">
                                <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}