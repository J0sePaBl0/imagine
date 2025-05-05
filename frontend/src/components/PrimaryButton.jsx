export function PrimaryButton (props) {
    return (
        <button type="button" class="
                        text-white
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
                        py-2.5 
                        text-center 
                        text-nowrap">
                            <span class="relative
                            w-full
                            py-2.5 
                            transition-all 
                            ease-in 
                            duration-75 
                            rounded-md 
                            text-sm
                            text-nowrap">
                            {props.name}
                            </span>
                        </button>

    )
}