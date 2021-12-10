import Header from './Components/Header';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Movies from './Components/Movies/Movies';
import Series from './Components/Series/Series';
import Trending from './Components/Trending/Trending';
import Search from './Components/Search/Search';

function App() {
  

  return (
    <BrowserRouter>
      <div className="App">
        <Header className='Header'/>
        <Routes>
          <Route exact path='/' element={<Trending />}></Route>
          <Route path='/Movies' element={<Movies />}></Route>
          <Route path='/Series' element={<Series />}></Route>
          <Route path='Search' element={<Search />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
