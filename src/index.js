import React ,{useContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.js'
import { BrowserRouter } from 'react-router-dom'
import reducer from "./redux/reducer"
import {Provider} from 'react-redux/';
import { legacy_createStore as createStore,} from 'redux' 

const store=createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
</>
);



