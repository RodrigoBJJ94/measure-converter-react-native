import { StyleSheet, Dimensions } from 'react-native';

export default Styles = StyleSheet.create({
    lengthButtonClear: {
        width: Dimensions.get('screen').width / 4.5,
        backgroundColor: '#000000',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 42,
        borderRadius: 15,
        marginTop: 5,
    },
    lengthButtonClearText: {
        color: '#ffffff',
        fontSize: 22,
        fontFamily: 'Montserrat-ExtraBold',
    }
});
