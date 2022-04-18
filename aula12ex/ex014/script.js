function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'imagem-manha.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'imagem-tarde.png'
        document.body.style.background = '#b9846f'
    }else{
        //Bom noite
        img.src = 'imagem-noite.png'
        document.body.style.background =  '#515154'
     }

}
