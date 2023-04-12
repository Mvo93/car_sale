import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux";
import '../styles/modal_show.scss';


function Modal_show(){
const state=useSelector(s=>s)
if(Object.keys(state.show).length){
    return( <>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Информация об {state.show.marka+" "+ state.show.model}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"  ></button>
      </div>
      <div class="modal-body full">
      
      <div id="carouselExample" class="carousel slide pytem">
    <div class="carousel-inner">
    <div class="carousel-item active slide_img">
      <img src={state.show.photos[0]} class="d-block w-100" alt="..."></img>
    </div>
    {state.show.photos.slice(1,state.show.photos.length-1).map((item)=> 
    <div class="carousel-item slide_div" key={Math.random}>
    <img src={item} class="d-block w-100 slide_img " alt="..."></img>
    </div>
    )}
      </div>
  <button class="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon changer " aria-hidden="true"></span>
    <span class="visually-hidden prevnext">Previous</span>
  </button>
  <button class="carousel-control-next   " type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon changer  " aria-hidden="true"></span>
    <span class="visually-hidden prevnext">Next</span>
  </button>
</div>
    <div className=" groupmain" role="group" aria-label="Basic example">
  <ul class="list-group">
  <li class="list-group-item grouplist information2">{state.show.marka}     |     {state.show.model}</li>
  <li class="list-group-item grouplist  information2">{state.show.year}     |     {state.show.engine}  </li>
  <li class="list-group-item grouplist  information2">{state.show.owners}   |       {state.show.price}</li>
</ul>
</div>
<p className="text_opisanie">{state.show.information}</p>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
      </div>
    </div>
  </div>
</div>
</>
)
   } }
export default Modal_show