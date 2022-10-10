
var all=document.getElementById('all');
var burger=document.getElementById('burger');
var pizza=document.getElementById('pizza');
var pasta=document.getElementById('pasta');
var fries=document.getElementById('fries');
function gotoMenu(x){
    if(x==0){
        all.classList.add('active');
        burger.classList.remove('active');
        pizza.classList.remove('active');
        pasta.classList.remove('active');
        fries.classList.remove('active');
    }else if(x==1){
        all.classList.remove('active');
        burger.classList.add('active');
        pizza.classList.remove('active');
        pasta.classList.remove('active');
        fries.classList.remove('active');
    }else if(x==2){
        all.classList.remove('active');
        burger.classList.remove('active');
        pizza.classList.add('active');
        pasta.classList.remove('active');
        fries.classList.remove('active');
    }else if(x==3){
        all.classList.remove('active');
        burger.classList.remove('active');
        pizza.classList.remove('active');
        pasta.classList.add('active');
        fries.classList.remove('active');
    }else{
        all.classList.remove('active');
        burger.classList.remove('active');
        pizza.classList.remove('active');
        pasta.classList.remove('active');
        fries.classList.add('active');
    }
}