<template>
  <div class="form-container">
    <form id="form" action="">
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
      <div class="input-area">
        <label for="phone">Celular:</label>
        <input 
          type="text"
          v-mask="'(##) #.####-####'"
          v-model="phone"
          maxlength="16"
          >
      </div>
      <div class="input-area">
        <label for="email">E-mail:</label>
        <input 
          type="email"
          id="email"
          v-model="email"
        >
      </div>
      <div class="input-area">
        <label for="confirmEmail">Confirmar E-mail:</label>
        <input 
          type="email"
          id="confirmEmail"
          v-model="confirmEmail"
        >
      </div>
      <div class="input-area">
        <label for="birthDate">Data de Nascimento:</label>
        <input type="date" id="birthDate" v-model="birthDate">
      </div>
      <!-- <div class="checkbox-area">
        <label for="checkbox">Deseja receber contato por:</label>
        <div class="box-area" v-for="contacts in contact" :key="contact">
          <input type="checkbox" name="checkbox" id="sms" v-model="contact">
          <span>SMS</span>
          <input type="checkbox" name="checkbox" id="whatsapp" v-model="contact">
          <span>WhatsApp</span>
          <input type="checkbox" name="checkbox" id="email" v-model="contact">
          <span>E-mail</span>
          <input type="checkbox" name="checkbox" id="contact" v-model="contact">
          <span>Não desejo receber contato</span>
        </div>
      </div> -->
      <div class="contact-area">
        <label for="contact">Deseja receber novidades por:</label>
        <select name="contactM" id="contact" v-model="contact">
          <option value="">Selecione a opção...</option>
          <option value="WhatsApp">WhatsApp</option>
          <option value="E-mail">E-mail</option>
          <option value="SMS">SMS</option>
        </select>
      </div>
      <button class="form-button" id="submit-button" type="button" @click="formValidation()">
        Cadastrar usuário
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      dataUsers: [],
      cpf: "",
      userName: "",
      phone: "",
      email: "",
      confirmEmail: "",
      birthDate: "",
      contact: ""
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
        .post("/api/users", { fullname: this.userName, cpf: this.cpf, phone: this.phone, email: this.email, birthDate: this.birthDate, contact: this.contact })
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
  width: 90%;
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
  background-color: #8b848460;
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
  margin: 2rem 0;
  cursor: pointer;
  transition: 0.2s;
}

.form-button:hover {
  transition: 0.2s;
  background-color: #f6678d;
}

.contact-area select {
  margin: 0 1rem;
  padding: .25rem .50rem;
  font-size: .85rem;
  outline: none;
  border: 1px solid #663e3e;
  border-radius: 3px;
 }
/*.checkbox-area {
  display: flex;  
  align-items: center;
}

.box-area {
  display: flex;
  gap: .85rem;
  width: 100%;
}

.box-area span {
  display: flex;
  align-items: center;
}*/
</style>
