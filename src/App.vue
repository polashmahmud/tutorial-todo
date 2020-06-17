<template>
    <div id="app">
        <div class="d-flex justify-content-center mt-5">
            <div class="card w-25">
                <todo-form/>
                <div class="card-body">
                    <todo-list/>
                </div>
                <div class="card-footer d-flex justify-content-between">
                    <div>Complete Todo: <span class="badge badge-primary">{{ completeTodo }}</span></div>
                    <div>Pending Todo: <span class="badge badge-danger">{{ pendingTodo }}</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TodoForm from './components/TodoForm'
    import TodoList from "./components/TodoList";

    export default {
        name: 'App',
        components: {
            TodoList,
            TodoForm
        },
        computed: {
            completeTodo() {
                return this.$store.getters.completeTodo;
            },
            pendingTodo() {
                return this.$store.getters.pendingTodo;
            }
        }
    }
</script>

<style scoped>

</style>
