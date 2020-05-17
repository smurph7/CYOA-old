import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const TextArea = () => {
  return (
    <View style={styles.textArea}>
      <Text style={styles.text}>
        The air is warm. A light breeze blows the dirt off the road before you
        into small clouds, before settling back down again.
      </Text>
    </View>
  );
};

export default TextArea;
