import { shallow } from 'enzyme';
import React from 'react';
import Button from '.';

describe('Button', () => {
  it('should render the choice passed in', () => {
    const choice = 'choice 1';
    const wrapper = shallow(<Button choice={choice} />);
    expect(
      wrapper.find('View').props().children.props.children.props.children,
    ).toEqual(choice);
  });
});
