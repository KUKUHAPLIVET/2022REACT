

import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom";
import Preloader from "../../../../common/preloader/Preloader";


const ProfileInfo = (props) => {

  let {userId} = useParams()
  useEffect(() => {
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/'+userId)
      .then(response => {
        props.setUserProfile(response.data)
      })
  }, []);
  


  return(
    !props.profile? <Preloader/> :

      <div>
  
        	{props.profile.fullName}
          <img src={props.profile.photos.large} alt="321" />
      </div>

  )
}

export default ProfileInfo
