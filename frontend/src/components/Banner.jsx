export function Banner() {
  return (
   
    <div className="flex mx-auto h-screen w-2/3 mt-10 flex-wrap">
        <div className="min-w-20 flex flex-col w-1/2 h-1/2 justify-center items-end ">
            <div className="items-center w-2/3">
              <h4 class="mb-1 
              text-4xl font-bold 
              text-white">EL ARTE QUE AMAS</h4>
              <h1 class="mb-1 
              text-6xl font-bold 
              text-white">EN EL LUGAR</h1>
              <h2 class="mb-1 
              text-6xl font-bold 
              text-white">QUE DESEAS</h2>
            </div>
            <div className="flex flex-row w-2/3 my-8">
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
        <div class="min-w-20 w-1/2 h-1/2 flex flex-col justify-center items-start pl-10">
            <img class="h-full md:h-auto md:w-84 " src="/images/Goku.jpg" alt=""></img>
        </div>
    </div>

  )
}