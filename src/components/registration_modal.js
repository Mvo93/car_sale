import React from "react"



export default function RegistModal({func,setFunc}){

return(
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={()=>setFunc(!func)}>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Регистрация на портале CARS_SALE</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

      <div class="row modalnames">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"></input>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"></input>
  </div>
</div>


      <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
  <label for="floatingPassword">Password</label>
</div>


      </div>
      <div class="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
        <button type="button" className="btn btn-primary"  data-bs-dismiss="modal"  >Зарегистрироваться</button>
      </div>
    </div>
  </div>
</div>
)}