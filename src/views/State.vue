<template>
<div class="container">
    <div :style="{ width: `${tweenedNumber}px`, height: `${tweenedNumber / 3}px` }" class="bar">
        <span>{{ tweenedNumber.toFixed(0) }}</span>
    </div>
    <div class="bar">
        <span>Teste</span>
    </div>
</div>

<div class="other-container"></div>
</template>

<script>
import { ref, watch } from 'vue'
import gsap from 'gsap'

export default {
    setup() {
        const number = ref(0)
        const tweenedNumber = ref(0)

        function randomNumber() {
            number.value = Math.floor(Math.random() * (window.innerWidth - 0))
        }

        setInterval(randomNumber, 2000)

        watch(number, newVal => {
            gsap.to(tweenedNumber, {
                duration: 1.5,
                ease: 'power2.inOut',
                value: newVal
            })
        })

        return {
            tweenedNumber
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
}
.bar {
    padding: 5px;
    background-color: #2c3e50;
    border: 1px #16c0b0 solid;
    min-width: 1em;
    min-height: 1em;
    display: inline-block;
}
.bar:last-of-type {
    margin-left: 1rem;
    flex: 1 0;
}
.bar span {
    color: white;
}

.other-container {
    height: 20rem;
    margin-top: 1rem;
    background-color: #2c3e50;
    border: 1px #16c0b0 solid;
}
</style>
