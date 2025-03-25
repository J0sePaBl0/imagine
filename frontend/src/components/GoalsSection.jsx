import { Card } from './Card'

export function GoalsSection (){
    return(
            <div className='mt-20 mb-30 flex flex-row md:w-2/3 w-4/5  flex-wrap md:justify-between justify-center'>
                <Card name = 'AMPLIAR PRESENCIA EN EL MERCADO' text = 'Ampliar la presencia en el mercado mediante la apertura de nuevas sucursales físicas y una plataforma de venta en línea para llegar a más clientes a nivel nacional e internacional.'/>
                <Card name = 'PROMOVER EL TALENTO LOCAL' text = 'Colaborando con artistas emergentes y consagrados, ofreciendo sus obras en nuestra galería y organizando exposiciones exclusivas'/>
                <Card name = 'FOMENTAR LA PERSONALIZACION' text = 'Permitiendo a los clientes encargar cuadros a medida, adaptados a sus gustos y necesidades específicas, garantizando una experiencia única y satisfactoria.' />
            </div>
      
    )
}