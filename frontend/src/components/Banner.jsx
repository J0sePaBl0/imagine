export function Banner() {
  return (
   
    <div className="flex mx-auto h-screen border border-green-700 w-2/3 mt-10 flex-wrap">
        <div className="min-w-20 flex flex-col w-1/2 h-1/2 border border-yellow-200 justify-center items-end pr-5">
            <div className="items-center border border-blue-300">
              <h4 class="mb-1 text-4xl font-bold text-white">EL ARTE QUE AMAS</h4>
              <h1 class="mb-1 text-6xl font-bold text-white">EN EL LUGAR</h1>
              <h2 class="mb-1 text-6xl font-bold text-white">QUE DESEAS</h2>
            </div>
            <div className="flex flex-row">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Purple to blue
                </span>
              </button>
              <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Purple</button>
            </div>
        </div>

        <div class="min-w-20 w-1/2 h-1/2 flex flex-col border border-red-600 justify-center items-center pl-5">
            <img class="h-full md:h-auto md:w-96 " src="/images/Goku.jpg" alt=""></img>
        </div>
    </div>

  )
}