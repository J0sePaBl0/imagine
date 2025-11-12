import { Link } from "react-router-dom";

export function PrimaryButton (props) {
    return (
        <Link to={props.to} className="text-white w-full bg-gradient-to-r from-purple-500 via-purple-600 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 hover:shadow-lg hover:shadow-purple-600/90 transition-shadow duration-300 font-medium rounded-lg text-sm text-center text-nowrap block cursor-pointer">
            {props.name}
        </Link>
    );
}