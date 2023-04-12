import React,{useState,useRef, useEffect,useContext} from "react";
import '../styles/pages.scss';
import { useDispatch,useSelector } from "react-redux";

export default function Pages_count(){
    const state=useSelector(s=>s)
    const dispatch=useDispatch()
    const pageRef=useRef()
    const [page,setPage]=useState([...createPages().slice(0,3)])
    const[num,setNum]=useState(1)  
    
    function createPages(){               //Функция,вычисляющая массив с индексами страницц
        let result=[]
        for(let i=1;i<=Math.ceil(state.cars.length/6);i++){
            result.push(i)
        }
        return result
     }
    let max=createPages().length  
   
    function changecars(p){                         //Устанавливаем в сет 6 карточек с выбранной страницы        
            dispatch({type:"change_ArayCar",param:[...state.cars.slice(p*6,(p+1)*6)]})       
            if(page.includes(p+1) && p>0 && p+1<max) 
                { 
                setPage([p,p+1,p+2]) 
                }
            else if(p===0) setPage([1,2,3])
            else if(p===max-1) {
                setPage([max-2,max-1,max])}
         }
     useEffect(
        ()=>{
        document.getElementById(num).className="selected_page"
        }
        ,[num])
    function change(p){                                                     //Замена цвета в выбранном номере
            try{
                document.querySelector(".selected_page").className="pages"
                setNum(p)
            }
             catch{
            setNum(p)
            }}
    return (
<div ref={pageRef}>
<button className="pages"  onClick={event=>{ change(1) 
    changecars(0)}}>&laquo;</button>
    {page.map((item,index)=><button key={index+item} className="pages" id={item}   onClick={ (event)=>{ 
    changecars(Number(item)-1)
    change(item)
   
}
    }>{item}</button>)}
 <button  className="pages"  onClick={ (event)=>{ 
    change(max)
    changecars(max-1)}
    }>&raquo;</button>
 </div>
    )

}


<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>