// src/pages/Paint.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Paint() {
  const { id } = useParams();
  const [paint, setPaint] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPaint = async () => {
       try {
            const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/paints/${id}`);
           
            if (!response.ok) {
              throw new Error('Error al cargar pintura');
            }
            const data = await response.json();
            setPaint(data);
          
          } catch (err) {
            setError(err.message);
            
          } finally {
            
            setLoading(false);
            
          }
          
        };
    fetchPaint();
  }, [id]);

  if (loading) return <div>Cargando pintura…</div>;
  if (error) return <div>Error: {error}</div>;
  if (!paint) return <div>No hay datos para esta pintura.</div>;
  const imageSrc = paint.imagen.startsWith("/")
    ? paint.imagen
    : `/${paint.imagen}`;
  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="text-3xl font-bold text-white">{paint.nombre}</h1>
      <p className="opacity-70 text-white">
        {paint.categoria} — ₡{paint.precio}
      </p>
      <h1 className="mt-6 text-2xl font-semibold text-white">{paint.imagen}</h1>
      <img className="object-scale-down w-full h-60" src={paint.imagen}  alt="Prueba" />

     {paint.imagen && (
      <img
        className="object-scale-down w-full h-60"
        src={imageSrc}
        alt={paint.nombre}
      />
    )}

      {paint.descripcion && (
        <p className="mt-6 leading-7 text-white">{paint.descripcion}</p>
      )}
    </div>
  );
}
