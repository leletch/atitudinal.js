import { filmePreferido, filmesRecomendados, maisAvaliado, verFilmes, papoFurado, mostProbablyQuestion } from './can-i-answer.js'

let pergunta = "gosto de chocoLate e voce?";
let palavrasPergunta
if(pergunta[pergunta.length -1] === "?"){
    pergunta = pergunta.slice(0,-1)
    palavrasPergunta = pergunta.toLowerCase().split(" ")
}
palavrasPergunta = pergunta.toLowerCase().split(" ")

// Ande pela array de palavras
  // Veja se a palavra existe no banco X, 
  // senão, veja no Y, 
  // senão, veja no Z...TEM NO Z? tensione (aumente o matched em 1)

  console.log(mostProbablyQuestion(pergunta))

function mostProbablyQuestion(banco){
    const tamanhoBanco = banco.probablyWords.length
    for(let i = 0; i < tamanhoBanco; ++i){
        palavrasPergunta.forEach((palavra) =>{
            if(banco.probablyWords[i] === palavra){
                banco.matched++
            }
        })
    }
}
