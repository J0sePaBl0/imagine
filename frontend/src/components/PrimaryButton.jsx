export function PrimaryButton (props) {
    return (
        <a href={props.address} class="
        text-white
        w-full 
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
         
        text-center 
        text-nowrap
        block
        cursor-pointer">
        <span class="relative
            w-full
            py-2.5 
            transition-all 
            ease-in 
            duration-75 
            rounded-md 
            text-sm
            text-nowrap
            block">
            {props.name}
        </span>
    </a>

    )
}