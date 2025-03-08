import { StyleSheet } from "react-native";

const styleConfigScreen = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff",
      },
      header:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
      },
      footer: {
        width: '80%',
        display: 'flex',       
      }
});


export default styleConfigScreen;