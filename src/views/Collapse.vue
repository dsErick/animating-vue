<template>
<div class="home">
    <button @click="toggleForm">Open</button>

    <transition @beforeEnter="beforeEnter" @enter="enter" @leave="leave" :css="false">
        <form v-show="isOpen" @submit.prevent>
            <div>
                <label for="">Nome</label>
                <input type="text">
            </div>
            <div>
                <label for="">Sobrenome</label>
                <input type="text">
            </div>
            <div>
                <label for="">Email</label>
                <input type="text">
            </div>
            <div>
                <label for="">Numero</label>
                <input type="text">
            </div>
            <button @click="toggleForm">Submit</button>
        </form>
    </transition>

    <div class="container"></div>
</div>
</template>

<script>
import { ref } from 'vue'
import gsap from 'gsap'

export default {
    name: 'Home',
    setup() {
        const isOpen = ref(false)

        function toggleForm() {
            isOpen.value = !isOpen.value
        }

        const options = {
            duration: .195,
            ease: 'ease.power3',
        }

        function beforeEnter(el) {
            el.style.height = 0
            el.style.overflow = 'hidden'
        }
        function enter(el, done) {

            // gsap.from(el, { // If v-show is used it needs to be gsap.to, instead of gsap.from
            //     ...options,
            //     height: 0,
            //     onComplete: done,
            // })
            gsap.to(el, {
                ...options,
                height: el.scrollHeight,
                onComplete: done,
            })
        }
        function leave(el, done) {
            gsap.to(el, {
                ...options,
                height: 0,
                onComplete: done,
            })
        }

        return {
            isOpen,
            toggleForm,
            beforeEnter,
            enter,
            leave,
        }
    },
}
</script>

<style>
.container {
    height: 20rem;
    margin-top: 1rem;
    background-color: #2c3e50;
    border: 1px #16c0b0 solid;
}
/* form {
    overflow: hidden;
} */
</style>
