import { NavLink } from "react-router-dom"
import s from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={s.nav}>

            <div className={s.item}>
                <NavLink activeClassName={s.active} to="/profile" >Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to="/dialogs" >Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Music">Music</NavLink>
            </div>

        </div>

    )
}

export default Navbar