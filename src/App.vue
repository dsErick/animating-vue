<template>
<div id="nav">
    <router-link to="/modal">Modal - Transitions</router-link> |
    <router-link to="/list">List - Group transitions</router-link> |
    <router-link to="/drawer">Drawer - Hooks</router-link> |
    <router-link to="/cards">Cards - Hooks</router-link> |
    <router-link to="/simple">Simple - Intro to GSAP</router-link> |
    <router-link to="/stagger">Stagger - Intro to GSAP</router-link>
</div>

<router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'slide-fade'" mode="out-in">
        <component :is="Component" />
    </transition>
</router-view>
</template>

<style>
@import 'assets/css/transitions.css';

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

.mx-1 {
    margin-left: 1rem;
    margin-right: 1rem;
}
</style>
