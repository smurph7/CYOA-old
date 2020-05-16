import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textArea}>
        <Text style={styles.text}>
          The air is warm. A light breeze blows the dirt off the road before you
          into small clouds, before settling back down again.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Button choice={'Button 1'} />
          <View style={styles.padding} />
          <Button choice={'Button 2'} />
        </View>
      </View>
    </View>
  );
};

export default MainScreen;
