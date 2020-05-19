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
    this.text = '';
    this.storySegment = Story[parseInt(this.state.segmentId)];
    this.text = this.storySegment.text;
    this.paragraphs = this.getParagraphs(this.text);
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

  increaseParagraphNumber = () => {
    const { paragraphNumber } = this.state;
    if (paragraphNumber + 1 < this.paragraphs.length) {
      this.setState({ paragraphNumber: paragraphNumber + 1 });
    }
  };

  shouldDisplayButtons = (paragraphs) => {
    const { paragraphNumber } = this.state;
    return paragraphs.length === paragraphNumber + 1;
  };

  getNextSegmentById = (id) => {
    return Story.filter((item) => {
      return item.id === id;
    })[0];
  };

  updateStorySegment = (choice) => {
    const id = this.storySegment.result[choice];
    this.storySegment = this.getNextSegmentById(id);
    this.text = this.text + '\n' + this.storySegment.text;
    this.forceUpdate();
    this.paragraphs = this.getParagraphs(this.text);
    this.increaseParagraphNumber();
  };

  render() {
    const shouldDisplayButtons = this.shouldDisplayButtons(this.paragraphs);
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
                this.increaseParagraphNumber();
              }}>
              <View style={styles.textContainer}>
                {this.displayParagraphs(this.sliceParagraphs(this.paragraphs))}
              </View>
              <View style={styles.padding}></View>
              {shouldDisplayButtons ? (
                <View style={styles.buttonContainer}>
                  <Animatable.View
                    style={styles.flex}
                    animation="fadeIn"
                    delay={500}
                    easing="ease-out"
                    duration={1500}>
                    <Button
                      choice={this.storySegment.choices[0]}
                      onPress={() => {
                        this.updateStorySegment(0);
                      }}
                    />
                  </Animatable.View>
                  <View style={styles.padding} />
                  <Animatable.View
                    style={styles.flex}
                    animation="fadeIn"
                    easing="ease-out"
                    delay={500}
                    duration={1500}>
                    <Button
                      choice={this.storySegment.choices[1]}
                      onPress={() => {
                        this.updateStorySegment(1);
                      }}
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
