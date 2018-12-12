<template>
  <div id="app">
    <Navbar />
    <div class="container">
    <Home />
        <img alt="Vue logo" src="./assets/logo.png">
    </div>
    <mainRouter />
  </div>
</template>

<script>
import Navbar from './components/navbar/index';
import Home from './components/home/index';
import mainRouter from './components/main-router/index';

export default {
  name: 'app',
  components: {
    Navbar,
    Home,
    mainRouter
  }
}
</script>
