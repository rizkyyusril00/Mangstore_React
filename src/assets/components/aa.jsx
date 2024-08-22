import { useState } from "react"


export default function Accordion({title, handleCategoryChange, perubahanGender, type }) {
    // state untuk buka / tutup accordion
    const [accordionOpen, setAccordionOpen]  = useState(false);





    return(
        <>
            <div className="mt-1">
            {/* Button accordion */}
            <button
            onClick={() => setAccordionOpen(!accordionOpen)}
            className="flex justify-between w-full"
            >
            <span className="font-bold text-primary">{title}</span>
            {/* Icon */}
            <div className={`transition-all duration-300 ease-in-out flex justify-center items-center ${
                accordionOpen ? "transform rotate-[-90deg]" : ""
            }`}
            >
                <span>
                <i className="bi bi-caret-down-fill"></i>
                </span>
            </div>
            </button>
            {/* Garis */}
            <div>
            <hr className={`my-3 border-primary border-t-[1px]`} />
            </div>
            {/* Isi accordion */}
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out font-bold text-primary ${
                accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
            >
            <div className="overflow-hidden">
                {/* Checkbox atau Radio Button */}
                
                {type === "checkbox" ? (
                <div className="flex-col items-center space-y-4">
                    {/* Bagian checkbox tidak diubah */}
                    <>
                        <div className="flex items-center">
                        <input type="checkbox" id="shoes" name="shoes" value="shoes" onChange={() => handleCategoryChange('shoes')} />
                        <label htmlFor="shoes" className="ml-2 text-primary">Shoes</label>
                        </div>
                        <div className="flex items-center">
                        <input type="checkbox" id="shirt" name="shirt" onChange={() => handleCategoryChange('shirt')}/>
                        <label htmlFor="checkbox2" className="ml-2 text-primary">Shirt</label>
                        </div>
                        <div className="flex items-center">
                        <input type="checkbox" id="trousers" name="trousers" onChange={() => handleCategoryChange('trousers')}/>
                        <label htmlFor="checkbox3" className="ml-2 text-primary">Trousers</label>
                        </div>
                        <div className="flex items-center">
                        <input type="checkbox" id="sport" name="sport" onChange={() => handleCategoryChange('sport')}/>
                        <label htmlFor="checkbox4" className="ml-2 text-primary">Sport Wear</label>
                        </div>
                        
                    </>
                </div>
                ) : (
                <div className="flex-col items-center space-y-4">
                    {/* Radio button untuk accordion "Gender" */}
                    <div className="flex items-center">
                    <input type="checkbox" id="man" name="gender" value="man" onChange={() => perubahanGender('man')} />
                    <label htmlFor="man" className="ml-2 text-primary">
                        Man
                    </label>
                    </div>
                    <div className="flex items-center">
                    <input type="checkbox" id="woman" name="gender" value="woman" onChange={() => perubahanGender('woman')} />
                    <label htmlFor="woman" className="ml-2 text-primary">
                        Woman
                    </label>
                    </div>
                </div>
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