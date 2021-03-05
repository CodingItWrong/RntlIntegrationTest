import React from 'react';
import {Text, View} from 'react-native';

export default function DetailsScreen({route}) {
  const {todo} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Todo: {todo.title}</Text>
    </View>
  );
}
