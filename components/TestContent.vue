<template>
    <div>
        <h6>Todo.json</h6>
        <ul>
            <li v-for="item in list" :key="item.id">
                <span>{{ item.text }}</span>
                <span>{{ item.done ? " [DONE]" : "" }}</span>
            </li>
        </ul>
        <button @click="getData">Load</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            list: []
        }
    },
    methods:{
        async getData ()  {
            const data = await this.$content('todo').fetch();
            this.list = data.list;
        }
    }
}
</script>
