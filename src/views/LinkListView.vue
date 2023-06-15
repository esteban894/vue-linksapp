<script setup>
import { useGetData } from "../composables/getData.js";
import ListItem from "../components/ListItem.vue";

const { data, getData, loading, error } = useGetData();

getData("api/links");
</script>
<template>
    <section class="notes">
        <section class="notes-header">
            <h2 class="notes-title">&#9782; Links</h2>
            <p class="notes-count">{{ data?.length }}</p>
        </section>
        <section class="notes-list">
            <ListItem v-for="link in data" :link="link" />
        </section>
    </section>
</template>

<style scoped></style>
