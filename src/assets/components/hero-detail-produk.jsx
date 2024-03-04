import PauseOnHover2 from "./carousel";
import Produk3 from '../../img/produk3.jpg'
import Produk2 from '../../img/produk2.jpeg'
import Produk1 from '../../img/produk1.jpeg'
import Produk5 from '../../img/produk5.jpg'
import Produk7 from '../../img/produk7.png'
import Produk6 from '../../img/produk6.png'
import ReviewProduk from "./review-produk";


export default function HeroDetailProduk(){
    return(
        <>
            <section>
                <div className="hero">
                    <div className="container mx-auto md:px-10 px-2">
                        <div className="hero-box">
                            {/* mobile */}
                            <div className="inline md:hidden">
                                {/* carousel */}
                                <PauseOnHover2 />
                                {/* mini pict */}
                                <div className="mini-img mt-2 flex md:hidden px-3">
                                    <div className="grid grid-cols-4 grid-rows-1 w-full gap-[20px]">
                                        <div className="h-[67px]"><img src={Produk3} alt="" className="h-[67px] w-full" /></div>
                                        <div className="h-[67px]"><img src={Produk1} alt="" className="h-[67px] w-full" /></div>
                                        <div className="h-[67px]"><img src={Produk3} alt="" className="h-[67px] w-full" /></div>
                                        <div className="h-[67px]"><img src={Produk1} alt="" className="h-[67px] w-full" /></div>
                                    </div>
                                </div>

                                <div className="mt-2 inline-block md:hidden p-3">
                                    <h1 className="text-slate-600 text-[16px]">Sold 2000x</h1>
                                    <h1 className="text-primary font-bold text-[26px]">Hoodie with 100% catoon pabrics</h1>
                                    <div className="flex items-center mt-2 gap-3">
                                        <p className="font-bold text-[16px]">Rp. 300.000,-</p>
                                        <p className="text-slate-500 line-through text-[14px]">Rp. 300.000,-</p>
                                    </div>
                                    <ul className="mt-2 inline-block md:hidden">
                                        <li className="list-disc ml-6 text-[14px]">Side vents allow for ease of motion</li>
                                        <li className="list-disc ml-6 text-[14px]">Nike logo is embroidered on left chest</li>
                                        <li className="list-disc ml-6 text-[14px]">100% cotton</li>
                                        <li className="list-disc ml-6 text-[14px]">Machine wash</li>
                                        <li className="list-disc ml-6 text-[14px]">Imported</li>
                                        <li className="list-disc ml-6 text-[14px]">Colour Shown: Black/White</li>
                                        <li className="list-disc ml-6 text-[14px]">Style: CJ4457-010</li>
                                        <li className="list-disc ml-6 text-[14px]">Country/Region of Origin: Cambodia,Vietnam,China</li>
                                    </ul>
                                    {/* deskripsi */}
                                    <div className="mt-5 inline-block md:hidden">
                                        <h1 className="font-bold text-primary mb-2 text-[16px]">Deskripsi</h1>
                                        <p className="text-[14px] text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consectetur ea delectus at. Ad laboriosam excepturi error odio. Iusto excepturi placeat maiores magnam ut architecto natus dolore similique? Reiciendis illum obcaecati rem, quia ex sapiente veritatis exercitationem assumenda eos, voluptatem fuga quos aut doloribus, ullam ab labore soluta ratione officiis eius repudiandae dolore commodi. Quibusdam sunt consectetur consequatur mollitia. Voluptate corporis voluptas illo maiores. Eligendi, mollitia. Cupiditate excepturi dolore doloribus iure, illo assumenda ipsam voluptates illum! Nam ipsam voluptate rerum ullam eum possimus doloremque vero tempore laboriosam, error non perferendis repudiandae, vel reprehenderit repellat voluptas atque cum debitis! Expedita, eveniet?</p>
                                    </div>
                                    {/* review */}
                                    <ReviewProduk />
                                </div>
                                {/* button */}
                                <div className="box text-end md:hidden">
                                    <p className="mb-10"><a href="" className="px-[16px] py-[8px] border-t-[1px] border-l-[1px] border-r-[3px] border-b-[3px] border-black bg-secondary">View more <i className="bi bi-arrow-right"></i></a></p>
                                </div>
                            </div>
                            
                            {/* md */}
                            <div className="md:flex gap-2 mt-2 hidden">
                                {/* side img */}
                                <div className="box w-1/12 mt-[22px]">
                                    <div className="flex flex-col gap-4">
                                        <img src={Produk2} alt="" className="h-[72px] w-[72px]" />
                                        <img src={Produk2} alt="" className="h-[72px] w-[72px]" />
                                        <img src={Produk2} alt="" className="h-[72px] w-[72px]" />
                                        <img src={Produk2} alt="" className="h-[72px] w-[72px]" />
                                    </div>
                                </div>
                                {/* main */}
                                <div className="box w-6/12">
                                    <PauseOnHover2 />
                                </div>
                                {/* second */}
                                <div className="box w-5/12 mt-5">
                                    <p className="text-[16px] text-slate-500">sold 2000x</p>
                                    <h1 className="font-bold text-primary text-[28px] lg:text-[32px]">Hoodie with 100% catoon pabrics</h1>
                                    <div className="flex items-center mt-2 gap-2">
                                        <p className="font-bold text-[24px] lg:text-[32px]">Rp. 300.000,-</p>
                                        <p className="text-slate-500 line-through text-[18px] lg:text-[22px]">Rp. 300.000,-</p>
                                    </div>
                                    <ul className="mt-4">
                                        <li className="list-disc ml-6 text-[14px]">Side vents allow for ease of motion</li>
                                        <li className="list-disc ml-6 text-[14px]">Nike logo is embroidered on left chest</li>
                                        <li className="list-disc ml-6 text-[14px]">100% cotton</li>
                                        <li className="list-disc ml-6 text-[14px]">Machine wash</li>
                                        <li className="list-disc ml-6 text-[14px]">Imported</li>
                                        <li className="list-disc ml-6 text-[14px]">Colour Shown: Black/White</li>
                                        <li className="list-disc ml-6 text-[14px]">Style: CJ4457-010</li>
                                        <li className="list-disc ml-6 text-[14px]">Country/Region of Origin: Cambodia,Vietnam,China</li>
                                    </ul>
                                    {/* cart */}
                                    <div className="flex gap-[4px] lg:gap-[8px]">
                                        {/* 1 */}
                                        <div className="mt-5 flex">
                                            <p className="px-[4px] py-[2px] lg:px-[8px] lg:py-[5px] lg:text-[16px] text-[14px]  border-black border">Size</p>
                                            <select name="" id="" className="px-[4px] py-[2px] lg:px-[8px] lg:py-[5px] text-[14px] lg:text-[16px] border-black border">
                                                <option value="">XXL</option>
                                                <option value="">XL</option>
                                                <option value="">LG</option>
                                                <option value="">M</option>
                                            </select>
                                        </div>
                                        {/* 2 */}
                                        <div className="mt-5 flex">
                                            <p className="px-[4px] py-[2px] lg:px-[8px] lg:py-[5px] lg:text-[16px] text-[14px] border-black border">Color</p>
                                            <select name="" id="" className="px-[4px] py-[2px] lg:px-[8px] lg:py-[5px] lg:text-[16px] text-[14px] border-black border">
                                                <option value="">Red</option>
                                                <option value="">Black</option>
                                                <option value="">Brown</option>
                                                <option value="">White</option>
                                            </select>
                                        </div>
                                        {/* 3 */}
                                        <div className="mt-5 flex">
                                            <p className="px-[4px] py-[2px] lg:px-[8px] lg:py-[5px] lg:text-[16px] text-[14px] border-black border">-</p>
                                            <input type="text" placeholder="1" className="px-[4px] py-[2px] lg:px-[8px] lg:py-[5px] lg:text-[16px] text-[14px] border-black border w-full lg:w-2/5" />
                                            <p className="px-[4px] py-[2px] lg:px-[8px] lg:py-[5px] lg:text-[16px] text-[14px] border-black border">+</p>
                                        </div>
                                    </div>
                                    {/* purchase */}
                                    <div className="text-center mt-5 py-4 bg-secondary w-full border-t-[1px] border-l-[1px] border-r-[3px] border-b-[3px] border-black">
                                        <h1 className="text-primary"><i className="bi bi-cart3 mr-5"></i>Add To Cart</h1>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-primary my-11 lg:my-[38px]">Or Checkout On :</p>
                                    </div>
                                    <div className="flex gap-2 text-center">
                                        <a href="" className="border border-black w-1/3 py-[13px] text-primary">Tokopedia</a>
                                        <a href="" className="border border-black w-1/3 py-[13px] text-primary">Shopee</a>
                                        <a href="" className="border border-black w-1/3 py-[13px] text-primary">Whatsapp</a>
                                    </div>
                                </div>
                            </div>
                            {/* deskripsi */}
                            <div className="md:flex gap-2 mt-4 hidden">
                                <div className="box w-1/2">
                                    <h1 className="mb-2">Deskripsi</h1>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nulla molestias reiciendis, aperiam unde ad sit voluptatibus accusamus quasi et delectus ut odio rerum at cumque expedita illum, velit nam ullam quod quam. Aliquam beatae possimus distinctio fuga debitis et, quo cum commodi! Velit in perferendis autem earum aspernatur labore?</p>
                                </div>
                                <div className="box w-1/2">
                                    <h1 className="mb-2">Review</h1>
                                    {/* 1 */}
                                    <div className="mb-4 border border-black w-full p-4">
                                        <h1 className="text-primary text-[16px] font-bold mb-2">Extremly Comfort</h1>
                                        <p className="text-primary text-[14px] mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam vel ut iure accusamus soluta? Debitis delectus commodi iusto quisquam quae perferendis minima laborum ad similique omnis sed, soluta inventore. Harum architecto sint molestias quas inventore distinctio praesentium exercitationem mollitia ullam nostrum rerum, maiores voluptatibus accusantium unde, magni at possimus dolorem?</p>
                                        <p className="text-primary mb-2">Rizky Yusril - <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star"></i></p>
                                        <div className="flex pl-5 items-start gap-2 justify-center border-l-secondary border-l-2">
                                            {/* big img */}
                                            <div className="lg:h-[160px] lg:w-[160px] h-[120px] w-[120px] bg-red-500 "><img src={Produk5} alt="" className="w-full h-full object-cover" /></div>
                                            <div className="lg:h-[160px] lg:w-[160px] h-[120px] w-[120px] bg-red-500 "><img src={Produk5} alt="" className="w-full h-full object-cover" /></div>
                                            {/* mini img */}
                                            <div className="flex-col gap-2">
                                                {/* baris pertama */}
                                                <div className="flex gap-2 mb-2">
                                                    <div className="lg:w-[76px] lg:h-[76px] w-[56px] h-[56px]"><img src={Produk7} alt="" className="w-full h-full object-cover" /></div>
                                                    <div className="lg:w-[76px] lg:h-[76px] w-[56px] h-[56px]"><img src={Produk7} alt="" className="w-full h-full object-cover" /></div>
                                                </div>
                                                {/* baris kedua */}
                                                <div className="flex gap-2">
                                                    <div className="lg:w-[76px] lg:h-[76px] w-[56px] h-[56px]"><img src={Produk7} alt="" className="w-full h-full object-cover" /></div>
                                                    <div className="lg:w-[76px] lg:h-[76px] w-[56px] h-[56px] relative"><img src={Produk6} alt="" className="w-full h-full object-cover" />
                                                        <div className="absolute top-0 left-0 lg:w-[76px] lg:h-[76px] w-[56px] h-[56px] flex items-center justify-center">
                                                            <div className="bg-primary opacity-50 absolute w-full h-full top-0 left-0 z-10"></div>
                                                            <p className="relative z-20 text-white text-[14px]">+60</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 2 */}
                                    <div className="mb-4 border border-black w-full p-4">
                                        <h1 className="text-primary text-[16px] font-bold mb-2">Extremly Comfort</h1>
                                        <p className="text-primary text-[14px] mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam vel ut iure accusamus soluta? Debitis delectus commodi iusto quisquam quae perferendis minima laborum ad similique omnis sed, soluta inventore. Harum architecto sint molestias quas inventore distinctio praesentium exercitationem mollitia ullam nostrum rerum, maiores voluptatibus accusantium unde, magni at possimus dolorem?</p>
                                        <p className="text-primary mb-2">Rizky Yusril - <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star"></i></p>
                                        <div className="flex pl-5 items-start gap-2 justify-center border-l-secondary border-l-2">
                                            {/* big img */}
                                            <div className="lg:h-[160px] lg:w-[160px] h-[120px] w-[120px] bg-red-500 "><img src={Produk5} alt="" className="w-full h-full object-cover" /></div>
                                            <div className="lg:h-[160px] lg:w-[160px] h-[120px] w-[120px] bg-red-500 "><img src={Produk5} alt="" className="w-full h-full object-cover" /></div>
                                            {/* mini img */}
                                            <div className="flex-col gap-2">
                                                {/* baris pertama */}
                                                <div className="flex gap-2 mb-2">
                                                    <div className="lg:w-[76px] lg:h-[76px] w-[56px] h-[56px]"><img src={Produk7} alt="" className="w-full h-full object-cover" /></div>
                                                    <div className="lg:w-[76px] lg:h-[76px] w-[56px] h-[56px]"><img src={Produk7} alt="" className="w-full h-full object-cover" /></div>
                                                </div>
                                                {/* baris kedua */}
                                                <div className="flex gap-2">
                                                    <div className="lg:w-[76px] lg:h-[76px] w-[56px] h-[56px]"><img src={Produk7} alt="" className="w-full h-full object-cover" /></div>
                                                    <div className="lg:w-[76px] lg:h-[76px] w-[56px] h-[56px] relative"><img src={Produk6} alt="" className="w-full h-full object-cover" />
                                                        <div className="absolute top-0 left-0 lg:w-[76px] lg:h-[76px] w-[56px] h-[56px] flex items-center justify-center">
                                                            <div className="bg-primary opacity-50 absolute w-full h-full top-0 left-0 z-10"></div>
                                                            <p className="relative z-20 text-white text-[14px]">+60</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* button */}
                                    <div className="box text-end mt-10">
                                        <p className="mb-10"><a href="" className="px-[16px] py-[8px] border-t-[1px] border-l-[1px] border-r-[3px] border-b-[3px] border-black bg-secondary">View more <i className="bi bi-arrow-right"></i></a></p>
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