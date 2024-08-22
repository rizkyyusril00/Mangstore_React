import React from 'react'
import Produk10 from '../../img/produk10.jpg'


export default function CardCheckout() {
    const [counter, setCounter] = React.useState(1);
    function increment() {
        setCounter(counter + 1);
    }

    function decrement() {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    return(
        <> 
            {/* mobile */}
            <div className='inline md:hidden'>
                <div className="flex gap-2 bg-white p-1">
                    <div className="relative mr-4">
                        <input type="checkbox" name="" id="" className="absolute top-5 custom-checkbox" />
                    </div>
                    {/* img */}
                    <div className="w-[50px] h-[50px]">
                        <img src={Produk10} alt="" className="w-full h-full" />
                    </div>
                    {/* isi */}
                    <div className='flex flex-col gap-1'>
                    <p className="text-[14px] text-primary font-bold">Hoodie with 100% catoon pabrics</p>
                    <p className="text-[10px] text-primary">Rp. 300.000,- White, XL</p>
                        <div className='flex justify-between mt-4'>
                            <h1 className="text-[10px] text-primary">Stock 200</h1>
                            <div className='flex justify-end w-1/2'>
                                <p className="px-[8px] py-[1px] mr-2 h-5 text-center border-black border flex justify-center items-center hover:bg-red-500"><i className="bi bi-trash3"></i></p>
                                <button onClick={decrement} className="px-[8px] py-[1px] h-5 text-center border-black border flex justify-center items-center">-</button>
                                <input type="text" disabled placeholder={counter} className="checkout-input px-[8px] py-[1px] h-5 border-black border w-9 text-center" />
                                <button onClick={increment} className="px-[8px] py-[1px] h-5 border-black border flex justify-center items-center">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* md */}
            <div className='hidden md:flex'>
                <div className='flex gap-2 w-full bg-white p-1'>
                    <div className="relative mr-4">
                        <input type="checkbox" name="" id="" className="absolute top-5 custom-checkbox" />
                    </div>
                    {/* img */}
                    <div className="w-[100px] lg:w-[50px] h-[50px]">
                        <img src={Produk10} alt="" className="w-full h-full" />
                    </div>
                    {/* isi */}
                    <div className="flex flex-col gap-1 w-[570px]">
                        <p className="text-[14px] text-primary font-bold">Hoodie with 100% catoon pabrics.</p>
                        <p className="text-[10px] text-primary">Rp. 300.000,- White, XL</p> 
                        <h1 className="text-[10px] text-primary">Stock 200</h1>
                    </div>
                    <div className="flex justify-end items-end mt-4">
                            <div className="flex justify-end w-1/2">
                                <p className="px-[8px] py-[1px] mr-2 h-5 text-center border-black border flex justify-center items-center hover:bg-red-500 hover:text-white hover:border-slate-200"><i className="bi bi-trash3"></i></p>
                                <button onClick={decrement} className="px-[8px] py-[1px] h-5 text-center border-black border flex justify-center items-center">-</button>
                                <input type="text" disabled  placeholder={counter} className="px-[8px] py-[1px] h-5 border-black border md:w-[50px] text-center" />
                                <button onClick={increment} className="px-[8px] py-[1px] h-5 border-black border flex justify-center items-center">+</button>
                            </div>           
                    </div>
                </div>
            </div>
        </>
    )
}