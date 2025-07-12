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
        zIndex: 10,
        paddingHorizontal: 5
    },

    icoHeader: {
        fontSize: 30,
        color: '#fff',
        padding: 10,
    },
    nasaLogo: {
        width: 55,
        height: 55,
        resizeMode: 'contain',
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
        backgroundColor: '#222226',
        // backgroundColor: '#1a1a2e',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 80,
        // borderTopLeftRadius: 24,
        // borderTopRightRadius: 24,
        paddingBottom: 10,
        paddingTop: 5,
        elevation: 20,
        shadowColor: 'white',
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

    // =============================================================================================
    // STYLOS DEL MODAL DE PERFIL
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContainer: {
        width: '90%',
        maxHeight: '85%',
        backgroundColor: '#1a1a2e',
        backgroundColor: '#222226',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        overflow: 'hidden',
    },

    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.2)',
    },

    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.8)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },

    closeButton: {
        padding: 5,
    },

    modalContent: {
        padding:20,
    },

    // Sección de perfil
    profileSection: {
        alignItems: 'center',
        marginBottom: 30,
    },

    avatarContainer: {
        position: 'relative',
        marginBottom: 20,
        width: '100%'
    },

    avatarText: {
        fontSize: 80,
        textAlign: 'center',
    },

    rankBadge: {
        position: 'absolute',
        bottom: -10,
        right: 0,
        backgroundColor: '#ff9900',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#fff',
    },

    rankText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 15,
        padding: 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
    },

    statItem: {
        alignItems: 'center',
    },

    statNumber: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ff9900',
        marginVertical: 5,
    },

    statLabel: {
        fontSize: 12,
        color: '#ccc',
        textAlign: 'center',
    },

    // Sección de formulario
    formSection: {
        marginBottom: 30,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.8)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },

    inputGroup: {
        marginBottom: 15,
    },

    inputLabel: {
        fontSize: 14,
        color: '#ccc',
        marginBottom: 5,
        fontWeight: '600',
    },

    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 10,
        padding: 12,
        color: '#fff',
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
    },

    pickerContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 8,
    },

    planetOption: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        minWidth: '45%',
    },

    selectedPlanet: {
        backgroundColor: '#ff9900',
        borderColor: '#fff',
    },

    planetText: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '600',
    },

    // Sección de acciones
    actionsSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 10,
    },

    actionButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        gap: 8,
    },

    missionButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff9900',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        gap: 8,
    },

    saveButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        gap: 8,
    },

    cancelButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f44336',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        gap: 8,
    },

    actions: {
        marginBottom: 100
    },

    actionText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
});
