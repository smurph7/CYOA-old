import React from 'react';
import { View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import TextArea from '../../components/TextArea';
import * as Animatable from 'react-native-animatable';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { paragraphNumber: 0 };
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
    const text = `The air is warm. A light breeze blows the dirt off the road before you into small clouds, before settling back down again.\nYou sit upon the bench of your wagon, its flat wood aged and weathered. You hold the reins tight in your hands, but the horses already seem to know the route back to the city.\nYou are relaxed, listening to the birds chirping as you steer your wagon down the road. Your sword lays idly in the seat next to you.\nYou hear a sound, the cracking of twigs and rustling of leaves. Two men emerge from the trees surrounding the road, swords brandished. Your horse whinnies and comes to a stop. The men slowly approach either side of the vehicle, and the larger of the two yells “Give us your wagon and we’ll let you live”.`;
    const paragraphs = this.getParagraphs(text);
    const shouldDisplayButtons = this.shouldDisplayButtons(paragraphs);
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={{ padding: 10 }} />
          <ScrollView
            ref={(ref) => {
              this.scrollView = ref;
            }}
            onContentSizeChange={() =>
              this.scrollView.scrollToEnd({ animated: true })
            }
            contentContainerStyle={{
              flexGrow: 1,
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
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
                  <View style={{ flexDirection: 'row' }}>
                    <Animatable.View
                      animation="fadeIn"
                      delay={1500}
                      duration={1500}>
                      <Button choice={'Button 1'} />
                    </Animatable.View>
                    <View style={styles.padding} />
                    <Animatable.View
                      animation="fadeIn"
                      delay={1500}
                      duration={1500}>
                      <Button choice={'Button 2'} />
                    </Animatable.View>
                  </View>
                </View>
              ) : null}
              <View style={styles.padding} />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default MainScreen;
