// Criar Array

const fila = [1,2,3,4,5,6];

const filaStringAmigos = ["Raquely","Larissa","Luiza"]

function lerAmigos(filaStringAmigos){
    console.log(`Você tem ${filaStringAmigos.length} amigos`)

    for(let i = 0; i < filaStringAmigos.length;i++){
        console.log(filaStringAmigos[i])
        if(filaStringAmigos[i] === "Luiza"){
            console.log(`Index do seu melhor amigo é ${i}`)
            
    }
}