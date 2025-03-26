import { StyleSheet } from "react-native";

const styleConfigScreen = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff",
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        marginBottom: 10,
    },
    footer: {
        width: '75%',
        flexDirection: 'column',
        justifyContent: 'center',
        display: 'flex',
    },
    sexContainer: {
        width: '100%', // Agora ocupa a mesma largura dos inputs
        backgroundColor: "#F5F5F7", 
        borderRadius: 8,
        marginTop: 5,
        borderColor: "#F5F5F7",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10, // Adicionado para espaçamento interno
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around", // Para distribuir os checkboxes uniformemente
        width: "100%",
        marginVertical: 10,
    },
    checkboxOption: {
        flexDirection: "row",
        alignItems: "center",
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#499CFA",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8,
    },
    checkboxSelected: {
        borderColor: "#499CFA",
    },
    checkboxInner: {
        width: 12,
        height: 12,
        opacity: 0.8,
        backgroundColor: "#499CFA",
        borderRadius: 2,
    },
    buttonSave: {
        marginTop: 10,
        width: 120,
    },
});

export default styleConfigScreen;
