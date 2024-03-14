<script>
export default {
  props: {
    ImageAlter:{
      type: String,
      default: 'https://img.pixers.pics/pho_wat(s3:700/FO/56/49/23/41/700_FO56492341_3a5776815d8f42755e584315db67b85b.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/posters-panneau-de-limitation-de-vitesse-50.jpg',
    },
    TitleAlter:{
      type: String,
      default: 'https://img.pixers.pics/pho_wat(s3:700/FO/56/49/23/41/700_FO56492341_3a5776815d8f42755e584315db67b85b.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/posters-panneau-de-limitation-de-vitesse-50.jpg',
    },
  },
};
</script>

<template>
  <div class="btn">
    <button class="image">
      <img :src="ImageAlter" class="ImageAltercation">
      <img :src="TitleAlter" class="ImageComplète">
    </button>
  </div>
</template>

<style scoped lang="scss">
.btn {
  background-size: cover;
  background-repeat: no-repeat;
  color: #000000;

  //padding:10px;
  width: 277px;
  height: 82px;

  transition: width 0.3s;
}
.ImageComplète {
  height: 68px;
  width: 277px;
  margin-top: -62px;
  opacity: 0;
}
.ImageComplète:hover {
  animation: translateFromLeft 0.5s, fadein 0.5s;
  opacity: 1;
}

.ImageAltercation {
  height: 62px;
  width: 62px;
  margin-left: 4px;
  opacity: 1;
}

.text {
  opacity: 0;
  position: absolute;
  margin-top: 10px;
  transition: opacity 0.3s, transform 0.3s; /* Ajoutez cette ligne pour une transition fluide */
  transform: translateX(0px); /* Décalez de 0px vers la droite par défaut */
}

@keyframes translateFromLeft {
  from {
    transform: translateX(-100px);
  }
  to {
    transform: translateX(0px);
  }
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
