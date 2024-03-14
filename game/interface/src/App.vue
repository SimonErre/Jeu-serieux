<script>
  import { closeApp } from './app.js';
  import router from "@/router";

  export default {
    name: 'App',
    methods: {
      closeBtnClick () {
        closeApp()
      },
    },
    created () {
      this.$store.dispatch('askCriteria')
      this.$store.dispatch('askCharacters')
      this.$store.dispatch('askReactions')
      this.$store.dispatch('askStatistics')
    }
  }
</script>

<template>
  <RouterView />
  <ul class="nav" id="topMenuBtns">
    <li>
      <button @click.prevent="closeBtnClick()" id="closeBTN" class="topMenuBtns">&#128473;&#xFE0E;</button>
    </li>
  </ul>
</template>

<style lang="scss">
  .nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    margin: 0;
    padding: 0;
  }
  #closeBTN {
    position: absolute;
    right: 20px;
  }
</style>
