/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*
* SENAC - TADS - Programacao Web *
*       Calculadora IMC*
* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*
* Nome : << Gustavo Aquino de OLiveira e Hernandez Oliveira > > *
* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
import { useState } from 'react';
import "./styles.css";

function App (){

  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const [mensagem, setMensagem] = useState("");
  const [imcMessage, setImcMessage] = useState("");

  function calcularIMC (){

    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(altura === "" && peso === ""){
        alert(" Por Favor, preencha o peso e a altura corretamente !");
    }else if(!alt){
        alert(" Por Favor, preencha o peso e a altura corretamente !");
        
    }else if (imc < 18.50){
     setMensagem(`Você está abaixo do peso !`);
     
     setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
     
   }else if(imc >= 18.50 && imc < 24.49){
    setMensagem(`Você está no peso normal !`);
    
    setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
     
   }else if (imc >= 25.0 && imc < 29.9){
    setMensagem(`Você está com sobrepeso !`);
    
    setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
    
   }else if(imc >= 30.0 && imc < 34.9){
    setMensagem(`Você está com Obesidade Grau I  !`);
    
    setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
     
   }else if(imc >= 35.0 && imc < 39.9){
    setMensagem(`Você está com Obesidade Grau II  !`);
    
    setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);

   }else if(imc >= 40){
    setMensagem(`Você está com Obesidade Grau III !`);
    
    setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
   }
     setPeso("");
     setAltura("");
  }

  return(
   <div className="fundo">
      <div className="tabela">
      <h1>Calculadora de IMC</h1>
      <span>Vamos Calcular seu IMC ?</span>
          <input 
            type="text"
            placeholder="Peso em [KG] Ex: 75"
            value={peso}
            onChange={ (e) => setPeso(e.target.value) }
          />

          <input 
            type="text"
            placeholder="Altura em [CM] Ex: 170"
            value={altura}
            onChange={ (e) => setAltura(e.target.value) }
          />

          <button onClick={calcularIMC}>
            Calcular
          </button>

            <h2>
                {mensagem} <br/>
                {imcMessage}
            </h2>
      </div>
      <footer className='rodape'>
          &copy; 2022 Gustavo Aquino e Hernandez Oliveira 
      </footer>
   </div>
  );
}

export default App;