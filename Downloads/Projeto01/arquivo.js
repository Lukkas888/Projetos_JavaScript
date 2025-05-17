
function carregar() {

var msg = window.document.getElementById('mensagem')
var img = window.document.getElementById('imagem')

var data = new Date()  
var hora = data.getHours() 
//var hora = 8

msg.innerHTML = `A hora atual é ${hora}` 

if(hora >= 0 && hora < 12){
    msg.innerHTML = `Agora são ${hora} horas` 
    img.src = 'imagens/Novamanha3.png'
    window.document.body.style.backgroundColor = '#cf9c21'
} 

else if(hora >= 12 && hora < 18 ){
    msg.innerHTML = `Agora são ${hora} horas `
    img.src = 'imagens/Novatardefinal.png'
    window.document.body.style.backgroundColor = '#996266'
} 

else{
    msg.innerHTML = `Agora são ${hora} horas`
    img.src = 'imagens/Novanoitefinal.png' 
    msg.style.color = 'black'
    window.document.body.style.backgroundColor = '#356086'
    window.document.body.style.color = 'white'

}



}