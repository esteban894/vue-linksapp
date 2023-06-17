<script setup>
import { RouterLink } from "vue-router";
import SvgComp from "../components/SvgComp.vue";
</script>
<template>
    <RouterLink to="/links/create" class="floating-button">
        <SvgComp name="plus-icon" />
    </RouterLink>
</template>

<style scoped>
.floating-button {
    transition: transform 0.7s ease;
}

.floating-button:hover {
    transform: rotate(180deg);
}
</style>
