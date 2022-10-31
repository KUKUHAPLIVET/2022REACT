import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import { compose } from "redux"
import s from "./Navbar.module.css"

const Navbar = (props) => {
    return (
        <div className={s.nav}>

            <div className={s.item}>
                <NavLink className= { ({isActive}) => isActive ? s.activeLink : undefined}
                 to={`/profile/${props.authUser}`} >Profile</NavLink>
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

const mapStateToProps = (state)=>({
  authUser : state.auth.userId

})

export default compose(connect(mapStateToProps,))(Navbar)



