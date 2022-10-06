import {useState} from 'react';
import './cadastro.css'

function Cadastro(){
    const [entradaNome, setEntradaNome] = useState('');
    const [entradaEmail, setEntradaEmail] = useState('');
    const [entradaCPF, setEntradaCPF] = useState('');

    const [dadosUsuarios, setDadosUsuarios] = useState(
        { nomeDados:"Privado", emailDados:"Privado", CPFDados:"Privado"}
    );

    function novoRegistro(dados){
        dados.preventDefault(); 

        setDadosUsuarios(
            { nomeDados:entradaNome, emailDados:entradaEmail, CPFDados:entradaCPF}
        )

        setEntradaNome('');
        setEntradaEmail('');
        setEntradaCPF('');
    }

    return(
        <div>
            <div class="barra_titulo">

<div align="center">
          <img alt="SP" height="auto" width="94" src="https://i.imgur.com/MCVgfz7.png"/>
      </div>
 <center><h1>BANCO SP</h1></center> 




</div>
<div class="barra">
<ul id="barra_links">
<li><a href="/">Home</a></li>
<li><a href="cadastro">Cadastro</a></li>
<li><a href="movimentacaoCC">Movimentacao</a></li>
<li><a href="financiamento">Financiamento</a></li>
<li><a href="sobre">Sobre</a></li>





</ul>
</div>

            <div>
                <center><h2 class="tituloCadastro">Cadastro</h2></center>
                <hr/>
            </div>
            
            <div>
                <form onSubmit={novoRegistro}>
                    <label>Nome:</label>
                    <input type="text" placeholder="Informe seu nome..." value={entradaNome} onChange={(evento) => setEntradaNome(evento.target.value)}></input>

                    <br/><br/>
                    <label>Email:</label>
                    <input type="email" placeholder="Informe seu email..." value={entradaEmail} onChange={(evento) => setEntradaEmail(evento.target.value)}></input>

                    <br/><br/>
                    <label>CPF:</label>
                    <input type="text" placeholder="Informe seu CPF" value={entradaCPF} onChange={(evento) => setEntradaCPF(evento.target.value)}></input>

                    <br/><br/>
                    <div align="center">
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>            

            <hr/>

            <div>
                <center><h3>Dados Informados:</h3></center>
                <p>Nome:&nbsp;{dadosUsuarios.nomeDados} </p>
                <p>Email:&nbsp;{dadosUsuarios.emailDados}</p>
                <p>CPF:&nbsp;{dadosUsuarios.CPFDados}</p>
            </div>
        </div>
    );
}

export default Cadastro