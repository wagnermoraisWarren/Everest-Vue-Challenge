<template>
    <div class="loading-box">
        <div class="loading"></div>
        <p>Carregando Informações de Usuário...</p>
    </div>
</template>

<script>
    export default {
        name: 'LoadingReq'
    }
</script>

<style scoped>
    .loading-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        background: #c4bebe5b;
    }

    p {
        font-size: 2rem;
        font-weight: 700;
        color: var(--main-dark-opacity-80);
        margin-top: 2rem;
    }

    .loading {
        border: 30px solid #f3f3f3;
        border-top: 30px solid var(--primary-light-red);
        border-radius: 50%;
        width: 13rem;
        height: 13rem;
        animation: spin 800ms linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>