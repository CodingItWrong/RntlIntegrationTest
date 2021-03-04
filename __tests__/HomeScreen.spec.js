import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';

describe('HomeScreen', () => {
  it('renders a hello message', () => {
    const {queryByText} = render(<HomeScreen />);
    expect(queryByText('Home Screen')).not.toBeNull();
  });

  it('allows navigating', () => {
    const navigation = {
      navigate: jest.fn().mockName('navigation.navigate'),
    };
    const {getByText} = render(<HomeScreen navigation={navigation} />);
    fireEvent.press(getByText('Go to Details'));
    expect(navigation.navigate).toHaveBeenCalled();
  });
});
