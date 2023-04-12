import React,{useState} from "react";
import '../styles/content.scss';
import Main from "./main";  
import {cars} from "../data/data";
import {cars_models} from "../data/data_models"
import { useDispatch,useSelector } from "react-redux";

function Content() {
  const state=useSelector(s=>s)
  const dispatch=useDispatch()
  const[text3,setText3]=useState("")
 
  function findCars(Mark){
    dispatch({type:"change_ArayCar",param:[...cars.filter((item)=>item.marka.includes(Mark))]})  
    dispatch({type:"change_models",param:[...cars_models.filter((item)=>item.marka.toUpperCase()===Mark.toUpperCase())]})
   }

  function filtred(ev){
    setText3(ev.target.value)
    dispatch({type:"change_models",param:[...cars_models.filter((item)=>item.marka.includes(ev.target.value))]})

   }

  function reset(){ 
    setText3("")
    dispatch({type:"change_models",param:[...cars_models]})
    dispatch({type:"change_ArayCar",param:[...cars]})
   }


return (
<>

<div className="container_content">
  <div className="side_bar">
      <div className="input_cars">
        <input type="text" placeholder="марка автомобиля" className="input_side_bar" onChange={(event)=>filtred(event)} value={text3}></input><button type="button" class="btn-close" aria-label="Close" onClick={reset}></button>
      </div>
        {state.models.map((item,index)=>
      <div className="selected">
        <div className="text_logo_marka">
          <div><p key={index}  className="cars" onClick={() => findCars(item.marka)} >{item.marka.toUpperCase()}</p></div><div className="logo_marka"><img className="logo_images" src={item.icon} alt=""></img></div>
        </div>  

        <div class="form-floating">
          <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
              <option selected>ВСЕ МОДЕЛИ</option>
              {item.models.map((item)=><option value="1" key={item}>{item}</option> )}
          </select>
          <label for="floatingSelect">Выберите модель</label>
        </div>
      <hr></hr>
      </div>
      )}
  </div>
    <Main />
</div>
   
  </>
);
};
  export default Content
