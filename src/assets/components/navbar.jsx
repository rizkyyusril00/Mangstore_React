import { Link } from 'react-router-dom';
import Logo from '../../img/Logo.png'
import { useState } from 'react';


export default function Navbar(){
    // menu hamburger
    const [openMenu, setOpenMenu] = useState(false);
    const [openSearchMobile, setOpenSearchMobile] = useState(false);

    const toggleSearchBar = () => {
        const search = document.querySelector("#searchButton");
        const searchBar = document.querySelector("#search-bar");
        const mangStore = document.querySelector("#Tagline");
        const logo = document.querySelector("#logo");
        const linkHome = document.querySelector("#linkHome");
        const linkProduk = document.querySelector("#linkProduk");
        const linkBlog = document.querySelector("#linkBlog");
        const cart = document.querySelector("#cart");
        const contactUS = document.querySelector("#contactUs");
        const iconSearch = document.querySelector("#iconSearch");

        search.addEventListener('click', () => {
            searchBar.classList.toggle("search-bar-active");
            mangStore.classList.toggle("invisible");
            logo.classList.toggle("invisible");
            linkHome.classList.toggle("hidden");
            linkProduk.classList.toggle("hidden");
            linkBlog.classList.toggle("hidden");
            cart.classList.toggle("invisible");
            contactUS.classList.toggle("invisible");

            // Perbarui nilai cekIcon setiap kali tombol diklik
            const cekIcon = iconSearch.classList.contains("bi-search");
            

            // icon
            if (cekIcon) {
                iconSearch.classList.remove("bi-search");
                iconSearch.classList.add("bi-x-lg");
            } else {
                iconSearch.classList.remove("bi-x-lg");
                iconSearch.classList.add("bi-search");
            }
            // searchbar
            if (searchBar.classList.contains("md:w-0")) {
                searchBar.classList.remove("md:w-0");
                searchBar.classList.add("md:w-[250px]");
            } else {
                searchBar.classList.remove("md:w-[250px]");
                searchBar.classList.add("md:w-0");
            }
    });
}


    return(
        <>
            <div className="navbar bg-primary md:px-10 px-5 py-3 relative z-30">
                {/* searchbar */}
                <div className={`searchMobile md:hidden flex gap-2 justify-center items-center bg-primary absolute transition-all duration-300 ease-in-out  w-full h-full ${openSearchMobile ? 'searchMobile-active z-10' : ''}`}>
                    <div className="relative">
                        <input type="text" placeholder="Search" className="text-primary bg-white border border-black py-2 px-4 w-full pr-10" />
                        <p><i className="bi bi-search text-primary absolute top-0 right-0 mt-2 mr-2"></i></p>
                    </div>
                    <button onClick={() => setOpenSearchMobile(!openSearchMobile)} className="mr-3 md:hidden"><i className="bi bi-x-lg text-blueGrey hover:text-secondary"></i></button>
                </div>
                <div className="container mx-auto">
                    <div className="navbar-box flex items-center justify-between">
                        <div className="logo flex items-center gap-2">
                            <img src={Logo} id='logo' alt="" className="w-[28.37px]"/>
                            <h1 id='Tagline' className="font-bold hover:text-secondary text-lightGrey mr-10 text-[11.31px] md:text-[15.94px]">MangStore</h1>
                            <div className="hidden md:flex gap-[10px]">
                                <h2 id='linkHome' className="text-[14px] hover:text-secondary text-lightGrey"><Link to='/'>Home</Link></h2>
                                <h2 id='linkProduk' className="text-[14px] hover:text-secondary text-lightGrey"><Link to='/product'>Product</Link></h2>
                                <h2 id='linkBlog' className="text-[14px] hover:text-secondary text-lightGrey"><Link to='/blog'>Blog</Link></h2>
                            </div>
                            {/* searchbar */}
                            <div id='search-bar' className='search-bar border border-white md:flex justify-between md:w-0 lg:w-[400px] xl:w-[680px] hidden overflow-hidden'>
                                <input type="text" placeholder='Search Something' className='bg-transparent text-secondary placeholder-secondary w-full pr-10' />
                                <a href="" className="p-2  text-[14px] border-lightGrey "><i className="bi bi-search hover:text-secondary text-blueGrey hover:border-secondary"></i></a>
                            </div>
                        </div>
                        <div className="md:flex gap-[8px] hidden">
                            <button id='searchButton' onClick={toggleSearchBar} className="p-[10px] border-[1px] text-[14px] border-lightGrey"><i id='iconSearch' className="bi bi-search hover:text-secondary text-blueGrey hover:border-secondary"></i></button>
                            <Link to="/checkout" id='cart' className="p-[10px] border-[1px] text-[14px] border-lightGrey"><i className="bi bi-cart3 hover:text-secondary text-blueGrey hover:border-secondary"></i></Link>
                            <Link to='/contact' id='contactUs' className="px-[32px] py-[10px] bg-secondary text-[16px] transition-transform ease-in-out transform-gpu hover:scale-95 duration-500">Contact Us</Link>
                        </div>
                        {/* menu pop up */}
                        <ul id="menu" className={`menu flex  font-bold items-center absolute z-10 top-[58px] left-0 flex-col bg-primary w-full md:hidden ${openMenu ? 'menu-active' : ''}`}>
                            <li className="py-3 w-full text-center"><Link to='/' className="hover:bg-secondary text-secondary px-[117px] py-[10px] hover:text-primary text-[16px]">Home</Link></li>
                            <li className="py-3 w-full text-center"><Link to="/product" className="hover:bg-secondary text-secondary px-[117px] py-[10px] hover:text-primary text-[16px]">Produk</Link></li>
                            <li className="py-3 w-full text-center"><Link to="/blog" className="hover:bg-secondary text-secondary px-[117px] py-[10px] hover:text-primary text-[16px]">Blog</Link></li>
                            <li className="py-3 w-full text-center"><Link to="/contact" className="hover:bg-secondary text-secondary px-[117px] py-[10px] hover:text-primary text-[16px]">Kontak</Link></li>
                        </ul>
                        {/* hamburger */}
                        <div className="md:hidden">
                            {/* icon */}
                            <button onClick={() => setOpenSearchMobile(!openSearchMobile)} className="mr-3 md:hidden"><i className="bi bi-search text-blueGrey hover:text-secondary"></i></button>
                            <Link to="/checkout" className="mr-3"><i className="bi bi-cart3 text-blueGrey hover:text-secondary"></i></Link>
                            <button id="burger" onClick={() => setOpenMenu(!openMenu)}  className={`hamburger hamburger--spin ${openMenu ? 'is-active' : ''}`} type="button">
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