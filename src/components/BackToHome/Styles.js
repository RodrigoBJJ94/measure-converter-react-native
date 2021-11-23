import { StyleSheet, Dimensions } from 'react-native';

export default Styles = StyleSheet.create({
    backToHomeButton: {
        width: Dimensions.get('screen').width / 1.1,
        backgroundColor: '#000',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 4,
    },
    backToHomeButtonText: {
        color: '#ffffff',
        fontSize: 25,
        fontFamily: 'Montserrat-ExtraBold',
    }
});
