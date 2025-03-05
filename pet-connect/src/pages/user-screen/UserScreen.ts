import { StyleSheet } from "react-native";

export const userScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingHorizontal: 10,
    },
  
    // ✅ HEADER
    header: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 15,
    },
    profilePic: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginRight: 15,
    },
    userInfo: {
      flex: 1,
    },
    username: {
      fontSize: 18,
      fontWeight: "bold",
    },
    statsRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 8,
    },
    stat: {
      alignItems: "center",
    },
    statNumber: {
      fontSize: 16,
      fontWeight: "bold",
    },
  
    // ✅ BOTÃO EDITAR PERFIL
    editButton: {
      backgroundColor: "#ddd",
      paddingVertical: 8,
      borderRadius: 5,
      alignItems: "center",
      marginVertical: 10,
    },
    editButtonText: {
      fontSize: 14,
      fontWeight: "bold",
    },
  
    // ✅ BIO
    bio: {
      textAlign: "center",
      fontSize: 14,
      marginVertical: 5,
    },
  
    // ✅ DESTAQUES
    highlightsList: {
      marginVertical: 10,
    },
    highlight: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginHorizontal: 5,
      borderWidth: 1,
      borderColor: "#ddd",
    },
  
    // ✅ FEED EM GRADE
    feed: {
      marginTop: 10,
    },
    feedImage: {
      width: "32%",
      aspectRatio: 1,
      margin: "0.5%",
    },
  });
  
