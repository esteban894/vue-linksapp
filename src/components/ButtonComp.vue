<script setup>
import { RouterLink } from "vue-router";
import SvgComp from "../components/SvgComp.vue";

defineProps({
    icon: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: false,
    },
});
</script>
<template>
    <div class="floating-button" :class="position ? position : ''">
        <SvgComp :name="icon" />
    </div>
</template>

<style scoped>
@import "../assets/style.css";
.floating-button {
    font-size: 48px;
    position: absolute;
    bottom: 24px;
    right: 16px;
    background: var(--color-main);
    border: none;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
    transition: all 1s ease;
}
.left {
    position: absolute;
    bottom: 24px;
    left: 16px;
}

.floating-button:hover {
    transform: translateY(-7px);
    box-shadow: 0 0 10px var(--color-main);
}

.floating-button > svg {
    fill: var(--color-bg);
}
</style>
