import { ShoppingCart, User } from "lucide-react"
import { SecundaryButton } from "./SecundaryButton"
import { PrimaryButton } from "./PrimaryButton"
export function PaintCard (props){

return(
    <div className=" w-50 flex flex-col bg-gray-900 m-5 mb-15  ">
        <div className=" h-2/3 ">
            <div className="flex justify-center">
                <img className="object-scale-down w-full h-60" src={props.image} alt="" />
            </div>
            <h1 className="text-white p-4">{props.price} colones</h1>
            <div className="flex justify-center relative bottom-5 mt-5">
                    <div className="gap-2 flex w-full absolute justify-center items-center">
                        <div className="w-3/4">
                         <PrimaryButton to={`/paints/${props.id}`} name = "Ver cuadro" address = {props.id}/>
                        </div>
                        <button className="border border-purple-600 bg-black rounded-3xl w-1/4 h-12 flex justify-center items-center">
                            <ShoppingCart size={20} color="white"/>
                            <span>

                            </span>
                        </button>
                    </div>
            </div>
           
        </div>
    </div>
)

}