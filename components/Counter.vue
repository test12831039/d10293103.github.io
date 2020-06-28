<template>
    <div>
        <v-btn @click="dec()">-</v-btn>
        {{ count }}
        <v-btn @click="inc()">+</v-btn>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    computed: {
        count(){
            return this.$store.state.count;
        }
    },
    methods: {
        inc(){
            this.$store.commit('INCREMENT');
        },
        dec(){
            this.$store.commit('DECREMENT');
        }
    }
})
</script>