export function Banner() {
  return (
   
    <div className="flex mx-auto 
    lg:w-2/3 
    mt-10 
    md:mt-10
    w-full 
    sm:w-1/2 
    flex-wrap-reverse
    flex-row
    border 
  border-amber-500">
        <div className="border border-blue-600  
        sm:min-w-50 
        flex flex-col 
        w-full 
        lg:w-2/3 
        md:h-1/2
        justify-center 
        lg:pl-10 
        sm:items-center 
        lg:items-start
        2xl:items-center">
            <div className=" border border-amber-300 
            w-full
            md:w-2/3 
            sm:w-full 
            flex flex-col 
            sm:justify-items-center 
            md:items-start 
            justify-center 
            items-center
            pb-3">
              <h4 class="mb-1
              w-1/2
              sm:w-full
              border border-amber-600
              text-2xl
              sm:text-3xl
              md:text-3xl
              xl:text-5xl
              font-bold 
            text-gray-300 
              text-nowrap">EL ARTE QUE AMAS</h4>
              <h1 class="mb-1
              border border-amber-600
              w-1/2
              sm:w-full
              text-4xl 
              sm:text-5xl
              md:text-5xl
              xl:text-7xl  
              font-bold 
            text-purple-600 
              text-nowrap">EN EL LUGAR</h1>
              <h2 class="mb-1
              border border-amber-600
              w-1/2
              sm:w-full
              text-4xl
              sm:text-5xl
              md:text-5xl 
              xl:text-7xl  
              font-bold
              text-white 
              text-nowrap">QUE DESEAS</h2>
            </div>
            <div className="border border-red-600 
            flex flex-row 
            md:w-2/3
            sm:w-full 
            sm:mt-5
            md:justify-items-start 
            justify-center
            pb-5">
            <div className="border border-amber-600
            flex flex-row w-1/2 
            md:w-4/5
            sm:w-full
            md:justify-items-start">
              <button class="relative 
              w-1/2 
              inline-flex items-center 
              justify-center 
              p-0.5 me-2 
              text-sm font-medium 
              text-white 
              rounded-lg group 
              bg-gradient-to-br 
            from-purple-600 
            to-blue-500 
              focus:outline-none 
              focus:ring-blue-3 
              hover:shadow-lg 
              shadow-purple-500/50">
                <span class="relative
                w-full
                px-5 
                py-2.5 
                transition-all 
                ease-in 
                duration-75 
                bg-black 
                rounded-md 
                text-sm
                text-nowrap">
                Ver catálogo
                </span>
                </button>
                <button type="button" class="text-white
                w-1/2 
                bg-gradient-to-r 
                from-purple-500 
                via-purple-600 
                to-blue-600
                hover:bg-gradient-to-br 
                focus:ring-4 
                focus:outline-none 
                focus:ring-purple-300 
                dark:focus:ring-purple-800 
                hover:shadow-lg shadow-purple-500/50 
                font-medium 
                rounded-lg 
                text-sm 
                px-5 
                py-2.5 
                text-center 
                me-2
                text-nowrap">Ver cuadro</button>
                </div>
            </div>
        </div>
        <div class="flex flex-col 
        w-full
        lg:w-1/3 
        py-5
        sm:justify-center 
        md:justify-center 
        items-center 
        border border-green-500 
        xl:pr-10">
            <img class="2xl:absolute 
            2xl:right-30 
            2xl:h-auto 
            2xl:min-w-86 
            lg:max-w-100 
            sm:w-75
            w-60
            lg:w-90
            lg:pr-10"
            src="/images/Goku.jpg" alt=""></img>
        </div>
    </div>

  )
}