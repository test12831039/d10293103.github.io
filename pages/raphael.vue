<template>
  <v-layout>
    <v-flex class="text-center">
      <small>
            <em>&mdash;Raphael Marques</em>
        </small>
        <v-divider class="my-4"></v-divider>
        <Counter />
        <div class="ma-2"></div>
        <Counter />
        <v-divider class="my-4"></v-divider>
        <LocalStorage />
        <v-divider class="my-4"></v-divider>
        <TestContent />
    </v-flex>
  </v-layout>
</template>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    inc(v:number){
      this.count += v;
    }
  }
})
</script>