import httpService from './http.service';
import apiEndpoints from '../utilities/apiEndpoints';

const getTodos = () => httpService.get(apiEndpoints.todos);

const addTodo = (params) => httpService.post(apiEndpoints.todos, params, {});

const deleteTodos = () => httpService.delete(apiEndpoints.todos);

export default {
  getTodos,
  addTodo,
  deleteTodos,
};
