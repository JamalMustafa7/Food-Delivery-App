import Navbar from './components/Navbar/Navbar';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/placeorder' element={<PlaceOrder />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
