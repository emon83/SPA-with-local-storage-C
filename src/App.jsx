import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css'
import Contract from './components/Contract/Contract';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideCard from './components/SideCard/SideCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [watchTime, setWatchTime] = useState('');

  const handleWatchTime = (time) =>{
    const previousWatchTime = JSON.parse(localStorage.getItem('watchTime'));
    if (previousWatchTime) {
      const totalWatchTime = previousWatchTime + time;
      localStorage.setItem('watchTime', totalWatchTime);
      setWatchTime(totalWatchTime);
    }else{
      localStorage.setItem('watchTime', time);
      setWatchTime(time);
    } 
  }
  return (
    <div className="App">
    <div className='header m-auto mb-3'>
      <Header></Header>
    </div>
    <div className='main row'>
      <div className="home__container col-md-8">
        <Home handleWatchTime={handleWatchTime}></Home>
      </div>
      <div className="sideCart col-md-4 card">
        <SideCard watchTime={watchTime}></SideCard>
      </div>
    </div>
    <Contract></Contract>
    <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
