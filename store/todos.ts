import { GetterTree, ActionTree, MutationTree } from 'vuex';
import { RootState } from '~/store'

var lastId = 0;
function uuid(){
    lastId++;
    return lastId.toString();
}

interface Todo {
    id: string,
    text: string,
    done: boolean
}

export const state = () => {
    return {
        list: [
            { id: uuid(), text: "Adriano", done: false },
            { id: uuid(), text: "Bruno", done: true },
            { id: uuid(), text: "Caio", done: false },
        ] as Todo[]
    }
}

export type TodosState = ReturnType<typeof state>

export const getters: GetterTree<TodosState,RootState> = {
    listLength: state => state.list.length
}

export const mutations: MutationTree<TodosState> = {
    add(state, text:string){
        state.list.push({
            id: uuid(),
            text,
            done: false
        })
    },
    remove(state, todo: Todo ){
        state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle(state, todo: Todo){
        todo.done = !todo.done
    }
}