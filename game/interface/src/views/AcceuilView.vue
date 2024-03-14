<script>
// Importing the 'closeApp' function from the '@/app' module
import { closeApp } from "@/app";

// Exporting the component definition
export default {
  // Component name
  name: 'AccueilView',

  // Component methods
  methods: {
    // Method to trigger the tutorial action through the Vuex store
    tuto() {
      // Dispatching the 'askTutorialAltercation' action to the Vuex store
      this.$store.dispatch('askTutorialAltercation');
    },

    // Method to navigate to the 'credits' route
    credit() {
      // Using the router to navigate to the '/credits' route
      this.$router.push('/credits');
    },

    // Method to close the application
    quitter() {
      // Calling the 'closeApp' function to close the application
      closeApp();
    }
  }
}
</script>
<template>
  <div class="ecran">
    <div class="titre">
      <p>Shock of Perspectives</p>
    </div>
    <div class="panel">
      <RouterLink to="/customisation" class="btn">Jouer</RouterLink>
      <button class="btn" @click.prevent="tuto()">Tutoriel</button>
      <button class="btn" @click.prevent="credit()">Crédits</button>
      <button class="btn" @click.prevent="quitter()">Quitter</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* SCREEN : size and background */
.ecran {
  /* Background image and positioning */
  background-image: url("../../public/images/backgrounds/AccueilBackgroundBlur2.png");
  position: absolute;
  width: 100%;
  height: 720px;
  background-size: cover;
}

/* TTTLE */
.titre {
  /* Styling for the title */
  color: #000000;
  font-size: 64px;
  font-family: 'Press Start 2P', serif;
  text-align: center;
  margin-top: 240px;

  /* Animation & transition */
  animation: translateFromTop 1.5s, fadein100 1.5s;
}

/* PANEL */
.panel {
  /* Styling for the panel */
  position: absolute;
  height: 80px;
  width: 710px;
  top: 60%;
  left: 52%;

  /* Flexbox */
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;

  opacity: 1; /* Opacity between 0 and 1 */
  color: #ffffff;
  border-radius: 10px;

  /* Animation & transition */
  animation: fadein 1.5s;
  transform: translate(-50%, -50%);
  transition: opacity 1.5s, transform 1.5s;
}

/* BUTTON : size, color and hover */
.btn {
  /* Styling for the button */
  background-color: lightskyblue;
  padding: 10px;
  margin: auto;

  font-weight: bold;
  color: #000000;
  justify-content: center;

  width: 150px;
  border: solid black;
  border-radius: 10px;
  opacity: 1; /* Opacity between 0 and 1 */

  /* Animation & transition */
  animation: translateFromTop 1.5s;
  transition: transform 0.5s ease, box-shadow 0.3s ease;
}

.btn:hover {
  /* Styling for the button on hover */
  width: 150px;
  border-radius: 10px;
  opacity: 1;
  box-shadow: 0 15px 10px -5px rgba(100, 149, 237, 1);

  /* Animation & transition */
  transform: translateY(-10px);
}

/* KEYFRAMES */
@keyframes fadein50 {
  /* Animation for 50% fade in */
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}

@keyframes fadein100 {
  /* Animation for 100% fade in */
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100;
  }
}

@keyframes translateFromTop {
  /* Animation for translation from the top */
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0%);
  }
}

</style>
