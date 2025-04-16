import { Banner } from '../components/Banner'
import { Navbar } from '../components/Navbar'
import { GoalsSection } from '../components/GoalsSection'
import { AboutSection } from '../components/AboutSection'
import { Layout } from '../layouts/Layout'
export function Home (){
    return(<>
        
            <Navbar />
            <Banner />
            <GoalsSection />
            <AboutSection />
        
       </>
       )
}