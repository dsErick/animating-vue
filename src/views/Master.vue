<template>
<div>
    <div id="container">
        <img src="@/assets/images/paws.png" alt="fox-paws" class="paws first">
        <img src="@/assets/images/paws.png" alt="fox-paws" class="paws second">
        <img src="@/assets/images/paws.png" alt="fox-paws" class="paws third">
        <img src="@/assets/images/paws.png" alt="fox-paws" class="paws fourth">

        <img src="@/assets/images/fox.png" alt="fox" id="fox">
    </div>

    <button @click.prevent="play">Play</button>
</div>
</template>

<script>
import gsap from 'gsap'

export default {
    setup() {
        function pawsTL() {
            const tl = gsap.timeline({ defaults: { duration: .5, ease: 'bounce.out' }})
    
            tl.to('.first', { opacity: 1, scale: 1 })
                .to('.second', { opacity: 1, scale: 1 }, '<.3')
                .to('.third', { opacity: 1, scale: 1 }, '<.3')
                .to('.fourth', { opacity: 1, scale: 1 }, '<.3')

            return tl
        }

        function foxTL() {
            const tl = gsap.timeline({})

            tl.to('#fox', {
                duration: .4,
                opacity: 1,
                scale: 1,
                filter: 'blur(0)',
                ease: 'slow'
            })

            return tl
        }

        const masterTL = gsap.timeline()

        function play() {
            masterTL.add(pawsTL())
                .add(foxTL())
                .play()
        }

        return {
            play,
        }
    }
}
</script>

<style scoped>
#container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 5em;
}
#fox {
    height: 8em;
    width: 8em;
    opacity: 0;
    filter: blur(2px);
}
.paws {
    transform: scale(0);
    width: 2.5em;
    height: 2.5em;
    margin-top: 50px;
    margin-right: 0.8em;
    opacity: 0;
}
button {
    margin-top: 5em;
}
</style>
