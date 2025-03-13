export function Navbar () {
    return (
    <div className="border
        flex flex-row 
        border-amber-400 
        px-30
        py-5
        justify-center">
        
        <div className="flex
        border border-white
        mr-20
        ">
            <h1 className="text-5xl 
            font-bold 
            text-white">lOGO
            </h1>
        </div>
        <div className="border border-red-600 flex justify-center">
            <ul className="flex flex-row 
            text-white 
            gap-15
            text-1xl 
            items-center
            border border-blue-600
            pr-12">
                <li></li>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Catálogo</a>
                </li>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Home</a>
                </li>
            </ul>
        </div>
        <div className="ml-20">
            <h1 className="text-5xl 
                font-bold 
                text-white">Carrito
            </h1>
        </div>
    </div>

    )
}