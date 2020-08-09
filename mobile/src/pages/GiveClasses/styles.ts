import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 40
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 32,
    lineHeight: 37,
    color: '#fff',
    maxWidth: 180,
  },
  
  description: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    lineHeight: 26,
    color: '#d4c2ff',
    marginTop: 24,
    maxWidth: 240,
  },

  button: {
    backgroundColor: '#04d361',
    maxWidth: 300,
    borderRadius: 8,
    marginVertical: 40,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#fff',
  }
});

export default styles;