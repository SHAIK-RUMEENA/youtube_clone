import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Videopage from './Videopage';
import TopBar from './TopBar';
import Sidebar from './Sidebar.jsx';
function App() {
  return (
    <>
    <TopBar/>
    <div style ={{display:"flex"}}>
    <Sidebar/>
    <BrowserRouter>
    <Routes>   
      <Route path="/" element={<Home/>} /> 
      <Route path="/video/:id" element={<Videopage/>}/>
   </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}
export default App;
