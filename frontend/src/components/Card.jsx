import {Check} from '../assets/check'
import { motion, useAnimation } from "framer-motion"
export function Card(props){


    return(
        
        <motion.div
        initial={
            {
            
            }
        }
        whileInView={{
            scale: 1.2,
        }
        }
        class="my-5 md:my-10 flex group border border-blue-800 md:flex-row relative w-70 h-{30px} overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
            <div class="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
            <div class="h-full relative rounded-[15px] bg-purple p-6">
                <Check />
            <div class="space-y-4">
                <img src="https://nuxt.com/assets/home/ux-fast-light.svg" alt="" />
                <p class="text-lg font-semibold text-purple-500">{props.name}</p>
                <p class="font-md text-slate-500">{props.text}</p>
            </div>
            </div>
        </motion.div>
    )
}