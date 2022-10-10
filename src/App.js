import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import Profile from './components/Content/PROFILE/profile';
import Navbar from './components/NavBar/Navbar';
import Dialogs from './components/Content/Dialogs/Dialogs';
import {Route, Routes}  from 'react-router-dom';
import state from './Redux/store';
import DialogsContainer from './components/Content/Dialogs/DialogsContainer';
import UsersContainer from './components/Content/Users/UsersContainer';

const App = (props) => {
  return (
    <div className="App">
      <div className="appWrapper">

        <div className='header'>
          <Header />
        </div>
        <div className='navBar'>
          <Navbar />
        </div>

        <div className='content'>
            
            <Routes>
            <Route path='/dialogs/*' element={
              <DialogsContainer />} />

            <Route path='/profile' element={
              <Profile />} />

              <Route path='/users' element={
              <UsersContainer/>}/>

            </Routes>
       




        </div>

        <div className='footer'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App;


