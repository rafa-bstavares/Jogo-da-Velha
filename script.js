/*
Numera as casas do jogo de 1 a 9

Conferir linhas: linhas sempre vão ser números que distam 1 unidade entre si, pórem só podemos conferir a partir do 1, 4 e 7

Conferir colunas: colunas são compastas por numeros que distam 3 entre si, porém conferir a partir do 1, 2 e 3

Conferir diagonais: diagonais são numeros que distam 4 entre si, mas sempre conferir a partir do 1 e 3

Você não vai conferir se todos são "x" ou se todos são "o", vai conferir se todos são iguais, ai já engloba os dois casos



Ideias: Scanner

*/ 
let body = document.querySelector("body")
let slot = document.querySelectorAll(".quadradinho")

slot.forEach(function(item){
        item.addEventListener("click", function(){
            if(item.innerHTML == ""){
                if(body.classList.contains("circulo")){
                    item.innerHTML = "O"
                    body.classList.remove("circulo")
                }else{
                    item.innerHTML = "X"
                    body.classList.add("circulo")
                }
            }
        })
})


