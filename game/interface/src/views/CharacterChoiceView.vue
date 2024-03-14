<script>
// Importing the 'GameController' class
import { GameController } from "@/assets/js/controllers/game.controller";

// Exporting the component definition
export default {
  // Component name
  name: "CharacterChoiceView",

  // Computed properties
  computed: {
    // Computed property for retrieving the selected skin from Vuex store
    skin() {
      return this.$store.state.controller.characterOptions.skin;
    },

    // Computed property for retrieving the selected gender from Vuex store
    gender() {
      return this.$store.state.controller.characterOptions.gender;
    },

    // Computed property for retrieving the selected CSP (Clothes, Skin, Pose) from Vuex store
    csp() {
      return this.$store.state.controller.characterOptions.csp;
    },

    // Computed property for generating the image URI for the character's face
    imageURI() {
      return `/images/characters/${this.$store.state.controller.characterOptions.buildImageURI('Face')}`;
    }
  },

  // Component methods
  methods: {
    // Method to proceed to the next step and create a game session
    next() {
      GameController.createSession(this.$store.state.controller.characterOptions);
    },

    // Method to change the selected gender
    nextSexe(direction) {
      this.$store.state.controller.characterOptions.nextGender(direction);
    },

    // Method to change the selected outfit (CSP)
    nextOutfit(direction) {
      this.$store.state.controller.characterOptions.nextCsp(direction);
    },

    // Method to change the selected skin color
    nextColor(color) {
      this.$store.state.controller.characterOptions.selectSkin(color);
    }
  }
}
</script>


<template>
  <div class="ecran">
    <div class="instruction">
      <p> Crée ton personnage ! </p><br>
    </div>
    <div class="sexeChoice">
      <button class="leftSexeBtn" @click.prevent="nextSexe(-1)"><img src="/images/buttons/left_semi_arrow.png" alt="left_semi_arrow" /></button>
      <p>Sexe : {{ gender }}</p>
      <button class="rightSexeBtn" @click.prevent="nextSexe(1)"><img src="/images/buttons/right_semi_arrow.png" alt="right_semi_arrow"></button>
    </div>
    <div class="skinChoice">
      <p>Ethnie :</p>
      <p>{{ skin }}</p>
      <button class="whiteSkin" @click.prevent="nextColor(2)"></button>
      <button class="yellowSkin" @click.prevent="nextColor(1)"></button>
      <button class="blackSkin" @click.prevent="nextColor(0)"></button>
    </div>
    <div class="ombre"></div>
    <div class="outfitChoice">
      <a href="" class="leftOutfitBtn" @click.prevent="nextOutfit(1)"><img src="/images/buttons/left_semi_arrow.png" alt="left_semi_arrow"></a>
      <img :src="imageURI" :alt="imageURI" class="showPlayer">
      <a href="" class="rightOutfitBtn" @click.prevent="nextOutfit(-1)"><img src="/images/buttons/right_semi_arrow.png" alt="right_semi_arrow"></a>
    </div>
    <div class="navigation">
      <a href="/" class="previous"><img src="/images/buttons/left_arrow.png" alt="" /></a>
      <p class="selectedOutfit">{{ csp }}</p>
      <p>Utilises les flèches </p>
      <p>autour du personnage</p>
      <a href="" class="next" @click.prevent="next"><img src="/images/buttons/right_arrow.png" alt="" /></a>
    </div>
    <svg viewBox='0 0 200 200' width='200' height='200' xmlns='http://www.w3.org/2000/svg' class="linkLeft__svg" aria-labelledby="link1-title link1-desc">
      <title id="link1-title">Retourner au menu principal</title>

      <path id="link-circle" class="link__path" d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" stroke="none" fill="none" />

      <text class="link__text">
        <textPath href="#link-circle" stroke="none">
          Retourner au menu principal
        </textPath>
      </text>
    </svg>

    <svg viewBox='0 0 200 200' width='200' height='200' xmlns='http://www.w3.org/2000/svg' class="linkRight__svg" aria-labelledby="link1-title link1-desc">
      <title id="link1-title">Lancer la partie</title>

      <path id="link-circle" class="link__path" d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" stroke="none" fill="none" />

      <text class="link__text">
        <textPath href="#link-circle" stroke="none">
          Lancer la partie
        </textPath>
      </text>
    </svg>
    </div>
</template>

<style scoped lang="scss">
$rotationDuration: 20s;
$hoverDuration: 0.3s;

$easeIn: cubic-bezier(0.32, 0, 0.67, 0);
$easeOut: cubic-bezier(0.33, 1, 0.68, 1);

$textColor: #2B3338;
$bgColor: #A6B8B1;
$accentColor: #E8D6C1;

/* SCREEN : La fenêtre principale */
.ecran {
  position: absolute;
  width: 100%;
  height: 720px;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: #BBD3F0;

  font-family: "Press Start 2P", serif;
  overflow-y: hidden;
}

