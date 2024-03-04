

export default function BlogTagline() {
    return(
        <>
            <div className="tagline">
                <div className="container mx-auto md:px-10 xl:px-5 px-5">
                    <div className="tagline-box">
                        <h1 className="text-2xl md:text-5xl font-bold text-primary mt-2 mb-2 md:mb-4">Nike best line of shoes for running in 2023 under $300</h1>
                        <p className="text-xs md:text-[18px] text-slate-500 mb-2 md:mb-4">Senin, 21 Agustus 2023</p>
                        {/* icon */}
                        <div className="flex gap-2">
                            <p className="text-[14px] md:text-[18px] text-primary font-bold">Share :</p>
                            {/* 1 */}
                            <div className="p-[5px] bg-lightGrey flex items-center justify-center rounded-[50%] w-[23px] h-[23px] md:w-[24px] md:h-[24px]">
                                <p className="text-[14px] md:text-[18px]"><i className="bi bi-facebook"></i></p>
                            </div>
                            {/* 2 */}
                            <div className="p-[5px] bg-lightGrey flex items-center justify-center rounded-[50%] w-[23px] h-[23px] md:w-[24px] md:h-[24px]">
                                <p className="text-[14px] md:text-[18px]"><i className="bi bi-instagram"></i></p>
                            </div>
                            {/* 3 */}
                            <div className="p-[5px] bg-lightGrey flex items-center justify-center rounded-[50%] w-[23px] h-[23px] md:w-[24px] md:h-[24px]">
                                <p className="text-[14px] md:text-[18px]"><i className="bi bi-linkedin"></i></p>
                            </div>
                            {/* 4 */}
                            <div className="p-[5px] bg-lightGrey flex items-center justify-center rounded-[50%] w-[23px] h-[23px] md:w-[24px] md:h-[24px]">
                                <p className="text-[14px] md:text-[18px]"><i className="bi bi-link-45deg"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}