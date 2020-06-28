import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => {
    return {
        name: '???',
        count: 0
    }
}

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState,RootState> = {
    name: state => state.name
}

export const mutations: MutationTree<RootState> = {
    INCREMENT(state){
        state.count++;
    },
    DECREMENT(state){
        state.count--;
    },
    SET_NAME(state, newName:string){
        state.name = newName;
    }
}

export const actions: ActionTree<RootState, RootState> = {
    increment({commit}){
        commit('INCREMENT');
    },
    decrement ({ commit }) {
        commit('DECREMENT');
    }
}