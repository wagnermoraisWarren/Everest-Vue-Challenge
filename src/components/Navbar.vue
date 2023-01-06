<template>
  <div id="nav-container" class="nav-container">
    <ul class="selected-area">
      <li 
        class="tab"
        id="signup-tab" 
        :disabled="change"
        @click="changeButton()">CADASTRO</li>

      <li 
        class="tab tab-active" 
        id="list-tab" 
        :disabled="!change" 
        @click="changeButton()">LISTAGEM</li>

    </ul>
    <button id="new-user-btn" @click="changeScreen()" class="new-user">
      Cadastrar novo usuário
    </button>
  </div>
</template>

<script>
import router from "@/router";
import Register from "../views/Register.vue";
import UsersList from "../views/UsersList.vue";

export default {
  name: "Navbar",

  data() {
    return {
      dataUsers: [],
    };
  },

  created() {
    this.$root.$refs.A = this;
  },
  
  methods: {
    changeButton() {
      if (!this.change) {
        this.change = true;
        this.$router.push("/register");
      } else {
        this.change = false;
        this.$router.push("/");
      }
    },

    changeScreen() {
      let newUserBtn = document.getElementById("new-user-btn");
      let listTab = document.getElementById("list-tab");
      let signupTab = document.getElementById("signup-tab");

      if (newUserBtn.innerHTML === "Voltar" || this.$router.name == "cadastro") {
        newUserBtn.innerHTML = "Cadastrar novo usuário";
        signupTab.classList.toggle("tab-active");
        listTab.classList.toggle("tab-active");
        this.$router.push("/").catch(()=>{});;
      } else {
        newUserBtn.innerHTML = "Voltar";
        signupTab.classList.toggle("tab-active");
        listTab.classList.toggle("tab-active");
        this.$router.push("./register");
      }
    }
  },

  components: { 
    router, 
    Register, 
    UsersList 
  },
};
</script>

<style scoped>
/* .display-none {
  display: none;
} */

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
  list-style: none;
  background-color: transparent;
  color: var(--paragraph);
  font-weight: 700;
  font-size: 1rem;
  border: none;
  transition: 0.2s;
  user-select: none;
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

.tab-active {
  transition: 0.2s;
  border-bottom: 2px solid black;
  color: black;
}
</style>
