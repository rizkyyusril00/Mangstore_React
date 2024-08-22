import CardCheckout from "./card-checkout"


export default function CheckOut(){
    return(
        <>
            <section className="mb-10">
                <div className="main">
                    <div className="container mx-auto md:px-10 xl:px-9 px-5">
                        <div className="main-box">
                            <h1  className="mt-3 mb-2 text-2xl font-bold text-primary">Your Cart</h1>
                            {/* mobile */}
                            <div className="inline md:hidden">
                            <div>
                                <div className="flex flex-col gap-2 h-[420px] bg-primary p-2 overflow-y-scroll">
                                    {/* isi cart */}
                                    <CardCheckout />
                                    <CardCheckout />
                                    <CardCheckout />
                                    <CardCheckout />
                                    <CardCheckout />
                                </div>
                            </div>
                            </div>
                            <div className="inline md:hidden">
                                {/* total harga */}
                                <div className="p-4 border-[1px] border-black mt-5">
                                    <h1 className="text-[16px] text-primary mb-5">Summary</h1>
                                    <p className="text-xs text-slate-500">Total</p>
                                    <h1 className="text-2xl font-bold text-primary">Rp 14.000.000,-</h1>
                                </div>
                                {/* button */}
                                <div className="box w-full h-10 mt-1 px-[10px] py-[4px] border-t-[1px] border-l-[1px] border-r-[3px] border-b-[3px] border-black bg-secondary text-center">
                                    <p className="font-bold text-primary"><a href="">Check Out</a></p>
                                </div>
                            </div>

                            {/* md */}
                            <div className="md:flex gap-4 hidden">
                                {/* kiri */}
                                <div className="box w-2/3">
                                    <div className="scrollbar-checkout flex flex-col gap-2 h-[420px] bg-primary p-2 overflow-y-scroll">
                                        {/* isi cart */}
                                        <CardCheckout />
                                        <CardCheckout />
                                        <CardCheckout />
                                        <CardCheckout />
                                        <CardCheckout />
                                        <CardCheckout />
                                        <CardCheckout />
                                    </div>
                                </div>
                                {/* kanan */}
                                <div className="box w-1/3">
                                    {/* total harga */}
                                    <div className="p-4 border-[1px] border-black">
                                        <h1 className="text-[16px] text-primary mb-5">Summary</h1>
                                        <p className="text-xs text-slate-500">Total</p>
                                        <h1 className="text-2xl font-bold text-primary">Rp 14.000.000,-</h1>
                                    </div>
                                    {/* button */}
                                    <div className="box w-full h-10 mt-2 px-[10px] py-[4px] border-t-[1px] border-l-[1px] border-r-[3px] border-b-[3px] border-black bg-secondary text-center">
                                        <p className="font-bold text-primary"><a href="">Check Out</a></p>
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