import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import TextArea from '../../components/TextArea';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { paragraphNumber: 0 };
  }
  //add fade in with delay to buttons in shoulddisplaybuttons
  //change touchable opacity to without feedback and customise feedback

  getParagraphs = (text) => {
    return text.split('\n');
  };

  displayParagraphs = (paragraphs) => {
    return paragraphs.map((item, index) => (
      <TextArea key={index} text={item} />
    ));
  };

  sliceParagraphs = (paragraphs) => {
    const { paragraphNumber } = this.state;
    return paragraphs.slice(0, paragraphNumber + 1);
  };

  increaseParagraphNumber = (paragraphs) => {
    const { paragraphNumber } = this.state;
    if (paragraphNumber + 1 < paragraphs.length) {
      this.setState({ paragraphNumber: paragraphNumber + 1 });
    }
  };

  shouldDisplayButtons = (paragraphs) => {
    const { paragraphNumber } = this.state;
    return paragraphs.length === paragraphNumber + 1;
  };

  render() {
    const text = `The air is warm. A light breeze blows the dirt off the road before you into small clouds, before settling back down again.\nYou sit upon the bench of your wagon, its flat wood aged and weathered. You hold the reins tight in your hands, but the horses already seem to know the route back to the city.`;
    const paragraphs = this.getParagraphs(text);
    const shouldDisplayButtons = this.shouldDisplayButtons(paragraphs);
    return (
      <View style={styles.container}>
        <View style={{ padding: 10 }} />
        <ScrollView>
          <TouchableOpacity
            style={styles.touchableScreen}
            onPress={() => {
              this.increaseParagraphNumber(paragraphs);
            }}>
            <View style={styles.textContainer}>
              {this.displayParagraphs(this.sliceParagraphs(paragraphs))}
            </View>
            {shouldDisplayButtons ? (
              <View style={styles.buttonContainer}>
                <View style={{ flexDirection: 'row' }}>
                  <Button choice={'Button 1'} />
                  <View style={styles.padding} />
                  <Button choice={'Button 2'} />
                </View>
              </View>
            ) : null}
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default MainScreen;
