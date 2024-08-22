import Produk12 from '../../img/produk12.jpg'
import Produk10 from '../../img/produk10.jpg'
import Produk11 from '../../img/produk11.jpg'

export default function BlogHero() {
    return (
        <>
            <section>
                <div className="blog">
                    <div className="container mx-auto md:px-10 xl:px-5 px-5">
                        <div className="hero-box w-full">
                            {/* mobile */}
                            <div className="inline-block md:hidden">
                                {/* big img */}
                                <div className="box mb-2">
                                    <div className="w-full h-[210px] mt-2">
                                        <img src={Produk10} alt="" className="h-full w-full object-cover" />
                                    </div>
                                </div>
                                {/* artikel */}
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
                                <div className="box flex gap-2 mb-2">
                                    <div className="w-[154px] h-[106px]">
                                        <img src={Produk11} alt="" className="w-[154px] h-[106px]" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h1 className="font-bold text-[12px] text-primary">fasion - <span className="font-normal text-slate-500">10 Mins Ago</span></h1>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>

                            {/* md */}
                            <div className="md:inline-block hidden lg:w-full">
                                <div className="box flex flex-col mt-2 mb-5">
                                    {/* big img */}
                                    <div className="h-[600px] w-full relative">
                                        <img src={Produk12} alt="" className="h-full w-full object-cover" />
                                        <div className="absolute bottom-4 left-4 border border-primary bg-lightGrey p-[10px] md:w-3/4 md:opacity-85 w-[746px]">
                                            <h1 className="font-bold text-[14px] text-primary mb-1">Fashion - <span className="font-normal text-[14px] text-slate-500">10 Mins Ago</span></h1>
                                            <h1 className="font-bold text-[24px] mb-1">Nikes best line of shoes in 2023</h1>
                                            <p className="mb-1 text-[14px] text-slate-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, a eligendi accusamus cumque, beatae consequatur veniam corrupti sapiente molestiae laborum rem animi cum aperiam praesentium quam est repellendus! Id, odio ex quasi repellendus molestiae repudiandae illo dolor deserunt ad totam. Voluptatibus vitae perferendis consectetur laboriosam placeat soluta iure amet nihil?</p>
                                        </div>
                                    </div>
                                    {/* artikel */}
                                    <div className='grid grid-cols-3 gap-4 mt-2'>
                                        {/* card 1 */}
                                        <div className="bg-white rounded-md shadow-md aspect-video">
                                            <img src={Produk11} alt="" className="w-full h-[165px] md:h-[287px] object-cover" />
                                            <h1 className="font-bold text-[14px] text-primary mb-1">Fashion - <span className="font-normal text-[14px] text-slate-500">10 Mins Ago</span></h1>
                                            <h1 className="font-bold text-[18px] text-primary mb-1">Nike Air Jordan colors?</h1>
                                            <p className="mb-1 text-[14px] text-slate-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                        </div>
                                        {/* card 2 */}
                                        <div className="bg-white rounded-md shadow-md aspect-video">
                                            <img src={Produk11} alt="" className="w-full h-[165px] md:h-[287px] object-cover" />
                                            <h1 className="font-bold text-[14px] text-primary mb-1">Fashion - <span className="font-normal text-[14px] text-slate-500">10 Mins Ago</span></h1>
                                            <h1 className="font-bold text-[18px] text-primary mb-1">Nike Air Jordan colors?</h1>
                                            <p className="mb-1 text-[14px] text-slate-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                        </div>
                                        {/* card 3 */}
                                        <div className="bg-white rounded-md shadow-md aspect-video">
                                            <img src={Produk11} alt="" className="w-full h-[165px] md:h-[287px] object-cover" />
                                            <h1 className="font-bold text-[14px] text-primary mb-1">Fashion - <span className="font-normal text-[14px] text-slate-500">10 Mins Ago</span></h1>
                                            <h1 className="font-bold text-[18px] text-primary mb-1">Nike Air Jordan colors?</h1>
                                            <p className="mb-1 text-[14px] text-slate-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
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