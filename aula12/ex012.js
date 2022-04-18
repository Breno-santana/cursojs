var agora = new Date()//Pegar a hora atual
var hora = agora.getHours()//Praticar os comandos dessa linha(getHours), e da linha anterior.) 
console.log(`Agora são exatamente ${hora} horas.`)
if(hora < 12){
    console.log('Bom Dia!')
}else if(hora <= 18){
    console.log('Boa Tarde!')
}else{
    console.log('Boa Noite!')
}