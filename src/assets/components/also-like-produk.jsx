import CardProduk from "./card-produk";


export default function AlsoLike(){
    return(
        <>
            <section>
                <div className="also-like">
                    <div className="container mx-auto md:px-10 px-5">
                        <div className="also-like-box">
                        <div className="box">
                            <h1 className="text-[16px] font-bold mt-10 mb-2">You may also like</h1>
                        </div>
                        <div className="box">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                                <CardProduk />
                                <CardProduk />
                                <CardProduk />
                                <CardProduk />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}