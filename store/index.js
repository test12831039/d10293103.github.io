export const state = () => {
    return {
        name: '???',
        count: 0
    }
}

export const mutations = {
    increment(state){
        state.count++;
    },
    decrement(state){
        state.count--;
    },
    setName(state,newName){
        state.name = newName;
    }
}