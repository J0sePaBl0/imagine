import { Layout } from '../layouts/Layout'
import { PaintCard } from '../components/PaintCard'
import { useState, useEffect } from 'react';

export function Catalogo (){
    const [paints, setPaints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPaints = async () => {
          try {
            const response = await fetch('http://localhost:3001/api/paints');
            
            if (!response.ok) {
              throw new Error('Error al cargar pinturas');
            }
    
            const data = await response.json();
            setPaints(data);
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchPaints();
      }, []);

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>Error: {error}</div>;

    return(
        <div className='h-96 flex flex-row w-6/7 mt-10'>
            <div className='border rounded-2xl border-purple-800 w-1/4 h-full '>
                
                <div className='h-full  bg-gray-950/ z-0'>
                    <ul>
                        <li><a className='text-white' href="">Arte abstracta</a></li>
                        <li><a className='text-white z-10' href="">Arte abstracta</a></li>
                        <li><a className='text-blue-300' href="">Arte abstracta</a></li>
                        <li><a className='text-blue-300' href="">Arte abstracta</a></li>
                    </ul>
                </div>
            </div>
            <div className=' rounded-2xl w-3/4 ml-5 border border-purple-800'>
                <div className='bg-gray-950/60 p-10 rounded-2xl flex flex-row flex-wrap'>
                    
                    {paints.map(paint => (
                        
                    <div className="">
                        <PaintCard image = {paint.imagen} price = {paint.precio} name = {paint.nombre} descripcion = {paint.descripcion} />
                    </div>
                ))}
                </div>

                </div>
            </div>
    )
}