export function Banner() {
  return (
   
    <div className="flex mx-auto h-screen md:w-2/3 sm:w-1/2 mt-30 flex-wrap border border-amber-500">
        <div className="border border-blue-600 md:min-w-180 flex flex-col w-full sm:w-full md:w-2/3 h-1/2 justify-center sm:items-center">
            <div className=" border border-amber-300 md:w-2/3 flex flex-col sm:justify-items-center md:items-start justify-center items-center">
              <h4 class="mb-1
              w-1/2
              border border-amber-600
              text-2xl 
              md:text-5xl font-bold 
              sm:text-3xl
              text-gray-300 text-nowrap">EL ARTE QUE AMAS</h4>
              <h1 class="mb-1
              border border-amber-600
              w-1/2
              text-4xl 
              md:text-7xl sm:text-5xl font-bold 
              text-purple-600 text-nowrap">EN EL LUGAR</h1>
              <h2 class="mb-1
              border border-amber-600
              w-1/2
              text-4xl  
              md:text-7xl sm:text-5xl font-bold
              text-white text-nowrap">QUE DESEAS</h2>
            </div>
            <div className="border border-red-600 flex flex-row md:w-2/3 my-8 sm:justify-start md:justify-items-start justify-center">
            <div className="border border-amber-600
            flex flex-row w-1/2 md:w-4/5 md:justify-items-start">
              <button class="relative md:w-1/2 
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
                rounded-md">
                Ver catálogo
                </span>
                </button>
                <button type="button" class="text-white
                md:w-1/2  
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
                me-2">Ver cuadro</button>
                </div>
            </div>
        </div>
        <div class="md:min-w-1/3 md:w-1/3 sm:static md:relative border border-green-500 h-1/2 flex flex-col justify-center items-center md:pr-10 w-full">
            <img class="md:absolute md:right-30 md:h-auto md:w-96 sm:w-46 w-46 h-auto" src="/images/Goku.jpg" alt=""></img>
        </div>
    </div>

  )
}