<template>
  <div class="container">
    <div class="container-stats">
      <p>
        Puntaje: <span>{{ puntos }}</span>
      </p>
      <p>
        Intento: <span>{{ intento }}</span>
      </p>
    </div>
    <div class="container-cards">
      <div v-for="poke in pokemons">
        <Card :nombre="poke.nombre" :imagen="poke.img" />
      </div>
    </div>
    <button class="btn-play" @click="buscarPokemon">Jugar</button>
  </div>
</template>
<script>
import Card from './Card.vue'
import { consumirAPIFacade } from '@/clients/pokemonAPIClient'
export default {
  data() {
    return {
      puntos: 0,
      intento: 0,
      pokemons: [
        { nombre: null, img: null },
        { nombre: null, img: null },
        { nombre: null, img: null }
      ],
      finJuego: false,
      resultado: null
    }
  },
  methods: {
    async buscarPokemon() {
      if (this.finJuego) return
      this.intento++
      const listaInfoPokemon = []
      const numerosRandom = this.numerosAleatorios()
      this.compararIguales(numerosRandom)
      for (let index = 0; index < 3; index++) {
        const pokemon = await consumirAPIFacade(numerosRandom[index])
        listaInfoPokemon.push({
          nombre: pokemon.name,
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${numerosRandom[index]}.svg`
        })
      }
      this.pokemons = listaInfoPokemon
      if (this.intento === 5 && this.puntos < 10) {
        this.resultado = 'derrota'
        this.cambiarResultado('derrota')
        console.log('perdio')
        this.finJuego = true
      }
      if (this.puntos >= 10) {
        this.resultado = 'victoria'
        this.cambiarResultado('victoria')
        this.finJuego = true
        console.log('ganaste')
      }
    },
    compararIguales(numerosRandom) {
      if (
        numerosRandom[0] === numerosRandom[1] &&
        numerosRandom[1] === numerosRandom[2]
      ) {
        this.puntos = this.puntos + 5
      } else if (
        numerosRandom[0] === numerosRandom[1] ||
        numerosRandom[0] === numerosRandom[2] ||
        numerosRandom[1] === numerosRandom[2]
      ) {
        this.puntos = this.puntos + 2
      }
    },
    numerosAleatorios() {
      const numeros = [1, 3, 5, 6, 9]
      const resultados = []
      for (let i = 0; i < 3; i++) {
        const id = numeros[Math.floor(Math.random() * numeros.length)]
        resultados.push(id)
      }
      return resultados
    }
  },
  components: {
    Card
  },
  props: {
    cambiarResultado: Function
  }
}
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.btn-play {
  border: 4px solid black;
  padding: 8px 20px;
  font-weight: bold;
  font-size: 20px;
  margin: 0 auto;
}
.container-stats {
  display: flex;
  justify-content: space-between;
  padding: 20px 12px;
  font-size: 18px;
  font-weight: bold;
}
.container-cards {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
