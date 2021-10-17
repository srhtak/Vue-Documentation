const app = Vue.createApp({
    data() {
        return {
            title: 'title',
            itemList: [],
        }
    },
    beforeCreate() {
        console.log('before created working')
    },
    created() {
        console.log('created working')
        setTimeout(() => {
            this.itemList = [1, 2, 3, 4, 5];
        }, 2000);
    },
    beforeMount() {
        console.log('before mount working')
    },
    mounted() {
        console.log('mounted working')
    },
    beforeUpdate() {
        console.log('before uptade working')
    },
    updated() {
        console.log('updated working')
    },
    beforeUnmount() {
        console.log('before unmount working')
    },
    unmounted() {
        console.log('unmounted working')
    },
});

app.mount('#app');

setTimeout(() => {
    app.unmount();
}, 5000);