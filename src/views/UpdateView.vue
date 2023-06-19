<script setup>
import { RouterLink, useRouter, useRoute } from "vue-router";
import { onMounted, ref } from "vue";

import { useUpdateData } from "../composables/updateData.js";
import { useGetData } from "../composables/getData";
import SvgComp from "../components/SvgComp.vue";
import NotificationComp from "../components/NotificationComp.vue";
import Spinner from "../components/Spinner.vue";

const title = ref(null);
const url = ref(null);
const description = ref(null);

const errorMessage = ref(null);

// TODO cambiar a updateData
const { updateData } = useUpdateData();
const router = useRouter();
const route = useRoute();

// TODO hacer fetch de datos

const { data, error, loading, getData } = useGetData();

onMounted(() => {
    getData(`/api/links/${route.params.id}`);
});

const validateData = () => {
    if (!validateNotEmpty(title.value, url.value, description.value)) {
        setTimeout(() => {
            errorMessage.value = null;
        }, 4000);
        errorMessage.value = "Verifique que todos los campos del formulario hayan sido completados";
        return;
    }
    title.value = title.value.trim();
    url.value = url.value.trim();
    description.value = description.value.trim();
    url.value = formatUrl(url.value);
    const dataToSend = {
        title: title.value,
        link: url.value,
        description: description.value,
    };
    updateData(`api/links/${route.params.id}/update/`, dataToSend);
    router.push("/");
};

const validateNotEmpty = (...params) => {
    return params.every((param) => param !== null && param !== "");
};

const formatUrl = (url) => {
    const urlRegex = /^(https?:\/\/)/;
    return urlRegex.test(url) ? url : `https://${url}`;
};
</script>
<template>
    <div>
        <header class="notes-header">
            <RouterLink :to="`/links/${route.params.id}`">
                <SvgComp name="arrow-left" />
            </RouterLink>
            <div class="notes-title">
                <h2>Actualizar un Link</h2>
            </div>
        </header>
        <Spinner v-if="loading" />
        <section class="form-box" v-else>
            <form method="POST" @submit.prevent="validateData">
                <div class="input-box">
                    <input
                        type="text"
                        name="name"
                        autocomplete="off"
                        :placeholder="data?.title"
                        v-model="title" />
                    <input
                        type="text"
                        id="link"
                        autocomplete="off"
                        :placeholder="data?.link"
                        v-model="url" />
                    <textarea
                        name="description"
                        autocomplete="off"
                        maxlength="200"
                        :placeholder="data?.description"
                        v-model="description"></textarea>
                    <button type="submit" class="btn">Actualizar</button>
                </div>
            </form>
        </section>
        <NotificationComp :message="errorMessage ? errorMessage : ''" type="error" />
    </div>
</template>

<style scoped>
@import "../assets/style.css";
.notes-title {
    display: flex;
    justify-content: center;
    background: var(--color-bg);
}
.form-box form {
    display: flex;
    flex-direction: column;
}
</style>
