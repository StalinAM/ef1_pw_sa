<template>
  <main>
    <Visual :puntos="puntos" :cambiarResultado="cambiarResultado" />
    <p>{{ puntos }}</p>
    <div v-if="resultado === 'derrota'" class="mensaje-win">
      <p>Has utilizado tus 5 intentos</p>
      <p>El juego ha termindo, intentalo nuevamente</p>
      <button>Nuevo Juego</button>
    </div>
    <div v-if="resultado === 'victoria'" class="mensaje-lose">
      <p>
        Puntaje: #<span>{{ puntos }}</span>
      </p>
      <p>Felicitaciones has ganado un premio de $10.000,00</p>
      <button>Nuevo Juego</button>
    </div>
  </main>
</template>
<script>
import Visual from '@/components/Visual.vue'
export default {
  data() {
    return {
      resultado: null
    }
  },
  methods: {
    cambiarResultado(texto) {
      this.resultado = texto
    }
  },
  components: {
    Visual
  }
}
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.mensaje-win {
  color: red;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid black;
  padding: 18px;
  margin: 10px 0;
}
.mensaje-lose {
  color: blue;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid black;
  padding: 18px;
  margin: 10px 0;
}
button {
  border: 5px solid black;
  font-size: 20px;
  padding: 10px 20px;
  font: bold;
}
</style>
