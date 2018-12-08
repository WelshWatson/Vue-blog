<template>
  <div id="app">
    <Navbar header="Welcome to Your Vue.js App"/>
    <Home />
        <img alt="Vue logo" src="./assets/logo.png">

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Home from './components/Home';

export default {
  name: 'app',
  components: {
    Navbar,
    Home
  }
}
</script>