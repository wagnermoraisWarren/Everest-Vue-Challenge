<template>
  <div>
    <Header />
    <Navbar />
    <div class="list-box">
      <router-link to="/register" class="register-button">Cadastrar novo Usuário</router-link>
      <table id="table" class="">
        <tr class="head-tr">
          <th>CPF</th>
          <th>Nome Completo</th>
          <th></th>
        </tr>
  
        <tr v-bind:id="user.id" v-for="user in currentItems" :key="user.id">
  
          <td class="cpf" id="cpf">
            {{ user.cpf }}
          </td>
    
          <td class="name" id="name">
            {{ user.fullname }}
          </td>
          
          <td class="eye-btn">
            <button id="eye-btn">
              <img src="../assets/details-eye.svg" id="eye" alt="ícone olho" />
            </button>
          </td>
        </tr>
      </table>
      <div class="pagination">
        <jw-pagination
          :items="dataUsers"
          :pageSize="5"
          :disableDefaultStyles="true"
          :labels="customLabels"
          @changePage="onChangePage"
          >
        </jw-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

const customLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
};

const listItems = [...Array(1000).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));

export default {
  name: "UsersList",

  data() {
    return {
      dataUsers: [],
      currentItems: [],
      cpf: "",
      listItems,
      customLabels
    }
  },

  methods: {
    onChangePage(currentItems) {
      this.currentItems = currentItems;
    }
  },

  mounted() {
    axios
      .get("http://localhost:8080/api/users")
      .then((response) => {
        this.dataUsers = response.data.users;
        console.log(response);
      })
      .catch((err) => console.log(err));
  },

  components: {
    Header,
    Navbar
  }
};
</script>

<style>
table {
  margin: 2rem auto;
  border-collapse: collapse;
  border-bottom: 1px solid #c7c7c7;
  width: 48rem;
}

th {
  text-align: left;
  padding: 1rem 2rem;
  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #c7c7c7;
}

.list-box {
  width: 48rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 3rem;
}

.register-button {
  padding: 1rem 2rem;
  margin: 1rem 2rem;
  align-self: flex-end;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--brand-magenta);
  color: white;
  font-size: .9rem;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  transition: 0.2s;
}

.register-button:hover {
  transition: 0.2s;
  background: #c14545;
}

.eye-btn {
  display: flex;
  justify-content: flex-end;
}

.eye-btn button {
  padding: 0.2rem;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
}

.eye-btn button:hover {
  transition: 0.2s;
  background-color: #ffe5ec;
  border: 1px solid var(--brand-magenta);
}

.eye-btn button img {
  vertical-align: bottom;
}

.hide {
  filter: blur(10px)
}

td {
  padding: 1rem 1.5rem;
}

tr {
  transition: .2s ease-out;
}

tr:hover {
  background-color: #f4f4f4;
}

.head-tr, td {
  user-select: none;
}

.head-tr:hover {
  background-color: transparent;
}

.pagination {
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 1.3rem;
  font-weight: 700;
  font-size: 1.05rem;
}

.pagination li.first,
.pagination li.previous,
.pagination li.next,
.pagination li.last {
  font-size: 1.5rem;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.7);
  transition: all ease .2s;
}

.pagination li.page-number {
  font-size: 1.3rem;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.7);
  padding: 0 1rem;
  transition: all ease .2s;
}

.pagination li:hover {
  color: #000000;
}
</style>
