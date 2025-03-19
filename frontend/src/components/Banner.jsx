export function Banner() {
  return (
   
    <div className="flex mx-auto 
    lg:w-2/3 
    mt-10 
    md:mt-10
    w-full 
    sm:w-1/2 
    flex-wrap-reverse
    flex-row">
        <div className="
        sm:min-w-50 
        flex flex-col 
        w-full 
        lg:w-2/3 
        justify-center 
        items-center
        lg:pl-10 
        sm:items-center 
        lg:items-start
        2xl:items-center">
          <div className="
            w-3/5
            md:w-4/5
            sm:w-full 
            flex flex-col 
            sm:justify-items-center 
            md:items-start 
            justify-center 
            items-center
            pb-3">
              <h4 class="mb-1
              w-3/5
              sm:w-4/5
              md:w-full
              text-2xl
              sm:text-3xl
              md:text-4xl
              xl:text-5xl
              font-bold 
            text-gray-300 
              text-nowrap">EL ARTE QUE AMAS</h4>
              <h1 class="mb-1 
              w-3/5
              sm:w-4/5
              md:w-full
              text-4xl 
              sm:text-5xl
              md:text-6xl
              xl:text-7xl  
              font-bold 
            text-purple-600 
              text-nowrap">EN EL LUGAR</h1>
              <h2 class="mb-1
              w-3/5
              sm:w-4/5
              md:w-full
              text-4xl
              sm:text-5xl
              md:text-6xl 
              xl:text-7xl  
              font-bold
              text-white 
              text-nowrap">QUE DESEAS</h2>
            </div>
            <div className=" 
            flex flex-row 
            md:w-4/5
            sm:w-4/5
            sm:mt-5
            md:justify-items-start 
            justify-center
            pb-5">
            <div className="
              flex flex-row  
              md:w-full
              sm:w-full
              md:justify-items-end">
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
                  focus:ring-blue-300 
                  hover:shadow-lg 
                  hover:shadow-purple-600/90 
                  transition-shadow 
                  duration-300">
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
                  hover:shadow-lg 
                  hover:shadow-purple-600/90 
                  transition-shadow 
                  duration-300 
                  font-medium 
                  rounded-lg 
                  text-sm 
                  px-5 
                  py-2.5 
                  text-center 
                  text-nowrap">
                    <span class="relative
                      w-full
                      px-5 
                      py-2.5 
                      transition-all 
                      ease-in 
                      duration-75 
                      rounded-md 
                      text-sm
                      text-nowrap">
                      Ver cuadro
                    </span>
                  </button>
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