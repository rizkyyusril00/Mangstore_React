import CardProduk from "./card-produk";
import Produk3 from '../../img/produk3.jpg'
import Produk6 from '../../img/produk6.png'
import Produk10 from '../../img/produk10.jpg'
import Produk20 from '../../img/produk20.jpg'


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
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                                <CardProduk gambar={Produk3}/>  
                                <CardProduk gambar={Produk20}/>
                                <CardProduk gambar={Produk6}/>
                                <CardProduk gambar={Produk10}/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}