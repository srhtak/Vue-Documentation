const app = Vue.createApp({
    data() {
        return {
            title: 'Vue example',
            content: 'lorem ipsum example...',
            eduflow: {
                url: 'https://eduflow.kablosuzkedi.com',
                target: '_blank',
                title: 'Example title'
            },
            owner: 'food',
            coords: {
                x: 0,
                y: 0,
            }
        };
    },
    methods: {
        changeTitle(data) {
            this.eduflow.title = data;
        },
        uptadeCoords(message, event) {
            console.log(message, event.x, event.y)
            this.coords = {
                x: event.x,
                y: event.y
            }
        }
    }
}).mount('#app')