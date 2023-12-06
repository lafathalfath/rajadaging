import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import NoPages from './pages/NoPages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/product' element={<Product/>} statusCode={200}/>
            <Route path='/about' element={<About/>} statusCode={200}/>
            <Route path='*' element={<NoPages/>} statusCode={404}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
