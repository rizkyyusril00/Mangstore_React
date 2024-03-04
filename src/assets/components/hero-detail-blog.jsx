import Produk12 from '../../img/produk12.jpg'
import Produk16 from '../../img/produk16.jpg'
import CardDetailBlog from './card-detail-blog'

export default function HeroDetailBlog() {
    return(
        <>
            <div className="main">
                <div className="container mx-auto md:px-10 xl:px-5 px-5">
                    <div className="main-box">
                        {/* mobile */}
                        <div className="inline-block md:hidden">
                            <div className="h-[210px] w-full mt-2">
                                {/* first img */}
                                <img src={Produk12} alt="" className="w-full h-full" />
                                <p className="text-[14px] text-slate-500">Sorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                {/* deskripsi */}
                                <p className="text-xs mt-2"><span className="pl-10">Lorem</span> ipsum dolor sit amet consectetur adipisicing elit. Dicta cum magnam quas aliquam repellat sequi quaerat dolor deleniti ea harum excepturi quia doloremque at culpa voluptatibus nulla quibusdam odit, laudantium ipsam perspiciatis magni aspernatur rem id maxime. Distinctio, quos fugit, dolorum, rerum temporibus culpa ullam eos cum est illum harum!</p>
                                <p data-aos="fade-down" data-aos-once="true" data-aos-delay="330" className="text-xs mt-1"><span className="pl-10">Lorem</span> ipsum dolor sit amet consectetur adipisicing elit. Dicta cum magnam quas aliquam repellat sequi quaerat dolor deleniti ea harum excepturi quia doloremque at culpa voluptatibus nulla quibusdam odit, laudantium ipsam perspiciatis magni aspernatur rem id maxime. Distinctio, quos fugit, dolorum, rerum temporibus culpa ullam eos cum est illum harum!</p>
                                {/* second img */}
                                <div className='h-[210px] w-full mt-4'>
                                    <img src={Produk16} alt="" className="w-full h-full" />
                                    <p className="text-[14px] text-slate-500">Sorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                    {/* deskripsi */}
                                    <p data-aos="fade-down" data-aos-once="true" data-aos-delay="330" className="text-xs mt-2"><span className="pl-10">Lorem</span> ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dolore veritatis modi accusamus repellat velit consectetur facere nulla doloribus? Ea illo corrupti quibusdam est, nulla ratione perspiciatis molestias commodi et quae explicabo, unde nemo placeat sint repellendus hic praesentium. Non tempore possimus totam culpa officiis ut! Perspiciatis in nobis est tempora dolorem unde corrupti eius maxime sapiente! Sequi, velit culpa!</p>
                                    {/* related */}
                                    <div className="flex gap-2 my-5">
                                        <p className="text-[14px] font-bold">Related :</p>
                                        <div className="p-[10px] bg-lightGrey rounded-xl w-[50px] h-[24px] flex justify-center items-center">
                                            <p className="text-xs">Style</p>
                                        </div>
                                        <div className="p-[10px] bg-lightGrey rounded-xl w-[50px] h-[24px] flex justify-center items-center">
                                            <p className="text-xs">Fashion</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* md */}
                        <div className='hidden md:flex'>
                            <div className='flex gap-2 mt-2'>
                                {/* fisrt box */}
                                <div className='box w-2/3 mb-2'>
                                    {/* first img */}
                                    <div className="h-[412px]">
                                        <img src={Produk12} alt="" className="w-full h-full" />
                                    </div>
                                    <p className="text-[14px] text-slate-500 mt-1">Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate.
                                    </p>
                                    {/* deskripsi */}
                                    <div>
                                        <p data-aos="fade-down" data-aos-once="true" data-aos-delay="330" className="mt-8 text-[14px] font-bold text-primary"><span className="pl-8">lorem</span> ipsum dolor sit amet consectetur adipisicing elit. Consequatur iusto architecto ex, fugiat atque cum? Repellat ullam sint id est facere consequatur ex aperiam officiis incidunt, aliquam error obcaecati tempore molestias dignissimos maxime impedit neque, quam perferendis mollitia, assumenda officia. Blanditiis earum reiciendis ducimus labore ratione excepturi, consectetur saepe consequuntur magni, qui a aperiam minus neque eius tempore culpa magnam!</p>
                                    </div>

                                    {/* second img */}
                                    <div className="h-[412px]">
                                        <img src={Produk16} alt="" className="w-full h-full mt-4" />
                                    </div>
                                    <p className="text-[14px] text-slate-500 mt-1">Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate.
                                    </p>
                                    {/* deskripsi */}
                                    <div>
                                        <p data-aos="fade-down" data-aos-once="true" data-aos-delay="330" className="mt-8 text-[14px] font-bold text-primary"><span className="pl-8">lorem</span> ipsum dolor sit amet consectetur adipisicing elit. Consequatur iusto architecto ex, fugiat atque cum? Repellat ullam sint id est facere consequatur ex aperiam officiis incidunt, aliquam error obcaecati tempore molestias dignissimos maxime impedit neque, quam perferendis mollitia, assumenda officia. Blanditiis earum reiciendis ducimus labore ratione excepturi, consectetur saepe consequuntur magni, qui a aperiam minus neque eius tempore culpa magnam!. fugiat atque cum? Repellat ullam sint id est facere consequatur ex aperiam officiis incidunt, aliquam error obcaecati tempore molestias dignissimos maxime impedit neque, quam perferendis mollitia.</p>
                                    </div>
                                    {/* related */}
                                    <div className="flex gap-2 my-5">
                                        <p className="text-[18px] text-primary font-bold">Related Topics :</p>
                                        <div className="p-[10px] bg-lightGrey rounded-xl w-[80px] h-[24px] flex justify-center items-center">
                                            <p className="text-[14px] text-primary">Work Life</p>
                                        </div>
                                        <div className="p-[10px] bg-lightGrey rounded-xl w-[80px] h-[24px] flex justify-center items-center">
                                            <p className="text-[14px] text-primary">Productivity</p>
                                        </div>
                                        <div className="p-[10px] bg-lightGrey rounded-xl w-[80px] h-[24px] flex justify-center items-center">
                                            <p className="text-[14px] text-primary">Tech</p>
                                        </div>
                                    </div>
                                </div>
                                {/* second box */}
                                <div className='box w-1/3 mb-2'>
                                    {/* featured */}
                                    <div className='flex flex-col gap-2'>
                                        <h1 className="text-primary text-[18px] font-bold">Featured</h1>
                                        {/* 1 */}
                                        <div className="bg-lightGrey p-[10px] rounded-md">
                                            <h1 className="text-[14px] text-primary font-bold">Tantangan dan Peluang: Perkembangan Teknologi dalam Ranah Politik di Indonesia</h1>
                                        </div>
                                        {/* 2 */}
                                        <div className="bg-lightGrey p-[10px] rounded-md">
                                            <h1 className="text-[14px] text-primary font-bold">Menuju era digital : Bagaimana teknologi mempengaruhi pola komunikasi politik</h1>
                                        </div>
                                        {/* 3 */}
                                        <div className="bg-lightGrey p-[10px] rounded-md">
                                            <h1 className="text-[14px] text-primary font-bold">transformasi media sosiak : Dampaknya terhadap dinamika politik kontemporer</h1>
                                        </div>
                                        {/* 4 */}
                                        <div className="bg-lightGrey p-[10px] rounded-md">
                                            <h1 className="text-[14px] text-primary font-bold">Keamanan data dan privasi dalam kampanye politik berbasis teknologi</h1>
                                        </div>
                                        {/* 5 */}
                                        <div className="bg-lightGrey p-[10px] rounded-md">
                                            <h1 className="text-[14px] text-primary font-bold">Keamanan data dan privasi dalam kampanye politik berbasis teknologi</h1>
                                        </div>
                                    </div>
                                    {/* terpopuler */}
                                    <h1 className="font-bold text-primary mt-[38px] mb-4">Terpopuler</h1>
                                    <div className='flex flex-col gap-3'>
                                        <CardDetailBlog />
                                        <CardDetailBlog />
                                        <CardDetailBlog />
                                        <CardDetailBlog />
                                        <CardDetailBlog />
                                        <CardDetailBlog />
                                        <CardDetailBlog />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}