import React from "react";
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from "react-native";

type ButtonComponentProps = {
  title: string;
  onPress?: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const ButtonComponent = ({ title, onPress, buttonStyle, textStyle }: ButtonComponentProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: "#499CFA", // Cor fixa
    borderRadius: 8,
    width: "50%",
    alignItems: "center",
    marginBottom: 15,
  },
  text: {
    color: "white",
    fontWeight: "bold", // Negrito fixo
  },
});

export default ButtonComponent;


