<script>
import {tipsModel} from "@/assets/js/models/tips.model";

let tips = new tipsModel();
export default {
  name: "LoadingView",
  computed: {
    tips() {
      return tips.getTip();
    }
  }
}
</script>

<template>
  <div class="tips">
    <h3>{{ tips }}</h3>
  </div>
  <img src="/images/loadings/loadings1/loading1.gif" alt="" class="imgBack"/>
</template>

<style scoped lang="scss">
.imgBack {
  inset: 0; /* Fills the entire container */
  object-fit: cover; /* Scales the image to cover the entire area */
  position: absolute; /* Positioned absolutely */
  object-position: center; /* Centers the image within its container */
  z-index:1;
}

.tips {

  z-index:2;
  position:absolute;
  font-family: "Press Start 2P", Serif;
  color:white;
  font-size:18px;
  bottom:5px;
  width: 99%;
  min-height: 50px;
  left:10px;
  background-color: black;
}
</style>

