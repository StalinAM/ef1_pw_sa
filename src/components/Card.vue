<template>
  <div>
    <picture>
      <img :src="imagen || 'https://dummyimage.com/250x250'" alt="" />
    </picture>
    <p class="nombre-text">{{ nombre || 'xxxxxxxxx' }}</p>
  </div>
</template>
<script>
export default {
  props: {
    imagen: String,
    nombre: String
  }
}
</script>
<style>
picture {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.nombre-text {
  font-size: 20px;
  font-weight: bold;
}
</style>
