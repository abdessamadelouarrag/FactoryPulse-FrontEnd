import { NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <nav id="navbar-style" className="flex items-center justify-between p-7">
            <h2 className="text-2xl italic">FactoryPulse</h2>
            <div id="all-navlink" className="flex items-center gap-10 text-blue-600">
                <NavLink to="/" className="md:text-[15px] text-sm">Dashboard</NavLink>
                <NavLink to="/machines" className="md:text-[15px] text-sm">Machines</NavLink>
                <NavLink to="/machines/new" className="bg-blue-700 text-amber-50 p-3 md:text-[15px] text-sm">Ajouter Machine</NavLink>
            </div>
        </nav>
    )
}