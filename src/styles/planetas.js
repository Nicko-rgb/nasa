import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    scrollContainer: {
        padding: 10,
        paddingBottom: 100,
        paddingTop: 70,
    },
    title: {
        fontSize: 24,
        color: 'white',
        marginTop: 25,
        fontWeight: 800,
        textAlign: 'center',
    },
    planetsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 10,
        gap: 10,
    },

    planetCard: {
        width: '48%',
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 12,
        padding: 10,
        marginBottom: 12,
        alignItems: 'center',
        borderColor: 'rgba(255,255,255,0.1)',
        borderWidth: 1,
    },

    planetImage: {
        width: '100%',
        height: 130,
        marginBottom: 10,
        objectFit: 'contain'
    },

    planetName: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
        textAlign: 'center',
    },

    planetDesc: {
        color: '#ccc',
        fontSize: 12,
        textAlign: 'center',
    },
});
