"use client"
import {animate, motion, useAnimation, useAnimationFrame } from "framer-motion"
import { useEffect } from "react"

export default function AnimatedTitles() {
  const controlsT1 = useAnimation({})
  const controlsT2 = useAnimation({})
  const controlsT3 = useAnimation({})


  useEffect(() => {
    const animateTitles = async () => {
      await controlsT1.start({
        opacity:100,
        transition: { duration: 0.5 }
      })
      await controlsT2.start({
        opacity:100,
        transition: { duration: 0.5 },
      })  
      await controlsT3.start({
        opacity:100,
        transition: { duration: 0.5 },
      })
    }
    animateTitles()
  })

 
  return (
    <div className="flex flex-col items-center text-center">
      <motion.h4
        className="mb-1 w-auto text-nowrap font-bold text-gray-300 relative"
        style={{ fontSize: 'clamp(2.3rem, 3.400vw, 3.500rem)' }}
        animate={controlsT1}
        initial={{
          opacity:0
        }}
    
      >
      EL ARTE QUE AMAS
      </motion.h4>

      <motion.h1 
        className="mb-1 w-auto text-4xl sm:text-5xl md:text-6xl xl:text-[65px] 2xl:text-[80px] font-bold text-purple-600 text-nowrap relative"
        style={{ fontSize: 'clamp(3.4rem, 5vw, 5rem)' }}
        animate={controlsT2}
        initial={{
        opacity:0
        }}>
        EN EL LUGAR
      </motion.h1>

      <motion.h2
        className="mb-1 font-bold text-white text-nowrap relative"
        style={{ fontSize: 'clamp(3rem, 5.200vw, 5.125rem)' }}
        animate={controlsT3}
        initial={{

          opacity:0
        }}
        >
          
        QUE DESEAS 
      </motion.h2>
    </div>
  )
}