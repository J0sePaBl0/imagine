import { PrimaryButton } from './PrimaryButton';
import { SecundaryButton } from './SecundaryButton';
import { motion } from "motion/react";
import AnimatedTitles from './AnimatedTitles';


export function Banner() {
  return (
    
    <motion.div 
    className="flex mx-auto
    lg:w-2/3 
    mt-10 
    md:mt-10
    w-1/2 
    sm:w-1/2 
    flex-wrap-reverse
    flex-row"
    initial={{ y: 100}}
    animate={{ y: 0}}
    transition={{ 
      duration: 0.8,
      type: "spring",
      stiffness: 50}}>

        <div className="
        sm:min-w-50 
        flex flex-col 
        w-full
        sm:w-full 
        lg:w-2/3
        justify-center 
        items-center
        xl:pl-10
        sm:items-center 
        lg:items-start
        xl:items-start
        2xl:items-start
        2xl:justify-items-start">
          <div className="
            w-3/5
            md:w-4/5
            xl:w-4/5
            sm:w-full 
            flex flex-col 
            sm:justify-items-center 
            md:items-start 
            justify-center 
            items-center
            pb-3">
              <AnimatedTitles />
            </div>
            <div className=" 
            flex flex-row 
            md:w-4/5
            sm:w-5/6
            sm:mt-5
            w-5/6
            md:justify-items-start 
            justify-center
            pb-5">
            <div className="
              flex flex-row
              xl: 
              md:w-full
              sm:w-full
              w-full
              md:justify-items-end">
                  <SecundaryButton />
                  <PrimaryButton />
                </div>
            </div>
        </div>
        <div class="flex flex-col 
        w-full
        lg:w-1/3 
        py-5
        sm:justify-center 
        md:justify-center 
        items-center 
        xl:pr-20
        lg:pr-10">
            <motion.img class=" 
            2xl:h-auto 
            2xl:min-w-86
            2xl:w-96
            lg:w-80
            lg:max-w-100
            md:max-w-80 
            sm:w-75
            w-60
            hover:shadow-lg 
          hover:shadow-purple-600/100
            transition-shadow 
            duration-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            src="/images/Goku.jpg" alt=""></motion.img>
        </div>
    </motion.div>
    
  )
}