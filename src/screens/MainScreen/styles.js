import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    paddingTop: 50,
  },
  textContainer: {},
  touchableScreen: {
    height: Dimensions.get('window').height,
  },
  buttonContainer: {
    paddingTop: 50,
    alignItems: 'center',
  },
  padding: {
    padding: 20,
  },
});

export default styles;
