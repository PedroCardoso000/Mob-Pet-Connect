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
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'center',
        display: 'flex',
    },
    sexContainer: {
        backgroundColor: "#FBFBFB", // Cor de fundo igual aos inputs
        borderRadius: 8,
        width: "98%",
        padding: 10,
        marginTop: 5,
        borderWidth: 1, 
        borderColor: "#499CFA",
        position: "relative",
    },
    sexLabel: {
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: "#F5F5F5", // Mesma cor do fundo para "sobrepor"
        borderRadius: 4,
        paddingHorizontal: 5,
        opacity: 0.8,
        fontSize: 14,
        color: "#333",
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
        backgroundColor: "#F5F5F5" , 
        borderRadius: 8,
        borderColor: "#E0E0E0",
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
        borderColor: "#499CFA", // Cor azul personalizada
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
        backgroundColor: "#499CFA", // Azul quando marcado
        borderRadius: 2,
    },
});

export default styleConfigScreen;
