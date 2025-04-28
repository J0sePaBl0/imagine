import { Layout } from '../layouts/Layout'
import { Card } from '../components/Card'
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
                
                <div className='h-full  bg-transparent z-0'>
                    <ul>
                        <li><a className='text-white' href="">Arte abstracta</a></li>
                        <li><a className='text-white z-10' href="">Arte abstracta</a></li>
                        <li><a className='text-blue-300' href="">Arte abstracta</a></li>
                        <li><a className='text-blue-300' href="">Arte abstracta</a></li>
                    </ul>
                </div>
            </div>
            <div className=' rounded-2xl h-full w-3/4 ml-5 border border-purple-800'>
                <div className='h-full bg-gray-400'>
                    {paints.map(paint => (
                    <div className="h-48 overflow-hidden">
                    <img 
                      src={paint.imagen} 
                      alt={paint.nombre}
                      className="w-full h-full object-cover"
                    />
                    <div key={paint.id}>
                    <h3 className='text-white'>{paint.nombre}</h3>
                    <p>${paint.precio}</p>
                    </div>
                    </div>
                ))}
                </div>

                </div>
            </div>
    )
}