<template>
<div>
    <button @click="isOpen = !isOpen">My Profile</button>

    <!-- :css="false" Tells vue: Don't handle transition classes.
    We're relying on javascript hooks intead -->
    <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        :css="false"
    >
        <div v-if="isOpen" class="drawer">
            <img src="@/assets/images/avatar.png" alt="avatar" />
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </transition>
</div>
</template>

<script>
import { ref } from "vue";
import Velocity from 'velocity-animate'

export default {
    setup() {
        const isOpen = ref(false);

        function beforeEnter(el) {
            el.style.opacity = 0
            el.style.width = '0em'
        }

        function enter(el, done) {
            Velocity(
                el, // Element to animate
                { opacity: 1, width: '12em' }, // Style it should enter to
                { duration: 1000, easing: 'easeOutCubic', complete: done } // How it should animate
            )
        }

        function leave(el, done) {
            Velocity(
                el,
                { opacity: 0, width: '0em' },
                {
                    duration: 500,
                    easing: [60, 10], // Spring physics [tension, friction]
                    complete: done
                }
            )
        }

        return {
            isOpen,
            beforeEnter,
            enter,
            leave,
        };
    },
};
</script>

<style scoped>
img {
    height: 2.5em;
    width: 2.5em;
    border-radius: 50%;
}

.drawer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 12em;
    height: 20em;
    margin: 2rem auto;
    border-radius: 1%;
    background-color: #e0e0e0;
    box-shadow: 0.08em 0.03em 0.4em #ababab;
    padding-top: 0.7em;
}
.drawer div {
    height: 3.5em;
    width: 95%;
    margin-top: 0.6em;
    background-color: #f0f0f0;
    border: 0.02em solid #ababab;
    border-radius: 1%;
}
</style>
