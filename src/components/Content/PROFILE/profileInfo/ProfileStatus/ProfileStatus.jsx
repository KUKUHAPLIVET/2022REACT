import { useEffect, useState } from "react"



const ProfileStatus = (props) => {

  const [editMode,setEditMode] = useState(false)
  const [status,setStatus] = useState(props.status)

  const onChangeStatus = (e) =>{
    setStatus(e.target.value)
  }

 const setUserStatus = ()=>{
    // props.setStatus(status)

    props.updateStatus(status)
    setStatus(" ")
    setEditMode(false)
 }



    
    useEffect( () => {
    // // //  props.getStatus(props.userId ?props.userId:props.authUser)
      setStatus(props.status)
    },[props.status])

  // }

  
  return(
    
    <div>
      <div>
       {!status && !editMode && props.userId==props.authUser  &&
        <button onClick={()=>setEditMode(true)}>Add status</button>
       }
      </div>
      {!editMode &&
        
        <div>
          <span  onDoubleClick={()=>{ props.userId==props.authUser &&
            setEditMode(true) }}>{status}</span>
        </div>}
      {editMode && props.userId==props.authUser&&
        <div>
          <input autoFocus={true} onChange={onChangeStatus} value={status} />
          <button onClick={setUserStatus}>SAVE</button>
        </div>}
    </div>

  )
}



export default ProfileStatus