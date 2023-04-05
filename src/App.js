import logo from './logo.svg';
import './App.css';
import Tag from './com/tag';
import Users from './api/users';
// import NavBar from './com/tripadvaisor';
import { Route, Routes } from 'react-router-dom';
import Home from './compnent/Home.js/home';
import { Fragment } from 'react';
import Navs from './compnent/navs/navs';












function App() {
  return (
    <div className='App'>
      
    
        <Navs></Navs>
        <Home></Home>



      <Routes>
      <Route exact path='/Users' Component={Users} />
        <Route path='/Tag' Component={Tag} />


      {/* <Route path='Users' Component={Users}/> */}


      </Routes>
    </div>
  )

}
export default App;









// function App() {
//   return (
//     <div className="App">
//       <main className='container'>
//         <Users/>
//         <main/>
//     </div>
//   );
// }



