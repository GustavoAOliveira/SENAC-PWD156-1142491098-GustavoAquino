import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login/login.js';

import Home from './Pages/Home/home.js'
import Sobre from './Pages/SobreNos/sobre.js';
import Header from './Pages/Header/header.js';
import Frete from './Pages/Frete/frete.js';
import Rotas from './Pages/Rotas/rotas.js';
import Cadastro from './Pages/Cadastro/cadastro.js';


export default function RouterApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/sobre' element={<Sobre/>}/>
                <Route path='/frete' element={<Frete/>}/>
                <Route path='/rotas' element={<Rotas/>}/>
                <Route path='/cadastro' element={<Cadastro/>}/>
            </Routes>
        </BrowserRouter>
    );
}