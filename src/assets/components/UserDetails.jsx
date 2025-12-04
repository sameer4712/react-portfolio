import { Link } from "react-router-dom"
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function UserDetails() {
    return (
        <div className='flex gap-4 text-lg text-amber-50 font-mono mt-3 items-center'>
            <Link to={{ pathname: "https://github.com/sameer4712" }} className="cursor-pointer">
                <FaGithub size={36} className="hover:text-red-400 transition" />
            </Link>

            <Link to={{ pathname: "https://www.linkedin.com/in/sameer-pt/" }} className="cursor-pointer">
                <FaLinkedin size={36} className="hover:text-blue-400 transition" />
            </Link>
        </div>
    )
}
