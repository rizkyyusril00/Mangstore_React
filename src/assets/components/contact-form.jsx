import { useTypewriter } from 'react-simple-typewriter'
import Terkirim from '../../img/Terkirim.svg'

export default function ContactForm() {
    const [typeEffect] = useTypewriter({
        words : ["Let's Talk"],
        loop : 1,
        typeSpeed : 100,
        deleteSpeed : 50
    })
    // modal box
    const toggleSend = () => {
        const modalBackground = document.querySelector("#modalBackground");
    
        const cekModalBackground = modalBackground.classList.contains("opacity-0");
    
        if (cekModalBackground) {
            modalBackground.classList.remove("opacity-0");
            modalBackground.classList.add("flex", "opacity-100" , "z-40"); 
        }
    };
    
    
    // Tambahkan fungsi ini untuk menutup modal saat tombol tutup diklik
    const toggleModal = () => {
        const modalBackground = document.querySelector("#modalBackground");
        modalBackground.classList.remove("opacity-100", "z-40");
        modalBackground.classList.add("opacity-0", "z-20");
    };
    
    document.addEventListener("DOMContentLoaded", function () {
        const showModalButton = document.querySelector("#showModal");
        const closeModalButton = document.querySelector("#closeModal");
    
        showModalButton.addEventListener("click", toggleSend);
        closeModalButton.addEventListener("click", toggleModal);
    });
    
    

    return (
        <>
            <section className="my-10">
                <div className="contact-form">
                    <div className="container mx-auto md:px-10 xl:px-5 px-5">
                        <div className="contact-form-box">
                            {/* mobile */}
                            <div className="inline-block md:hidden">
                                <div className="box bg-secondary border-l-[1px] border-t-[1px] border-r-4 border-b-4 border-black p-4">
                                    <h1 className="text-2xl font-bold text-primary">{typeEffect}</h1>
                                    <p className="text-[14px] text-primary my-2">Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                                    </p>
                                    {/* infromation */}
                                    {/* 1 */}
                                    <div className="flex gap-5 mb-2">
                                        <h1><i className="bi bi-building"></i></h1>
                                        <h1>Jalan Melati No. 123 Kelurahan Bunga Indah Kecamatan Kota Bahagia Kota Semuanya Bahagia Provinsi Damai Sejahtera Kode Pos: 12345
                                        </h1>
                                    </div>
                                    {/* 2 */}
                                    <div className="flex gap-5 mb-2">
                                        <h1><i className="bi bi-chat-left"></i></h1>
                                        <h1>contact@mangstore.com</h1>
                                    </div>
                                    {/* 3 */}
                                    <div className="flex gap-5">
                                        <h1><i className="bi bi-telephone"></i></h1>
                                        <h1>(+62) 857 123 321 1</h1>
                                    </div>

                                    {/* form */}
                                    <div className="my-3">
                                        <form action="">
                                            <input type="text" name="" id="" placeholder="Full name*" className="p-2 border-[1px] border-black w-full mb-3" />
                                            <input type="email" name="" id="" placeholder="Email*" className="p-3 border-[1px] border-black w-full mb-3" />
                                            <input type="number" name="" id="" placeholder="Phone number*" className="p-2 border-[1px] border-black w-full mb-3" />
                                            <div className="relative">
                                                <textarea name="" id="" cols="30" rows="10" placeholder="Description*" className="p-2 w-full border-[1px] border-black"></textarea>
                                                <div className="flex items-center absolute bottom-4 right-4 transition-transform ease-in-out transform-gpu hover:scale-90  hover:font-bold">
                                                    <input type="submit" value="Send" className="bg-secondary text-primary px-[8px] py-[4px] rounded-l-md border-y-[1px] border-l-[1px] border-black" />
                                                    <span className="bg-secondary text-primary px-[8px] py-[4px] rounded-r-md border-y-[1px] border-r-[1px] border-black flex items-center">
                                                        <i className="bi bi-arrow-90deg-right"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* md */}
                            <div className="hidden md:flex">
                                <div className="box bg-secondary border-l-[2px] border-t-[2px] border-r-[6px] border-b-[6px] border-black p-4 flex gap-4">
                                    {/* modal box */}
                                    <div id='modalBackground' className='bg-black flex items-center justify-center h-screen absolute inset-0 z-20 bg-opacity-50 p-20 opacity-0 duration-500'>
                                    <div id='modalBox' className='bg-white rounded-md shadow-md mt-20 p-4 w-1/2'>
                                        <div className='flex justify-end'>
                                            <button id='closeModal' onClick={toggleModal} className='hover:bg-red-500 hover:text-white w-7 h-7 rounded-full flex justify-center items-center transition-transform ease-in-out transform-gpu hover:scale-95 duration-300'><i className="bi bi-x text-2xl"></i></button>
                                        </div>
                                        <img src={Terkirim} alt="" className='w-96 mx-auto'/>
                                        <h2 className='font-bold text-center text-4xl my-2'>Pesan Anda Telah Terkirim</h2>
                                    </div>
                                    </div>

                                    {/* infromation */}
                                    <div className="box w-1/2">
                                        <h1 className="text-5xl font-bold text-primary">{typeEffect}</h1>
                                        <p className="text-primary text-[14px] my-3">Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                                        {/* information */}
                                        <div className="my-10">
                                            {/* 1 */}
                                            <div className="flex gap-5 mb-2">
                                                <h1><i className="bi bi-building"></i></h1>
                                                <h1>Jalan Melati No. 123 Kelurahan Bunga Indah Kecamatan Kota Bahagia Kota Semuanya Bahagia Provinsi Damai Sejahtera Kode Pos: 12345
                                                </h1>
                                            </div>
                                            {/* 2 */}
                                            <div className="flex gap-5 mb-2">
                                                <h1><i className="bi bi-chat-left"></i></h1>
                                                <h1>contact@mangstore.com</h1>
                                            </div>
                                            {/* 3 */}
                                            <div className="flex gap-5">
                                                <h1><i className="bi bi-telephone"></i></h1>
                                                <h1>(+62) 857 123 321 1</h1>
                                            </div>
                                        </div>
                                    </div>
                                    {/* form */}
                                    <div className="box w-1/2 relative z-30">
                                        <div className="my-3">
                                            <form action="">
                                                <input type="text" name="" id="" placeholder="Full name*" className="p-2 border-[1px] border-black w-full mb-3" />
                                                <input type="email" name="" id="" placeholder="Email*" className="p-3 border-[1px] border-black w-full mb-3" />
                                                <input type="number" name="" id="" placeholder="Phone number*" className="p-2 border-[1px] border-black w-full mb-3" />
                                                <div className="relative">
                                                    <textarea name="" id="" cols="30" rows="10" placeholder="Description*" className="p-2 w-full border-[1px] border-black"></textarea>
                                                    <div className="flex items-center absolute bottom-4 right-4 transition-transform ease-in-out transform-gpu hover:scale-90  hover:font-bold duration-500">
                                                        <input type="button" id='showModal' onClick={toggleSend} value="Send" className="bg-secondary text-primary px-[8px] py-[4px] cursor-pointer rounded-l-md border-y-[1px] border-l-[1px] border-black" />
                                                        <span className="bg-secondary text-primary px-[8px] py-[4px] rounded-r-md border-y-[1px] border-r-[1px] border-black flex items-center"><i className="bi bi-arrow-90deg-right"></i></span>
                                                    </div>
                                                </div>
                                            </form>
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