import { useState } from "react"


export default function Accordion({title, handleCategoryChange, perubahanGender, type }) {
    // state untuk buka / tutup accordion
    const [accordionOpen, setAccordionOpen]  = useState(false);
    return(
        <>
            <div className="mt-1">
                {/* Button accordion */}
                <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex justify-between w-full">
                <span className="font-bold text-primary">{title}</span>
                {/* Icon */}
                <div className={`transition-all duration-300 ease-in-out flex justify-center items-center ${
                    accordionOpen ? "transform rotate-[-90deg]" : ""
                }`}>
                    <span><i className="bi bi-caret-down-fill"></i></span>
                </div>
                </button>
            </div>
            {/* Garis */}
            <div>
                <hr className={`my-3 border-primary border-t-[1px] transition-all duration-300 ease-in-out ${accordionOpen ? 'opacity-0 my-3' : 'opacity-100'}`} />
            </div>
            {/* isi accordion */}
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out font-bold text-primary ${
                accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div  className="overflow-hidden">
                    <div className="flex-col items-center space-y-4">
                        {type === "checkbox" ? (
                            <>
                        {/* 1 */}
                        <div className="flex items-center">
                            <input type="checkbox" id="shoes" name="shoes" value="shoes" onChange={() => handleCategoryChange('shoes')} />
                            <label htmlFor="shoes" className="ml-2 text-primary">Shoes</label>
                        </div>
                        {/* 2 */}
                        <div className="flex items-center">
                            <input type="checkbox" id="shirt" name="shirt" onChange={() => handleCategoryChange('shirt')}/>
                            <label htmlFor="shirt" className="ml-2 text-primary">Shirt</label>
                        </div>
                        {/* 3 */}
                        <div className="flex items-center">
                            <input type="checkbox" id="trousers" name="trousers" onChange={() => handleCategoryChange('trousers')}/>
                            <label htmlFor="trousers" className="ml-2 text-primary">Trousers</label>
                        </div>
                        {/* 4 */}
                        <div className="flex items-center">
                            <input type="checkbox" id="sport" name="sport" onChange={() => handleCategoryChange('sport')}/>
                            <label htmlFor="checkbox4" className="ml-2 text-primary">Sport Wear</label>
                        </div>
                            
                            </>
                        ) : (
                            <>
                            <div className="flex items-center">
                                <input type="checkbox" id="man" name="man" onChange={() => perubahanGender('man')}/>
                                <label htmlFor="man" className="ml-2 text-primary">Man</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="woman" name="woman" onChange={() => perubahanGender('woman')}/>
                                <label htmlFor="woman" className="ml-2 text-primary">Woman</label>
                            </div>
                            </>
                        )}
                    </div>
                </div>
                    {/* garis */}
                <div>
                    <hr className={` border-primary border-t-[1px] transition-all duration-300 ease-in-out ${accordionOpen ? 'opacity-100 my-3' : 'opacity-0'}`} />
                </div>
            </div>
        </>
    )
    
}