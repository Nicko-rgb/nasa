import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    container: {
        paddingTop: 20,
    },
    title: {
        textAlign: 'center',
        color: 'white',
        marginTop: 0,
        marginBottom: 20,
        fontSize: 25,
        fontWeight: 800,
    }
})