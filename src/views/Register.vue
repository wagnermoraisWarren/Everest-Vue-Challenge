<template>
  <div>
    <Header />
    <Navbar></Navbar>
    <div class="form-container">
      <form id="form">
        <div class="input-area">
          <label for="name-input">Nome completo:</label>
          <input type="text" id="name-input" v-model="userName"/>
        </div>
        <div class="input-area">
          <label for="cpf-input">CPF:</label>
          <input
            type="text"
            v-model="cpf"
            v-mask="'###.###.###-##'"
            maxlength="14"
          />
        </div>
        <button class="form-button" id="submit-button" type="button" @click="formValidation()">
          Cadastrar usuário
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      dataUsers: [],
      cpf: "",
      userName: ""
    };
  },

  methods: {
    formValidation() {
      if (!this.userName) {
        alert('Nome informado não é válido. Por gentileza, verifique e tente novamente!')
      } else if (!this.cpf || this.cpf.length < 14) {
        alert('CPF informado não é válido. Por gentileza, verifique e tente novamente.')
      } else {
        this.postUser()
      }
    },

    postUser() {
      axios
        .post("/api/users", { fullname: this.userName, cpf: this.cpf })
        .then(() => {
          console.log("Usuário cadastrado com sucesso");
        })
        .catch((error) => {
          console.log(error);
        });

      this.$router.push("./");
      this.$root.$refs.A.changeScreen();
    },
  },

  components: {
    Header,
    Navbar
  }
};
</script>

<style scoped>

.form-container {
  width: 60%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

form {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 2rem;
}

.input-area {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.input-area input {
  width: 70%;
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: #f5f5f5;
  transition: 200ms
}

.input-area input:hover {
  background: #afa6a463;
  transition: .2s;
}

.form-button {
  padding: 1rem 2rem;
  background-color: var(--brand-magenta);
  border: none;
  border-radius: 0.5rem;
  color: white;
  font-weight: 700;
  align-self: flex-end;
  margin-top: 1rem;
  cursor: pointer;
  transition: 0.2s;
}

.form-button:hover {
  transition: 0.2s;
  background-color: #f6678d;
}
</style>
