import axios from 'axios';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authApi } from '../../api/api';
import { getAuthUserData, logOut } from '../../Redux/autnReducer';
import s from './Header.module.css';

const Header = (props) => {

  // useEffect(() => {
  //   props.getAuthUserData()


  // }, [props.login])

  const logOutButton = ()=>{
    props.logOut()
  }

  return (

    <div className={s.headerMain}>
      <div><img className={s.logo} src="https://alllogos.ru/images/logotip-playstation.png" alt="" /></div>

      {props.isAuth ? <div>{props.login}  <button onClick={logOutButton}>LOGOUT</button> </div>:
        <NavLink to="/login">Login</NavLink>}
    </div>)
}



const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}



export default connect(mapStateToProps,{getAuthUserData,logOut})(Header)
