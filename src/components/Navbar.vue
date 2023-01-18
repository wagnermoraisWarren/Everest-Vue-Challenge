<template>
  <div id="nav-container" class="nav-container">
    <ul class="selected-area">
      <router-link to="/register" class="tab">CADASTRO</router-link>
      <router-link to="/" class="tab">LISTAGEM</router-link>
    </ul>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Navbar",

  data() {
    return {
      dataUsers: [],
    };
  },

  methods: {
  },

  created() {
    this.$root.$refs.A = this;
  },
  
  components: { 
    router
  },
};
</script>

<style scoped>
.nav-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48rem;
  margin: 0 auto;
  gap: 1rem;
}

.selected-area {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  margin-top: 7rem;
}

button {
  cursor: pointer;
}

.tab {
  width: 10rem;
  height: 2.5rem;
  text-align: center;
  text-decoration: none;
  list-style: none;
  background-color: transparent;
  color: var(--paragraph);
  font-weight: 700;
  font-size: 1rem;
  border: none;
  transition: 0.2s;
  user-select: none;
}

.tab:hover {
  color: rgba(0, 0, 0, 0.9);
}

a.router-link-exact-active {
  transition: 0.2s;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  color: rgba(0, 0, 0, 0.7);
}

.new-user {
  background-color: var(--brand-magenta);
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  color: white;
  font-weight: 700;
  align-self: flex-end;
  transition: 0.2s;
}

.new-user:hover {
  transition: 0.2s;
  background-color: #f6678d;
}
</style>
