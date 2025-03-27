import { StyleSheet } from 'react-native';

export const stylesFriend = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end", // Alterado para flex-end
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    scrollView: {
        flex: 1,
    },
    // Adicione este estilo
    scrollViewContent: {
        padding: 15,
    },
    profileSection: {
        padding: 15,
    },
    profileHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    profilePic: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15,
    },
    profileInfo: {
        justifyContent: "center", // Este é ok porque agora não está diretamente no ScrollView
    },
    profileName: {
        fontSize: 18,
        fontWeight: "bold"
    },
    profileLocation: {
        fontSize:14,
        color: "#665"
    },
    objectivesSection: {
        marginBottom: 20
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10
    },
    bulletPoints: {
        paddingLeft: 5,
    },
    bulletPoint: {
        fontSize: 14,
        lineHeight: 22,
        marginBottom: 5,
        color: "#333",
    },
    petsSection: {
        marginTop: 10,
    },
    petsSectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    petsSectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginRight: 5,
    },
    // Você pode manter este estilo, mas se continuar tendo problemas, 
    // substitua justifyContent por marginRight como mostrado abaixo
    petsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    /* Alternativa se continuar tendo problemas:
    petsContainer: {
        flexDirection: "row",
    },
    petCard: {
        width: "48%",
        marginRight: "4%", // Adicione isso ao primeiro card
        borderWidth: 1,
        borderColor: "#e0e0e0",
        borderRadius: 8,
        overflow: "hidden",
    },
    petCardLast: {
        width: "48%", // Sem margem para o último
        borderWidth: 1,
        borderColor: "#e0e0e0",
        borderRadius: 8,
        overflow: "hidden",
    },
    */
    petCard: {
        width: "48%",
        borderWidth: 1,
        borderColor: "#e0e0e0",
        borderRadius: 8,
        overflow: "hidden",
    },
    petImage: {
        width: "100%",
        height: 120,
        resizeMode: "cover",
    },
    petInfo: {
        padding: 8,
    },
    petInfoLabel: {
        fontSize: 12,
        color: "#666",
    },
    petInfoValue: {
        fontWeight: "bold",
        color: "#333",
    },
    iconImage: {
        width: 24,
        height: 24,
    },
});