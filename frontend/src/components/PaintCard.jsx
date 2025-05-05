import { PrimaryButton } from "./PrimaryButton"
export function PaintCard (props){

return(
    <div className="border border-white h-70 w-50 flex flex-col bg-gray-900 m-5">
        <div className=" h-2/3 ">
            <img className="object-scale-down" src={props.image} alt="" />
        </div>
        <div>
            <h1>{props.price}</h1>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <PrimaryButton name = "carrito"></PrimaryButton>
        </div>
    </div>
)

}