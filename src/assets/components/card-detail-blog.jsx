import Produk17 from '../../img/produk17.png'

export default function CardDetailBlog() {
    return(
        <>
            <div className="flex">
                <div className="w-1/2 h-[102px] flex">
                    <img src={Produk17} alt="" className="h-full w-full" />
                </div>
                <div className="h-[102px] md:overflow-y-scroll lg:overflow-hidden w-1/2 p-2">
                    <h1 className="text-[12px] font-bold text-primary">Tech<i className="bi bi-dot"></i><span className="text-slate-500">5 Menit yang lalu</span></h1>
                    <h1 className="text-primary text-lg mt-1">best product from apple</h1>
                </div>
            </div>
        </>
    )
}