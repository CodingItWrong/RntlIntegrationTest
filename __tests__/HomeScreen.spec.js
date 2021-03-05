import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';
import moxios from 'moxios';

describe('HomeScreen', () => {
  const todo = {id: 1, title: 'My Todo'};

  let context;
  let navigation;

  beforeEach(function () {
    moxios.install();

    moxios.stubRequest('https://jsonplaceholder.typicode.com/todos', {
      status: 200,
      response: [todo],
    });

    navigation = {
      navigate: jest.fn().mockName('navigation.navigate'),
    };
    context = render(<HomeScreen navigation={navigation} />);
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('renders todos from service', async () => {
    const {findByText} = context;
    const element = await findByText(todo.title);
    expect(element).not.toBeNull();
  });

  it('allows navigating', async () => {
    const {findByText} = context;
    const element = await findByText(todo.title);
    fireEvent.press(element);
    expect(navigation.navigate).toHaveBeenCalledWith('Details', {todo});
  });
});
