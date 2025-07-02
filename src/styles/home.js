import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
    },
    scrollContainer: {
        paddingBottom: 200,
        paddingTop: 80,
        paddingHorizontal: 10,
    },
    title: {
        textAlign: 'center',
        color: 'white',
        marginTop: 20,
        fontSize: 27,
        fontWeight: 800,
    },

    imgSlide: {
        width: '100%',
        height: 300,
        objectFit: 'cover',
        marginTop: 30
    },
    title2: {
        fontSize: 24,
        color: 'white',
        marginTop: 25,
        fontWeight: 800
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
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
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
