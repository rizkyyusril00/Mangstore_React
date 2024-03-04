import Produk1 from '../../img/produk1.jpeg'


export default function ProdukHome(){
    return(
        <>
            <section>
                <div className="produk">
                    <div className="container mx-auto md:px-10 px-5">
                        <div className="produk-box md:gap-[24px] md:mt-10 md:flex items-center">
                            {/* card 1 */}
                            <div className="box">
                                <img src={Produk1} alt="" className="w-full h-[327px] lg:h-[364px] md:h-[300px] mt-4 md:mt-0" />
                                <h1 className="font-bold text-[24px] mb-2">Teruslah bergaya dengan hoodie boxie</h1>
                                <p className="text-[14px] mb-5">aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos </p>
                                <p className="md:mb-32 mb-10"><a href="" className="text-[14px] md:text-[16px] bg-secondary px-[16px] py-[12px]">Look the produk</a></p>
                            </div>
                            {/* card 2 */}
                            <div className="box">
                                <img src={Produk1} alt="" className="w-full h-[327px] lg:h-[364px] md:h-[300px]" />
                                <h1 className="font-bold text-[24px] mb-2">Teruslah bergaya dengan hoodie boxie</h1>
                                <p className="text-[14px] mb-5">aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos </p>
                                <p className="md:mb-32 mb-10"><a href="" className="text-[14px] md:text-[16px] bg-secondary px-[16px] py-[12px]">Look the produk</a></p>
                            </div>
                            {/* card 3 */}
                            <div className="box">
                                <img src={Produk1} alt="" className="w-full h-[327px] lg:h-[364px] md:h-[300px]" />
                                <h1 className="font-bold text-[24px] mb-2">Teruslah bergaya dengan hoodie boxie</h1>
                                <p className="text-[14px] mb-5">aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos </p>
                                <p className="md:mb-32 mb-10"><a href="" className="text-[14px] md:text-[16px] bg-secondary px-[16px] py-[12px]">Look the produk</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}