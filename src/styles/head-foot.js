import { StyleSheet, Dimensions } from 'react-native';

 const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        top: 30,
        zIndex: 10
    },

    icoHeader: {
        fontSize: 25,
        color: '#fff',
        padding: 10,
    },

    searchBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 15,
        paddingHorizontal: 10,
        height: 47,
        position: 'relative',
        boxShadow: '0 0 3px white'
    },

    icoSearch: {
        fontSize: 25,
        color: '#aaa',
        marginRight: 8,
    },

    inputSearch: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
        fontWeight: 800,
        top: 2
    },

    // =============================================================================================
    // STYLOS DE FOOTER
    footerContainer: {
        position: 'absolute',
        bottom: 0,
        width: width,
        backgroundColor: '#0d0d0d',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 80,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingBottom: 10,
        paddingTop: 5,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        zIndex: 1000,
    },

    item: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    icon: {
        width: 30,
        height: 30,
        tintColor: 'white',
        marginBottom: 4,
    },

    label: {
        fontSize: 10,
        color: '#ccc',
    },

    centerWrapper: {
        alignItems: 'center',
        marginTop: -30,
    },

    centerButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#1f1f1f',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#ff9900',
        elevation: 10,
        shadowColor: '#ff9900',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
    },

    iconCenter: {
        width: 30,
        height: 30,
        fontSize: 28,
        color: '#ff9900',
        tintColor: 'white'
    },

    labelCenter: {
        color: '#ff9900',
        fontSize: 11,
        marginTop: 4,
    },
});
