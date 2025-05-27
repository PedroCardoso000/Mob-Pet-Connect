import { StyleSheet } from 'react-native';


export const styleRegister = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      marginTop: 24,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: "#e1e1e1",
    },
    backButton: {
      padding: 8,
    },
    checkboxContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      width: "100%",
      marginVertical: 10,
    },
    backButtonText: {
      fontSize: 24,
      color: "#666",
    },
    title: {
      fontSize: 20,
      fontWeight: "600",
      marginLeft: 16,
      color: "#333",
    },
    avatarContainer: {
      alignItems: "center",
      marginVertical: 20,
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: "#e1e1e1",
    },
    avatarButton: {
      position: "absolute",
      bottom: 0,
      right: "35%",
      backgroundColor: "#007AFF",
      width: 30,
      height: 30,
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "center",
    },
    avatarButtonText: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold",
    },
    form: {
      padding: 16,
    },
    inputContainer: {
      marginBottom: 16,
    },
    input: {
      borderWidth: 1,
      borderColor: "#e1e1e1",
      borderRadius: 8,
      padding: 12,
      fontSize: 16,
      backgroundColor: "#f8f8f8",
    },
    inputError: {
      borderColor: "#ff4444",
    },
    errorText: {
      color: "#ff4444",
      fontSize: 12,
      marginTop: 4,
    },
    textArea: {
      height: 100,
      textAlignVertical: "top",
    },
    genderContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 16,
    },
    genderButton: {
      flex: 1,
      padding: 12,
      borderWidth: 1,
      borderColor: "#e1e1e1",
      borderRadius: 8,
      alignItems: "center",
      marginHorizontal: 4,
    },
    genderButtonActive: {
      backgroundColor: "#007AFF",
      borderColor: "#007AFF",
    },
    genderButtonText: {
      color: "#666",
      fontSize: 16,
    },
    genderButtonTextActive: {
      color: "#fff",
    },
    selector: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    selectorText: {
      color: "#999",
    },
    selectorTextSelected: {
      color: "#333",
    },
    selectorIcon: {
      color: "#999",
      fontSize: 14,
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 16,
      gap: 5,
      marginTop: "auto",
    },
    cancelButton: {
      flex: 1,
      padding: 16,
      backgroundColor: "#f8f8f8",
      borderRadius: 8,
      marginRight: 8,
      alignItems: "center",
    },
    cancelButtonText: {
      color: "#666",
      fontSize: 16,
      fontWeight: "600",
    },
    submitButton: {
      flex: 1,
      padding: 16,
      backgroundColor: "#007AFF",
      borderRadius: 8,
      marginLeft: 8,
      alignItems: "center",
    },
    submitButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600",
    },
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent: {
      backgroundColor: "#fff",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      maxHeight: "70%",
    },
    modalHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: "#e1e1e1",
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: "600",
      color: "#333",
    },
    modalCloseButton: {
      fontSize: 18,
      color: "#666",
      padding: 4,
    },
    modalItem: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: "#f0f0f0",
    },
    modalItemText: {
      fontSize: 16,
      color: "#333",
    },
    emptyListText: {
      padding: 20,
      textAlign: "center",
      color: "#666",
    },
  });