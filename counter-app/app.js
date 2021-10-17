const app = Vue.createApp({
    data() {
        return {
            count: 10,
            count2: 10,
        }
    },
    computed: {
        getCounterResult() {
            console.log('Result 1 working');
            return this.count > 5 ? "Bigger" : "Smaller";
        },
        getCounterResult2() {
            console.log('Result 2 working');
            return this.count2 > 5 ? "Bigger" : "Smaller";
        }
    },
}).mount('#app');