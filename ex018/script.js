let inp = document.getElementById('num');
let sele = document.getElementById('analise');
let btn1 = document.getElementById('btn-1'); 
let btn2 = document.getElementById('btn-2');
let res = document.querySelector('.saida');

btn1.addEventListener('click', adicionar);

function adicionar(){
    if(inp == 0){
        alert('[ERRO]');

    }
}

//btn2.addEventListener('click', finalizar);

//function finalizar(){}
