import {BrowserRouter , Routes , Route} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Error from './pages/Error';
export default function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/home' element ={<Home/>}/>
      <Route path='/contact' element ={<Contact/>}/>
      <Route path='/about' element ={<About/>}/>
      <Route path='*' element ={<Error/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  );
}
