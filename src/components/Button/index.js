import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Button = (props) => {
  const {choice} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{choice}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

Button.propTypes = {
  choice: PropTypes.string,
};
