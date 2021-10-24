const app = Vue.createApp({
    data() {
        return {};
    },
});

app.component("counter-item", {
    data() {
        return {
            counter: 0,
        }
    },
    /*html*/
    template:
        `
    <div class="container-sm">
    <h3 class="mb-2 text-center">{{ counter }}</h3>
    <button @click="counter--" class="red sm">-</button>
    <button @click="counter++" class="green sm">+</button>
    </div>
        `
})
app.mount('#app');