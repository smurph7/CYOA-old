import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import TextArea from '../../components/TextArea';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <TextArea />
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
