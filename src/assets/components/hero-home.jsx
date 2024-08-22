import Person from '../../img/person.png'
import { useTypewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'

export default function HeroHome(){
    const [typeEffect] = useTypewriter({
        words : ['adipisicing elit. Quaerat maxime veniam iste, ducimus non enim velit sapiente repellendus corrupti neque facilis repudiandae sequi obcaecati beatae aperiam deleniti perspiciatis eaque exercitationem.'],
        loop : 1,
        typeSpeed : 7,
        deleteSpeed : 50
    })
    return(
        <>
            <section className="bg-primary pb-[17px]">
                <div className="hero">
                    <div className="container mx-auto px-5 md:h-3/4">
                        <div className="hero-box md:flex md:flex-row items-center gap-10">
                            <div className="box md:order-2 md:w-1/2">
                            <h1 className="text-secondary md:text-[42px] mb-4 text-[32px]">best suit for every occation</h1>
                            <p className="mb-4 text-white md:text-[16px]">{typeEffect}</p>
                            <div className="flex gap-[8px] mb-4">
                                <Link to='/product' className="py-[8px] px-[16px] md:text-[16px] text-[12px] bg-secondary transition-transform ease-in-out transform-gpu hover:scale-95 hover:font-bold duration-300">Buy now</Link>
                                <Link to="https://www.tokopedia.com/" target='blank' className="py-[8px] px-[14px] md:text-[16px] text-[14px] bg-secondary transition-transform ease-in-out transform-gpu hover:scale-95 hover:font-bold duration-300">Tokopedia</Link>
                                <Link to="https://shopee.co.id/" target='blank' className="py-[8px] px-[14px] md:text-[16px] text-[14px] bg-secondary transition-transform ease-linear transform-gpu hover:scale-95 hover:font-bold duration-300">Shopee</Link>
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