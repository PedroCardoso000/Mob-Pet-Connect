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
        fontSize: 14,
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

    
    petsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between", // Corrigido!
        gap: 12, // Espaço entre os cards (React Native >= 0.71)
    },
    petCard: {
        width: "48%", // Dois cards por linha com espaço entre eles
        borderWidth: 1,
        borderColor: "#e0e0e0",
        borderRadius: 8,
        overflow: "hidden",
        marginBottom: 12, // Espaço abaixo de cada card
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