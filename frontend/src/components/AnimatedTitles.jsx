"use client"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"

export default function AnimatedTitles() {
  const controls = useAnimation()
  
  useEffect(() => {
    const animateTitles = async () => {
      // Animación secuencial
      await controls.start("revealed", { delay: 0.5 }) // Primer título
      await controls.start("revealed", { delay: 2 })   // Segundo título
      await controls.start("revealed", { delay: 4 })   // Tercer título
    }
    animateTitles()
  }, [controls])

  const revealEffect = {
    hidden: {
      opacity: 0.3,
      clipPath: 'inset(0 100% 0 0)' // Completamente oculto (barra a la derecha)
    },
    revealed: {
      opacity: 1,
      clipPath: 'inset(0 0 0 0)',    // Completamente visible
      transition: {
        duration: 10,
        ease: [0.65, 0, 0.35, 1]     // Curva suave de entrada/salida
      }
    }
  }

  return (
    <div className="flex flex-col items-center text-center">
      {/* Primer título */}
      <motion.h4
        className="mb-1 w-auto text-nowrap font-bold text-gray-300 relative"
        style={{ fontSize: 'clamp(1.6rem, 3.400vw, 3.500rem)' }}
        initial="hidden"
        animate={controls}
        variants={revealEffect}
      >
        EL ARTE QUE AMAS
      </motion.h4>

      {/* Segundo título */}
      <motion.h1 
        className="mb-1 w-auto text-4xl sm:text-5xl md:text-6xl xl:text-[65px] 2xl:text-[80px] font-bold text-purple-600 text-nowrap relative"
        style={{ fontSize: 'clamp(2.3rem, 5vw, 5rem)' }}
        initial="hidden"
        animate={controls}
        variants={revealEffect}
      >
        EN EL LUGAR
      </motion.h1>

      {/* Tercer título */}
      <motion.h2
        className="mb-1 font-bold text-white text-nowrap relative"
        style={{ fontSize: 'clamp(2.3rem, 5.200vw, 5.125rem)' }}
        initial="hidden"
        animate={controls}
        variants={revealEffect}
      >
        QUE DESEAS
      </motion.h2>
    </div>
  )
}