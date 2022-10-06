import {useState} from 'react';
import './financiamento.css'

function Financiamento(){
    const [entradaCC, setCC] = useState('');
    const [entradaNome, setNome] = useState('');
    const [entradaValor, setValor] = useState('');
    const [entradaParcelas, setParcelas] = useState('');

    const [dadosUsuarios, setDadosUsuarios] = useState(
        {valorSolicitadoDados:'0,00', valorParcelaDados:'0,00', jurosDados:'0,00'}
    );


    function calcularValor(dados){
        dados.preventDefault();
        var totalParcelas = parseInt(entradaParcelas);
        var solicitacao = parseInt(entradaValor);
        var total = 0;
        var valorJuros = 0;

        if(entradaParcelas === ''){
            totalParcelas = 0;
        } else {
            totalParcelas = parseInt(entradaParcelas);
        }

        if(entradaValor === ''){
            solicitacao = 0;
        } else {
            solicitacao = parseInt(entradaValor);
        }

        if(totalParcelas === 0){
            total = solicitacao;
        } else {
            if(solicitacao > 3000 || totalParcelas >= 11){
                valorJuros = 1.8;
                total = solicitacao * valorJuros;
                total = total /totalParcelas;
            } else {
                total = solicitacao /totalParcelas;
            }
        }
        setDadosUsuarios(
            {valorSolicitadoDados:solicitacao, valorParcelaDados:total, jurosDados:valorJuros}
        );

        setCC('');
        setNome('');
        setValor('');
        setParcelas('');
    }

    return(
        <div>
            <div class="barra_titulo">

<div align="center">
          <img alt="SP" height="auto" width="94" src="https://i.imgur.com/MCVgfz7.png"/>
      </div>
 <center><h2>BANCO SP</h2></center> 




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
                <h2 class="tituloFinanciamento">Financiamento</h2> 
            </div>

            <hr/>
            
            <div>
                <form onSubmit={calcularValor}>
                    <label>C/C:</label>
                    <input type="text" placeholder="Digite sua Conta Corrente..." value={entradaCC} onChange={(evento) => setCC(evento.target.value)}></input>

                    <br/><br/>
                    <label>Nome:</label>
                    <input type="text" placeholder="Informe seu nome..." value={entradaNome} onChange={(evento) => setNome(evento.target.value)}></input>

                    <br/><br/>
                    <label>Valor:</label>
                    <input type="text" placeholder="Informe o valor solicitado..." value={entradaValor} onChange={(evento) => setValor(evento.target.value)}></input>

                    <br/><br/>
                    <label>Parcelas:</label>
                    <input type="text" placeholder="Parcelas desejadas..." value={entradaParcelas} onChange={(evento) => setParcelas(evento.target.value)}></input>
                    
                    <br/><br/>
                    <div align="center">
                        <button type="submit">Calcular</button>
                    </div>
                </form>
            </div>

            <hr/>

            <div>
                <h3 class="subtituloFinanciamento">Valores:</h3>
                <p>Valor solicitado:&nbsp;R$ {dadosUsuarios.valorSolicitadoDados}</p>
                <p>Valor da Parcela ≅&nbsp;R$ {dadosUsuarios.valorParcelaDados} /mês</p>
                <p>Juros:&nbsp;R$ {dadosUsuarios.jurosDados}x</p>
            </div>
        </div>
    );
}

export default Financiamento;