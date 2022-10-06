import {useState} from 'react';
import './movimentacao.css'

function Movimentacao(){
    const [entradaNome, setNome] = useState('');
    const [entradaCPF, setCPF] = useState('');
    const [entradaDeposito, setDeposito] = useState('');
    const [entradaSaque, setSaque] = useState('');
    const [entradaSaldo, setSaldo] = useState('');

    const [dadosUsuarios, setUsuarios] = useState(
        {saldoDados:'0,00', depositoDados:'0,00', saqueDados:'0,00'}
    );

    function atualizarValores(dados){
        dados.preventDefault();
        var depositoValor;
        var saqueValor;
        var saldoValor;
        var total; 

        if(entradaDeposito === ''){
            depositoValor = 0;
        } else {
            depositoValor = parseInt(entradaDeposito);
        }
        

        if(entradaSaque === ''){
            saqueValor = 0;
        } else {
            saqueValor = parseInt(entradaSaque);
        }
        

        if(entradaSaldo === ''){
            saldoValor = 0;
        } else {
            saldoValor = parseInt(entradaSaldo);
        }

        total = 0;


        total = saldoValor - saqueValor + depositoValor;
        
        setUsuarios(
            {saldoDados:total, depositoDados:depositoValor, saqueDados:saqueValor}
        );
        
        setNome('');
        setCPF('');
        setDeposito('');
        setSaque('');
        setSaldo('');

    }

    return (
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
            <div class="tituloMovimentacao">
                <h2>Movimentação</h2>
            </div>

            <hr/>

            <div>
                <form onSubmit={atualizarValores}>
                    <label>Nome:&nbsp;</label>
                    <input type="text" placeholder="Informe um nome..." value={entradaNome} onChange={(evento) => setNome(evento.target.value)}/>

                    <br/><br/>
                    <label>CPF:&nbsp;</label>
                    <input type="text" placeholder="Informe o seu CPF..." value={entradaCPF} onChange={(evento) => setCPF(evento.target.value)}/>

                    <br/><br/>
                    <label>Saldo:&nbsp;</label>
                    <input type="text" placeholder="Informe o seu saldo..." value={entradaSaldo} onChange={(evento) => setSaldo(evento.target.value)}/>

                    <br/><br/>
                    <label>Depósito:&nbsp;</label>
                    <input type="text" placeholder="Quantia a depositar..." value={entradaDeposito} onChange={(evento) => setDeposito(evento.target.value)}/>

                    <br/><br/>
                    <label>Sacar:&nbsp;</label>
                    <input type="text" placeholder="Quantia a sacar..." value={entradaSaque} onChange={(evento) => setSaque(evento.target.value)}/>

                    <br/><br/>
                    <div align="center">
                        <button type="submit">Atualizar</button>
                    </div>
                </form>
            </div>

            <hr/>

            <div>
                <h3 class="subtituloMovimentacao">Total:</h3> 
                <p>Saldo:&nbsp;R$&nbsp;{dadosUsuarios.saldoDados}</p>
                <p>Valor Depositado:&nbsp;+R$&nbsp;{dadosUsuarios.depositoDados}</p>
                <p>Valor Saque:&nbsp;-R$&nbsp;{dadosUsuarios.saqueDados}</p>
            </div>
        </div>
    );
}

export default Movimentacao;