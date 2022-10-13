import './App.css';
import { Routes, BrowserRouter,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Store from './Components/Store/Store';
import About from './Components/About/About';
import NavBar from './Components/NavBar/NavBar';
import { ShoopingCartProvider } from './Components/Context/Context';

function App() {

 
  return (
    <ShoopingCartProvider>
      <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Routes>
            <Route path="/home" element={<Home />} ></Route >
            <Route path="/store" element={<Store />} ></Route>
            <Route path="/about" element={<About />} ></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </ShoopingCartProvider>
  );
}

export default App;
