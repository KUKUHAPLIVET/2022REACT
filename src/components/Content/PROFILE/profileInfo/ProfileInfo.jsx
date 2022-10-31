

import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom";
import { UserAPI } from "../../../../api/api";
import Preloader from "../../../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import s from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {

  let {userId} = useParams()
  useEffect(() => {
     
     props.getUserProfile( userId )   //get User Profile and User Status from server
     props.getStatus( userId )
    // axios.get('https://social-network.samuraijs.com/api/1.0/profile/'+userId)
    //   .then(response => {
    //     props.setUserProfile(response.data)
    //   })
  }, [userId]);
  

  return(
    !props.profile? <Preloader/> :

      <div>
          <div>       
        	{props.profile.fullName}
          </div> 
          <img className={s.avatar} src={props.profile.photos.large?props.profile.photos.large:"https://msk-remont.com/wp-content/uploads/2021/04/mezczyzni-850x750-1.jpg"} alt="321" />
          <ProfileStatus 
          updateStatus={props.updateStatus}
          authUser={props.authUser}
          userId={userId}
          status={props.status}/>


      </div>

  )
}

export default ProfileInfo
