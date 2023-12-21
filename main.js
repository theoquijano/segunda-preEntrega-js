class Juego {
    constructor() {
        this.jugadorPuntos = 0
        this.rondasParaGanar = 3
        this.nombre = ''
        this.resultados = []
    }

    iniciarJuego() {
        while (!this.nombre || !isNaN(this.nombre)) {
            this.nombre = prompt('Ingrese su nombre')
            if (!this.nombre) {
                alert('Por favor, ingrese su nombre!')
            } else if (!isNaN(this.nombre)) {
                alert('Por favor, ingrese su nombre!')
            }
        }

        for (let i = 1; i <= this.rondasParaGanar; i++) {
            let pc = this.aleatoria()
            let jugador = Number(prompt('1 - PIEDRA, 2 - PAPEL, 3 - TIJERA'))

            while (isNaN(jugador) || jugador === '' || jugador < 1 || jugador > 3) {
                alert('Por favor, ingrese un numero!!!')
                jugador = Number(prompt('Ingrese un numero'))
            }

            let resultado = this.comparar(jugador, pc)
            this.resultados.push(resultado)
        }

        alert('Puntuacion final: ' + this.nombre + ' ' + this.jugadorPuntos)
    }

    comparar(jugador, pc) {
        if (jugador == pc) {
            alert('EMPATE')
            return 'EMPATE'
        } else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
            alert('GANASTE')
            this.jugadorPuntos++
            return 'GANASTE'
        } else {
            alert('PERDISTE')
            return 'PERDISTE'
        }
    }

    aleatoria() {
        return Math.ceil(Math.random() * 3)
    }
}

do {
    const juegoInstancia = new Juego()
    juegoInstancia.iniciarJuego()
    empezarJuego = confirm("¿Quieres jugar de nuevo?")
} while (empezarJuego)

alert("¡Gracias por jugar!!")