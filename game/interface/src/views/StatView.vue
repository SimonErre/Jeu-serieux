<script>
import { GameController } from "@/assets/js/controllers/game.controller";

export default {
  name: "StatView", // Vue component name

  computed: {
    // Retrieves the history from the Vuex store
    history() {
      return this.$store.state.resume.history;
    },
    // Retrieves the statistics from the Vuex store and logs them to the console
    stats() {
      console.log(this.$store.state.resume.statistics);
      return this.$store.state.resume.statistics;
    },
    // Retrieves the player's avatar based on character options from the Vuex store
    playerAvatar() {
      return `/images/characters/${this.$store.state.controller.characterOptions.buildImageURI('Face')}`;
    }
  },
  methods: {
    // Finds the reaction based on altercation's reactionId using GameController's REACTIONS array
    reaction(altercation) {
      return GameController.REACTIONS.find(r => r.id === altercation?.reactionId);
    },
    // Finds the character based on altercation's characterName using GameController's CHARACTERS array
    character(altercation) {
      return GameController.CHARACTERS.find(c => c.name === altercation?.characterName);
    },
    // Finds the statistic based on stat's statisticId using GameController's STATISTICS array
    statistic(stat) {
      return GameController.STATISTICS.find(s => s.id === stat?.statisticId);
    }
  }
}
</script>


<template>
  <div class="ecran">
    <div class="container">
      <h1>Récapitulatif de la game</h1>

      <section class="stats" v-if="stats">
        <h3>Récap de ton personnage</h3>
        <div class="content1">
          <img :src="playerAvatar" alt="" class="stats--player" />

          <div class="stats__box">
            <table class="styled-table">
              <thead>
              <tr>
                <th>Statistique </th>
                <th>Score</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="s in stats" :key="s">
                <td>{{ statistic(s).label }}</td>
                <td>{{ s.score }}</td>
              </tr>
              </tbody>
            </table>

          </div>
        </div>
      </section>

      <section class="history" v-if="history">
        <div class="history--section" v-for="a in history" :key="a">
          <h3>Altercation {{ a.id - history[0].id + 1 }}</h3>
          <div class="content2">
            <p>{{ a.label }}</p>
            <img :src="`/images/characters/${character(a)?.specs.buildImageURI('Face')}`" :alt="a.characterName" />
            <img :src="`/images/buttons/${reaction(a).icon}.png`" alt="" id="img2"/>

          </div>
        </div>
      </section>

      <div class="back-to-top">
        <RouterLink to="/">Retour à l'accueil</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* SCREEN */
.ecran {
  background-size: 100%; /* Full background image size */
  font-family: Arial, sans-serif;
  background-attachment: fixed; /* Fixed background attachment */
  background-repeat: no-repeat; /* Prevent background image repetition */
  background-image: url("../../public/images/backgrounds/DojoBackground.jpg"); /* Background image */
  background-position: center; /* Center the background image */
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto; /* Enable vertical scrollbar */
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 950px; /* Container width */
}

.stats {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 700px; /* Total width of sections */
  height: 400px;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  background-color: rgba(121, 161, 208, 0.9); /* Background color with opacity */
  font-size: 1.3rem;
  box-shadow: #3b3737 0.1em 0.1em 0.5em; /* Box shadow */
}

.stats img {
  margin-bottom: 30px;
}

.stats__box {
  font-size: 30px;
  width: 300px;
  margin-right: 60px;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-right: 30px;
}

th,
td {
  padding: 8px;
  text-align: left;
}

.content1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 300px;
}

.content1 img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin-left: 20px;
}

.history--section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 700px; /* Total width of sections */
  height: 400px;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  background-color: rgba(121, 161, 208, 0.9); /* Background color with opacity */
  font-size: 1.3rem;
  box-shadow: #3b3737 0.1em 0.1em 0.5em; /* Box shadow */
}

.history--section:hover {
  box-shadow: 0 0 10px black; /* Hover shadow effect */
}

.content2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.history--section img {
  width: 300px; /* Maximum image size */
  height: 300px; /* Maximum image size */
  margin-bottom: 10px;
  object-fit: cover; /* Preserve image ratio */
  margin-right: 50px;
}

#img2 {
  width: 200px;
  height: 200px;
  margin-left: 50px;
}

h1 {
  font-family: "Press Start 2P", serif;
  font-size: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
}

h3 {
  font-family: "Press Start 2P", serif;
  text-align: center;
  margin: 0 0 20px;
  font-size: 30px;
  margin-top: 20px;
}

.back-to-top {
  margin-top: 20px;
  text-align: center;
  padding-bottom: 20px;
}

.back-to-top a {
  display: inline-block;
  padding: 10px 20px;
  background-color: lightskyblue;
  color: #000000;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-weight: bold;
  justify-content: center;
  border: solid black;
  border-radius: 10px;
}

.back-to-top a:hover {
  border-radius: 10px; /* Add this line to round the corners */
  opacity: 1;
  box-shadow: 0 15px 10px -5px rgba(100, 149, 237, 1);
  transform: translateY(-10px);
}

</style>

