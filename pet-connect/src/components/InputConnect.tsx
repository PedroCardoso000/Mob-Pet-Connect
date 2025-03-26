import { TextInput, TextInputProps, View, Text, Image } from "react-native";

type InputComponentProps = {
  placeholder: string;
  icon?: any;
  styleInput?: any;
} & TextInputProps;

const InputComponent = ({ placeholder, icon, styleInput, ...rest }: InputComponentProps) => {
  return (
    <View style={{
      flexDirection: "row",
      backgroundColor: "#FBFBFB",
      alignItems: "center",
      borderWidth: 1,
      borderRadius: 8,
      margin: 5,
      padding: 5,
      borderColor: "#499CFA",
      ...styleInput
    }}
    >

      <Image
        source={icon}
        style={{ marginRight: 8, width: 20, height: 20 }}
        resizeMode="contain"
      />

      <TextInput
        placeholder={placeholder}
        style={{ flex: 1 }}
        {...rest}
      />
    </View>
  );
};

export default InputComponent;
