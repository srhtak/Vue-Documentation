const app = Vue.createApp({
    data() {
        return {
            fullName: 'data',
        }
    },
    methods: {
        uptadeValue(event) {
            console.log(event.target.value);
            this.fullName = event.target.value;
        }
    },
}).mount('#app');




