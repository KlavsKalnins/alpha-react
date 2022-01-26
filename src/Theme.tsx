import {StyleSheet} from 'react-native';

export const sharedStyles = StyleSheet.create({
  offerItem: {
    borderRadius: 5,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    flex: 10,
  },
  offerItemDiv: {
    borderRadius: 5,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  offerItemDetails: {
    display: 'flex',
    flexGrow: 1,
  },
  offerItemDetailsText: {
    width: 250,
  },
  offerItemImage: {
    width: 80,
    height: 80,
  },
  removeColor: {
    backgroundColor: '#d81111',
  },
  add: {
    backgroundColor: '#54B862',
    borderRadius: 5,
    padding: 5,
    margin: 5,
    marginRight: 0,
    marginTop: 21,
  },
  details: {
    borderRadius: 5,
    padding: 5,
    margin: 5,
    paddingLeft: 0,
    marginLeft: 0,
  },
  textMiddleDiv: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkout: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#54B862',
    height: 50,
    width: '80%',
    zIndex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 5,
  },
  darkenBackground: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#408a4a',
    borderRadius: 5,
    padding: 5,
    marginRight: 5,
  },
  checkoutRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  checkoutRowDetails: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
  },
  checkoutRemove: {
    backgroundColor: '#d81111',
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 10,
  },
  checkoutDetails: {
    height: 50,
    borderRadius: 5,
    backgroundColor: '#54B862',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  fontBold: {
    fontWeight: '600',
  },
  fontLight: {
    fontWeight: '300',
  },
  f1: {
    flex: 1,
  },
  aic: {
    alignItems: 'center',
  },
});

export const darkTheme = StyleSheet.create({
  primaryFont: {
    color: '#fff',
  },
  text2: {
    color: '#000',
  },
  background: {
    backgroundColor: '#000',
  },
  view: {
    backgroundColor: '#0c0c0c',
  },
});

export const lightTheme = StyleSheet.create({
  primaryFont: {
    color: '#000',
  },
  text2: {
    color: '#fff',
  },
  background: {
    backgroundColor: '#fff',
  },
  view: {
    backgroundColor: '#F8F8F8',
  },
});
