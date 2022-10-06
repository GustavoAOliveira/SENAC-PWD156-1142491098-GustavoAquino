import './index.css';

function Home(){
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
                <hr/>
                <center><h2>Vem ser cliente e aproveite os benefícios do Banco SP</h2></center>
                
            </div>

            
            



        </div>
    );
}

export default Home;