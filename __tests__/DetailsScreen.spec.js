import React from 'react';
import {Provider} from 'react-redux';
import {render, fireEvent} from '@testing-library/react-native';
import DetailsScreen from '../DetailsScreen';
import {createStore} from '../store';
import {NativeProvider} from '../native';

describe('DetailsScreen', () => {
  const todo = {id: 1, title: 'My Todo'};

  let context;
  let alert;

  beforeEach(function () {
    const initialState = {todos: [todo]};
    const store = createStore(initialState);

    const route = {
      params: {id: todo.id},
    };

    alert = {
      alert: jest.fn().mockName('alert'),
    };
    const services = {alert};

    context = render(
      <Provider store={store}>
        <NativeProvider services={services}>
          <DetailsScreen route={route} />
        </NativeProvider>
      </Provider>,
    );
  });

  it('looks up the todo from the store by navigation id', () => {
    const {queryByText} = context;
    const element = queryByText(todo.title);
    expect(element).not.toBeNull();
  });

  it('allows showing an alert', () => {
    const {queryByText} = context;
    fireEvent.press(queryByText('Alert'));
    expect(alert.alert).toHaveBeenCalledWith('This is an alert', [
      {text: 'OK'},
    ]);
  });
});
