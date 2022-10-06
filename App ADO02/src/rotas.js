/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*
2 * SENAC - TADS - Programacao Web *
3 * ADO #02 Trabalhando As Rotas e LINKS *
4 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*
5 * Nome : << Gustavo Aquino de Olivera e Guilherme Moreira > > *
6 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/index.js'
import Cadastro from './pages/Cadastro/cadastro'
import Financiamento from './pages/Financiamento/financiamento'
import Movimentacao from './pages/MovimentacaoCC/movimentacao'
import Sobre from './pages/Sobre/sobre'


function RouterApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Cadastro" element={<Cadastro/>}/>
                <Route path="/Financiamento" element={<Financiamento/>}></Route>
                <Route path="/MovimentacaoCC" element={<Movimentacao/>}></Route>
                <Route path="/Sobre" element={<Sobre/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RouterApp;