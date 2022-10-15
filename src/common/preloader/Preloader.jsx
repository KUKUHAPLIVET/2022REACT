import preloader from "./preloaderGIF.webp"
import s from "./preloader.module.css"
const Preloader = () => {
  return(
      <div>
        <img className={s.preloader} src={preloader}/>
      </div>

  )
}

export default Preloader
