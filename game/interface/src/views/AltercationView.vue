<script>
// Importing the 'AltercationButton' component and the 'GameController' class
import AltercationButton from "@/views/component/AltercationButton.vue";
import { GameController } from "@/assets/js/controllers/game.controller";

// Exporting the component definition
export default {
  // Component name
  name: "AltercationView",

  // Registering the 'AltercationButton' component for use in the template
  components: { AltercationButton },

  // Component data
  data: () => ({
    customText: undefined,
  }),

  // Computed properties
  computed: {
    // Computed property for retrieving the player character from the Vuex store
    player() {
      return this.$store.state.controller.character;
    },

    // Computed property for retrieving the NPC character from the Vuex store
    npc() {
      return this.$store.state.controller.altercation?.character;
    },

    // Computed property for retrieving the altercation text from the Vuex store or using custom text
    text() {
      return this.customText || this.$store.state.controller.altercation?.label;
    },

    // Computed property for generating the player character's image URI
    playerImage() {
      return `/images/characters/${this.player.specs.buildImageURI('Droite')}`;
    },

    // Computed property for generating the NPC character's image URI
    npcImage() {
      return `/images/characters/${this.npc?.specs.buildImageURI('Gauche')}`;
    },

    // Computed property for generating the background image URI
    background() {
      return `/images/backgrounds/${this.$store.state.controller.altercation?.background}`;
    },

    // Computed property for retrieving available reactions from the 'GameController' class
    reactions() {
      return GameController.REACTIONS;
    },
  },

  // Component methods
  methods: {
    // Method to react to an altercation with a specific reaction
    react(reaction) {
      this.customText = reaction.message;
      // Delay the reaction using 'setTimeout' and then call the 'react' method on the controller
      setTimeout(() => this.$store.state.controller.react(reaction), 4500);
    },
  },

  // Lifecycle hook: created
  created() {
    // Redirect to the home page if there is no active altercation or session
    if (this.$store.state.controller.altercation && this.$store.state.controller.session) return;
    this.$router.push('/');
  },
};
</script>


<template>
  <div class="ecran" :style="{backgroundImage: `url(${background})`}">
    <div class="backgroundText"></div>
    <div class="text">
      <p>{{text}}</p>
    </div>
    <div class="interaction">
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
/* SCREEN */
.ecran {
  position: absolute;
  width: 100%;
  height: 720px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

/* TEXT ANIMATION CONTAINER */
.text {
  position: absolute;
  top: 25px;
  inset-inline: 100px;
  max-height: 130px;
  overflow: hidden;
}

.text p {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  font-family: 'Press Start 2P', cursive;
  opacity: 1;
  animation: typing 1.5s steps(40, end);
}

/* The typing effect */
@keyframes typing {
  from {
    width: 50%;
  }
  to {
    width: 100%;
  }
}

/* BACKGROUND FOR TEXT ANIMATION */
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

/* INTERACTION SECTION */
.interaction {
  position: absolute;
  top: 200px;
  display: flex;
  flex-direction: column;
}

/* BUTTON STYLES */
.btn {
  margin-top: 5px;
}

/* PLAYER INFO */
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

/* ENEMY INFO */
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

/* TABLE STYLES */
.tableStats,
.tableInteractions {
  border-collapse: collapse;
  color: #ffffff;
  border: #ffffff 1px solid;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  opacity: 0;
}

/* IMAGE STYLES */
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
