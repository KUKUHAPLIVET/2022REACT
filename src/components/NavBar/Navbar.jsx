import { NavLink } from "react-router-dom"
import s from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={s.nav}>

            <div className={s.item}>
                <NavLink className= { ({isActive}) => isActive ? s.activeLink : undefined}
                 to="/profile" >Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={  ({isActive}) =>isActive ? s.activeLink : undefined} 
                to="/dialogs" >Messages</NavLink>
            </div>
            <div className={s.item}>
            <NavLink className= { ({isActive}) => isActive ? s.activeLink : undefined}
                 to="/users" >Users</NavLink>
            </div>

            

        </div>

    )
}

export default Navbar