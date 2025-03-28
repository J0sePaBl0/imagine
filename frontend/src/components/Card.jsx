"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Check } from '../assets/check'

export function Card(props) {
  const cardRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1 0"]
  })

  const hovered = {
    y: 80,
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  } 

  const scale = useTransform(scrollYProgress, [0, 1], [0.80, 1.10])
  
  const y = useTransform(scrollYProgress, [0, 1], [-60, 80])

  return (
    <motion.div
      ref={cardRef}
      className="my-5 md:my-10 flex group border border-blue-800 md:flex-row relative w-70 h-auto overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500"
      whileHover={hovered}
      style={{
        scale,
        y
      }}
    >
      <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
      <div className="h-full relative rounded-[15px] bg-purple p-6">
        <Check />
        <div className="space-y-4">
          <img src="https://nuxt.com/assets/home/ux-fast-light.svg" alt="" />
          <p className="text-lg font-semibold text-purple-500">{props.name}</p>
          <p className="font-md text-slate-500">{props.text}</p>
        </div>
      </div>
    </motion.div>
  )
}