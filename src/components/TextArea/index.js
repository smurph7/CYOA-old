import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

// text written as short paragraphs
// then use \n to identify break in text (split) to show small amount of text,
// then tap screen to show next block of text (and move old text up)
// until it finishes, then show buttons
// and have ability to scroll up through text
// click button
// buttons fade out
// line of italic or something text shows choice made
// new text appears (same as when been tapping before)

const TextArea = (props) => {
  const { text } = props;
  return (
    <View style={styles.textArea}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default TextArea;
