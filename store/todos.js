export const state = () => {
    return {
        list: [
            { text: "Adriano", done: false },
            { text: "Bruno", done: true },
            { text: "Caio", done: false },
        ]
    }
}

export const mutations = {
    add(state, text){
        state.list.push({
            text,
            done: false
        })
    },
    remove(state, {todo}){
        state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle(state, todo){
        todo.done = !todo.done
    }
}