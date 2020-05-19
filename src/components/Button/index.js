import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Button = (props) => {
  const { choice, onPress } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress()}>
      <Text style={styles.text}>{choice}</Text>
    </TouchableOpacity>
  );
};

export default Button;

Button.propTypes = {
  choice: PropTypes.string,
};
