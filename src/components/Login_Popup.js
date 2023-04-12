import React,{useState} from "react"

function Login(){
const[text,setText]=useState(
    {login:"",
    password:"",
    phone:"",
    name:"",
    surname:""}
    )

console.log(text)
    return( 
    <div className="input_div">
   

   <div className="mb-3 nam_sur">
    <label for="exampleInputPassword1" class="form-label">Имя</label>
    <input type="email" class="form-control" placeholder="введите ваше имя"  id="exampleInputPassword1" value={text.name} onChange={e=>setText(p=>{
        return {...p,name:e.target.value}
    })} ></input>
  </div>

  <div className="mb-3 nam_sur">
    <label for="exampleInputPassword1" class="form-label">Фамилия</label>
    <input type="email" placeholder="введите вашу фамилию"  class="form-control" id="exampleInputPassword1" value={text.surname} onChange={e=>setText(p=>{
        return {...p,surname:e.target.value}
    })} ></input>
  </div>


<div>

<form>
  <div className="mb-3 nam_sur" >
    <label for="exampleInputEmail1" class="form-label ">Номер телефона</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="введите ваш номер телефона" value={text.phone} onChange={e=>setText(p=>{
        return {...p,phone:e.target.value}
    })}  ></input>
    <div id="emailHelp" className="form-text nam_sur">Мы не передаем номера телефонов 3им лицам.</div>
  </div>
  <div className="mb-3 nam_sur">
    <label for="exampleInputPassword1" class="form-label">Логин</label>
    <input type="email" placeholder="Придумайте логин" class="form-control" id="exampleInputPassword1" value={text.login} onChange={e=>setText(p=>{
        return {...p,login:e.target.value}
    })} ></input>
  </div>
  <div className="mb-3 nam_sur">
    <label for="exampleInputPassword1" class="form-label"  >Пароль</label>
    <input type="password" placeholder="Придумайте пароль" class="form-control" id="exampleInputPassword1"  value={text.password} onChange={e=>setText(p=>{
        return {...p,password:e.target.value}
    })} ></input>
  </div>


  <div class="mb-3 form-check nam_sur">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Согласен с правилами сайта</label>
  </div>
</form>


</div>



<button type="button" className="btn btn-success btnlogin">Зарегистрироваться</button>

    </div>
    )
}
export default Login





