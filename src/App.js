import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import Profile from './components/info/info';
import Navbar from './components/NavBar/Navbar';

const App = () => {
  return( 
    <div className="App">
      <div className="appWrapper">


      <div className='header'>
        <Header />
      </div>
      <div>sa</div>
      <div>sa</div>
      <div>sa</div>
      <div></div>
      <div className='navBar'>
        <Navbar />
      </div>
     <div className='content'>
        <Profile />
      </div>
      <div className='footer'>
      <Footer />
      </div>
      </div>
    </div>
  )
}

export default App;
