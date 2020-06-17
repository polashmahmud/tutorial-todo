<template>
    <ul class="list-group">
        <todo-item v-for="(todo, index) in todos" :key="index" :todo="todo"/>
    </ul>
</template>

<script>
    import TodoItem from "./TodoItem";

    export default {
        name: "TodoList",
        components: {TodoItem},
        computed: {
            todos() {
                return this.$store.state.todos;
            }
        }
    }
</script>

<style scoped>

</style>