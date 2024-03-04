import Produk5 from '../../img/produk5.jpg'
import Produk7 from '../../img/produk7.png'
import Produk6 from '../../img/produk6.png'

export default function ReviewProduk(){
    return(
        <>
            <div className="mt-5 inline-block md:hidden">
                <h1 className="font-bold text-primary mb-2 text-[16px]">Review</h1>
                {/* box review */}
                <div className="mb-4 border border-black w-full p-4">
                    <h1 className="font-bold text-primary mb-2">Extreemly Comfort</h1>
                    <p className="text-primary mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias, reiciendis labore maiores officia eligendi iure! Corrupti iste quibusdam consequatur repellat tempora! Nisi, distinctio recusandae sequi voluptates quasi natus ea culpa dolores minima impedit qui magni, quam, voluptatem optio repellendus.</p>
                    <p className="text-primary mb-2">Rizky Yusril - <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star"></i></p>
                    {/* review pic */}
                    <div className='flex px-5 items-start gap-2 justify-center border-l-secondary border-l-2'>
                        <div className="h-[120px] w-[120px] bg-red-500 "><img src={Produk5} alt="" className="w-full h-full object-cover" /></div>
                        <div className="flex flex-col gap-2 overflow-hidden">
                            <div className="w-[56px] h-[56px]"><img src={Produk7} alt="" className="w-full h-full object-cover" /></div>
                                <div className="w-[56px] h-[56px] relative"><img src={Produk6} alt="" className="w-full h-full object-cover" />
                                    <div className="absolute top-0 left-0 w-[56px] h-[56px] flex items-center justify-center">
                                        <div className="bg-primary opacity-50 absolute w-full h-full top-0 left-0 z-10"></div>
                                        <p className="relative z-20 text-white text-[14px]">+60</p>
                                    </div>
                                </div>       
                        </div>
                    </div>
                </div>

                <div className="mb-4 border border-black w-full p-4">
                    <h1 className="font-bold text-primary mb-2">Extreemly Comfort</h1>
                    <p className="text-primary mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias, reiciendis labore maiores officia eligendi iure! Corrupti iste quibusdam consequatur repellat tempora! Nisi, distinctio recusandae sequi voluptates quasi natus ea culpa dolores minima impedit qui magni, quam, voluptatem optio repellendus.</p>
                    <p className="text-primary mb-2">Rizky Yusril - <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star"></i></p>
                    {/* review pic */}
                    <div className='flex px-5 items-start gap-2 justify-center border-l-secondary border-l-2'>
                        <div className="h-[120px] w-[120px] bg-red-500 "><img src={Produk5} alt="" className="w-full h-full object-cover" /></div>
                        <div className="flex flex-col gap-2 overflow-hidden">
                            <div className="w-[56px] h-[56px]"><img src={Produk7} alt="" className="w-full h-full object-cover" /></div>
                                <div className="w-[56px] h-[56px] relative"><img src={Produk6} alt="" className="w-full h-full object-cover" />
                                    <div className="absolute top-0 left-0 w-[56px] h-[56px] flex items-center justify-center">
                                        <div className="bg-primary opacity-50 absolute w-full h-full top-0 left-0 z-10"></div>
                                        <p className="relative z-20 text-white text-[14px]">+60</p>
                                    </div>
                                </div>       
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}