<template>
  <div id="app">
    <Header/>
    <Navbar/>
    <div class="view-container">
      <router-view />
    </div>
  </div>
</template>

<script>
  import Header from "./components/Header.vue"
  import Navbar from "./components/Navbar.vue"
  
  export default {
    name: 'App',
    data() {
      return {
        headerTitle: "Usuários",
      }
    },
    components: {
      Header,
      Navbar
    }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  :root {
    --brand-magenta: #e02b57;
    --brand-magenta-light: #f6678d;
    --brand-magenta-dark: #c7264e;
    --paragraph: #7e7e7e;
    --primary-light-red: #EE2E5D;
    --primary-dark-red: #9C082C;
    --main-dark-opacity-80: #000000cc;
  }
</style>
