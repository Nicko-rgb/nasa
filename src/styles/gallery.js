import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const CARD_WIDTH = screenWidth * 0.46;

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    container: {
        padding: 10,
        paddingBottom: 80,
        paddingTop: 20,
    },
    titlee: {
        textAlign: 'center',
        color: 'white',
        marginTop: 0,
        marginBottom: 20,
        fontSize: 25,
        fontWeight: 800,
    },
    grid: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    card: {
        backgroundColor: '#1c1c1c',
        width: CARD_WIDTH,
        borderRadius: 10,
        marginBottom: 12,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        objectFit: 'contain'
    },
    title: {
        color: '#fff',
        fontSize: 14,
        padding: 8,
        textAlign: 'center'
    },
    noResults: {
        color: '#ccc',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 30,
    },
    loader: {
        marginTop: 20,
        margin: 'auto'
    },

    // ===================================================
    // Modal
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.85)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    modalContainer: {
        backgroundColor: '#1e1e1e',
        borderRadius: 15,
        padding: 15,
        maxHeight: '85%',
        width: '100%',
    },
    detailTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10,
        textAlign: 'center',
    },
    detailImage: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
    },
    description: {
        color: '#ccc',
        fontSize: 16,
        lineHeight: 22,
        textAlign: 'justify',
    },
    closeButton: {
        marginTop: 10,
        backgroundColor: '#ff5c5c',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
