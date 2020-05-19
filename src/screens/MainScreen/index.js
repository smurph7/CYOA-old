import React from 'react';
import { View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import TextArea from '../../components/TextArea';
import Story from '../../assets/story.json';
import * as Animatable from 'react-native-animatable';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { paragraphNumber: 0, segmentId: 0 };
  }

  //change touchable opacity to without feedback and customise feedback

  getParagraphs = (text) => {
    return text.split('\n');
  };

  displayParagraphs = (paragraphs) => {
    return paragraphs.map((item, index) => (
      <Animatable.View
        key={index}
        animation="fadeIn"
        easing="ease-in"
        duration={1500}>
        <TextArea key={index} text={item} />
      </Animatable.View>
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
    const { segmentId } = this.state;
    const storySegment = Story[parseInt(segmentId)];
    const text = storySegment.text;
    const paragraphs = this.getParagraphs(text);
    const shouldDisplayButtons = this.shouldDisplayButtons(paragraphs);
    return (
      <SafeAreaView style={styles.flex}>
        <View style={styles.container}>
          <View style={styles.padding} />
          <ScrollView
            ref={(ref) => {
              this.scrollView = ref;
            }}
            onContentSizeChange={() =>
              this.scrollView.scrollToEnd({ animated: true })
            }
            contentContainerStyle={styles.scrollView}>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => {
                this.increaseParagraphNumber(paragraphs);
              }}>
              <View style={styles.textContainer}>
                {this.displayParagraphs(this.sliceParagraphs(paragraphs))}
              </View>
              <View style={styles.padding}></View>
              {shouldDisplayButtons ? (
                <View style={styles.buttonContainer}>
                  <Animatable.View
                    style={styles.flex}
                    animation="fadeIn"
                    delay={1500}
                    duration={1500}>
                    <Button
                      choice={storySegment.choices[0]}
                      onPress={() => console.log(storySegment.result[0])}
                    />
                  </Animatable.View>
                  <View style={styles.padding} />
                  <Animatable.View
                    style={styles.flex}
                    animation="fadeIn"
                    delay={1500}
                    duration={1500}>
                    <Button
                      choice={storySegment.choices[1]}
                      onPress={() => console.log(storySegment.result[1])}
                    />
                  </Animatable.View>
                </View>
              ) : null}
              <View style={{ padding: 15 }} />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default MainScreen;
