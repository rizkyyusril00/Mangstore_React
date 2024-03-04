import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Person2 from '../../img/person2.png'


function PauseOnHover3() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <>
            {/* mobile */}
            <div className="block md:hidden">
                <div className="bg-primary">
                    <div className="slider-container overflow-hidden">
                        <Slider {...settings}>
                            <div className="">
                                <h1 className="text-secondary text-center mt-10 text-4xl">“Its really fun and easy shopping at Mangstore”</h1>
                                <p className="text-[16px] text-secondary text-center my-10">Gilang Permana</p>
                                <div className="w-[306px] h-[306px] mb-10 rounded-[50%] bg-secondary relative flex items-center justify-center mx-auto">
                                    <img src={Person2} alt="" className="h-[390px] w-[290px] z-10 absolute right-4"/>
                                </div>
                            </div>
                            <div className="">
                                <h1 className="text-secondary text-center mt-10 text-4xl">“Its really fun and easy shopping at Mangstore”</h1>
                                <p className="text-[16px] text-secondary text-center my-10">Gilang Permana</p>
                                <div className="w-[306px] h-[306px] mb-10 rounded-[50%] bg-secondary relative flex items-center justify-center mx-auto">
                                    <img src={Person2} alt="" className="h-[390px] w-[290px] z-10 absolute right-4"/>
                                </div>
                            </div>
                            <div className="">
                                <h1 className="text-secondary text-center mt-10 text-4xl">“Its really fun and easy shopping at Mangstore”</h1>
                                <p className="text-[16px] text-secondary text-center my-10">Gilang Permana</p>
                                <div className="w-[306px] h-[306px] mb-10 rounded-[50%] bg-secondary relative flex items-center justify-center mx-auto">
                                    <img src={Person2} alt="" className="h-[390px] w-[290px] z-10 absolute right-4"/>
                                </div>
                            </div>
                            <div className="">
                                <h1 className="text-secondary text-center mt-10 text-4xl">“Its really fun and easy shopping at Mangstore”</h1>
                                <p className="text-[16px] text-secondary text-center my-10">Gilang Permana</p>
                                <div className="w-[306px] h-[306px] mb-10 rounded-[50%] bg-secondary relative flex items-center justify-center mx-auto">
                                    <img src={Person2} alt="" className="h-[390px] w-[290px] z-10 absolute right-4"/>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

            {/* md */}
            <div className="hidden md:block">
                <div className="bg-primary p-10">
                    <div className="slider-container ">
                        <Slider {...settings}>
                            <div className="">
                                <div className="flex gap-4 relative">
                                    <img src={Person2} alt="" className="lg:h-[440px] h-[390px] w-[290px] z-20 absolute -top-8 -right-6 lg:-top-16 lg:right-6 xl:right-40"/> 
                                    {/* kiri */}
                                    <div className="box w-2/3">
                                        <h1 className="text-secondary mt-10 text-5xl">“Its really fun and easy shopping at Mangstore”</h1>
                                        <p className="text-secondary mt-24 lg:mt-36 text-[24px]">Gilang Permana</p>
                                    </div>
                                    {/* kanan */}
                                    <div className="box w-1/3">
                                        <div className="w-[220px] h-[220px] lg:w-[306px] lg:h-[306px] rounded-[50%] bg-secondary my-auto"></div>
                                    </div>
                                </div>  
                            </div>
                            <div className="">
                                <div className="flex gap-4 relative">
                                    <img src={Person2} alt="" className="lg:h-[440px] h-[390px] w-[290px] z-20 absolute -top-8 -right-6 lg:-top-16 lg:right-6 xl:right-40"/>
                                    {/* kiri */}
                                    <div className="box w-2/3">
                                        <h1 className="text-secondary mt-10 text-5xl">“Its really fun and easy shopping at Mangstore”</h1>
                                        <p className="text-secondary mt-24 lg:mt-32 text-[24px]">Gilang Permana</p>
                                    </div>
                                    {/* kanan */}
                                    <div className="box w-1/3">
                                        <div className="w-[220px] h-[220px] lg:w-[306px] lg:h-[306px] rounded-[50%] bg-secondary my-auto"></div>
                                    </div>
                                </div>  
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PauseOnHover3;
