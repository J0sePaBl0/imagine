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
            const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/paints/getAllPaints`);
            
            if (!response.ok) {
              throw new Error('Error al cargar pinturas');
            }
            const data = await response.json();
            setPaints(data.data);
            console.log('response', data.data)
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
        <div className=' flex flex-row w-6/7 mt-10'>
            <div className='border rounded-2xl border-purple-800 w-1/4 '>
                
                <div className='h-full  bg-gray-950/ z-0'>
                    <ul >
                        <li className='bg-gray-950/60 p-5 pl-10 m-5 rounded-3xl'><button className='text-white' href="">Super Heroes</button></li>
                        <li className='bg-gray-950/60 p-5 pl-10 m-5 rounded-3xl'><a className='text-white' href="">Arte abstracta</a></li>
                        <li className='bg-gray-950/60 p-5 pl-10 m-5 rounded-3xl'><a className='text-white' href="">Anime</a></li>
                        <li className='bg-gray-950/60 p-5 pl-10 m-5 rounded-3xl'><a className='text-white' href="">Elegante</a></li>
                        <li className='bg-gray-950/60 p-5 pl-10 m-5 rounded-3xl'><a className='text-white' href="">Niños</a></li>
                        <li className='bg-gray-950/60 p-5 pl-10 m-5 rounded-3xl'><a className='text-white' href="">Animales</a></li>
                        <li className='bg-gray-950/60 p-5 pl-10 m-5 rounded-3xl'><a className='text-white' href="">Fantasía</a></li>
                        <li className='bg-gray-950/60 p-5 pl-10 m-5 rounded-3xl'><a className='text-white' href="">Películas</a></li>
                        <li className='bg-gray-950/60 p-5 pl-10 m-5 rounded-3xl'><a className='text-white' href="">Terror</a></li>
                        <li className='bg-gray-950/60 p-5 pl-10 m-5 rounded-3xl'><a className='text-white' href="">Realismo</a></li>
                    </ul>
                </div>
            </div>
            <div className=' rounded-2xl w-3/4 ml-5 '> 
                <div className='bg-gray-950/60 p-10 border border-purple-800 rounded-2xl flex flex-row flex-wrap'>
                    
                    {paints.map(paint => (
                    <div>
                        <PaintCard image = {paint.imagen} price = {paint.precio} name = {paint.nombre} descripcion = {paint.descripcion} />
                    </div>
                ))}
                </div>

                </div>
            </div>
    )
}