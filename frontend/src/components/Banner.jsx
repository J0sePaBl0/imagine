export function Banner() {
  return (
    <a href="#" class="flex flex-col border border-gray-200 ">
    <div className="flex ">
        <div>
            <h4 class="mb-1 text-2xl font-bold text-white">EL ARTE QUE AMAS</h4>
            <h1 class="mb-1 text-5xl font-bold text-white">EN EL LUGAR</h1>
            <h2 class="mb-1 text-4xl font-bold text-white">QUE DESEAS</h2> 
        </div>
        <div class="flex flex-col justify-between p-4 leading-normal">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/images/Goku.jpg" alt=""></img>
        </div>
    </div>
</a>
  )
}