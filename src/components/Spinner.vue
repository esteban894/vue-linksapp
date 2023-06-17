<script setup></script>

<template>
    <div class="spinner"></div>
    <p>Cargando...</p>
</template>

<style scoped>
@import "../assets/style.css";
.spinner {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid var(--color-text);
    border-top: 4px solid var(--color-main);
    animation: spin 1s infinite linear;
    margin: 20px auto;
}
p {
    text-align: center;
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
