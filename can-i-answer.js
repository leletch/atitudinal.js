//Exemplo de pergunta: "Me recomende algum filme"
export const filmesRecomendados = {
    probablyWords: ["recomendar", "sugerir", "indicar", "filmes", "séries", "assistir", 
    "começar", "por", "qual", "você", "me", "sugere", "recomenda"],
    matched: 0,
}

//Exemplo de pergunta: "Qual o melhor filme?"
export const maisAvaliado = {
    probablyWords: ["filme", "melhor", "mais", "bem", "avaliado", "avaliação", "classificação", 
    "top", "ranking", "maior", "nota", "mal", "myfilmlist"],
    matched: 0,
}

//Exemplo de pergunta: "Qual o seu filme preferido?"
export const filmePreferido = {
    probablyWords: ["filme", "favorito", "preferido", "amado", "seu", "mais", "gostou", "gosta"],
    matched: 0,
}

//Exemplo de pergunta: "Onde posso ver filmes?"
export const verFilmes = {
    probablyWords: ["assistir", "ver", "streaming", "plataforma", "serviço", "filmes", "onde", 
    "lugar", "site", "aplicativo", "posso"],
    matched: 0,
}

//Caso haja perguntas fora do tema
export const papoFurado = {
    probablyWords: ["oi", "sua","onde", "mora", "gosto", "com", "que", "futebol", 
    "política", "chocolate", "jornal", "negócios", 
    "TI", "matemática", "religião", "saúde", "de"],
    matched: 0,
}


//Respostas
function showAnswer(index) {
    switch (index) {
        case 0:
            return console.log("Para iniciantes recomendo filmes como Inception ou The Dark Knight, para pessoas que já assistem recomendo The Shawshank Redemption.")
        case 1:
            return console.log("Atualmente o filme que tem a melhor avaliação segundo o IMDb é The Godfather.")
        case 2:
            return console.log("Meu filme preferido é The Matrix!")
        case 3:
            return console.log("Os meios oficiais de se ver filmes podem ser, canais de tv (FilmeTV) ou streamings, como Netflix, Amazon Prime e Hulu.")
        default:
            return console.log("Infelizmente não posso ajudá-lo com este assunto. Mas se quiser uma recomendação de filme posso ser útil.")
    }
}

//Deduzir resposta
export function mostProbablyQuestion(pergunta) {
    if (pergunta.includes("chocolate")) {
        return "não falo sobre chocolate"
    }
    let matches = [
        filmesRecomendados.matched, 
        maisAvaliado.matched, 
        filmePreferido.matched,
        verFilmes.matched, 
        papoFurado.matched
    ]

 console.log(matches)
    console.log(Math.max(...matches))
    console.log(matches.indexOf(Math.max(...matches)))
    // Vê quantas palavras de cada pergunta foi usada
    return showAnswer(matches.indexOf(Math.max(...matches)))
}
