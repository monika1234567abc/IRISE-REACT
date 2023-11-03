import logo from './logo.svg';
import './App.css';
import Home from'./Component/Home.jsx'
import {Routes,Route} from 'react-router-dom';
import UseState from './Component/UseState';
import UseEffect from './Component/useEffectk';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/use-state' element={<UseState />} />
        <Route path='/use-effect'element={<UseEffect/>}/>
</Routes>
 </div>
  );
}

export default App;
