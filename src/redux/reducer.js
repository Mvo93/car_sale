import {cars} from "../data/data";
import {cars_models} from "../data/data_models"

const initialState={
    ArayCar:cars,
    carsAr:cars_models,
    cars:cars,
    show:{},
    models:cars_models
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "change_ArayCar":
            return {...state,ArayCar:action.param}
        case "change_carsAr":
                return {...state,carsAr:action.param}
        case "change_Show":
                    return {...state,show:action.param}
        case "change_models":
                        return {...state,models:action.param}

            default: return state
    }
}
export default reducer