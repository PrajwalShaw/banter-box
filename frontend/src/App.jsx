import './App.css'
import {Navigate, Route,Routes} from "react-router-dom";
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';
// import './index.css'

function App() {
    const {authUser} = useAuthContext();//now after signup/login this authUser has some value
  return (
    <div className="p-4 h-screen flex items-center justify-center">
       <Routes>
          <Route path='/' element={authUser ? <Home />: <Navigate to={"/login"}/>}/>{/**now we have protected routes after adding authUser */}
          <Route path='/login' element={authUser ? <Navigate to="/"/>:<Login />}/>
          <Route path='/signup' element={authUser ? <Navigate to="/"/>:<SignUp />}/>{/**agar user signed in ho gaya hain toh usko bhejdo home pahe par nahi toh signin page par hi rakho usko */}
       </Routes>
       <Toaster/>{/**don't forget this step after installing react-hot-toast */}
    </div>
  )
}

export default App
