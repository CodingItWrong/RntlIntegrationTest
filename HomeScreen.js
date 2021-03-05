import React, {useState, useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import axios from 'axios';

export default function HomeScreen({navigation}) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => setTodos(response.data));
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Todos</Text>
      {todos.map((todo) => (
        <Button
          key={todo.id}
          title={todo.title}
          onPress={() => navigation.navigate('Details', {todo})}
        />
      ))}
    </View>
  );
}
