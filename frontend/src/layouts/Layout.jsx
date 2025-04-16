import { Navbar } from './Navbar'
export function Layout ({ children }){
return (
    <>
    
    <div className="flex flex-col justify-center items-center">
    <Navbar />
        {children}
    </div>
    </>
)}


