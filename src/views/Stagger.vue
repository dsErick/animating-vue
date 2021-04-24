<template>
<div id="container">
    <div v-for="card in cards" :key="card.id" class="card"></div>
</div>
</template>

<script>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

export default {
    setup() {
        const cards = ref([
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
        ])

        onMounted(() => {
            gsap.from('.card', {
                duration: .5,
                opacity: 0,
                scale: 0,
                y: 128,
                ease: 'power3',
                // stagger: .1,
                stagger: {
                    each: .1,
                    from: 'random'
                },
            })
        })

        return {
            cards,
        }
    }
}
</script>

<style scoped>
#container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

.card {
    display: block;
    margin: 0 auto;
    height: 6.5em;
    width: 6.5em;
    border-radius: 1%;
    background-color: #16c0b0;
    box-shadow: 0.08em 0.03em 0.4em #ababab;
}
</style>
