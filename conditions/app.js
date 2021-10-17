const app = Vue.createApp({
    data() {
        return {
            showContainer: false,
            counter: 0,
        }
    },
    computed: {
        counterBoxClass() {
            return { "bg-success": this.counter > 0, "bg-warning": this.counter < 0 };
        },
    },
}).mount('#app');