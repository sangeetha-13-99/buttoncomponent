import './App.css';
import SideBar from "./SideBar";
import Main from "./Main";
import React,{useState} from 'react';

function App() {
  const [showComponent,setShowComponent]=useState('buttons');
  function sideBarClickHandler(event){
    setShowComponent(event.target.textContent);
  }
  return(
    <div className='App'>
      <SideBar onClick={sideBarClickHandler} active={showComponent}/>
      <Main heading={showComponent}/>
    </div>
  )
}
export default App;
