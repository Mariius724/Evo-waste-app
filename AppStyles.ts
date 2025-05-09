// AppStyles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001F3F', // Night Blue
    padding: 20,
  },
  title: {
    color: '#2ECC40', // Green
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#2ECC40',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',
    color: '#FFFFFF', // White text color
  },
  button: {
    backgroundColor: '#2ECC40',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});

export default styles;