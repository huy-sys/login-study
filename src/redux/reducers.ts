import { combineReducers } from 'redux';
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './actions';
import { Todo } from '../inteface';

let counter = 1

const todosReducer = (state: Todo[] = [], action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: counter++,
          text: action.payload,
        },
      ];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case UPDATE_TODO:
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.newText } : todo
      );
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
