import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Text, View} from 'react-native';
import {loadTodos} from './store/todos/actions';
import {selectTodos} from './store/todos/selectors';

export default function HomeScreen({navigation}) {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Todos</Text>
      {todos.map((todo) => (
        <Button
          key={todo.id}
          title={todo.title}
          onPress={() => navigation.navigate('Details', {id: todo.id})}
        />
      ))}
    </View>
  );
}
