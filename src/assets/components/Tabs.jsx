import { NavLink } from "react-router-dom";

export default function Tabs({cate, onClick}) {
    return (
        <li onClick={onClick} className="me-2">
            <NavLink to={'/'}  className="inline-block px-4 py-2  border transition-all hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-gray-50">{cate.strCategory}</NavLink>
        </li>
    )
}
