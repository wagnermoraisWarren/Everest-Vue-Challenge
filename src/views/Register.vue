<template>
  <div>
    <Header />
    <Navbar />
    <section class="form-container">
      <div class="register-box">
        <h2>Dados de Contato</h2>
        <p>Cadastre-se na melhor corretora do Brasil e torne-se mais um <span>Warrior</span> na nossa jornada de investimentos!</p>
      </div>
      <form id="form">
        <div class="name-area">
          <label for="name-input">Nome completo:</label>
          <input type="text" id="name-input" v-model="userData.userName"/>
        </div>
        <div class="email-area">
          <div class="email-box">
            <label for="email">E-mail</label>
            <input type="text" v-model="userData.email">  
            <img src="@/assets/email.svg" alt="Icon">
          </div>
          <div class="confirm-email">
            <label for="email">Confirmar E-mail</label>
            <input type="text" v-model="userData.confirmEmail">
            <img src="@/assets/email.svg" alt="Icon">
          </div>
        </div>
        <div class="contact-area">
          <div class="cpf-box">
            <label for="cpf-input">CPF:</label>
            <input
              type="text"
              v-model="userData.cpf"
              v-mask="'###.###.###-##'"
              maxlength="14"
            >
          </div>
          <div class="celphone-box">
            <label for="celphone">Celular</label>
            <input 
              type="text"
              v-model="userData.phone"
              v-mask="'(##) #.####-####'"
            >
          </div>
        </div>
        <div class="bday-area">
          <label for="date">Data de Nascimento</label>
          <input
          type="text"
          id="date"
          v-model="userData.birthDate"
          v-mask="'##/##/####'"
          >
          <img src="@/assets/calendar.svg" alt="Icon">
        </div>
        <div class="last-contact-area">
          <p>
            Seu cadastro está quase finalizado! Agora, por onde você gostaria que entrassemos em contato para trazer novidades sobre seus investimentos?
          </p>
        </div>

        <div class="checkbox-area">
          <input type="checkbox" name="checkEmail" v-model="userData.isEmailSms">
          <label for="checkEmail"> Email e SMS </label>
        </div>

        <div class="checkbox-area">
          <input type="checkbox" name="checkWhats" v-model="userData.isWhatsapp">
          <label for="checkWhats"> WhatsApp </label>
        </div>

        <div class="button-box">
          <button class="form-button" id="submit-button" type="submit" @click="formValidation()">
            Cadastrar usuário
          </button>

          <button class="back-button" id="back-button" @click="backButton()">
            Voltar
          </button>
        </div>
      </form>
    </section>
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
      userData: {
        userName: "",
        email: "",
        confirmEmail: "",
        cpf: "",
        phone: "",
        birthDate: "",
        isEmailSms: false,
        isWhatsapp: false
      }
    }
  },

  methods: {
    formValidation() {
      if (!this.userData.userName) {
        alert('Nome informado não é válido. Por gentileza, verifique e tente novamente!')
      } else if (!this.userData.cpf || this.userData.cpf.length < 14) {
        alert('CPF informado não é válido. Por gentileza, verifique e tente novamente.')
      } else {
        this.postUser()
      }
    },

    postUser() {
      axios
        .post("/api/users", this.userData)
        .then(() => {
          console.log("Usuário cadastrado com sucesso");
        })
        .catch((error) => {
          console.log(error);
        });

      this.$router.push("./");
    },

    backButton() {
      this.$router.push("./");
    }
  },

  components: {
    Header,
    Navbar
  }
};
</script>

<style scoped>
.register-box {
  margin: 3.5rem 0 1rem 0;
  max-width: 800px;
}

.register-box h2 {
  color: rgba(0, 0, 0, 0.8);
}

.register-box p {
  font-size: 1.1rem;
}

span {
  color: var(--brand-magenta);
  font-weight: 700;
}

.form-container {
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  gap: 1rem;
  margin-top: 2rem;
}

.name-area {
  width: 100%;
  position: relative;
}

.email-area,
.contact-area {
  display: flex;
  gap: 2rem;
  width: 100%;
}

.bday-area {
  width: 48%;
  position: relative;
}

.email-box,
.confirm-email,
.cpf-box,
.celphone-box {
  position: relative;
  width: 100%;
}

.name-area input,
.cpf-box input,
.celphone-box input {
  width: 100%;
  padding: 0.5rem;
  margin: 10px;
  font-size: 1.1rem;
  line-height: 6ex;
  border: 3px solid rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  outline: none;
  background-color: #f5f5f5;
  position: relative;
}

.email-box input,
.confirm-email input,
.bday-area input {
  width: 100%;
  padding: 0.5rem 2.5rem;
  margin: 10px;
  line-height: 6ex;
  font-size: 1rem;
  background-color: #f5f5f5;
  border: 3px solid rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  outline: none;
  position: relative;
}

.name-area label,
.email-area label,
.contact-area label,
.bday-area label {
  padding: 0 .35rem;
  top: 0.2ex;
  left: 2em;
  z-index: 1;
  background-color: #f5f5f5;
  font-size: 1.05rem;
  font-weight: 500;
  position: absolute;
}

.bday-area img,
.email-area img {
  position: absolute;
  top: 2rem;
  left: 1.5rem;
}

.last-contact-area {
  max-width: 700px;
  font-size: 1.1rem;
  font-weight: 500;
}

.checkbox-area {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.checkbox-area label {
  font-size: 1.2rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
}

.checkbox-area input {
  width: 1.5rem;
  height: 1.5rem;
}

.button-box {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 1rem auto;
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
  transition: ease-in-out 400ms;
}

.form-button:hover {
  transition: ease-in-out 200ms;
  background-color: #f6678d;
}

.back-button {
  padding: 1rem 2rem;
  background: #f4e5e5;
  border: none;
  border-radius: 0.5rem;
  color: var(--brand-magenta);
  font-weight: 700;
  align-self: flex-end;
  margin-top: 1rem;
  cursor: pointer;
  transition: ease-in-out 400ms;
}

.back-button:hover {
  background: #dbcaca;
  transition: ease-in-out 400ms;
}
</style>