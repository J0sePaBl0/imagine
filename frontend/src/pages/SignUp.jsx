import { SignupForm } from "../components/SignupForm";

export function SignUp() {
   return (
    <div className="border border-amber-600 flex flex-row h-screen relative">
      <div className='border border-white w-full flex items-center h-full bg-[linear-gradient(to_right,_#020024_0%,_#1e0d32_50%,_#33165600_100%)]'> 
        <div className="w-full md:h-3/4 md:w-1/2 lg:w-96 p-6 relative md:top-5 md:left-40 md:m-5 md:ml-10 z-10">
          <SignupForm/>
        </div>
      </div>
      <div className='bg-[url(/images/singupbackground2.jpg)] bg-no-repeat opacity-55 bg-cover bg-right w-2/4 absolute inset-y-0 right-0 -z-10'>
      </div>
  </div>
  );
}