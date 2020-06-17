import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            {item: 'Todo item A', status: false},
            {item: 'Todo item B', status: true},
            {item: 'Todo item C', status: false},
            {item: 'Todo item D', status: true},
        ]
    },
    getters: {
        completeTodo(state) {
            return state.todos.filter(todo => {
                return todo.status === true;
            }).length;
        },
        pendingTodo(state) {
            return state.todos.filter(todo => {
                return todo.status === false;
            }).length;
        }
    },
    mutations: {
        ADD_NEW_TODO(state, todo) {
            state.todos.push({
                item: todo,
                status: false
            })
        },
        CHANGE_STATUS(state, todo) {
            todo.status =! todo.status;
        },
        DELETE_TODO(state, todo) {
            let index = state.todos.indexOf(todo);
            state.todos.splice(index, 1);
        }
    },
    actions: {
        addNewTodo({commit}, todo) {
            commit('ADD_NEW_TODO', todo)
        },
        changeStatus({commit}, todo) {
            commit('CHANGE_STATUS', todo)
        },
        deleteTodo({commit}, todo) {
            commit('DELETE_TODO', todo);
        }
    },

});