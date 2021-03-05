import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectTodo} from './store/todos/selectors';

export default function DetailsScreen({route}) {
  const {id} = route.params;
  const todo = useSelector(selectTodo(id));

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Todo:</Text>
      <Text>{todo.title}</Text>
    </View>
  );
}
