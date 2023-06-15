<script setup>
import { defineAsyncComponent } from "vue";

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
});

const icon = defineAsyncComponent(() => import(`../assets/svg/${props.name}.svg`));
</script>
<template>
    <component :is="icon" class="fill-current" />
</template>

<style scoped>
@import "../assets/style.css";
.fill-current {
    fill: var(--color-main);
}
</style>
