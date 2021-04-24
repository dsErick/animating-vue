<template>
<div id="nav">
    <router-link to="/modal">Modal</router-link> |
    <router-link to="/about">About</router-link>
</div>

<router-view v-slot="{ Component }">
    <transition name="slide-fade" mode="out-in">
        <component :is="Component" />
    </transition>
</router-view>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

button {
    padding: 0.5rem 1.25rem;
    background: linear-gradient(45deg, #42b983, #37d38d);
    color: white;
    font-size: 1.05rem;
    font-weight: 500;
    cursor: pointer;
    border: none;
    border-radius: 0.25rem;

    transition: transform 195ms ease-in;
}

button:hover {
    transform: scale(1.01);
}

/*** TRANSITIONS ***/
/* Fade */
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 235ms ease-out;
}

/* Slide fade */
.slide-fade-enter-from {
    opacity: 0;
    transform: translateX(-10%);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition-property: opacity transform;
    transition-duration: 235ms;
    transition-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
}

.slide-fade-leave-to {
    opacity: 0;
    transform: translateX(10%);
}
</style>
