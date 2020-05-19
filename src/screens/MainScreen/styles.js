import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    paddingTop: 25,
  },
  scrollView: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  touchable: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: 10,
  },
  flex: {
    flex: 1,
  },
  padding: {
    padding: 10,
  },
});

export default styles;
