<script>
// Import simulated credit data from the credits.mocks.js file
import creditsMocks from "@/assets/js/mocks/credits.mocks";

export default {
  name: 'CreditView', // Vue component name

  computed: {
    developers() {
      // Returns simulated credit data
      return creditsMocks;
    }
  }
}
</script>


<template>
  <div class="ecran">
    <h1>Crédits</h1>
    <div class="panel">
      <section v-for="d in developers" :key="d">
        <h4 v-html="d.name"></h4>
        <div class="photo">
          <img :src="`/images/characters/${d.avatar}.png`" alt="" />
        </div>
        <ul style="list-style-type: disc;margin-left: 1.5em;">
          <li v-for="q in d.quotes" :key="q">{{ q }}</li>
        </ul>
      </section>
    </div>
    <div class="return">
      <RouterLink to="/" class="btn">Main menu</RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* SCREEN */
.ecran {
  height: 720px;
  width: 100%;
  position: absolute;

  font-family: 'Press Start 2P', serif;

  /* Flexbox */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("../../public/images/backgrounds/NightBackgroundMexicosAriba.png");
  background-size: cover;
  background-position: center;
  filter: brightness(1); /* Adjustment of background image brightness */
}

/* PANEL */
.panel {
  width: 900px;
  margin-top: 50px;

  /* Flexbox */
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: baseline;
}

/* SECTION */
section {
  width: 200px;
  height: 400px;
  background: grey;
  opacity: 0.8; /* Opacity of grey background */
  border-radius: 10px;
  box-shadow: blueviolet 0.1em 0.1em 0.5em; /* Blueviolet shadow */
  text-align: start;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
}

/* MAIN TITLE */
h1 {
  font-size: 50px;
  color: #fff; /* Text color */
  animation: pulsateLightBlue 0.11s ease-in-out infinite alternate; /* Text animation */
  margin-top: 50px;
}

/* CHARACTERS NAMES */
h4 {
  margin-top: 6px;
  margin-bottom: 4px;
  font-size: 22px;
  color: #efefef; /* Text color */
  animation: pulsateBlue 0.01s ease-in-out infinite alternate; /* Text animation */
  text-align: center;
}

/* PARAGRAPHS */
section ul li {
  font-size: 11px;
  margin-bottom: 4px;
  margin-right: 15px;
  line-height: 1.6;
}

/* PICTURES : box */
.photo {
  width: 200px;
  height: 200px;
  background: #848484; /* Background color */
  opacity: 1; /* Opacity */
  border-radius: 20px; /* Rounded corners */
  margin-bottom: 4px;
  box-shadow: #707070 0.1em 0.1em 0.5em; /* Box shadow */
}

/* PICTURES : box and size */
.photo img {
  width: 100%;
  height: 100%;
  opacity: 1;
  border-radius: 20px; /* Rounded corners */
}

/* BUTTON */
.btn {
  font-size: 40px;
  color: #fff; /* Text color */
  animation: pulsateLightBlue 0.11s ease-in-out infinite alternate; /* Text animation */
}

/* KEYFRAMES */
@keyframes pulsateBlue {
  100% {
    /* Larger blur radius */
    text-shadow:
        0 0 4px #05f,
        0 0 11px #05f,
        0 0 19px #05f,
        0 0 40px #05d,
        0 0 80px #05d,
        0 0 90px #05d,
        0 0 100px #05d,
        0 0 150px #05d;
  }
  0% {
    /* A slightly smaller blur radius */
    text-shadow:
        0 0 4px #05f,
        0 0 10px #05f,
        0 0 18px #05f,
        0 0 38px #05d,
        0 0 73px #05d,
        0 0 80px #05d,
        0 0 94px #05d,
        0 0 140px #05d;
  }
}
@keyframes pulsateLightBlue {
  100% {
    /* Larger blur radius */
    text-shadow:
        0 0 4px #0ff,
        0 0 11px #0ff,
        0 0 19px #0ff,
        0 0 40px #0fd,
        0 0 80px #0fd,
        0 0 90px #0fd,
        0 0 100px #0fd,
        0 0 150px #0fd;
  }
  0% {
    /* A slightly smaller blur radius */
    text-shadow:
        0 0 4px #0ff,
        0 0 10px #0ff,
        0 0 18px #0ff,
        0 0 38px #0fd,
        0 0 73px #0fd,
        0 0 80px #0fd,
        0 0 94px #0fd,
        0 0 140px #0fd;
  }
}
@keyframes pulsatePink {
  100% {
    /* Larger blur radius */
    text-shadow: 0 0 4px #8400ff,
    0 0 11px #8400ff,
    0 0 19px #8400ff,
    0 0 40px #bf00ff,
    0 0 80px #bf00ff,
    0 0 90px #bf00ff,
    0 0 100px #bf00ff,
    0 0 150px #bf00ff;
  }
  0% {
    /* A slightly smaller blur radius */
    text-shadow: 0 0 4px #8400ff,
    0 0 10px #8400ff,
    0 0 18px #8400ff,
    0 0 38px #bf00ff,
    0 0 73px #bf00ff,
    0 0 80px #bf00ff,
    0 0 94px #bf00ff,
    0 0 140px #bf00ff;
  }
}
</style>
