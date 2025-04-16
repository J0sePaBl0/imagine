import { Banner } from '../components/Banner'
import { Navbar } from '../components/Navbar'
import { GoalsSection } from '../components/GoalsSection'
import { AboutSection } from '../components/AboutSection'
export function Home (){
    return(<>
        <div class="flex flex-col justify-center items-center">
           <Navbar />
           <Banner />
           <GoalsSection />
           <AboutSection />
         </div>
       </>
       )
}