/* INSTRUCTION : La barre d'instruction en haut */
.instruction {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65px;
  top: 0;
  left: 0;
  font-size:30px;

  background-color: #3C6493;
}
/* SEXE CHOICE : La barre pour choisir le sexe */
  .sexeChoice {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 65px;
    top: 65px;
    left: 0;
    font-size:30px;

    background-color: #79A1D0;
  }

    .leftSexeBtn{
      position: absolute;
      left: 270px;
      width: 60px;
      height: 60px;
    }
    .rightSexeBtn{
      position: absolute;
      right:270px;
      width: 60px;
      height: 60px;
    }

  .skinChoice {
    position: absolute;
    width: 250px;
    height: 480px;
    top: 130px;
    left: 0;


    display: flex;
    flex-direction: column;
    align-items: center;
    //space items inside the div
    justify-content: space-around;
    background-color: #79A1D0;

  }

/* SKIN CHOICE : Le choix de la couleur de peau */
.skinChoice p{
    transform: translateY(-30px);
  }
    .whiteSkin {
      /* Ellipse 2 */

      box-sizing: border-box;

      width: 94px;
      height: 94px;

      background: #FAD5BA;
      border: 4px solid #000000;
      border-radius: 50%;

      transition: transform 0.5s ease, box-shadow 0.3s ease;
    }

    .whiteSkin:hover{
      box-shadow: 0 0 15px 5px white;
      transform: translateY(-5px);
    }

    .blackSkin {
      /* Ellipse 4 */

      box-sizing: border-box;

      width: 94px;
      height: 94px;

      background: #5D342F;
      border: 4px solid #000000;

      border-radius: 50%;

      transition: transform 0.5s ease, box-shadow 0.3s ease;
    }

  .blackSkin:hover{
    box-shadow: 0 0 15px 5px white;
    transform: translateY(-5px);
  }

    .yellowSkin {
      /* Ellipse 3 */

      box-sizing: border-box;

      width: 94px;
      height: 94px;

      background: #FCCE7F;
      border: 4px solid #000000;


      border-radius: 50%;

      transition: transform 0.5s ease, box-shadow 0.3s ease;
    }
  .yellowSkin:hover{
    box-shadow: 0 0 15px 5px white;
    transform: translateY(-5px);
  }

  .whiteSkin, .blackSkin, .yellowSkin {
    transform: translateY(-30px);
  }

/* OUTFIT CHOICE : Le choix de la tenue */
.outfitChoice {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 375px;
    height: 460px;
    margin-bottom: 60px;
    right: 300px;


  }
    .leftOutfitBtn{
      width: 80px;
      height: 80px;
    }

    .rightOutfitBtn{
      width: 80px;
      height: 80px;
    }
    .showPlayer {
      width: 200px;
      height: 350px;
      overflow: hidden;
      object-fit: cover;
      z-index:2;

    }

  .ombre{
    background-color:black;
    width:200px;
    height:50px;
    opacity:0.3;
    position:absolute;
    top:64%;
    left:40.5%;
    border-radius:50%;
    z-index: 1;
  }

/* NAVIGATION : La barre de navigation en bas */
.navigation {
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 110px;
    line-height: 55px;
    bottom: 0;
    left: 0;
    background-color: #79A1D0;

  }

    .previous {
      width: 75px;
      height: 75px;
      position: absolute;
      left: 8.5%;
      z-index: 2;
    }

    .navigation p {
      width: 800px;
      font-size: 30px;
      line-height: 1em;
    }

.navigation p:nth-child(3) {
  width: 400px;
  font-size: 15px;
  margin-top:10px;
}

.navigation p:nth-child(4) {
  width: 400px;
  font-size: 15px;
}
.next {
  width: 75px;
  height: 75px;
  position: absolute;
  right: 8.5%;
  z-index: 2;
}



/* SVG link animations for navigation */
.linkLeft__svg {
  position: absolute;
  bottom: 13px;
  left: 8%;
  width: 5rem;
  height: 5rem;
  display: inline-block;
  font-family: "Press Start 2P", cursive;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1175em;
  word-spacing: 0.3em;
  text-decoration: none;
  transform-box: fill-box;
  fill: $textColor;
  stroke: $textColor;
  stroke-width: 0.05em;
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: rotate 10s infinite linear;
  z-index: 1;
  }

.linkRight__svg {
  position: absolute;
  bottom: 13px;
  right: 8%;
  width: 5rem;
  height: 5rem;
  display: inline-block;
  font-family: "Press Start 2P", cursive;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1175em;
  word-spacing: 0.3em;
  text-decoration: none;
  transform-box: fill-box;
  fill: $textColor;
  stroke: $textColor;
  stroke-width: 0.05em;
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: rotate 10s infinite linear;
  z-index: 1;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>
