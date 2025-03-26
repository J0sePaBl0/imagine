import { Card } from './Card'
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

export function GoalsSection (){
    const cardRef1 = useRef(null)
    const cardRef2 = useRef(null)
    const cardRef3 = useRef(null)
    const section = useRef(null)

    const sectionInView = useInView(section,{once:false})
    const card1InView = useInView(cardRef1, {once: false })
    const card2InView = useInView(cardRef2, { margin: "-20% 0px -20% 0px", once: true })
    const card3InView = useInView(cardRef3, { margin: "-20% 0px -20% 0px", once: true })

    useEffect (() => {
        console.log("Element es visible", sectionInView)
        console.log("Card 1 visible", card1InView)
    }, [sectionInView,card1InView]
         
    )

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }
    
    return(
            <motion.div ref={section} className='mt-40 mb-50 flex flex-row md:w-2/3 w-4/5  flex-wrap md:justify-between justify-center'>
                <Card ref={cardRef1} 
                 
                name = 'AMPLIAR PRESENCIA EN EL MERCADO' text = 'Ampliar la presencia en el mercado mediante la apertura de nuevas sucursales físicas y una plataforma de venta en línea para llegar a más clientes a nivel nacional e internacional.'/>
                <Card ref={cardRef2}
                initial="hidden"
                animate={cardRef1 && cardRef2 ? "visible" : "hidden"}
                variants={cardVariants}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                name = 'PROMOVER EL TALENTO LOCAL' text = 'Colaborando con artistas emergentes y consagrados, ofreciendo sus obras en nuestra galería y organizando exposiciones exclusivas'/>
                <Card ref={cardRef3} name = 'FOMENTAR LA PERSONALIZACION' text = 'Permitiendo a los clientes encargar cuadros a medida, adaptados a sus gustos y necesidades específicas, garantizando una experiencia única y satisfactoria.' />
            </motion.div>
    )
}