//Velocidade maxima 70 km
//a cada 5km acima do limite voce ganha 1 ponto
//caso pontos maior que 12 -> "Carteira suspendida"

verificarVelocidade(180)

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70
    const kmPorPonto = 5
    if(velocidade <= 70)
        console.log('OK, dentro da velocidade permitida')
    else {
        const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto) //Math.floor = arredondar os números
        if(pontos >= 12)
            console.log(`Pelo fato de ter ${pontos} pontos, sua carteira esta suspensa `)
        else 
            console.log(`Voce acaba de tomar uma multa que gerou ${pontos} Pontos, cuidado`)
        
    }
        
}