// import Produk2 from '../../img/produk2.jpeg'
import PauseOnHover from "./carousel2"
import { Link } from 'react-router-dom'

export default function FavoriteHome(){
    // const myText = '\''
    return(
        <>
            <section className="bg-secondary pb-[30px]">
                <div className="favorit">
                    <div className="container mx-auto md:px-10 px-5">
                        <div className="favorit-box md:flex md:gap-2 md:items-center">
                            <div className="box md:w-1/2 w-full md:my-20">
                                <h1 data-aos="fade-right" className="text-[32px] md:text-[52px] font-bold text-center md:text-start">Produk favorit kami bulan ini</h1>
                                <p className="mt-10"><Link to="/product" className="md:inline hidden px-[16px] py-[8px] text-center border-t-[1px] border-l-[1px] border-r-[3px] border-b-[3px] border-black bg-secondary">View more <i className="bi bi-arrow-right"></i></Link></p>
                            </div>
                            {/* carousel */}
                            <PauseOnHover />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}