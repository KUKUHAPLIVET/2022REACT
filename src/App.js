import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/Navbar';
import {Route, Routes, useParams}  from 'react-router-dom';
import DialogsContainer from './components/Content/Dialogs/DialogsContainer';
import UsersContainer from './components/Content/Users/UsersContainer';
import ProfileContainer from './components/Content/PROFILE/ProfileContainer';
import Login from './components/Content/Login/Login';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { initialize } from './Redux/appReducer';
import Preloader from './common/preloader/Preloader';

const App = (props) => {

  let { userId } = useParams()

  useEffect(()=>{
    props.initialize()

  },[])

  if (!props.initialized){
    return <Preloader/>
  }
  else 
  return (
    <div className="App">

      <div>
        <div className='header'>
          <Header />

        </div>
        <div className="appWrapper">


          <div className='wrapperContent'>
            <div className='navBar'>
              <Navbar />
            </div>

            <div className='content'>

              <Routes>
                <Route path='/dialogs/*' element={
                  <DialogsContainer />} />

                <Route path='/profile/:userId' element={
                  <ProfileContainer />} >
                </Route>

                <Route path='/profile/' element={
                  <ProfileContainer />} />


                <Route path='/users' element={
                  <UsersContainer />} />


                <Route path='/login' element={
                  <Login />} />

              </Routes>
            </div>
          </div>

          <div className='footer'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

let mapStateToProps = (state) => ({
  initialized : state.app.initialized
})
export default connect(mapStateToProps,{initialize})(App)

