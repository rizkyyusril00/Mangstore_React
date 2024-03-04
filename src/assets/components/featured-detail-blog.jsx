import Produk11 from '../../img/produk11.jpg'

export default function FeaturedBlog() {
    return(
        <>
            <section className="inline-block md:hidden">
                <div className="featured">
                    <div className="container mx-auto md:px-10 px-5 mb-4">
                        <div className="featured-box">
                            {/* featured */}
                            <div className="flex flex-col gap-2 my-4">
                                <h1 className="text-primary text-[18px] font-bold">Featured</h1>
                                {/* 1 */}
                                <div className="bg-lightGrey p-[10px] rounded-lg">
                                    <h1 className="text-[14px] text-primary font-bold">Tantangan dan Peluang: Perkembangan Teknologi dalam Ranah Politik di Indonesia</h1>
                                </div>
                                {/* 2 */}
                                <div className="bg-lightGrey p-[10px] rounded-lg">
                                    <h1 className="text-[14px] text-primary font-bold">Menuju era digital : Bagaimana teknologi mempengaruhi pola komunikasi politik</h1>
                                </div>
                                {/* 3 */}
                                <div className="bg-lightGrey p-[10px] rounded-lg">
                                    <h1 className="text-[14px] text-primary font-bold">transformasi media sosiak : Dampaknya terhadap dinamika politik kontemporer</h1>
                                </div>
                                {/* 4 */}
                                <div className="bg-lightGrey p-[10px] rounded-lg">
                                    <h1 className="text-[14px] text-primary font-bold">Keamanan data dan privasi dalam kampanye politik berbasis teknologi</h1>
                                </div>
                                {/* 5 */}
                                <div className="bg-lightGrey p-[10px] rounded-lg">
                                    <h1 className="text-[14px] text-primary font-bold">Keamanan data dan privasi dalam kampanye politik berbasis teknologi</h1>
                                </div>
                            </div>
                            {/* artikel */}
                            <div>
                                <h1 className="text-[18px] font-bold text-primary mb-2">Popular</h1>
                                {/* 1 */}
                                <div className="box flex gap-2 mb-2">
                                    <div className="w-[154px] h-[106px]">
                                        <img src={Produk11} alt="" className="w-[154px] h-[106px]" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h1 className="font-bold text-[12px] text-primary">fasion - <span className="font-normal text-slate-500">10 Mins Ago</span></h1>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                {/* 2 */}
                                <div className="box flex gap-2 mb-2">
                                    <div className="w-[154px] h-[106px]">
                                        <img src={Produk11} alt="" className="w-[154px] h-[106px]" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h1 className="font-bold text-[12px] text-primary">fasion - <span className="font-normal text-slate-500">10 Mins Ago</span></h1>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="box flex gap-2">
                                    <div className="w-[154px] h-[106px]">
                                        <img src={Produk11} alt="" className="w-[154px] h-[106px]" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h1 className="font-bold text-[12px] text-primary">fasion - <span className="font-normal text-slate-500">10 Mins Ago</span></h1>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
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