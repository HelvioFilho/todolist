import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  logo: {
    height: 173,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  form: {
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    top: -27,
    alignSelf: 'center',
  },
  input: {
    flex: 1,
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    height: 54,
    backgroundColor: '#262626',
    color: '#F2F2F2',
    borderRadius: 6,
    padding: 16,
    marginRight: 4,
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E6F9F'
  },
  content: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingTop: 55,
    paddingHorizontal: 24,
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text :{
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
    marginRight: 8,
  },
  pill: {
    minWidth: 24,
    height: 19,
    paddingHorizontal: 5,
    borderRadius: 12,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    fontFamily: 'Inter_700Bold',
    fontSize: 12,
    color: '#D9D9D9'
  },
  emptyContent: {
    paddingTop: 48,
    borderTopWidth: 2,
    borderTopColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textEmpty: {
    fontFamily: 'Inter_400Regular',
    color: '#808080',
    fontSize: 14,
  },
  textEmptyBold: {
    fontFamily: 'Inter_700Bold',
    marginTop: 16
  }
});