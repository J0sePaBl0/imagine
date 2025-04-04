import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
export function AboutSection (){

  const section = useRef(null)
  const titulo = useRef(null)

  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["0 1", "1 0"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.9,1])
  const y = useTransform(scrollYProgress, [0,1],[40,-100])
  const scale = useTransform(scrollYProgress, [0,1],[0.80,1.40])
 

    return(
        <motion.div ref={section} className="w-2/3 min-h-fit flex 2xl:mt-30 flex-col mb-35 2xl:mb-50">
            <motion.h1 ref={titulo} className="text-purple-600 mb-2 md:mb-10" style={{
          opacity,y,scale,
          fontSize: 'clamp(2rem, 5.200vw, 3rem)'
        }}
              >
            Imagine
            </motion.h1>
            <motion.p style={{opacity,y,scale,
                fontSize: 'clamp(5px, 3vw, 20px)',
              }} className="text-zinc-400">
            En Imagine, creemos que cada espacio cuenta una historia, y qué mejor manera de narrarla que a través del arte. Nos especializamos en la creación de cuadros únicos que transforman ambientes y reflejan la esencia de quienes los habitan.
            Nuestra pasión por el arte y el diseño nos ha llevado a ofrecer un servicio completamente personalizado, donde tú eres el protagonista. Desde elegir entre nuestras colecciones exclusivas hasta diseñar tu propio cuadro, en Imagine hacemos realidad tus ideas y emociones en cada pincelada.
            Nos enorgullece trabajar con materiales de alta calidad y con un equipo de artistas dedicados a crear piezas que no solo embellezcan tu hogar o espacio de trabajo, sino que también transmitan un mensaje, una emoción o un recuerdo especial.
            ¡Únete a nosotros y transforma tus paredes en una galería única que hable de ti!
            </motion.p>
        </motion.div>


    )
}