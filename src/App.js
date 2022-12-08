import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import AddService from './components/AddService/AddService';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/addservice" element={<RequireAuth>
          <AddService></AddService>
        </RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
