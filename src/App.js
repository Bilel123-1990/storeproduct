import logo from './logo.svg';
import './App.css';
import Header from '../src/components/layout/header.jsx'
import Footer from '../src/components/layout/footer.jsx'
import { BrowserRouter, Route,Routes} from "react-router-dom";
import Home from './views/home.jsx'
import Realisation from './views/realisation.jsx'
import Contactus from './components/contactus.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/realisation" element={<Realisation/>}/>
          <Route path="/contactus" element={<Contactus/>}/>
    </Routes>  
     </BrowserRouter>
  );
}

export default App;
