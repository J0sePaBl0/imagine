export function Banner() {
  return (
   
    <div className="flex mx-auto h-screen md:w-2/3 sm:w-1/2 mt-30 flex-wrap border border-amber-500">
        <div className="border border-blue-600 md:min-w-180 flex flex-col w-full sm:w-full md:w-2/3 h-1/2 justify-center sm:items-center">
            <div className=" border border-amber-300 md:w-2/3 flex flex-col sm:justify-items-center md:items-start">
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
            <div className="border border-red-600 pl-10 flex flex-row md:w-2/3 my-8 ">
            <button class="relative w-1/2 
            inline-flex items-center 
            justify-center 
            p-0.5 mb-2 me-2 
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
              mb-2">Ver cuadro</button>
            </div>
        </div>
        <div class="min-w-1/3 sm:static md:relative border border-green-500 h-1/2 flex flex-col justify-center items-center pr-10">
            <img class="md:absolute md:right-30 h-full md:h-auto md:w-96 " src="/images/Goku.jpg" alt=""></img>
        </div>
    </div>

  )
}