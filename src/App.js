import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import Profile from './components/Content/PROFILE/profile';
import Navbar from './components/NavBar/Navbar';
import Dialogs from './components/Content/Dialogs/Dialogs';
import {Route, Switch}  from 'react-router-dom';

const App = () => {
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
         <Switch>
            <Route  path='/dialogs' render={() =>  <Dialogs/> }/>
            <Route  path='/profile' render={() =>  <Profile /> }/>
            </Switch>
          {/* <Profile /> */}


          


        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App;
