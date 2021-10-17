const app = Vue.createApp({
    data() {
        return {
            search: '',
            itemList: ['new', 'new2', 'new3'],
        }
    },
    methods: {
        searchList() {
            // this.filteredList = this.itemList.filter(i => i.includes(this.search));

        },
    },
    computed: {
        filteredList() {
            return this.filteredList = this.itemList.filter(i => i.includes(this.search));
        }
    },
}).mount('#app');