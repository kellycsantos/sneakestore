let btnMenu = document.getElementById('btn-menu').addEventListener('click',abrirMenu);
let menuContainer = document.getElementById('menu-container');

function abrirMenu(){
    if(menuContainer.classList.contains("fechado")){
        menuContainer.classList.remove("fechado")
        menuContainer.classList.add("aberto")
        document.getElementById('btn-menu').setAttribute('src','./images/icones/icon-close.svg')
        document.getElementById('btn-menu').style.position="fixed";
        document.getElementById('btn-menu').style.top="20px";
    }else{
        menuContainer.classList.remove("aberto")
        menuContainer.classList.add("fechado")
        document.getElementById('btn-menu').setAttribute('src','./images/icones/icon-menu.svg')
        document.getElementById('btn-menu').style.position="relative";
        document.getElementById('btn-menu').style.top="0vh";

    }
    
}

// Slide

let imgSlide = [
"images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"
    ]

//Versão Desktop
let btnSlide1 = document.getElementsByClassName('btn-img')[0].addEventListener('click',img1)
let btnSlide2 = document.getElementsByClassName('btn-img')[1].addEventListener('click',img2)
let btnSlide3 = document.getElementsByClassName('btn-img')[2].addEventListener('click',img3)
let btnSlide4 = document.getElementsByClassName('btn-img')[3].addEventListener('click',img4)

function img1(){
    imgSlideContainer.setAttribute('src',imgSlide[0])
}

function img2(){
    imgSlideContainer.setAttribute('src',imgSlide[1])
}

function img3(){
    imgSlideContainer.setAttribute('src',imgSlide[2])
}

function img4(){
    imgSlideContainer.setAttribute('src',imgSlide[3])
}


const  btnPrevious = document.getElementsByClassName('previous-btn')[0].addEventListener('click',previous);
const  btnNext = document.getElementsByClassName('next-btn')[0].addEventListener('click',next);
const  imgSlideContainer = document.getElementsByClassName('img-product')[0];
let i = 0;


function previous(){
    if(i>=0 && i<=3){
        imgSlideContainer.setAttribute('src',imgSlide[i])
        i= i-1
        console.log(i)
    }else{
        i=3
        console.log('zerou')
    }
}




function next(){
    if(i>=0 && i<=3){
        imgSlideContainer.setAttribute('src',imgSlide[i])
        i= i+1
        console.log(i)
    }else{
        i=0
        console.log('zerou')
    }
}

//quantidade
const btnDiminuir = document.getElementsByClassName('btn-diminuir-item')[0].addEventListener('click',diminuir)
const btnAdd = document.getElementsByClassName('btn-add-item')[0].addEventListener('click',aumentar)
let inputQtd = document.getElementsByClassName('quantidade-item')[0]


function diminuir(){
    if(inputQtd.value > 0){
        --inputQtd.value
    } 
}

function aumentar(){
    if(inputQtd.value < 7){
        ++inputQtd.value
    } 
}

//Carrinho
const btncart = document.getElementById('cart-icon').addEventListener('click',exibirCarrinho)
const cartPreview = document.getElementById('cart-preview')
function exibirCarrinho(){
    if(cartPreview.classList.contains('aberto')){
        cartPreview.classList.add('fechado')
        cartPreview.classList.remove('aberto')
    }else{
        cartPreview.classList.remove('fechado')
        cartPreview.classList.add('aberto')
}
}

//Adicionar

const btnAdionarItem = document.getElementById('add-to-cart').addEventListener('click',addCart)
const titleProduct = document.getElementsByClassName('title-product')[0].innerText
let price = document.getElementsByClassName('product-price')[0].innerText.substr(2,6);
let priceUnid = Number(price)
console.log(priceUnid)

function addCart(){
    if(inputQtd.value > 0){
    let valorTotal  = Number(priceUnid*inputQtd.value);
    var priceConvert = numeral (valorTotal);
    var moedaFormat = priceConvert.format('R$0.00');
    console.log(`Você consegue levar ${inputQtd.value} unidades do ${titleProduct} por apenas ${moedaFormat}`)
    
//Apagando "carrinho vazio"
        const statusCart = document.getElementById('state-null-cart').style.display="none"

//adicionar ao carrinho
    const containerCart = document.getElementById('product-info-cart');
    var postItem = document.createElement('li') 
    postItem.innerHTML= 
    `<img class="product-info-cart-img" src="${imgSlide[0]}"> 
    <span>
        <p>${titleProduct}</p>
        <p class="info-cart-d">R$${priceUnid}  x${inputQtd.value} <h1 class="teste555">R$${moedaFormat}</h1></p>
    </span>
    <img src="./images/icones/icon-delete.svg" class="limpa-carrinho" id="clear" onclick="deletar()">
    `

    containerCart.appendChild(postItem)    
    inputQtd.value = 0
}


}
//Adiconando função a elemnento dinamico
function deletar(){
    let btnApagarItens = document.getElementById('clear') 
    var parent = btnApagarItens.parentNode;
    parent.style.background="red"


    console.log("foi?")
}





