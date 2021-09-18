import httpService from './http.service';
import apiEndpoints from '../utilities/apiEndpoints';

const getTodos = (limit) => httpService.get(`${apiEndpoints.jsonplaceholder}?_limit=${limit}`);

const addTodo = (params) => httpService.post(apiEndpoints.jsonplaceholder, params, {});

const deleteTodos = () => httpService.delete(apiEndpoints.jsonplaceholder);

export default {
  getTodos,
  addTodo,
  deleteTodos,
};
