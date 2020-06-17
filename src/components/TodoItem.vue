<template>
    <li class="list-group-item d-flex justify-content-between pl-4">
        <input :checked="todo.status"
               @click="changeStatus"
               class="form-check-input pointer"
               type="checkbox">
        <span :class="{ complete : todo.status }">{{ todo.item }}</span>
        <span class="text-danger pointer" @click="deleteTodo"><i class="fa fa-trash"/></span>
    </li>
</template>

<script>
    export default {
        name: "TodoItem",
        props: {
            todo: {
                type: Object,
                default: () => ({})
            }
        },
        methods: {
            changeStatus() {
                this.$store.dispatch('changeStatus', this.todo);
            },
            deleteTodo() {
                this.$store.dispatch('deleteTodo', this.todo);
            }
        }
    }
</script>

<style scoped>
    .complete {
        text-decoration: line-through;
    }

    .pointer {
        cursor: pointer;
    }
</style>