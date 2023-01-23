<template>
    <div class="modal">
        <header class="title">
            <h2>Detalhes do Usuário</h2>
            <button>
                <img src="../assets/X-symbol.svg" alt="Close icon" @click="closeModal()">
            </button>
        </header>
        <section class="details">
            <div class="user-details">
                <div class="user-box">
                    <h4>CPF</h4>
                    <p> {{ user.cpf }} </p>
                </div>
                 <div class="user-box">
                    <h4>Nome Completo</h4>
                    <p> {{ user.userName }}</p>
                </div>  
                <div class="user-box">
                    <h4>Nascimento</h4>
                    <p> {{ user.birthDate }} </p>
                </div>
            </div>
            <div class="user-details">
                <div class="user-box">
                    <h4>Celular</h4>
                    <p> {{ user.phone}} </p>
                </div>
                 <div class="user-box">
                    <h4>Contato</h4>
                    <p v-if="user.isEmailSms">Email e SMS</p>
                    <p v-if="user.isWhatsapp">WhatsApp</p>
                </div>  
                <div class="user-box">
                    <h4>E-mail</h4>
                    <p> {{user.email}} </p>
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
            dataUsers: [],
            cpf: "",
        }
    },

    props: {
        user: {
            type: "",
            require: true
        }
    },

    methods: {
        closeModal() {
            this.$emit("closeModal");
        },
  },
};
</script>

<style scoped>
    .modal {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 90%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #eff0f3;
        box-shadow: 0px 0px 1px 1100px rgba(0, 0, 0, 0.239);
        border-radius: 5px;
    }
    
    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 5rem;
        font-size: 1rem;
        color: rgba(0, 0, 0, 0.8);
    }

    .title img {
        width: 1.2rem;
        transition: 200ms;
    }

    .title img:hover {
        width: 1.6rem;
        transition: 200ms;
    }

    .title button {
        position: absolute;
        right: 3rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .details {
        display: flex;
        text-align: left;
        gap: 2rem;
        margin: 0 2rem;
        padding: 2rem;
        border: 2px dashed #b7a49c;
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
