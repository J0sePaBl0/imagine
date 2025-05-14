"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { ShoppingCart, User } from "lucide-react" 

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems] = useState(3) // Ejemplo con 3 items en el carrito

  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="w-10" src="/images/faviconImagineWhite.png" alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <motion.a 
              href="/" 
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md 
              text-sm font-medium transition-colors"
              whileHover={{ scale: 1.1, 
                color: "purple"  
               }}
               whileTap={{ scale: 0.95 }}>Home
              </motion.a>

              <motion.a 
              href="/catalogo" 
              className="text-gray-300 
              hover:text-white px-3 py-2 
              rounded-md text-sm font-medium 
              transition-colors"
              whileHover={{ scale: 1.1, 
               color: "purple"  
              }}
              whileTap={{ scale: 0.95 }}>
                Catálogo
              </motion.a>
              <motion.a 
              href="" 
              className="text-gray-300 
              hover:text-white px-3 py-2 
              rounded-md text-sm font-medium 
              transition-colors"
              whileHover={{ scale: 1.1, 
                color: "purple"  
               }}
               whileTap={{ scale: 0.95 }}>
                Pedidos
              </motion.a>
              <motion.a 
              href="#" 
              className="text-gray-300 
              hover:text-white px-3 py-2 rounded-md 
              text-sm font-medium transition-colors"
              whileHover={{ scale: 1.1, 
                color: "purple"  
               }}
               whileTap={{ scale: 0.95 }}
              >Contáctanos
              </motion.a>
              
              {/* Carrito y Perfil (Desktop) */}
              <div className="flex items-center ml-4 space-x-3">
                <motion.a 
                  href=""
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-white p-2 relative"
                >
                  <ShoppingCart size={20} />
                  {cartItems > 0 && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center"
                    >
                      {cartItems}
                    </motion.span>
                  )}
                </motion.a>

                <div className="relative">
                  <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-300 hover:text-white p-2"
                  >
                    <User size={20} />
                  </motion.button>

                  {/* Dropdown menu */}
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10"
                    >
                      <div className="py-1">
                        <a
                          href="/signin"
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                          Registrarse
                        </a>
                        <a
                          href="/login"
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                          Iniciar sesión
                        </a>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            {/* Carrito (Mobile) */}
            <motion.a 
              href="/carrito"
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 relative p-2"
            >
              <ShoppingCart size={20} />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </motion.a>

            {/* Botón Hamburguesa */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gray-800 overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Catálogo</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Pedidos</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contáctanos</a>
            <a href="/perfil" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center">
              <User size={18} className="mr-2" /> Mi Perfil
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  )
}