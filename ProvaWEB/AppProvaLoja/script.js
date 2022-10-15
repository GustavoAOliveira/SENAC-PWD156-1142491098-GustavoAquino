function voltarValores(){
    let quantidade = document.getElementById('inputQuantidade').value;
    let indexItemSelecionado = document.getElementById('ComboBox').selectedIndex;

    if(indexItemSelecionado === 0 || !(quantidade)){
        texto.textContent='Preencha os campos corretamente';
    } 
    else {
        if(arrayQuantidadeEmEstoque[indexItemSelecionado - 1] >= quantidade){
            let total = quantidade * arrayPrecos[indexItemSelecionado - 1];
            texto.textContent = 'Total a pagar: R$ ' + total + ',00;'
        }
        else {
            texto.textContent = 'Desculpe, não temos essa quantidade em estoque, temos apenas ' + arrayQuantidadeEmEstoque[indexItemSelecionado -1] + '  desse produto em estoque'
        }
    }
}

var ComboBox = document.getElementById('ComboBox');
var Quantidade= document.getElementById('inputQuantidade');
var texto = document.getElementById('mensagem');
texto.textContent = 'Verifique um item';

var arrayItens = ['Video Game', 'Computador', 'Microondas', 'Geladeira', 'Cafeteira', 'Maquina de Lavar','Televisao', 'Aspirador de po'];
var arrayPrecos = [2000, 3000, 350, 3000,600,1500,2500,450];
var arrayQuantidadeEmEstoque = [2,6,5,3,10,30,7,19]
var arrayImagens = [];

arrayItens.forEach((texto) => {
    let item = document.createElement('option');
    item.textContent = texto;

    ComboBox.appendChild(item);
}
);