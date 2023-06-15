<script setup>
import { RouterLink } from "vue-router";
defineProps(["link"]);

let getTime = (note) => {
    return new Date(note.created).toLocaleDateString();
};
</script>
<template>
    <RouterLink :to="`/links/${link.id}`">
        <div class="notes-list-item">
            <h2>{{ link.title }}</h2>
            <p>{{ getTime(link) }}</p>
        </div>
    </RouterLink>
</template>

<style scoped>
.notes-list-item {
    display: flex;
    justify-content: space-between;
}
</style>
