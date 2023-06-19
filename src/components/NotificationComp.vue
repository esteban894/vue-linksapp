<script setup>
defineProps({
    message: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
});
</script>
<template>
    <section v-if="message" class="notification" :class="type ? type : 'default'">
        <p>{{ message }}</p>
        <span class="notification__progress"></span>
    </section>
</template>

<style scoped>
@import "../assets/style.css";
.notification {
    position: absolute;
    bottom: 0;
    left: 0;
    width: fit-content;
    padding: 20px 15px;
    margin: 7px 10px;
    border-radius: 5px;
    background: var(--color-bg);
    color: var(--color-text);
    transform: translateY(30px);
    opacity: 0;
    visibility: hidden;
    animation: fade-in 4s linear forwards;
}

.default {
    box-shadow: 0 1px 10px var(--color-main);
}
.error {
    box-shadow: 0 1px 10px #e74c3c;
}
.success {
    box-shadow: 0 1px 10px #2ecc71;
}
.notification__progress {
    position: absolute;
    left: 5px;
    bottom: 5px;
    width: calc(100% - 10px);
    height: 3px;
    transform: scaleX(0);
    transform-origin: left;
    background-image: linear-gradient(to right, #539bdb, #3250bf);
    border-radius: inherit;
    animation: load 3s 0.25s linear forwards;
}

@keyframes fade-in {
    5% {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
    90% {
        opacity: 1;
        transform: translateY(0);
    }
}
@keyframes load {
    to {
        transform: scale(1);
    }
}
</style>
