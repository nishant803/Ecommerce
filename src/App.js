import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { MainHeader } from './Component/MainHeader';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainHeader/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
