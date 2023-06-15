<script setup>
import { useGetData } from "../composables/getData.js";
import { RouterLink, useRoute } from "vue-router";
import SvgComp from "../components/SvgComp.vue";

const route = useRoute();

const { data, getData, loading, error } = useGetData();
getData(`/api/links/${route.params.id}`);
</script>

<template>
    <section class="note">
        <section class="note-header">
            <RouterLink to="/">
                <SvgComp name="arrow-left" />
            </RouterLink>
            <div class="note-title">
                <h3>
                    <a :href="data?.link" target="_blank">{{ data?.title }}</a>
                </h3>
            </div>
        </section>
        <section class="content">
            <p>{{ data?.description }}</p>
        </section>
    </section>
</template>

<style scoped>
@import "../assets/style.css";
.content {
    padding: 15px;
    height: 70vh;
    overflow-y: auto;
    scrollbar-width: none; /* Firefox */
}

.content::-webkit-scrollbar {
    width: 20px;
}
.content::-webkit-scrollbar-track {
    background-color: transparent;
}
.content::-webkit-scrollbar-thumb {
    background-color: var(--color-text);
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
}
.content::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
}

.note-title {
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>
