import ImagemPrincipal from './img/imagemPrincipal.jpg';
import Logotipo from './img/logotipo.png';
import './home.css';

export default function Home(){
    return(
        <div class='principalHome'>
            <div class='conteinerTituloHome'>
                <h1 class='titulo'>Bem vindo a VELOCIREX!</h1>
                <br/>
            </div>

            <div class='conteinerPrincipalHome'>
                <br/>
                <p class='mensagem'>Bem vindo ao site da <strong>Velocirex</strong>, Explore nosso site utilizando a barra de navegaçaõ, tenha um bom proveito e Boa Sorte.</p>    
                <br/><br/><br/>
                <div class='conteinerSecundarioHome'>
                    <p class='mensagem'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                    </p>
                    <img class='imagemPrincipalHome' src={ImagemPrincipal} alt='Imagem Logistica' />
                </div>

                <div class='rodape'>
                    <img class='imagemLogoFooter' src={Logotipo} alt='Logotipo'/>
                </div>
            </div>

        </div>
    );
}