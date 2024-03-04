import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Produk2 from '../../img/produk2.jpeg'


function PauseOnHover() {
    var settings = {
        infinite: false,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.5,
                }
            }
        ]
    };
    return (
        <>
            <div className="slider-container mx-auto md:px-10 px-5 block md:w-1/2 w-full md:my-20">
                <Slider {...settings}>
                    <div className="bg-secondary h-[330px] md:h-[416px] w-full md:mt-7 lg:mt-0">
                        <div className="carousel-cell h-[292px] w-full">
                            <img src={Produk2} alt="" className="w-full h-[165px] md:h-[207px] lg:h-[287px]" />
                            <h1 className="text-[12px] font-bold ml-2 mt-2 text-primary">Womans wear</h1>
                            <p className="text-[14px] md:text-[16px] ml-2 my-1 font-bold text-primary">Hoodie bahan dengan 100% katun</p>
                            <p className="text-[12px] font-bold ml-2 mb-1 text-primary">Rp. 300.000,-</p>
                            <p className="text-[12px] line-through ml-2 text-primary">Rp. 500.000,-</p>
                        </div>
                    </div>
                    <div className="bg-secondary h-[330px] md:h-[416px] w-full md:mt-7 lg:mt-0">
                        <div className="carousel-cell h-[292px] w-full">
                            <img src={Produk2} alt="" className="w-full h-[165px] md:h-[207px] lg:h-[287px]" />
                            <h1 className="text-[12px] font-bold ml-2 mt-2 text-primary">Womans wear</h1>
                            <p className="text-[14px] md:text-[16px] ml-2 my-1 font-bold text-primary">Hoodie bahan dengan 100% katun</p>
                            <p className="text-[12px] font-bold ml-2 mb-1 text-primary">Rp. 300.000,-</p>
                            <p className="text-[12px] line-through ml-2 text-primary">Rp. 500.000,-</p>
                        </div>
                    </div>
                    <div className="bg-secondary h-[330px] md:h-[416px] w-full md:mt-7 lg:mt-0">
                        <div className="carousel-cell h-[292px] w-full">
                            <img src={Produk2} alt="" className="w-full h-[165px] md:h-[207px] lg:h-[287px]" />
                            <h1 className="text-[12px] font-bold ml-2 mt-2 text-primary">Womans wear</h1>
                            <p className="text-[14px] md:text-[16px] ml-2 my-1 font-bold text-primary">Hoodie bahan dengan 100% katun</p>
                            <p className="text-[12px] font-bold ml-2 mb-1 text-primary">Rp. 300.000,-</p>
                            <p className="text-[12px] line-through ml-2 text-primary">Rp. 500.000,-</p>
                        </div>
                    </div>
                    <div className="bg-secondary h-[330px] md:h-[416px] w-full md:mt-7 lg:mt-0">
                        <div className="carousel-cell h-[292px] w-full">
                            <img src={Produk2} alt="" className="w-full h-[165px] md:h-[207px] lg:h-[287px]" />
                            <h1 className="text-[12px] font-bold ml-2 mt-2 text-primary">Womans wear</h1>
                            <p className="text-[14px] md:text-[16px] ml-2 my-1 font-bold text-primary">Hoodie bahan dengan 100% katun</p>
                            <p className="text-[12px] font-bold ml-2 mb-1 text-primary">Rp. 300.000,-</p>
                            <p className="text-[12px] line-through ml-2 text-primary">Rp. 500.000,-</p>
                        </div>
                    </div>
                    
                </Slider>
            </div>  
        </>
    );
}

export default PauseOnHover;
