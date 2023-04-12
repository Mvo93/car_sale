import React,{useRef,useEffect,useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import '../styles/card.scss';

function Card({info}){
  const state=useSelector(s=>s)
  const dispatch=useDispatch()
  let imager=useRef()
  let images=[...info.photos]
  const[img,setImg]=useState(images[0])
useEffect(()=>{
  imager.current.addEventListener('mouseover', changeImg)
  imager.current.addEventListener('mouseout', stopchangeImg)
  imager.current.addEventListener('click', ()=>dispatch({type:"change_Show",param:info}) )
  }
,[])
  let interval
  Math.round(Math.random()*(images.length-1))
      function changeImg(){
        let count=0 
        interval=setInterval(()=>{
          count>images.length-2?count=0:count++
          setImg(images[count])
        },500)
        }
  function stopchangeImg(){
    clearInterval(interval)
    setImg(images[0])
  }
  
return(<>
  
<div className="card mb-3 maincard"  ref={imager}  data-bs-toggle="modal" data-bs-target="#exampleModal"  >

  <div className="flexiblecard">
  
  <div className="card_info">
    <div >
      <img  class="img-fluid rounded-start cardimg"  src={img}      alt="..."></img>
    </div>
    <div >
        <h5 className="cardititle">{info.marka.toUpperCase()}  {info.model}</h5>
        <p className="cardititle">{info.year} / <b>{info.price}</b></p> 
    </div>
  </div>
  <div className="carddescriptionDIV">
  <p className="carddescription">{info.information}</p> 
  </div>
  
  </div>
</div>
</>
    )   
}
export default Card









