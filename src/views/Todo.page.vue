<template>
  <div>
    <AddTodo />
    <FilterTodos />
    <Todos />
  </div>
</template>

<script>
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';
import FilterTodos from '../components/FilterTodos';

export default {
  name: 'TodoPage',
  components: {
    Todos,
    AddTodo,
    FilterTodos,
  },
};
</script>

<style scoped></style>
