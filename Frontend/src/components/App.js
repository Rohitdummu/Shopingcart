import Signin from './signin'
import Signup from './signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navb from './navbar';
import Dash from './dashboard';
import Dashed from './dash';
import Micro from './prod'
import React,{createContext, useState} from 'react';
import PrivateRoutes from './protect'
import Crudusers from './crudusers';
import Adminsignin from './adminsignin';
import AdSignup from './adminsignup';
export const Store = createContext()


function App() {
  const [login,setlogin] = useState(false)
  const [Dashname,setDashname] = useState("")
  const [searchd , setSearchd] = useState("")
  return (
  <div >
    <BrowserRouter>
      <Store.Provider value={{ login, setlogin, Dashname, setDashname, searchd ,setSearchd }}>
      <Navb/>
      <Routes>
        <Route path='/' element={<Signin/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/dash' element={<Dashed/>}></Route>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/adminsignin' element={<Adminsignin/>}></Route>
        <Route path='/adminsignup' element={<AdSignup/>}></Route>
        <Route element={<PrivateRoutes />}>
          <Route path='/dashboard' element={<Dash/>} /> 
          <Route path='/prod' element={<Micro/>} />
          <Route path='/crudusers' element={<Crudusers/>} /> 
        </Route>
      </Routes>
      </Store.Provider>
    </BrowserRouter>
  </div>
  );
}

export default App;
