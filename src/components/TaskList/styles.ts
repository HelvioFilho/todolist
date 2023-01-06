import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    minHeight: 64,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#262626',
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 8
  },
  button: {
    flex: 1,
    height: '100%',
    paddingVertical: 12,
    marginRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    marginRight: 8
  },
  checked: {
    backgroundColor: '#5E60CE',
    borderColor: '#5E60CE',
    alignItems: 'center',
    justifyContent: 'center'
  },
  unChecked: {
    borderColor: '#4EA8DE',
  },
  text: {
    flex: 1,
    fontFamily: 'Inter_400Regular',
    lineHeight: 14 * (140 / 100),
    fontSize: 14,
    color: "#F2F2F2",
  },
  textChecked: {
    color: "#808080",
    textDecorationLine: 'line-through',
  },
  trash: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
  },
});