import './sobre.css'

function Sobre(){
    return (
        <div class='principalSobre'>
            <div class='tituloSobre'>
                <h1 class='titulo'>Sobre Nós:</h1>
            </div>
            
            <br/>
            <hr/>
            <br/>

            <div>
                <p class='mensagem'>Nós da Empresa VELOCIREX, temos o objetivo de fazer com que nossos clientes tenham uma rápida entrega e com qualidade, com um ótimo custo benefício.</p>
                <br/>
            
                <p class='mensagem'>Agradecemos desde já, por você que nos ajudou, esperamos que nós também tenhamos te ajudado em sua busca, Obrigado.</p>
                <br/>
            
                <hr/>
                <br/>
            
                <h3 align='center' class='subtitulo'>Por:</h3>
                <p class='mensagem'> <a  href="https://github.com/HernandezOL" target="_blank" rel="noreferrer">Hernandez Oliveira</a> e <a  href="https://github.com/GustavoAOliveira" target="_blank" rel="noreferrer">Gustavo Aquino</a><br></br></p>
                <div align='center'>
                    <img class='imagemLogoSobre' alt="senac-sp" height="auto" width="85" src="https://seeklogo.com/images/S/Senac-logo-7627EC15FE-seeklogo.com.png"/>
                </div>
            </div>
        </div>
    );
}

export default Sobre;