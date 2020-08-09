import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e6e6f0',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },

  profile: {
    flexDirection: 'row',
    padding: 24
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee',
  },

  profileInfo: {
    marginLeft: 16,
  },

  name: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
    color: '#32264d',
  },

  subject: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    marginTop: 4,
    color: '#6A6180',
  },

  bio: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 24,
    color: '#6a6180',
    marginHorizontal: 24,
  },

  footer: {
    backgroundColor: '#fafafc',
    alignItems: 'center',
    padding: 24,
    marginTop: 24,
  },

  cost: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#6a6180',
  },

  costValue: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#8257E5',
  },

  buttonsContainer: {
    marginTop: 16,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'space-between',
  },

  favoriteButton: {
    width: 56,
    backgroundColor: '#8257e5',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },

  favorited: {
    backgroundColor: '#e33d3d',
  },

  contactButton: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#04D361',
    borderRadius: 8,
  },

  contactButtonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    marginLeft: 16,
  },
});

export default styles;