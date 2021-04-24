<template>
<div>
    <transition-group
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        :css="false"
    >
        <div class="card" v-for="card in cards" :key="card.id">
            <p>{{ card.title }}</p>
        </div>
    </transition-group>
</div>
</template>

<script>
import Velocity from "velocity-animate";
export default {
    data() {
        return {
            cards: [
                { title: "Could contain anything", id: 123 },
                { title: "Endless possibilities", id: 456 },
                { title: "You can't image how many", id: 789 },
            ],
        };
    },
    methods: {
        beforeEnter(el) {
            el.style.opacity = 0;
            el.style.width = "0em";
        },
        enter(el, done) {
            Velocity(
                el,
                { opacity: 1, minWidth: "12.5em", rotateZ: "3deg" },
                { duration: 1000, easing: [70, 8], delay: 500, complete: done }
            );
        },
    },
};
</script>

<style scoped>
.card {
    height: 4em;
    min-width: 12.5em;
    border-radius: 1%;
    background-color: #e0e0e0;
    box-shadow: 0.08em 0.03em 0.4em #ababab;
    padding-top: 1em;
}
</style>