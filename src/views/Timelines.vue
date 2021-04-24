<template>
<div>
    <img src="@/assets/images/runner.png" alt="runner" class="runner first">
    <img src="@/assets/images/runner.png" alt="runner" class="runner second">
    <img src="@/assets/images/runner.png" alt="runner" class="runner third">
</div>
</template>

<script>
import gsap from 'gsap'

export default {
    mounted() {
        // https://greensock.com/docs/v3/GSAP/Timeline

        const tl = gsap.timeline({ delay: 2, repeat: -1, repeatDelay: 1 })

        tl.to('.first', { duration: 2.5, x: 700, ease: 'power2.inOut' })
            // .to('.second', { duration: 3, x: 700, ease: 'expo.out' }, .5) // Absolute positioning
            // .to('.second', { duration: 3, x: 700, ease: 'expo.out' }, '-=1') // Relative positioning
            .to('.second', { duration: 2, x: 700, ease: 'power2.inOut' }, '<') // Start
            .to('.third', { duration: 3, x: 700, ease: 'power2.inOut' }, '<-.5')
    }
}
</script>

<style scoped>
.runner {
    display: block;
    height: 5em;
    width: 5em;
    margin-top: 1.5em;
}
</style>