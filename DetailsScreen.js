import React from 'react';
import {Button, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectTodo} from './store/todos/selectors';
import {useNative} from './native';

export default function DetailsScreen({route}) {
  const {alert} = useNative();
  const {id} = route.params;
  const todo = useSelector(selectTodo(id));

  const handleAlert = () => {
    alert.alert('This is an alert', [{text: 'OK'}]);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Todo:</Text>
      <Text>{todo.title}</Text>
      <Button onPress={handleAlert} title="Alert" />
    </View>
  );
}
