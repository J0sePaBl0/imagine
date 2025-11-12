// src/pages/Paint.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Paint() {
  const { id } = useParams();
  const [paint, setPaint] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abort = new AbortController();

    async function fetchPaint() {
      try {
        setLoading(true);

        const base = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL; // e.g. http://localhost:3001
        const response = await fetch(`${base}/api/paints/${id}`, {
          signal: abort.signal,
        });

        if (response.status === 404) {
          setError("Pintura no encontrada");
          setPaint(null);
          return;
        }
        if (!response.ok) throw new Error("Error al cargar pintura");

        const data = await response.json(); // backend returns the paint object
        setPaint(data);                     // not data.data
        setError(null);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message || "Error de red");
      } finally {
        setLoading(false);
      }
    }

    fetchPaint();
    return () => abort.abort();
  }, [id]);

  if (loading) return <div>Cargando pintura…</div>;
  if (error) return <div>Error: {error}</div>;
  if (!paint) return <div>No hay datos para esta pintura.</div>;

  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="text-3xl font-bold text-white">{paint.name}</h1>
      <p className="opacity-70 text-white">
        {paint.category} — ₡{paint.price}
      </p>
      <h1 className="mt-6 text-2xl font-semibold text-white">{paint.image}</h1>

     {paint.image && (
        <img
          src={paint.image}
          alt="Imagen del cuadro"
          className="object-scale-down w-full h-60"
        />
      )}

      {paint.description && (
        <p className="mt-6 leading-7 text-white">{paint.description}</p>
      )}
    </div>
  );
}
