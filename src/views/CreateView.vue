<script setup>
import { RouterLink, useRouter } from "vue-router";
import { ref } from "vue";

import { useSendData } from "../composables/sendData";
import SvgComp from "../components/SvgComp.vue";

const title = ref(null);
const url = ref(null);
const description = ref(null);
const errorMessage = ref(null);

const { sendData } = useSendData();
const router = useRouter();

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
    sendData("api/links/create/", dataToSend);
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
            <RouterLink to="/">
                <SvgComp name="arrow-left" />
            </RouterLink>
            <div class="notes-title">
                <h2>Crear un Link</h2>
            </div>
        </header>
        <section class="form-box">
            <form method="POST" @submit.prevent="validateData">
                <div class="input-box">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        autocomplete="off"
                        v-model="title" />
                    <div class="input-group">
                        <label for="link">https://</label>
                        <input
                            type="text"
                            id="link"
                            placeholder="Link"
                            autocomplete="off"
                            v-model="url" />
                    </div>
                    <textarea
                        name="description"
                        placeholder="Descripción"
                        autocomplete="off"
                        maxlength="200"
                        v-model="description"></textarea>
                    <button type="submit" class="btn">Agregar</button>
                </div>
            </form>
        </section>
        <section v-if="errorMessage" class="notification">
            <p>{{ errorMessage }}</p>
            <span class="notification__progress"></span>
        </section>
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
