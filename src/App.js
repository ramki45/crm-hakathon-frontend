import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './login';
import Register from './Register';
import Forgot from './Forgot';
import UserList from './Userlist';
import EditUser from './EditUser';
import ResestPassword from './ResestPassword';
import Contact from './Contact';
import Lead from './Lead';
import RequestService from './RequestService';
import Service from './Service';


function App() {
  return (
   
    <div id="wrapper">
    <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
    <div class="container-fluid mt-5">
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path = '/forgot' element ={<Forgot/>}/>
      <Route path = '/userlist' element={<UserList/>}/>
      <Route path='/edit/:id' element={<EditUser/>}></Route>
      <Route path='/reset' element={<ResestPassword/>}/>
      <Route path='/contact'element={<Contact/>}/>
      <Route path ='/lead' element={<Lead/>}/>
      <Route path='/rservice' element={<RequestService/>}/>
      <Route path='/service' element={<Service/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
