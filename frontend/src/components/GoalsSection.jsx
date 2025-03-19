import { Card } from './Card'

export function GoalsSection (){
    return(
        <div className='mt-20 mb-30 flex border border-amber-500 items-center justify-center'>
            <div className='flex flex-row w-2/3 border flex-wrap justify-center'>
                <Card name = 'Prueba' text = 'Hola esto es una prueba de texto'/>
                <Card name = 'Value' text = 'Hola esto es una prueba de texto'/>
                <Card name = 'Test' text = 'Hola esto es una prueba de texto' />
            </div>
        </div>    
    )
}