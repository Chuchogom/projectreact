import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';
import Cart from './components/Cart/cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path = '/' element={<ItemListContainer/>} />
          <Route path = '/movies' element={<ItemListContainer/>} />
          <Route path = '/series' element={<ItemListContainer/>} />
          <Route path = '/cart' element={<Cart/>} />
          <Route path = '/profile' element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
