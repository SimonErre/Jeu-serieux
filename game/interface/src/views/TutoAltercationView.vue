<script>
import AltercationButton from "@/views/component/AltercationButton.vue";
import { GameController } from "@/assets/js/controllers/game.controller";

export default {
  name: "TutoAltercationView",
  components: { AltercationButton },
  data: () => ({
    intro: true,
    customText: 'Bienvenue dans le tutoriel ! Dans ce jeu, vous allez vous retrouver face à des situations violentes dans la rue et dans un dojo. Votre but, réagir à ces altercations de la manière qui vous semble le mieux.'
  }),
  computed: {
    // Computed properties to retrieve information from the store
    player() {
      const gender = this.$store.state.controller.characterOptions.gender;
      const skin = this.$store.state.controller.characterOptions.skin;
      const csp = this.$store.state.controller.characterOptions.csp;

      // Find the character in the GameController.CHARACTERS array based on gender, skin, and csp
      return GameController.CHARACTERS.find(({ specs }) => specs.gender === gender && specs.skin === skin && specs.csp === csp);
    },
    npc() {
      return this.$store.state.controller.altercation?.character;
    },
    text() {
      return this.customText || this.$store.state.controller.altercation?.label;
    },
    playerImage() {
      return `/images/characters/${this.player.specs.buildImageURI('Droite')}`;
    },
    npcImage() {
      return `/images/characters/${this.npc?.specs.buildImageURI('Gauche')}`;
    },
    background() {
      return `/images/backgrounds/${this.$store.state.controller.altercation?.background}`;
    },
    reactions() {
      return GameController.REACTIONS;
    }
  },
  methods: {
    // Method to handle reactions
    react(reaction) {
      this.customText = reaction.message;
      // After a delay, navigate back to the main page
      setTimeout(() => this.$router.push('/'), 4500);
    }
  },
  created() {
    // Redirect to the main page if there is no altercation in the store
    if (this.$store.state.controller.altercation) return;
    this.$router.push('/');
  },
  mounted() {
    // After a delay, set intro to false and clear customText
    setTimeout(() => {
      this.intro = false;
      this.customText = undefined;
    }, 7500);
  }
}
</script>


<template>
  <div class="ecran" :style="{backgroundImage: `url(${background})`}">
    <div class="backgroundText"></div>
    <div class="text">
      <p>{{text}}</p>
    </div>
    <div class="interaction" v-if="!intro">
      <AltercationButton @click.prevent="react(reaction)" v-for="reaction in reactions" :key="reaction" class="btn" :ImageAlter="`/images/buttons/${reaction.icon}.png`" :TitleAlter="`/images/buttons/${reaction.label}.png`"></AltercationButton>
    </div>
    <div class="perso">
      <img :src="playerImage" alt="" class="showPlayer">
    </div>
    <div class="ennemi">
      <img :src="npcImage" alt="" class="showNPC">
    </div>
  </div>
</template>
<style scoped lang="scss">
.ecran {
  position: absolute;
  width: 100%;
  height: 720px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.text {
  position: absolute;
  top: 25px;
  inset-inline: 100px;
  max-height: 130px;
  overflow: hidden;
}

.text p {
  overflow: hidden;
  margin: 0 auto;
  font-family: 'Press Start 2P', cursive;
  opacity: 1;
  animation: typing 1.5s steps(40, end);
}

@keyframes typing {
  from {
    width: 50%;
  }
  to {
    width: 100%;
  }
}

.backgroundText {
  position: absolute;
  width: 90%;
  height: 150px;
  left: 5%;
  top: 10px;
  overflow: hidden;
  background-color: white;
  opacity: 0.7;
  border-radius: 25px 25px 25px 25px;
  filter: blur(2px);
}

.interaction {
  position: absolute;
  top: 200px;
  display: flex;
  flex-direction: column;
}

.btn {
  margin-top: 5px;
}

.perso {
  position: absolute;
  top: 470px;
  right: 750px;
  width: 150px;
  height: 250px;
  text-align: center;
  line-height: 100px;
  font-size: 50px;
  color: white;
}

.ennemi {
  position: absolute;
  top: 470px;
  right: 150px;
  width: 150px;
  height: 250px;
  text-align: center;
  line-height: 100px;
  font-size: 50px;
}

.tableStats {
  border-collapse: collapse;
  color: #ffffff;
  border: #ffffff 1px solid;
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  opacity: 0;
}

.tableInteractions {
  border-collapse: collapse;
  color: #ffffff;
  border: #ffffff 1px solid;
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  opacity: 0;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

