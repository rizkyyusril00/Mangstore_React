import Person from '../../img/person.png'


export default function HeroHome(){
    return(
        <>
            <section className="bg-primary pb-[17px]">
                <div className="hero">
                    <div className="container mx-auto px-5">
                        <div className="hero-box md:flex md:flex-row items-center gap-10">
                            <div className="box md:order-2 md:w-1/2">
                            <h1 className="text-secondary md:text-[42px] mb-4 text-[32px]">best suit for every occation</h1>
                            <p className="mb-4 text-white md:text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat maxime veniam iste, ducimus non enim velit sapiente repellendus corrupti neque facilis repudiandae sequi obcaecati beatae aperiam deleniti perspiciatis eaque exercitationem.</p>
                            <div className="flex gap-[8px] mb-4">
                                <a href="" className="py-[8px] px-[16px] md:text-[16px] text-[14px] bg-secondary">Buy now</a>
                                <a href="" className="py-[8px] px-[16px] md:text-[16px] text-[14px] bg-secondary">Tokopedia</a>
                                <a href="" className="py-[8px] px-[16px] md:text-[16px] text-[14px] bg-secondary">Shopee</a>
                            </div>
                            </div>
                            <div className="box md:px-5 md:order-1 md:w-1/2">
                                <div className="border border-secondary bg-secondary w-[280px] md:w-[350px] lg:w-[400px] h-[396px] rounded-tr-[50%]">
                                    <img src={Person} alt="" className='w-[298px] h-[411px] scale-x-[-1]' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}