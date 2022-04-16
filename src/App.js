import './App.css';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import SingUp from './Pages/Login/SingUp/SingUp';
import Brackfast from './Shared/Meal/Brackfast/Brackfast';
import Lunch from './Shared/Meal/Lunch/Lunch';
import Dinner from './Shared/Meal/Dinner/Dinner';
import Orders from './Pages/Home/Orders/Orders';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<SingUp></SingUp>}></Route>
        <Route path='/brackfast' element={<Brackfast></Brackfast>}></Route>
        <Route path='/lunch' element={<Lunch></Lunch>}></Route>
        <Route path='/dinner' element={<Dinner></Dinner>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
