import { PrimaryButton } from './PrimaryButton'
import { SecundaryButton } from './SecundaryButton'

export function Banner() {
  return (
   
    <div className="flex mx-auto
    lg:w-2/3 
    mt-10 
    md:mt-10
    w-1/2 
    sm:w-1/2 
    flex-wrap-reverse
    flex-row">
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
              <h4
                className="mb-1 w-auto text-nowrap font-bold text-gray-300"
                style={{
                  fontSize: 'clamp(1.5rem, 3.400vw, 3.500rem)',
                }}
                >
                EL ARTE QUE AMAS
              </h4>
              <h1 class="mb-1  
              w-auto
              sm:w-auto
              md:w-auto
              text-4xl 
              sm:text-5xl
              md:text-6xl
              xl:text-[65px]
              2xl:text-[80px]
              font-bold 
            text-purple-600 
              text-nowrap"style={{
                fontSize: 'clamp(1.5rem, 5vw, 5rem)',
              }}>EN EL LUGAR</h1>
              <h2 class="mb-1 
              font-bold
              text-white 
              text-nowrap"style={{
                fontSize: 'clamp(1.5rem, 5.200vw, 5.125rem)',
              }}>QUE DESEAS</h2>
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
            <img class=" 
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
            src="/images/Goku.jpg" alt=""></img>
        </div>
    </div>
  )
}