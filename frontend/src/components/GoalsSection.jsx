import { Card } from './Card'
import { motion,useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useMediaQuery } from "react-responsive"

export function GoalsSection (){
    const cardRef1 = useRef(null)
    const cardRef2 = useRef(null)
    const cardRef3 = useRef(null)
    const section = useRef(null)
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" })

    const { scrollYProgress } = useScroll({
        target: cardRef2,
        offset: ["0 1", "1 0"],
      }) 
    
    const y = useTransform(
        scrollYProgress, [0, 1], [-80,120]
    )
    const x = useTransform(scrollYProgress, [0,1],[0,80])

    
    return(
            <motion.div ref={section} className='xl:mt-70 lg:mt-50 mt-15 md:mb-60 mb-20 flex flex-row md:w-2/3 w-4/5 flex-wrap md:gap-10 justify-center'>
                <motion.div ref={cardRef1} >
                <Card
                name = 'AMPLIAR PRESENCIA EN EL MERCADO' text = 'Ampliar la presencia en el mercado mediante la apertura de nuevas sucursales físicas y una plataforma de venta en línea para llegar a más clientes a nivel nacional e internacional.'/>
                </motion.div>
                <motion.div ref={cardRef2} style={!isMobile ? {y} : undefined }>
                <Card 
                name = 'PROMOVER EL TALENTO LOCAL' text = 'Colaborando con artistas emergentes y consagrados, ofreciendo sus obras en nuestra galería y organizando exposiciones exclusivas'
                />
                </motion.div>
                <motion.div ref={cardRef3}>
                <Card ref={cardRef3} name = 'FOMENTAR LA PERSONALIZACION' text = 'Permitiendo a los clientes encargar cuadros a medida, adaptados a sus gustos y necesidades específicas, garantizando una experiencia única y satisfactoria.' 
                style={{
                    x
                    }}
                />
                </motion.div>
            </motion.div>
    )
}