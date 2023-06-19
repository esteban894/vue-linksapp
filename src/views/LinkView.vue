<script setup>
import { useGetData } from "../composables/getData.js";
import { RouterLink, useRoute, useRouter } from "vue-router";
import SvgComp from "../components/SvgComp.vue";
import ButtonComp from "../components/ButtonComp.vue";
import { useDeleteData } from "../composables/deleteData";

const route = useRoute();
const router = useRouter();

const { data, getData, loading, error } = useGetData();
getData(`/api/links/${route.params.id}`);

const { deleteLoading, deleteData } = useDeleteData();

const deleteLink = () => {
    deleteData(`/api/links/${route.params.id}/delete/`);
    router.push("/");
};
</script>

<template>
    <div class="note">
        <section class="notes-header">
            <RouterLink to="/">
                <SvgComp name="arrow-left" />
            </RouterLink>
            <div class="notes-title">
                <h3>
                    <a :href="data?.link" target="_blank">{{ data?.title }}</a>
                </h3>
            </div>
        </section>
        <section class="content">
            <p>{{ data?.description }}</p>
        </section>
        <section>
            <ButtonComp icon="delete-icon" position="left" @click="deleteLink" />
        </section>
        <section>
            <ButtonComp icon="edit-icon" @click="router.push(`/links/${route.params.id}/update`)" />
        </section>
    </div>
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

.notes-title {
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>
