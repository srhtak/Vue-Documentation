const app = Vue.createApp({
    data() {
        return {
            todoList: [
                { id: 2, text: "text 1", completed: false },
                { id: 1, text: "text 2", completed: true },
                { id: 3, text: "text 3", completed: true },
                { id: 4, text: "text 4", completed: false },
                { id: 5, text: "text 5", completed: true },
            ],
        }
    },
    methods: {
        addTodo(event) {
            this.todoList.push({
                id: new Date().getTime(),
                text: event.target.value,
                completed: false,
            });
            event.target.value = "";
        },
        removeItem(todoITem) {
            this.todoList = this.todoList.filter(todo => todo != todoITem);
        }
    },
}).mount('#app');
