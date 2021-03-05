import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react-native';
import DetailsScreen from '../DetailsScreen';
import {createStore} from '../store';

describe('DetailsScreen', () => {
  const todo = {id: 1, title: 'My Todo'};

  let context;

  beforeEach(function () {
    const initialState = {todos: [todo]};
    const store = createStore(initialState);

    const route = {
      params: {id: todo.id},
    };

    context = render(
      <Provider store={store}>
        <DetailsScreen route={route} />
      </Provider>,
    );
  });

  it('looks up the todo from the store by navigation id', () => {
    const {queryByText} = context;
    const element = queryByText(todo.title);
    expect(element).not.toBeNull();
  });
});
