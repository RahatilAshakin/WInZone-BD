import './App.css';
import Navbar from './Components/Navbar/Navbar';
import NavbarTop from './Components/Navbar/NavbarTop';
import Products from './Components/Products/Products';

function App() {
  return (
    <>
      <div className=" w-[1480px] mx-auto px-4">
      <div >
      <NavbarTop></NavbarTop>
        <Navbar />
        <Products></Products>
        {/* Add other components below */}
      </div>
      
      </div>
    </>
  );
}

export default App;
