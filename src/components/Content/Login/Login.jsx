import { useForm } from "react-hook-form"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import { login } from "../../../Redux/autnReducer"
import s from "./login.module.css"

const Login = (props) => {

  const {register,formState:{errors},handleSubmit}=useForm()//mode:"onChange"})



const onSubmit = (data) => {
  console.log(data);
  props.login(data.Email, data.Password)
   
}


  return (
     
    <div> 
      {props.isAuth? <Navigate to={`/profile/${props.userId}`}/> :
      <form onSubmit={handleSubmit(onSubmit)}>


        <input className={errors.Email?.type === "required" && s.error} {...register("Email", {
          required: true, pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Please Enter valid email!",
          },
        })}
          placeholder="Email"
        />

        {errors?.Email && (<div>
          {errors.Email.message}
        </div>)}

        <input type='password'{...register("Password", {
          required: true, minLength:
          {
            value: 8,
            message: "Minimal password lenght 8 symbols",
           
          },
        })}

          placeholder="password" />
        {errors.Password?.type === "minLength" && (<div>{errors.Password.message}</div>)}

        <input type='submit' />
        
        {props.serverError&& <div>{props.serverError}</div>}


      </form>}
    </div>

  )
}

//FIXME Need use FORM library and send a request to the server
const mapStateToProps =(state) => {
  return{
  isAuth : state.auth.isAuth,
  userId : state.auth.userId,
  serverError : state.auth.serverError
  }
}

export default connect(mapStateToProps,{login})(Login)
