<template>
<div class="home">
    <h1>This is the Modal Page</h1>
    
    <button @click="toggleModal">Open</button>

    <transition name="fade">
        <div v-if="isOpen" class="modal">
            <button @click="toggleModal">Close</button>
        </div>
    </transition>
</div>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'Home',
    setup() {
        const isOpen = ref(false)

        function toggleModal() {
            isOpen.value = !isOpen.value
        }

        return {
            isOpen,
            toggleModal
        }
    },
}
</script>

<style>
.modal {
    width: 256px;
    height: 256px;
    margin: 1rem auto;
    background-color: grey;

    display: grid;
    place-items: center;
}
</style>
