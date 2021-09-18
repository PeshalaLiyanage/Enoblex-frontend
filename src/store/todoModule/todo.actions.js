import todoService from '../../services/todo.service';
import axios from 'axios';

export default {
  async fetchTodos({ commit }) {
    const response = await todoService.getTodos();
    commit('setTodos', response.data);
  },
  async addTodo({ commit }, title) {
    const response = await todoService.addTodo({
      title,
      completed: false,
    });

    commit('newTodo', response.data);
  },
  // todo- need to change below functions
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    commit('removeTodo', id);
  },
  async filterTodos({ commit }, e) {
    // Get selected number
    const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);

    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);

    commit('setTodos', response.data);
  },
  async updateTodo({ commit }, updTodo) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
      updTodo
    );

    console.log(response.data);

    commit('updateTodo', response.data);
  },
};
