<template>
<div class="list">
    <form @submit.prevent="addContact">
        <input type="text" placeholder="Name" v-model="newContact">
        <button type="submit" class="mx-1">Add contact</button>

        <button @click="sortContacts">Sort</button>
    </form>

    <transition-group name="slide-up" tag="ul" appear>
        <!-- Cannot use index as v-for loop, it break the v-move transition -->
        <li v-for="contact in contacts" :key="contact" @click="removeContact(contact)">
            {{ contact }}
        </li>
    </transition-group>
</div>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const newContact = ref('')
        const contacts = ref([
            'John Doe',
            'Sam Smith',
            'Jane Yal'
        ])

        function addContact() {
            contacts.value.push(newContact.value)
            newContact.value = ''
        }

        function sortContacts() {
            contacts.value.sort()
        }

        function removeContact(contact) {
            contacts.value = contacts.value.filter(c => c !== contact)
        }

        return {
            newContact,
            contacts,
            addContact,
            sortContacts,
            removeContact
        }
    }
}
</script>

<style>
form { min-width: 50%; }

input {
    padding: .5rem 1rem;
}

ul {
    width: 50%;
    margin: 2rem auto;
    list-style: none;
}
ul li {
    font-size: 1.1rem;
    cursor: pointer;
}
</style>