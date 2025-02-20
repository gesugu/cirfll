import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from "../src/components/MainPage"
import ItemOneScreenInfo2 from './components/ItemOneScreenInfo2';
import ItemOneScreenInfo from "../src/components/ItemOneScreenInfo"
import Planets from './components/Planets';
import Header from './components/Header';
import About from "./components/About"
import Values from "../src/components/Values"
import Robot from "../src/components/Robot"
import Project from "../src/components/Project"
import FirstPage from "../src/components/FirstPage"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/item2/:item_id" element={<ItemOneScreenInfo />} />
          <Route path="/item3/:item_id" element={<ItemOneScreenInfo2 />} />
          <Route path="/models" element={<Planets />} />
          <Route path="/about" element={<About />} />
          <Route path="/values" element={<Values />} />
          <Route path="/robot" element={<Robot />} />
          <Route path="/project" element={<Project />} />
          <Route path="/firstpage" element={<FirstPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
