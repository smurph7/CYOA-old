import { shallow } from 'enzyme';
import React from 'react';
import MainScreen from '.';

describe('Main screen', () => {
  const paragraph1 = 'paragraph1';
  const paragraph2 = 'paragraph2';
  const paragraphs = [paragraph1, paragraph2];
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<MainScreen />);
    instance = wrapper.instance();
  });

  it('should split the text by paragraph', () => {
    expect(instance.getParagraphs(`${paragraph1}\n${paragraph2}`)).toEqual([
      paragraph1,
      paragraph2,
    ]);
  });

  it('should create TextArea for each paragraph', () => {
    expect(instance.displayParagraphs(paragraphs)).toHaveLength(2);
  });

  it('should slice paragraphs to paragraphNumber (based on number of times screen is tapped', () => {
    instance.setState({ paragraphNumber: 0 });
    expect(instance.sliceParagraphs(paragraphs)).toEqual([paragraph1]);
  });

  it('should increase paragraph number if less than paragraph array length', () => {
    jest.spyOn(instance, 'setState');
    instance.increaseParagraphNumber(paragraphs);
    expect(instance.setState).toHaveBeenCalledWith({ paragraphNumber: 1 });
  });

  it('should not increase paragraph number if equal to paragraph array length', () => {
    instance.setState({ paragraphNumber: 1 });
    jest.spyOn(instance, 'setState');
    instance.increaseParagraphNumber(paragraphs);
    expect(instance.setState).not.toHaveBeenCalled();
  });

  it('should not display buttons if paragraph length not equal to paragraph number + 1', () => {
    expect(instance.shouldDisplayButtons(paragraphs)).toBeFalsy();
  });

  it('should display buttons if paragraph length equal to paragraph number + 1', () => {
    instance.setState({ paragraphNumber: 1 });
    expect(instance.shouldDisplayButtons(paragraphs)).toBeTruthy();
  });
});
