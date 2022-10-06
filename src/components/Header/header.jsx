import s from './Header.module.css';

const Header = () =>{
    return(
<div className={s.headerMain}>
    <div><img  className={s.logo} src="https://alllogos.ru/images/logotip-playstation.png" alt="" /></div>
    <div>HEADER</div>
</div>)
}


export default Header