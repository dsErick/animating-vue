<template>
<div>
    <div :style="{ width: `${tweenedNumber}px` }" class="bar">
        <span>{{ tweenedNumber.toFixed(0) }}</span>
    </div>
</div>
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
.bar {
    padding: 5px;
    background-color: #2c3e50;
    border: 1px #16c0b0 solid;
    min-width: 20px;
}
.bar span {
    color: white;
}
</style>
