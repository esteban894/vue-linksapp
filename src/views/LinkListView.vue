<script setup>
import { getData } from "../composables/getData";

const { data, error } = getData("http://localhost:8000/api/links/");
</script>
<template>
    <div class="notes">
        <div class="notes-header">
            <h2 class="notes-title">&#9782; Notes</h2>
            <p class="notes-count"></p>
        </div>
        <div class="notes-list">
            <p>Info aqui:{{ data }}</p>
            <p>Error aquí:{{ error }}</p>
        </div>
    </div>
</template>

<style scoped></style>
