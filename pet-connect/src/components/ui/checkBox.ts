import { StyleSheet } from "react-native";

const style = StyleSheet.create({
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
});

export default style;