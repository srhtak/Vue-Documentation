export default {
    state: {
        contactName: "Civan",
        contactAddress: "Germany",
    },
    mutations: {
        setName(state, name) {
            state.contactName = name;
        }
    },
    getters: {
        _contactName: state => state.contactName
    }
}