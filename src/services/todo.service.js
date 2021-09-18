import httpService from './http.service';
import apiEndpoints from '../utilities/apiEndpoints';

const getTodos = () => httpService.get(apiEndpoints.jsonplaceholder);

const addTodo = (params) => httpService.post(apiEndpoints.jsonplaceholder, params, {});

const deleteTodos = () => httpService.delete(apiEndpoints.jsonplaceholder);

export default {
  getTodos,
  addTodo,
  deleteTodos,
};
