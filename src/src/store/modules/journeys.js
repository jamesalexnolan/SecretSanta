export default {
    namespaced: true,
    state: {
        create: false,
        manage: false,
    },
    getters: {

    },
    mutations: {
        setCreate(state, val) {
            console.log(val)
            state.create = val;
            state.manage = !val;
        },
        setManage(state, val) {
            state.manage = val;
            state.create = !val;
        },
    },
    actions: {
        create(context, val) {
            context.commit('setCreate', val)
        },
        manage(context, val) {
            context.commit('setManage', val)
        }
    },
}
