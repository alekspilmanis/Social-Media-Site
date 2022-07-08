import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/pages/Navbar.js";
import Login from "./components/pages/Login.js";
import Register from "./components/pages/Register.js";
import Profile from './components/pages/Profile.js';
import UserContext, { UserProvider } from "./context/userContext.js"
import { useContext } from 'react';

function App() {

  return (
    <div className="App">
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Navbar />}>
            <Route index element ={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>

    </div>
  );
}

export default App;
