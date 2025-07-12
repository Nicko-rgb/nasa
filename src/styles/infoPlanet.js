import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '95%',
        maxHeight: '80%',
        
        backgroundColor: '#222226',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    scrollContent: {
        paddingBottom: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    planetTitle: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
    },
    closeButton: {
        backgroundColor: '#e94560',
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 20,
        lineHeight: 28,
    },
    planetImage: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginVertical: 15,
    },
    description: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 20,
        lineHeight: 24,
    },
    section: {
        marginBottom: 15,
    },
    sectionTitle: {
        color: '#e94560',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    characteristics: {
        backgroundColor: '#1a1a2e',
        borderRadius: 10,
        padding: 15,
    },
    characteristicRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    characteristicKey: {
        color: '#a8a8a8',
        fontSize: 16,
    },
    characteristicValue: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});