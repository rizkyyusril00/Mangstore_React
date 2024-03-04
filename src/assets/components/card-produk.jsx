
export default function CardProduk (props) {
    return(
        <>
            {props.details.map((Value,index) => (
                <div className="inline lg:hidden" key={index}>
                    {/* card */}
                    <div className="bg-white rounded-md shadow-md">
                        <img src={Value.image} alt="" className="w-full h-[185px] md:h-[390px] lg:h-[300px]" />
                            <h1 className="text-[12px] pl-2">{Value.title}</h1>
                            <p className="text-[14px] font-bold pl-2">{Value.deskripsi}</p>
                            <div className="md:flex mt-1 mb-1">
                                <p className="text-[12px] pl-2">{Value.hargaDiskon}</p>
                                <p className="line-through text-[12px] pl-2">{Value.hargaAsli}</p>
                            </div>
                    </div>
                </div>
            ))}            
        </>
    )
}