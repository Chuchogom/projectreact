import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemDetailContainer/>
    </div>
  );
}

export default App;
