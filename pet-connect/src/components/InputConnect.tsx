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
      backgroundColor: "#F5F5F7",
      alignItems: "center",
      borderRadius: 8,
      margin: 5,
      padding: 5,
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
