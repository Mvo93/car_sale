import React from "react";
import Content from "./Content";
import Personal_cabinet from './personal_area';
import Login from './Login_Popup'
import '../styles/App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <>
  <div className="pervo_div">
   <div className="firtst_div" >
   <div className="header" >
        <div class="four"><h1>СAR_SALE - продажа автомобилей с пробегом</h1></div>
        <hr></hr>
        <div className="header_flex">
          <div>
            <a  href="/" ><button className=" btn  btn-success  btn2"   >Главная страница</button></a>
            <a  href="/main" ><button className="btn btn-success btn2"  >Личный кабинет</button></a>
            <a  href="/regist" ><button className="btn btn-success btn2">Регистрация</button></a>
          </div>
            <div className="town">
              <i class="bi bi-geo-alt-fill">г.Таганрог</i> 
            </div>
        </div>
        <hr></hr>
   </div>
   <div >
   <Routes>
        <Route path="/" element={<Content />}>
          </Route>  
   </Routes>
   <Routes>
<Route path="/regist" element={<Login/>}>
</Route>
</Routes>
  </div>
<Routes>
<Route path="/main" element={<Personal_cabinet/>}>
</Route>
</Routes>
    </div>
    <footer className="footer">
      <ol>
        <li>г.Таганрог, ул. Маршала Жукова 2а-7</li>
        <li>ИП Минко Виктор Олегович</li>
        <li>Телефон: 89515008140</li>
      </ol>
    </footer>
</div>
</>
  );
}

export default App;
