import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';

describe('HomeScreen', () => {
  it('renders a hello message', () => {
    const {queryByText} = render(<HomeScreen />);
    expect(queryByText('Home Screen')).not.toBeNull();
  });
});
