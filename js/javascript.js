//item 1 tp

let articulo = document.querySelectorAll('article');

articulo[0].addEventListener("mouseover",function(){

    articulo[0].classList.toggle('opacity');
    
});

articulo[0].addEventListener("click",function(){

    
    articulo[0].classList.toggle('blanco');

});

articulo[1].addEventListener("mouseover",function(){

    articulo[1].classList.toggle('opacity');

});

articulo[1].addEventListener("click",function(){

    articulo[1].classList.toggle('blanco');

});

articulo[2].addEventListener("mouseover",function(){

    articulo[2].classList.toggle('opacity');

});

articulo[2].addEventListener("click",function(){

    articulo[2].classList.toggle('blanco');

});

articulo[3].addEventListener("mouseover",function(){

    articulo[3].classList.toggle('opacity');

});

articulo[3].addEventListener("click",function(){

    articulo[3].classList.toggle('blanco');

});

articulo[4].addEventListener("mouseover",function(){

    articulo[4].classList.toggle('opacity');

});

articulo[4].addEventListener("click",function(){

    articulo[4].classList.toggle('blanco');

});

articulo[5].addEventListener("mouseover",function(){

    articulo[5].classList.toggle('opacity');

});

articulo[5].addEventListener("click",function(){

    articulo[5].classList.toggle('blanco');

});

articulo[6].addEventListener("mouseover",function(){

    articulo[6].classList.toggle('opacity');

});

articulo[6].addEventListener("click",function(){

    articulo[6].classList.toggle('blanco');

});

articulo[7].addEventListener("mouseover",function(){

    articulo[7].classList.toggle('opacity');

});

articulo[7].addEventListener("click",function(){

    articulo[7].classList.toggle('blanco');

});

articulo[8].addEventListener("mouseover",function(){

    articulo[8].classList.toggle('opacity');

});

articulo[8].addEventListener("click",function(){

    articulo[8].classList.toggle('blanco');

});

articulo[9].addEventListener("mouseover",function(){

    articulo[9].classList.toggle('opacity');

});

articulo[9].addEventListener("click",function(){

    articulo[9].classList.toggle('blanco');

});

articulo[10].addEventListener("mouseover",function(){

    articulo[10].classList.toggle('opacity');

});

articulo[10].addEventListener("click",function(){

    articulo[10].classList.toggle('blanco');

});



const stars =  document.querySelectorAll('.star');

stars.forEach(function(star, index){
    star.addEventListener('click', function(){
        for(let i = 0; i <= index; i++){
            stars[i].classList.add('checked');
        }
        for(let i = index+1; i<stars.length; i++){
            stars[i].classList.remove('checked');
        }
    })
})

const stars2 =  document.querySelectorAll('.star2');

stars2.forEach(function(star2, index){
    star2.addEventListener('click', function(){
        for(let i = 0; i <= index; i++){
            stars2[i].classList.add('checked');
        }
        for(let i = index+1; i<stars2.length; i++){
            stars2[i].classList.remove('checked');
        }
    })
})

const stars3 =  document.querySelectorAll('.star3');

stars3.forEach(function(star3, index){
    star3.addEventListener('click', function(){
        for(let i = 0; i <= index; i++){
            stars3[i].classList.add('checked');
        }
        for(let i = index+1; i<stars3.length; i++){
            stars3[i].classList.remove('checked');
        }
    })
})

const stars4 =  document.querySelectorAll('.star4');

stars4.forEach(function(star4, index){
    star4.addEventListener('click', function(){
        for(let i = 0; i <= index; i++){
            stars4[i].classList.add('checked');
        }
        for(let i = index+1; i<stars4.length; i++){
            stars4[i].classList.remove('checked');
        }
    })
})

const stars5 =  document.querySelectorAll('.star5');

stars5.forEach(function(star5, index){
    star5.addEventListener('click', function(){
        for(let i = 0; i <= index; i++){
            stars5[i].classList.add('checked');
        }
        for(let i = index+1; i<stars5.length; i++){
            stars5[i].classList.remove('checked');
        }
    })
})
const stars6 =  document.querySelectorAll('.star6');

stars6.forEach(function(star6, index){
    star6.addEventListener('click', function(){
        for(let i = 0; i <= index; i++){
            stars6[i].classList.add('checked');
        }
        for(let i = index+1; i<stars6.length; i++){
            stars6[i].classList.remove('checked');
        }
    })
})

const stars7 =  document.querySelectorAll('.star7');

stars7.forEach(function(star7, index){
    star7.addEventListener('click', function(){
        for(let i = 0; i <= index; i++){
            stars7[i].classList.add('checked');
        }
        for(let i = index+1; i<stars7.length; i++){
            stars7[i].classList.remove('checked');
        }
    })
})

const stars8 =  document.querySelectorAll('.star8');

stars8.forEach(function(star8, index){
    star8.addEventListener('click', function(){
        for(let i = 0; i <= index; i++){
            stars8[i].classList.add('checked');
        }
        for(let i = index+1; i<stars8.length; i++){
            stars8[i].classList.remove('checked');
        }
    })
})

const stars9 =  document.querySelectorAll('.star9');

stars9.forEach(function(star9, index){
    star9.addEventListener('click', function(){
        for(let i = 0; i <= index; i++){
            stars9[i].classList.add('checked');
        }
        for(let i = index+1; i<stars9.length; i++){
            stars9[i].classList.remove('checked');
        }
    })
})

const stars10 =  document.querySelectorAll('.star10');

stars10.forEach(function(star10, index){
    star10.addEventListener('click', function(){
        for(let i = 0; i <= index; i++){
            stars10[i].classList.add('checked');
        }
        for(let i = index+1; i<stars10.length; i++){
            stars10[i].classList.remove('checked');
        }
    })
});

function abrirYT(){
    window.open("https://www.youtube.com/", "_blank");
}

function abrirIg(){
    window.open("https://www.instagram.com/", "_blank");
}

function abrirFacebook(){
    window.open("https://www.facebook.com/?locale=es_LA", "_blank");
}


var index =0;
var articulo1= document.querySelectorAll(".articulo-categoria");
document.addEventListener("keyup",e =>{
   
    if (e.target.matches("#buscador")){
    document.querySelectorAll(".articulo-categoria").forEach(articulo1 =>{
        articulo1.textContent.toLowerCase().includes(e.target.value)
        ? articulo1.classList.remove('filtro')
        : articulo1.classList.add('filtro');
         
    })
}
 
});



