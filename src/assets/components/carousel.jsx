import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Produk2 from '../../img/produk2.jpeg'
import Produk3 from '../../img/produk3.jpg'

function PauseOnHover2() {
    var settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true
    };
    return (
        <>
            {/* mobile */}
            <div className="block md:hidden">
                <div className="slider-container mt-5 overflow-hidden">
                <Slider {...settings}>
                    {/* 1 */}
                    <div>
                        <div className="carousel-cell-3">
                            <img src={Produk2} alt="" className="w-full h-[383px]" />
                        </div>
                    </div>
                    {/* 2 */}
                    <div>
                        <div className="carousel-cell-3">
                            <img src={Produk2} alt="" className="w-full h-[383px]" />
                        </div>
                    </div>
                    {/* 3 */}
                    <div>
                        <div className="carousel-cell-3">
                            <img src={Produk2} alt="" className="w-full h-[383px]" />
                        </div>
                    </div>
                    {/* 4 */}
                    <div>
                        <div className="carousel-cell-3">
                            <img src={Produk2} alt="" className="w-full h-[383px]" />
                        </div>
                    </div>
                </Slider>
                </div>
            </div>

            {/* md */}
            <div className="hidden md:block">
                <div className="slider-container mt-5 overflow-hidden">
                <Slider {...settings}>
                    {/* 1 */}
                    <div>
                        <div className="carousel-cell-3">
                            <img src={Produk3} alt="" className="h-[650px] w-[557px]" />  
                        </div>
                    </div>
                    {/* 2 */}
                    <div>
                        <div className="carousel-cell-3">
                            <img src={Produk3} alt="" className="h-[650px] w-[557px]" />  
                        </div>
                    </div>
                    {/* 3 */}
                    <div>
                        <div className="carousel-cell-3">
                            <img src={Produk3} alt="" className="h-[650px] w-[557px]" />  
                        </div>
                    </div>
                    {/* 4 */}
                    <div>
                        <div className="carousel-cell-3">
                            <img src={Produk3} alt="" className="h-[650px] w-[557px]" />  
                        </div>
                    </div>
                    
                </Slider>
                </div>
            </div>
        </>
    );
}

export default PauseOnHover2;
