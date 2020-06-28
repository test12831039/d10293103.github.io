<template>
  <v-layout>
    <v-flex class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        "It's hard to make things easy"
        <footer>
          <small>
            <em>&mdash;Raphael Marques</em>
          </small>
          <div>
            <v-btn @click="inc(-1)">-</v-btn>
            {{count}}
            <v-btn @click="inc(1)">+</v-btn>
          </div>
        </footer>
      </blockquote>
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