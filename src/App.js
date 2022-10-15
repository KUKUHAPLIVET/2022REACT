import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import Profile from './components/Content/PROFILE/profile';
import Navbar from './components/NavBar/Navbar';
import Dialogs from './components/Content/Dialogs/Dialogs';
import {Route, Routes, useParams}  from 'react-router-dom';
import state from './Redux/store';
import DialogsContainer from './components/Content/Dialogs/DialogsContainer';
import UsersContainer from './components/Content/Users/UsersContainer';
import ProfileContainer from './components/Content/PROFILE/ProfileContainer';

const App = (props) => {
  let { userId } = useParams()
  return (
    <div className="App">
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
                <ProfileContainer />} />

              <Route path='/users' element={
                <UsersContainer />} />

            </Routes>
          </div>
        </div>

        <div className='footer'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App;


