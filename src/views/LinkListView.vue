<script setup>
import { useGetData } from "../composables/getData.js";
import ListItem from "../components/ListItem.vue";
import ButtonComp from "../components/ButtonComp.vue";
import Spinner from "../components/Spinner.vue";
import { RouterLink } from "vue-router";

const { data, getData, loading, error } = useGetData();

getData("api/links");
</script>
<template>
    <section>
        <section class="notes-header">
            <h2 class="notes-title">&#9782; Links</h2>
            <p class="notes-count">{{ data?.length }}</p>
        </section>
        <Spinner v-if="loading" />
        <section class="notes-list" v-else>
            <ListItem v-for="link in data" :link="link" />
        </section>
        <RouterLink to="/links/create">
            <ButtonComp icon="plus-icon" />
        </RouterLink>
    </section>
</template>

<style scoped></style>
