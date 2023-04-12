import React, { useState } from "react";
import Card from "../components/card";
import Pages_count from "./pages";
import Modal_show from "./modal_show";
import { useSelector } from "react-redux";
import '../styles/main.scss';
function Main() {
  const state=useSelector(s=>s)
  if(state.ArayCar.length===0) {
    return (
    <div className="main_emty">
      <h2>НЕТ АВТО В НАЛИЧИИИ</h2>
    </div>
    )
  }
    else  return (
  <><div className="m_first">
  <div className="main">
    <div className="main_content" >
        <Modal_show />
        {[...state.ArayCar.slice(0,6)].map(item=><Card info={item} key={item.marka+Math.random()}  />)}
    </div>
    
 </div>
 <div className="pages_counter">
      <Pages_count  />
    </div>
 </div>
 </>
  );
}
export default Main;
