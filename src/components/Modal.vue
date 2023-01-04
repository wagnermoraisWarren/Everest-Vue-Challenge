<template>
    <div class="modal">
        <header class="title">
            <h2>Detalhes do Usuário</h2>
            <button>
                <img src="../assets/X-symbol.svg" alt="Close icon">
            </button>
        </header>
        <section class="details">
            <div class="user-details">
                <div class="user-box">
                    <h4>CPF</h4>
                    <p>7843784738</p>
                </div>
                 <div class="user-box">
                    <h4>Nome Completo</h4>
                    <p>Wagner Morais</p>
                </div>  
                <div class="user-box">
                    <h4>Nascimento</h4>
                    <p>19/DEZ/1980</p>
                </div>
            </div>
            <div class="user-details">
                <div class="user-box">
                    <h4>Celular</h4>
                    <p>(XX) XXXXX-XXXX</p>
                </div>
                 <div class="user-box">
                    <h4>Contato</h4>
                    <p>WhatsApp</p>
                </div>  
                <div class="user-box">
                    <h4>E-mail</h4>
                    <p>fulano@gmail.com</p>
                </div>
            </div>           
        </section>
    </div>
</template>

<script>
export default {
    name: "Modal",

    data() {
        return {

        }
    },

    methods: {

    },
};


</script>

<style scoped>
    .modal {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2rem 2rem;
        border-radius: 5px;
    }
    
    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem 0;
        font-size: 1rem;
        color: rgba(0, 0, 0, 0.8);
    }

    .title img {
        width: 2rem;
    }

    .title button {
        position: absolute;
        right: 5rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .details {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: left;
        gap: 10rem;
        margin: 5rem 2rem;
        padding: 5rem;
        border: 2px dashed #dfdad8;
    }

    .user-details h4 {
        color: rgba(0, 0, 0, 0.7);
        font-size: 1.15rem;
        font-weight: 500;
    }

    .user-details p {
        font-size: 1.10rem;
        font-weight: 700;
    }

    .user-box {
        margin: 2rem 0;
    }

    .user-box:last-child {
        margin: 0;
    }
</style>