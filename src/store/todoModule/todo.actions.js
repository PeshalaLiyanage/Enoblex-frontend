import todoService from '../../services/todo.service';

export default {
  async fetchTodos({ commit }) {
    const response = await todoService.getTodos(5);
    commit('setTodos', response.data);
  },
  async addTodo({ commit }, title) {
    const response = await todoService.addTodo({
      title,
      completed: false,
    });
    commit('newTodo', response.data);
  },
};
