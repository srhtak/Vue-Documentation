const app = Vue.createApp({
    data() {
        return {
            showBorder: false,
            showBg: false,
            boxClass: "border red",
            bgColor: 'cyan',
        }
    },
    computed: {
        boxClasses() {
            return { border: this.showBorder, red: this.showBg }
        }
    },
}).mount('#app');