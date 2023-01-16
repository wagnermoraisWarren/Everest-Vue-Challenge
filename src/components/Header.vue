<template>
  <header>
    <h1>CADASTRO DE USUÁRIO</h1>
    <button>
      <img src="../assets/arrow-left.svg" alt="ícone voltar" />
    </button>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  background-color: var(--brand-magenta);
  display: flex;
  height: 2.5rem;
  align-items: center;
}

h1 {
  color: white;
  font-size: .8rem;
  margin: 0 auto;
}

button {
  position: absolute;
  left: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

button img {
  width: 80%;
}
</style>
