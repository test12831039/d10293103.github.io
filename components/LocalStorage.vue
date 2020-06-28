<template>
    <div>
        <div class="d-flex">
            <v-text-field v-model="key" label="Key" />
            <div class="ma-2"></div>
            <v-text-field v-model="value" label="Value" />
            <div class="ma-2"></div>
            <v-btn @click="load()">load</v-btn>
            <div class="ma-2"></div>
            <v-btn @click="save()">save</v-btn>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            key: "data1",
            value: ''
        }
    },
    mounted(){
        window.console.log('mounted')
        this.load();
    },
    methods: {
        load(){
            this.value = localStorage.getItem(this.key) ?? ""
        },
        save(){
            localStorage.setItem(this.key, this.value);
        }
    }
})
</script>