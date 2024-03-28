import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Search from './Components/Search';
import Product from './Components/Product';
import Footer from './Components/Footer';
import Aboutus from './Components/About Us';

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <Product/>
      <Aboutus/>
      <Footer/>
    </div>
  );
}

export default App;
