import { shallow } from 'enzyme';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Button from '.';

describe('Button', () => {
  const choice = 'choice 1';
  const choiceFunction = jest.fn();
  
  it('should render the choice passed in', () => {
    const wrapper = shallow(<Button choice={choice} onPress={() => {}} />);
    expect(
      wrapper.find(TouchableOpacity).props().children.props.children,
    ).toEqual(choice);
  });

  it('should perform the function passed in', () => {
    const wrapper = shallow(
      <Button choice={choice} onPress={choiceFunction} />,
    );
    wrapper.find(TouchableOpacity).props().onPress();
    expect(choiceFunction).toHaveBeenCalled();
  });
});
