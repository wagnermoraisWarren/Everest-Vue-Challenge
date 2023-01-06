<template>
  <div class="container">
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
        <button id="eye-btn" @click="isModal = true">
          <img src="../assets/details-eye.svg" alt="ícone olho" class="display-none" id="closed-eye"/>
        </button>
      </td>

      <Modal v-show="isModal" @onLeftButtonClick="isModal = false" nome = "Teste" />
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
</template>

<script>
import axios from "axios";
import Loading from "@/components/Loading.vue";
import Modal from "@/components/Modal.vue";

const customLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
};

const exampleItems = [...Array(1000).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));

export default {
  name: "UsersList",

  data() {
    return {
      dataUsers: [],
      currentItems: [],
      cpf: "",
      exampleItems,
      customLabels,
      isModal: false
    }
  },

  emits: ["onLeftButtonClick", "onRightButtonClick"],

  methods: {
    onLeftButtonClick() {
      this.$emit("onLeftButtonClick");
    },

    onChangePage(currentItems) {
    this.currentItems = currentItems;
    },
  },

    showModal() {
      
    },

  components: {
    Modal,
    Loading
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
};
</script>

<style scoped>
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