
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home/index';
import RoomPage from './Pages/Room/index';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/room/:roomId" element={<RoomPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
