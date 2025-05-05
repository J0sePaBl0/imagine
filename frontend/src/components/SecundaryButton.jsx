export function SecundaryButton(props){
    return(
        <button class="relative 
                  w-1/2 
                  inline-flex 
                  items-center 
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
                    py-2.5 
                    transition-all 
                    ease-in 
                    duration-75 
                    bg-black 
                    rounded-md 
                    text-sm
                    text-nowrap">
                    {props.name}
                  </span>
                  </button>
    )
}