<template>
    <div class="card-header d-flex">
        <input class="form-control"
               placeholder="Add Some Todo"
               type="text"
               v-model="todo">
        <button class="btn btn-primary ml-2"
                @click="addNewTodo"
                style="width: 100px">
            <i class="fa fa-plus"/> Add
        </button>
    </div>
</template>

<script>
    export default {
        name: "TodoForm",
        data() {
            return {
                todo: ""
            }
        },
        methods: {
            addNewTodo() {
                this.$store.dispatch('addNewTodo', this.todo);
                this.todo = ''
            }
        }
    }
</script>

<style scoped>

</style>