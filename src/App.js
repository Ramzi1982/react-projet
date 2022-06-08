
import './styles/App.css';
import './styles/SignIn.css';



import SignIn from './components/signIn';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar2 from './components/Navbar2';
import Home from './components/Home';
import Dashbord from './components/Dashbord';
import Footer2 from './components/Footer2';
import Tables from './components/Tables';
import Error from './components/Error';

function App() {
  return (

       <Router>
      <div className="App">
      
       <Routes>
       <Route path="/"  element={ <div><Navbar2/><Home/> <Footer2/></div>} />
       <Route path="/auth" element={<div><Navbar2/><SignIn/></div>}/>
       <Route path="/dashbord" element={<Dashbord/>}/>
       <Route path="/tables" element={<Tables/>}/>
       <Route path="/error" element={<Error/>}/>


       </Routes>
       
       <Routes>



       </Routes>
        </div>
    </Router>
  );
}

export default App;
