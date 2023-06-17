<script setup>
import { stringifyExpression } from "@vue/compiler-core";
import { defineAsyncComponent } from "vue";

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    height: {
        type: String,
        required: false,
    },
});

const icon = defineAsyncComponent(() => import(`../assets/svg/${props.name}.svg`));
</script>
<template :height="heigth">
    <component :is="icon" class="fill-current" />
</template>

<style scoped>
@import "../assets/style.css";
.fill-current {
    fill: var(--color-main);
}
</style>
