
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    password: ''
  });
  const [setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    

    try {
      const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/users/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseText = await response.text();
      
      if (!response.ok) {
       let errorData;
        try {
          errorData = JSON.parse(responseText);
        } catch {
         errorData = {message: responseText};
        }
        throw new Error(errorData.message);
      }

        const data = JSON.parse(responseText);
        console.log('Registro exitoso:', data);
        navigate('/Login');
      } catch (err) {
        setError(err.message || 'Error al registrar usuario');
      } finally {
        setIsLoading(false);
      }
      };
   return (
    <div className="flex flex-row h-screen relative">
      <div className='border border-white w-full flex items-center h-full bg-[linear-gradient(to_right,_#020024_0%,_#1e0d32_50%,_#33165600_100%)]'> 
        <div className="w-full md:h-3/4 md:w-1/2 lg:w-96 p-6 relative md:top-5 md:left-40 md:m-5 md:ml-10 z-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-4xl font-bold  text-stone-400 mb-6">REGISTRO</h1>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-500">
                Nombre de usuario
              </label>
              <input 
                type="text"
                id="name"
                name="name"
                value={formData.name} 
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 bg-purple-400 opacity-20 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-500">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 bg-purple-400 opacity-20 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-stone-500">
                Dirección
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 bg-purple-400 opacity-20 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-stone-500">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="6"
                className="mt-1 block w-full px-3 py-2 bg-purple-400 opacity-20 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <a className="text-purple-400" href='/Login'>Ya tengo una cuenta</a>
            <button
              type="submit"
              disabled={isLoading}
              className="mt-3 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#7531d6] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Registrando...
                </>
              ) : 'Registrarse'}
            </button>
          </form>
        </div>
      </div>
      <div className='bg-[url(/images/singupbackground2.jpg)] bg-no-repeat opacity-55 bg-cover bg-right w-2/4 absolute inset-y-0 right-0 -z-10'>
      </div>
  </div>
  );
}