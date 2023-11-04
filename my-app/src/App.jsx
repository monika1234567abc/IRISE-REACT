//import logo from './logo.svg';
import './App.css';
import Home from'./Component/Home.jsx'
import {Routes,Route} from 'react-router-dom';
import UseEffect from './Component/useEffect';
import UseState from './Component/UseState';
import UseEffectTwo from './Component/useEffectTwo.jsx';
import UseEffectThree from './Component/useEffectThree.jsx';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/use-state' element={<UseState />} />
        <Route path='/use-effect'element={<UseEffect/>}/>
        <Route path='/use-effecttwo'element={<UseEffectTwo/>}/>
        <Route path='/use-effectthree'element={<UseEffectThree/>}/>
</Routes>
 </div>
  );
}

export default App;
