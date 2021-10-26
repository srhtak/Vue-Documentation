import { createStore } from "vuex";

const store = createStore({
    state: {
        fullName: "example",
        person: {
            name: "Serhat",
            surname: "ak",
            age: 25,
            address: {},
            password: 12323234,
            tc: 123123,
        },
        theme: "dark",
        permissions: [1, 2, 3, 4, 5],
        userList: [
            "user1",
            "user2",
            "user3",
        ],
        itemList: [
            { id: 1, title: "vuex", type: "Vue.js" },
            { id: 2, title: "redux", type: "react.js" },
            { id: 3, title: "provider", type: "Flutter" }
        ]
    },
    mutations: {
        newItem(state, item) {
            state.itemList.push(item)
        }
    },
    actions: {
        newItem({ commit }, item) {
            console.log("item:>>", item);
            setTimeout(() => {
                commit("newItem", item);
            }, 1000);
        }
    },
    getters: {
        _frontItem: state => state.itemList.filter(i => i.type === "react.js"),
        _activeUser(state) {
            const person = {
                ...state.person
            };
            delete person.password;
            return person;
        }
    },
});


export default store;